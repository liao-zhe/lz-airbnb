import myRequest from '..'

// 获取整个房屋列表
// offset 偏移量，size 每页条数
export function getEntireList(offset, size) {
	return myRequest.get({
		url: '/entire/list',
		params: { offset, size }
	})
}
