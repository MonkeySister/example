<template>
	<view class="content">
		<video 
			src="../../static/video/1.mp4" 
			controls 
			class="video" 
			autoplay="true"
			loop="true"
			object-fit="fill">
			<!-- <cover-view class="controls-title">简单的自定义 controls</cover-view> -->
			<!-- <cover-image class="controls-play img" @click="play" src="../../../static/play.png"></cover-image>
			<cover-image class="controls-pause img" @click="pause" src="../../../static/pause.png"></cover-image> -->
		</video>
	</view>
</template>

<script>
</script>

<style lang="less">
	.video{
		width: 100%;
		height: 100%;
	}
</style>
