<template>
	<view class="content">
		<view class="title">
			图表的演示
		</view>
		<!-- 饼图 -->
		<view class="chart-box uni-common-mt">
			<canvas 
				canvas-id="canvasPie" 
				id="canvasPie" 
				class="charts" 
				@touchstart="touchCanvasObj($event,'canvasPie')"
				:width="cWidth*pixelRatio" 
				:height="cHeight*pixelRatio" 
				:style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
		</view>
		<!-- 圆环图 -->
		<view class="chart-box uni-common-mt">
			<canvas 
				canvas-id="canvasRing" 
				id="canvasRing" 
				class="charts" 
				@touchstart="touchCanvasObj($event,'canvasRing')"
				:width="cWidth*pixelRatio" 
				:height="cHeight*pixelRatio" 
				:style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
		</view>
		<!-- 折线图 -->
		<view class="chart-box uni-common-mt">
			<canvas 
				canvas-id="canvasLine" 
				id="canvasLine" 
				class="charts" 
				@touchstart="touchCanvasObj($event,'canvasLine')"
				:width="cWidth*pixelRatio" 
				:height="cHeight*pixelRatio" 
				:style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
		</view>
		<!-- 柱状图 -->
		<view class="chart-box uni-common-mt">
			<canvas 
				canvas-id="canvasBar" 
				id="canvasBar" 
				class="charts" 
				@touchstart="touchCanvasObj($event,'canvasBar')"
				:width="cWidth*pixelRatio" 
				:height="cHeight*pixelRatio" 
				:style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
		</view>
		<!-- 词云图 -->
		<view class="chart-box uni-common-mt">
			<canvas 
				canvas-id="canvasWord" 
				id="canvasWord" 
				class="charts" 
				:width="cWidth*pixelRatio" 
				:height="cHeight*pixelRatio" 
				:style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
		</view>
		<!-- 雷达图 -->
		<view class="chart-box uni-common-mt">
			<canvas 
				canvas-id="canvasRadar" 
				id="canvasRadar" 
				class="charts" 
				@touchstart="touchCanvasObj($event,'canvasRadar')"
				:width="cWidth*pixelRatio" 
				:height="cHeight*pixelRatio" 
				:style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
		</view>
		
	</view>
</template>

<script>
	import uCharts from '../../components/u-charts/u-charts.js';
	var canvasObj={};
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,//像素比
				colors:['#f00000','#ffff00','#ff00ff','#00ffff','#0000ff','#00ff00'],
				chartData: {
					series: [
						{
							name: "一班",
							data: 50
						}, {
							name: "二班",
							data: 30
						}, {
							name: "三班",
							data: 20
						}, {
							name: "四班",
							data: 18
						}, {
							name: "五班",
							data: 8
						},
					]
				},
				chartDataLine: {
					categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
					series: [{
						name: '成交量A',
						data: [35, 20, 25, 37, 4, 20],
						color: '#000000'
					}, {
						name: '成交量B',
						data: [70, 40, 65, 100, 44, 68]
					}, {
						name: '成交量C',
						data: [100, 80, 95, 150, 112, 132]
					}]
				},
				chartDataBar: {
					categories: ["2012", "2013", "2014", "2015", "2016", "2017"],
					series: [
						{
							name: "成交量1",
							data: [15, {value: 20,color: "#f04864"}, 45, 37, 43, 34]
						}, 
						{
							name: "成交量2",
							data: [30, {value: 40,color: "#facc14"}, 25, 14, 34, 18]
						},
					]
				},
				chartDataWord: {
					series: [
						{
							name: "VUE",
							textSize: 30
						}, {
							name: "APP",
							textSize: 30
						}, {
							name: "微信小程序",
							textSize: 20
						}, {
							name: "Web",
							textSize: 20
						}, {
							name: "H5",
							textSize: 20
						},
					]
				},
				chartDataRadar: {
					categories: ['维度1', '维度2', '维度3', '维度4', '维度5', '维度6'],
					series: [{
						name: '成交量1',
						data: [90, 110, 165, 195, 187, 172]
					}, {
						name: '成交量2',
						data: [190, 210, 105, 35, 27, 102]
					}]
				},
			}
		},
		onLoad() {
			this.cWidth = uni.upx2px(750)
			this.cHeight = uni.upx2px(500)
		},
		onReady() {
			// 饼图
			this.showPie('canvasPie',this.chartData)
			this.showRing('canvasRing',this.chartData)
			this.showLine('canvasLine',this.chartDataLine)
			this.showBar('canvasBar',this.chartDataBar)
			this.showWord('canvasWord',this.chartDataWord)
			this.showRadar('canvasRadar',this.chartDataRadar)
		},
		onShow() {
			
		},
		onPullDownRefresh(){
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 3000);
		},
		methods: {
			//饼图
			showPie(canvasId,chartData){
				canvasObj[canvasId] = new uCharts({
					$this:this,
					canvasId:canvasId,
					type:'pie',
					fontSize:14,
					colors:this.colors,
					legend:{
						show:true,
						position:'right',
						float:'center',
						itemGap:10,
						padding:5,
						lineHeight:26,
						margin:5,
						borderWidth :1
					},
					width:this.cWidth* this.pixelRatio,
					height:this.cHeight* this.pixelRatio,
					series:chartData.series,
					padding:[5,20,5,20],
					dataLabel: true,
					pixelRatio:this.pixelRatio,
					extra: {
						pie: {
							labelWidth:15
						}
					},
				})
			},
			
			//圆环图
			showRing(canvasId,chartData){
				canvasObj[canvasId] = new uCharts({
					$this:this,
					canvasId: canvasId,
					type: 'ring',
					fontSize:14,
					legend:{
						show:true,
						position:'right',
						float:'center',
						itemGap:10,
						padding:5,
						lineHeight:26,
						margin:5,
						borderWidth :1
					},
					// title: {
					// 	name: '70%',
					// 	color: '#7cb5ec',
					// 	fontSize: 25,
					// 	offsetY:-10,
					// },
					// subtitle: {
					// 	name: '收益率',
					// 	color: '#666666',
					// 	fontSize: 15,
					// 	offsetY:5,
					// },
					extra: {
						pie: {
							offsetAngle: -45,
							ringWidth: 30,
							labelWidth:15
						}
					},
					background:'#FFFFFF',
					pixelRatio:1,
					padding:[5,20,5,20],
					series: chartData.series,
					animation: true,
					width: this.cWidth,
					height: this.cHeight,
					disablePieStroke: true,
					dataLabel: true,
				});
			},
			
			//折线图
			showLine(canvasId,chartData){
				canvasObj[canvasId]=new uCharts({
					$this:this,
					canvasId: canvasId,
					type: 'line',
					fontSize:11,
					legend:{show:true},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:1,
					padding:[20,20,20,20],
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						dashLength:8,
						splitNumber:5,
						min:10,
						max:180,
						format:(val)=>{return val.toFixed(0)+'元'}
					},
					width: this.cWidth,
					height: this.cHeight,
					extra: {
						line:{
							type: 'straight'
						}
					}
				});
			},
			
			//柱状图
			showBar(canvasId,chartData){
				canvasObj[canvasId]=new uCharts({
					$this:this,
					canvasId: canvasId,
					type: 'column',
					legend:{show:true},
					fontSize:11,
					background:'#FFFFFF',
					pixelRatio:1,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid:true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: this.cWidth,
					height: this.cHeight,
					extra: {
						column: {
							type:'group',
							width: 20
						}
					 }
				})
			},
			//文字图
			showWord(canvasId,chartData){
				new uCharts({
				  $this:this,
				  canvasId: canvasId,
				  type: 'word',
				  background:'#000000',
				  pixelRatio:this.pixelRatio,
				  series: chartData.series,
				  width: this.cWidth*this.pixelRatio,
				  height: this.cHeight*this.pixelRatio,
				  extra: {
				    word: {
				      type: 'normal'
				    }
				  }
				});
			},
			
			//雷达图
			showRadar(canvasId,chartData){
				canvasObj[canvasId]=new uCharts({
					$this:this,
					canvasId: canvasId,
					type: 'radar',
					fontSize:11,
					legend:{show:true},
					background:'#FFFFFF',
					pixelRatio:1,
					animation: true,
					dataLabel: true,
					categories: chartData.categories,
					series: chartData.series,
					width: this.cWidth,
					height: this.cHeight,
					extra: {
						radar: {
							max: 200//雷达数值的最大值
						}
					}
				});
			},
			//图形点击事件
			touchCanvasObj(e,canvasId){
				canvasObj[canvasId].showToolTip(e,{
					format:function(item){
						return item.name+":"+item.data
					}
				})
			},
		}
	}
</script>

<style>
	.content{
		height: auto;
		background-color:#EEEEEE ;
	}
	.title{
		width: 100%;
		padding-left: 20rpx;
		height: 60rpx;
		line-height: 60rpx;
		background-color: rgba(9,187,7,1);
		letter-spacing: 1px;
		font-size: 32rpx;
		color: #FFFFFF;
	}
	.charts,.chart-box{
		width: 750upx; 
		height:500upx;
		background-color: #FFFFFF;
	}
</style>
