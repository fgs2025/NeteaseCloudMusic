
<script>
// import { loginStatus } from 'api/login.js';

export default {
	onLaunch: function() {
		// let timestamp=+new Date
		// loginStatus({timestamp}).then(res => {
		// 	if (res.data.account && res.data.profile) {
		// 		this.$store.dispatch('user/setUserInfo', res.data.profile);
		// 		this.$store.dispatch('user/setUserAction', true);
		// 	}
		// });
	},
	onShow: function() {},
	onHide: function() {}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import 'uview-ui/index.scss';
page {
	// height: 100%;
	background-color: #cef1ff;
}
</style>
