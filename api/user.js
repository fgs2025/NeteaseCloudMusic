import request from '../utils/request.js'
export function playlist(data) {
	//获取用户歌单
	return request({
		url: '/user/playlist',
		method: 'GET',
		data
	})
}


