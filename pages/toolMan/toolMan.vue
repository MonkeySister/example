<template>
	<view class="content">
		<swiper 
			class="swiper" 
			:indicator-dots='true' 
			:autoplay="true" 
			current=0 
			interval=3000 
			:circular="true"
			indicator-color="#ffffff"
			indicator-active-color="#ffff00">
			<swiper-item 
				v-for="(list,index) in swiperData" 
				:key="index">
				<view class="swiper-item uni-bg-blue swiper-box" style="height: 100%;">
					<image :src="list" mode='scaleToFill' style="width: 100%;height: 100%;display: block;"></image>
				</view>
			</swiper-item>
		</swiper>	
		
		<scroll-view scroll-x="true" class="uni-common-mt scroll" :show-scrollbar='false'>
			<view 
				class="scroll-box" 
				v-for="(list,index) in scrollData"
				:key="index"
				@click="videoTab">
					<image :src="list.bgImg" mode="scaleToFill" style="width: 100%;height: 100%;display: block;"></image>
				</view>
			
		</scroll-view>
			
		<view class="uni-bg-green text-box">
			<!-- <uni-icons type="eye" size=20 color="#FFFFFF"></uni-icons> -->
			<text class="">主页内容</text>
		</view>
		<view class="con-list uni-common-mt">
			<view class="list-box">
				
				<uni-card 
					v-for="(list,index) in cardData"
					:key="index"
					:title=list.title 
					:thumbnail=list.titleBg 
					mode="style" 
					note="Tips" 
					:is-shadow="true"
					class="card"
					>
					<view class="">
						{{list.cardText}}
					</view>
					<template slot="footer">
						<view class="card-footer-box f">
							<view class="footer-box-left ">
								浏览{{list.cardEyes}}次
							</view>
							<view class="footer-box-right">
								<cmd-icon 
									type="heart-2 " 
									size="18" 
									style="padding-right: 20rpx;" 
									:color="list.color"
									class="heart2"
									@click="heartClick(list)"
									></cmd-icon>
									<view class="add-like" :animation="list.animation">
										+1
									</view>
								<uni-icons type="redo" size="18" color="#8F8F94"></uni-icons>
							</view>
						</view>
					</template>
				</uni-card>
				
				
			
			</view>
		</view>
	</view>
</template>

<script>
	import uniCard from '@/components/uni-card/uni-card.vue'
	export default {
		components: {uniCard},
		data() {
			return {
				swiperData:['../../static/img/1.jpg','../../static/img/2.jpg','../../static/img/3.jpg','../../static/img/4.jpg','../../static/img/5.jpg'],
				cardData:[
					{
						title:'我喜欢uni',
						titleBg:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						cardText:"不知不觉间，已经成为一个小大人了。不得不感叹，光阴似箭，日月如梭，如白驹过隙一般。没想到，我还没想好十八岁该怎么过的时候，十八岁就已经成为过去了。",
						cardEyes:25,
						color:'#8F8F94',
						animation:{}
					},
					{
						title:'我喜欢uni',
						titleBg:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						cardText:"不知不觉间，已经成为一个小大人了。不得不感叹，光阴似箭，日月如梭，如白驹过隙一般。没想到，我还没想好十八岁该怎么过的时候，十八岁就已经成为过去了。",
						cardEyes:28,
						color:'#8F8F94',
						animation:{}
					},
					{
						title:'我喜欢uni',
						titleBg:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						cardText:"不知不觉间，已经成为一个小大人了。不得不感叹，光阴似箭，日月如梭，如白驹过隙一般。没想到，我还没想好十八岁该怎么过的时候，十八岁就已经成为过去了。",
						cardEyes:29,
						color:'#8F8F94',
						animation:{}
					},
					{
						title:'卡片标题',
						titleBg:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						cardText:"不知不觉间，已经成为一个小大人了。不得不感叹，光阴似箭，日月如梭，如白驹过隙一般。没想到，我还没想好十八岁该怎么过的时候，十八岁就已经成为过去了。",
						cardEyes:10,
						color:'#8F8F94',
						animation:{}
					}
				],
				animationData:[],
				scrollData:[
					{
						id:1,
						bgImg:"../../static/img/audio1.jpg"
					},
					{
						id:2,
						bgImg:"../../static/img/audio2.jpg"
					},
					{
						id:3,
						bgImg:"../../static/img/audio3.jpg"
					},
					{
						id:4,
						bgImg:"../../static/img/audio4.jpg"
					},
					{
						id:5,
						bgImg:"../../static/img/audio5.jpg"
					},
					{
						id:6,
						bgImg:"../../static/img/audio6.jpg"
					},
					{
						id:7,
						bgImg:"../../static/img/audio7.jpg"
					},
				],
			}
		},
		onLoad() {
			
		},
		onUnload() {
		},
		// 监听用户下拉刷新
		onPullDownRefresh(){
			console.log('app下拉没有成功')
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 3000);
		},
		onShow() {
			
		},
		created() {
			this.cardData.forEach((item,index)=>{
				this.animationData.push({})
			})
		},
		methods: {
			//跳转到视频播放页面
			videoTab(){
				uni.navigateTo({
					url:"/pages/toolMan/videoPlay",
					animationType:'slide-in-right',
					animationDuration:500
				})
			},
			//点击喜欢
			heartClick(list,index){
				if(list.color==='#8F8F94'){
					list.color="#ff0000"
					this.animation = uni.createAnimation()
					this.animation.translateY(-30).opacity(1).step({
						duration:400,
						timingFunction:'ease'
					})
					list.animation = this.animation.export()
					//动画执行后撤销执行
					setTimeout(function(){
						this.animation.translateY(0).opacity(0).step({
							duration:0
						})
						list.animation = this.animation.export()
					}.bind(this),500)
				}else{
					list.color='#8F8F94'
				}
				
			}
		}
	}
</script>

<style lang="less">
	.content{
		.swiper-box{
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.scroll{
			width: 100%;
			white-space: nowrap;
			.scroll-box{
				display: inline-block;
				height: 484rpx;
				width: 280rpx;
				margin: 0 12rpx;
				text-align: center;
				line-height:250rpx;
				background-color: #D8D8D8;
				
			}
		}
		
		.text-box{
			height: 70rpx;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			width:95%;
			margin: 10px auto;
			border-radius: 20rpx;
			padding-left: 20rpx;
			box-sizing: border-box;
		}
		.card{
			.card-footer-box{
				height:30rpx;
				justify-content: space-between;
				align-items: center;
				.footer-box-left,.footer-box-right{
					width: 40%;
					height: 100%;
					line-height: 30rpx;
					color: #8F8F94;
				}
				.footer-box-left{
					text-align: left;
					font-size: 24rpx;
				}
				.footer-box-right{
					text-align: right;
					position: relative;
				}
				.add-like{
					position: absolute;
					top: 20rpx;
					left: 67%;
					color: #ff0000;
					opacity: 0;
					font-weight: 600;
				}
			}
			.heart2{
				color: #8F8F94;
			}
		}
		/* #ifdef MP-WEIXIN */
		.swiper{
			height: 400rpx;
		}
		/* #endif */
	}


</style>
