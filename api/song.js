import request from '../utils/request.js'
export function checkMusic(data) {
	//获取歌单详情
	return request({
		url: '/check/music',
		method: 'GET',
		data
	})
}

export function songUrl(data) {
	//获取歌单详情
	return request({
		url: '/song/url',
		method: 'GET',
		data
	})
}

