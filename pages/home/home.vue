<template>
	<view class="home-page">
		<view class="user-content" v-if="userAction">
			<view class="userInfo">
				<u-avatar src="https://p4.music.126.net/Wkt1pAeogqcxUluFae0pmg==/109951165987877495.jpg"></u-avatar>
				<text>66666</text>
			</view>
		</view>
		<view class="loginFrom" v-else><u-button type="primary" plain ripple @click="loginFrom">立即登陆</u-button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		userAction() {
			return this.$store.getters.getUserAction;
		}
	},
	methods: {
		loginFrom() {
			uni.navigateTo({
				url: '../login/login'
			});
		}
	}
};
</script>

<style lang="less">
.home-page {
	height: 100%;
	.user-content {
		.userInfo {
			height: 100rpx;
			display: flex;
			align-items: center;
			padding: 0 40rpx;
			box-sizing: border-box;
			margin-top: 10rpx;
			text {
				margin-left: 40rpx;
			}
		}
	}

	.loginFrom {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
