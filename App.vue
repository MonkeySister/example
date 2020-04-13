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
		font-family:Sans-serif,Monospace ,Fantasy,Cursive, Times, TimesNR, 'New Century Schoolbook',
     Georgia, 'New York', serif;;
	}
	.content{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #EEEEEE;
	}
	.header{
		background-color: #EEEEEE;
		width: 100%;
		height: 44px;
		padding: 5px 10px;
		box-sizing: border-box;
		font-size: 32rpx;
		font-weight: 600;
	}
	.headerX{
		height: 60px;
		background-color: #EEEEEE;
		width: 100%;
		padding: 5px 10px;
		box-sizing: border-box;
		font-size: 32rpx;
		font-weight: 600;
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
