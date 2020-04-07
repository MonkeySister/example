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
					class="card">
					<view class="">
						{{list.cardText}}
					</view>
					<template slot="footer">
						<view class="card-footer-box f">
							<view class="footer-box-left ">
								浏览{{list.cardEyes}}次
							</view>
							<view class="footer-box-right">
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
						title:'卡片标题',
						titleBg:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						cardText:"我喜欢uni",
						cardEyes:25
					},
					{
						title:'卡片标题',
						titleBg:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						cardText:"我喜欢uni",
						cardEyes:28
					},
					{
						title:'卡片标题',
						titleBg:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						cardText:"我喜欢uni",
						cardEyes:29
					},
					{
						title:'卡片标题',
						titleBg:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						cardText:"我喜欢uni",
						cardEyes:10
					}
				],
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
				]
			}
		},
		onLoad() {
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
		methods: {
			videoTab(){
				uni.redirectTo({
					url:"./videoPlay"
				})
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
					width: 30%;
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
				}
			}
		}
		/* #ifdef MP-WEIXIN */
		.swiper{
			height: 400rpx;
		}
		/* #endif */
	}


</style>
