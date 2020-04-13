<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="header" :class="{headerX:activeX}" >
			扩展插件
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeX:false,
			}
		},
		onLoad() {
			//自定义导航栏标题头加长
			var _this = this
			// #ifdef APP-PLUS || MP-WEIXIN
			uni.getSystemInfo({
				success:function(res){
					if(res.model.includes('iPhone X')){
						_this.activeX = true
					}
				}
			})
			// #endif
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
.header{
	display: flex;
	align-items: flex-end;
}


</style>
