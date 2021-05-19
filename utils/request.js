function service(options) {
	let server_url = 'https://netease-cloud-music-api-chi-henna.vercel.app'; //请求地址
	// #ifdef MP
	let Cookie = uni.getStorageSync('Cookie');
	// #endif
	return new Promise((resolved, rejected) => {
		// setTimeout(() => {
		uni.request({
			// #ifdef H5
			url: '/api' + options.url,
			// #endif

			// #ifndef H5
			url: server_url + options.url,
			// #endif
			// Cookie
			method: options.method,
			// timeout:5000,
			header: {
				'content-type': 'application/x-www-form-urlencoded', //自定义请求头信息
				// #ifdef MP
				'Cookie': Cookie,
				// #endif
			},
			data: options.data,
			success: (res) => {
				resolved(res.data);
			},
			fail: (err) => {
				rejected(err)
			},

		});
		// }, 5000)
	})

}

export default service;
