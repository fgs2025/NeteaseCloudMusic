<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view :style="{ height: statusBarHeight + 'px' }"><!-- 这里是状态栏 --></view>
			<view
				class="navbar-content"
				:style="{
					height: navBarHeight + 'px',
					width: windowWidth + 'px'
				}"
			>
				<view class="navbar-search">
					<icon type="search" size="12"></icon>
					<text>搜索</text>
				</view>
			</view>
		</view>
		<view :style="{ height: statusBarHeight + navBarHeight + 'px' }"></view>
	</view>
</template>

<script>
export default {
	name: 'navbar',
	data() {
		return {
			statusBarHeight: 0,
			navBarHeight: 45,
			windowWidth: 375
		};
	},
	created() {
		const info = uni.getSystemInfoSync();
		this.statusBarHeight = info.statusBarHeight;
		this.windowWidth = info.windowWidth;
		// #ifndef H5 || APP-PLUS || MP-ALIPAY
		const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
		this.navBarHeight = menuButtonInfo.bottom - info.statusBarHeight + (menuButtonInfo.top - info.statusBarHeight);
		this.windowWidth = menuButtonInfo.left;
		// #endif
	}
};
</script>

<style lang="less">
.navbar {
	.navbar-fixed {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 9999999;
		background-color: skyblue;

		.navbar-content {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 30rpx;
			box-sizing: border-box;

			.navbar-search {
				display: flex;
				align-items: center;
				width: 100%;
				background-color: rgba(255, 255, 255, 0.3);
				// background-color: rgba(204,204,204,0.3);
				border-radius: 24rpx;
				padding: 10rpx;
				box-sizing: border-box;
				text {
					font-size: 24rpx;
					margin-left: 20rpx;
				}
			}
		}
	}
}
</style>
