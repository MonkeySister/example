<template>
	<view class="content">
		<video 
			src="../../static/video/1.mp4" 
			controls 
			class="video" 
			autoplay="true"
			loop="true"
			show-mute-btn="true"
			object-fit="fill">
			<cover-view class="controls-back">
				<uni-icons type="undo" color="#FFFFFF" size="30" @click="videoBack"></uni-icons>
			</cover-view>
		</video>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		onLoad() {
			
		},
		onShow() {
			
		},
		methods:{
			videoBack(){
				uni.switchTab({
					url:"/pages/toolMan/toolMan",
					
				})
			}
		}
	}
</script>

<style lang="less">
	.video{
		width: 100%;
		height: 100%;
	}
	.controls-back{
		margin-top: 40px;
		padding-left: 40rpx;
	}
</style>
