<template>
	<view class="home-page">
		<view class="user-content" v-if="userAction">
			<view class="user-info" @click="aaa()">
				<u-avatar :src="userInfo.avatarUrl"></u-avatar>
				<text>{{ userInfo.nickname }}</text>
			</view>
			<view class="user-play-list">
				<view class="item-box" v-for="item in list">
					<view class="item-top">{{ item.name }}</view>
					<template v-for="(ite, ind) in userPlayList">
						<view class="item" @click="aaa(ite)" v-if="ite.subscribed == item.subscribed" :key="ind">
							<view class="img-box"><u-image width="100%" height="100%" :src="ite.coverImgUrl"></u-image></view>
							<view class="txt-box">
								<p class="title">{{ ite.name }}</p>
								<p class="num">{{ ite.trackCount }}首</p>
							</view>
						</view>
					</template>
				</view>
			</view>
		</view>
		
		<view class="loginFrom" v-else><u-button type="primary" plain ripple @click="loginFrom">立即登陆</u-button></view>
		
	</view>
</template>

<script>

import { loginStatus } from 'api/login.js';
import { playlist } from 'api/user.js';
export default {
	data() {
		return {
			list: [
				{
					name: '创建歌单',
					subscribed: false
				},
				{
					name: '收藏歌单',
					subscribed: true
				}
			],
			current: 0,
			swiperCurrent: 0
		};
	},
	computed: {
		userAction() {
			return this.$store.getters.getUserAction;
		},
		userInfo() {
			return this.$store.getters.getUserInfo;
		},
		userPlayList() {
			return this.$store.getters.getUserPlayList;
		}
	},
	onLoad(options) {
		setTimeout(() => {
			uni.startPullDownRefresh();
		}, 100);
	},
	onPullDownRefresh() {
		let timestamp = +new Date();
		loginStatus({ timestamp }).then(res => {
			if (res.data.account && res.data.profile) {
				this.$store.dispatch('user/setUserInfo', res.data.profile);
				this.$store.dispatch('user/setUserAction', true);
				let uid = this.$store.getters.getUserInfo.userId;
				playlist({ uid }).then(res => {
					this.$store.dispatch('user/setuserPlayList', res.playlist);
					uni.stopPullDownRefresh();
				});
			} else {
				uni.stopPullDownRefresh();
			}
		});
	},
	methods: {
		loginFrom() {
			uni.navigateTo({
				url: '../login/login'
			});
		},
		aaa(item) {
			// console.log(item)
			let id = item.id;
			uni.navigateTo({
				url: `../playlist/playlist?id=${id}`
			});
		}
	},

};
</script>

<style lang="less">
.home-page {
	// padding-bottom: 90rpx;
	.user-content {
		.user-info {
			height: 100rpx;
			display: flex;
			align-items: center;
			padding: 0 40rpx;
			box-sizing: border-box;
			margin-top: 10rpx;
			margin-bottom: 20rpx;

			text {
				margin-left: 40rpx;
			}
		}

		.user-play-list {
			.item-box {
				// width: 100%;
				height: 100%;
				padding: 20rpx;
				box-sizing: border-box;
				border-radius: 24rpx;
				background-color: rgba(255, 255, 255, 0.3);
				flex-shrink: 0;
				margin-top: 10rpx;
				.item-top {
					font-size: 24rpx;
					// margin-bottom: 10rpx;
				}

				.item {
					display: flex;
					align-items: center;
					margin-top: 10rpx;

					.img-box {
						width: 100rpx;
						height: 100rpx;
						border-radius: 24rpx;
						overflow: hidden;
					}

					.txt-box {
						margin-left: 10rpx;

						.title {
							font-size: 24rpx;
						}

						.num {
							font-size: 24rpx;
						}
					}
				}
			}
		}
	}

	.loginFrom {
		// height: 100%;
		// display: flex;
		// align-items: center;/
		// justify-content: center;
		margin-top: 200rpx;
	}
}
</style>
