let url_config = ""
if(process.env.NODE_ENV === 'development'){
	url_config = "10.1.10.148:8089/api/"
}else{
	url_config = "10.1.10.148:8089/api/"
}


function urlRequest(path,data,method,callback){
	let token = uni.getStorageSync('token')
	if(path==='/appLogin'){
		uni.request({
			url:url_config+path,
			data:data,
			method:method,
			timeout:5000,
			header:{},
			success(res) {
				callback(res)
			},
			fail(err){
				callback(err)
			},
		})
	}else{
		uni.request({
			url:url_config+path,
			data:data,
			method:method,
			timeout:5000,
			header:{
				'Authorization':`Bearer ${token}`
			},
			success(res) {
				callback(res)
			},
			fail(err){
				callback(err)
			},
		})
	}
}

export default {
	urlRequest
}