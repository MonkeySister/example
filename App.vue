<script>
	// import './common/uni.css'
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	@import url('./common/uni.css');

	
	/*每个页面公共css */
	page{
		width: 100%;
		overflow-x: hidden;
		height: 100%;
		box-sizing: border-box;
	}
	// @font-face {
	// 	font-family:'PingFang SC';
	// 	src: url('./static/fontFamily/PingFang1.ttf');
	// }
	view{
		font-family: 'PingFang SC' !important;
		font-weight: 'Semibold';
		
	}
	.content{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	/* 弹性布局 */
	.f{
		display: flex;
	}
	/* 水平居中垂直居中 */
	.ja-c{
		justify-content: center;
		align-items: center;
	}
	/* 水平分散垂直居中 */
	.ja-s{
		justify-content: space-around;
		align-items: center;
	}
	/* 水平两端分散垂直居中 */
	.ja-s{
		justify-content: space-between;
		align-items: center;
	}
	
	// 
	.uni-input-placeholder,.uni-input-input{
		text-align: left;
		padding-left: 20rpx;
		font-size: 40rpx;
	}
	uni-modal{
		.uni-modal__bd{
			color: #353434;
		}
	}
	uni-swiper{
		height: 400rpx;
	}
</style>
