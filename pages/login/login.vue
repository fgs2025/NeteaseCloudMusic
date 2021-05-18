<template>
	<view class="login-page">
		<u-toast ref="uToast" />
		<u-form :model="form" ref="uForm">
			<u-form-item required label="手机" prop="phone"><u-input v-model="form.phone" placeholder="请输入手机号" /></u-form-item>
			<u-form-item required label="密码" prop="password"><u-input type="password" v-model="form.password" placeholder="请输入密码" /></u-form-item>
			<u-button @click="submit" type="primary" ripple :loading="loading">登陆</u-button>
		</u-form>
	</view>
</template>

<script>
import { phoneLogin } from '../../api/login.js';
export default {
	data() {
		return {
			form: {
				phone: '',
				password: ''
			},
			rules: {
				phone: [
					{
						required: true,
						message: '请输入手机号',
						trigger: 'blur'
					},
					{
						max: 11,
						message: '手机号最多为11位',
						trigger: 'change'
					},
					{
						min: 11,
						message: '手机号最少为11位',
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}
				]
			},
			loading: false
		};
	},
	methods: {
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					if (!this.loading) {
						this.loading = true;
						phoneLogin(this.form).then(res => {
							this.loading = false;
							console.log(res)
							if (res.code == 200) {
								this.$store.dispatch('user/setUserAction', true);
								this.$refs.uToast.show({
									title: '登录成功',
									type: 'success',
									position: 'top',
									duration: 1000,
									isTab: true,
									url: 'pages/home/home'
								});
							}
						});
					}
				}
			});
		}
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	}
};
</script>

<style lang="less">
.login-page {
	padding: 0 30rpx;
	box-sizing: border-box;
}
</style>
