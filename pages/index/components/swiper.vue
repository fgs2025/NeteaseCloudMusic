<template>
	<swiper
		:indicator-dots="true"
		:autoplay="true"
		:circular="true"
		:interval="3000"
		:duration="500"
		indicator-color="rgba(250, 250, 250, 0.5)"
		indicator-active-color="rgba(250, 250, 250, 1)"
		class="swiper"
	>
		<swiper-item class="item-box" 
		v-for="(item, index) in swiperList" 
		:key="index">
			<view class="swiper-item">
				<image 
				:src="item.imageUrl" 
				mode="scaleToFill"></image>
				<view class="typeTitle" 
				:style="{ 
					backgroundColor: item.titleColor }">{{ item.typeTitle }}</view>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
export default {
	props: ['swiperList']
};
</script>

<style lang="less">
.swiper {
	height: 300rpx;

	.item-box {
		padding: 10rpx 30rpx;
		box-sizing: border-box;

		.swiper-item {
			height: 100%;
			border-radius: 24rpx;
			position: relative;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}

			.typeTitle {
				position: absolute;
				bottom: 0;
				right: 0;
				padding: 10rpx;
				// background-color: red;
				font-size: 24rpx;
				color: #fff;
				border-top-left-radius: 24rpx;
			}
		}
	}
}
</style>
