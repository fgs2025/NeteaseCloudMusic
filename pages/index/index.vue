<template>
	<view class="">
		<navbar></navbar>
		<scroll-view 
		class="s-view" 
		scroll-y="true" 
		refresher-enabled="true" 
		refresher-background="#87ceeb" 
		:refresher-triggered="triggered" 
		@refresherrefresh="refresherrefresh">
			<swipers :swiperList="swiperList"></swipers>
		</scroll-view>
	</view>
</template>

<script>
import { banner } from '../../api/index.js';
import swipers from './components/swiper.vue';
export default {
	data() {
		return {
			swiperList: [],
			triggered: false
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			this.triggered = true;
			banner().then(res => {
				this.swiperList = res.banners;
				this.triggered = false;
			});
		},
		refresherrefresh() {
			if (this.triggered) return;
			this.init();
		}
	},
	components: {
		swipers
	}
};
</script>

<style lang="less"></style>
