<template>
	<view class="content login-acount">
		<view class="acount f"><uni-icons size="40" color="#999999" type="contact"></uni-icons>
			<input class="user-input" type="text" value="" placeholder="用户名" @input="nameInput" v-model="user.username"/>
		</view>
		<view class="pwd f">
			<uni-icons size="40" color="#999999" type="locked"></uni-icons>
			<input class="user-input" placeholder="请输入新密码" :password="!showPwd"  type="text" v-model="user.password" @input="pwdInput"/>
			<text class="eyePwd" :class="[showPwd ? 'uni-eye-active' : '']" @click="showUserPwd">&#xe568;</text>
		</view>
		<view class="login-btn">
			<button type="default" @tap="submit" v-bind:class="{active:flag}" :disabled="!flag">登录</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				user:{
					username: '',
					password: '',	
					os:'app'
				},
				flag:false,
				showPwd:false,
				data:[
					{
						username: '',
						password: '',	
						os:'app'
					}
				]
			}
		},
		// 页面的生命周期
		onLoad() {
			
		},
		onShow() {
			
		},
		onReady() {
			
		},
		onBackPress(event) {
		},
		created() {
			
		},
		methods:{
			//监听用户名输入
			nameInput(value){
				if(value.target.value.length>0&&this.user.password.length>0){
					this.flag = true
				}else{
					this.flag = false
				}
			},
			//监听密码框输入
			pwdInput(value){
				if(value.target.value.length>0&&this.user.username.length>0){
					this.flag = true
				}else{
					this.flag = false
				}
			},
			//用户查看密码
			showUserPwd(){
				this.showPwd = !this.showPwd
			},
			submit(){
				// uni.switchTab({
				// 	url:'../staMan/staMan',
				// })
				// let data = this.data
				// data = JSON.stringify(data)
				this.$http.urlRequest('organization/all',{data:this.data},'POST',(res)=>{
					console.log(res)
					// if(res.data.code===200){
					// 	uni.switchTab({
					// 		url:'../staMan/staMan',
					// 	})
					// }else{
					// 	uni.showModal({
					// 		content: res.data.msg,
					// 		showCancel:false,
					// 		confirmColor:'#007AFF'
					// 	});
					// }
				})
			}
		}
		
	}
</script>

<style lang="less">
	.login-acount{
		padding-top: 200rpx;
		view{
			margin: 80rpx auto;
			width: 80%;
			align-items: center;
			uni-input{
				width: 80%;
				border-bottom: 2rpx solid #666666;
				height: 60rpx;
			}
			button{
				font-size: 40rpx;
				letter-spacing: 4rpx;
				color: #666666;
			}
			.active{
				background-color: #007aff;
				color: #FFFFFF;
			}
		}
		.pwd{
			position: relative;
			.eyePwd{
				position: absolute;
				right:45rpx;
				font-family: uniicons;
				font-size: 24px;
				font-weight: normal;
				font-style: normal;
				width: 24px;
				height: 24px;
				line-height: 24px;
				color: #999999;
			}
			/*#ifdef APP-PLUS*/
			.eyePwd{
				top: 20rpx;
			}
			/*#endif*/
			/*#ifdef H5*/
			.eyePwd{
				top: 40rpx;
			}
			/*#endif*/
			.uni-eye-active {
			    color: #007AFF;
			}
		}
	}
	/* #ifdef MP-WEIXIN */
	.user-input{
		height: 100%;
		border-bottom: 2rpx solid #666666;
		height: 120rpx;
	}
	/* #endif */
</style>
