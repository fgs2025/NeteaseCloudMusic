import request from '../utils/request.js'
export function phoneLogin(data) {
	//手机登陆
	return request({
		url: '/login/cellphone',
		method: 'POST',
		data
	})
}

export function loginStatus(data) {
	//登陆状态
	return request({
		url: '/login/status',
		method: 'GET',
		data
	})
}
