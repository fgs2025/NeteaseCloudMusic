import request from '../utils/request.js'
export function playlist(data) {
	//获取歌单详情
	return request({
		url: '/playlist/detail',
		method: 'GET',
		data
	})
}


