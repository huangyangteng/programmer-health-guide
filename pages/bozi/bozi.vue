<template>
	<view class="bozi-wrapper">
		<video v-if="boziVIdeo" :src="boziVIdeo.src"></video>
		<text class="bozi-title">麦肯基疗法--颈椎修复</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				boziVIdeo:null
			}
		},
		methods: {
			test(){
				console.log('hahaha')
			}
		},
		onLoad() {
			this.test()
			uni.request({
				url:'https://leexiao.site/gk-api/watch/bb',
				method:'POST',
				data:{
					link:'https://www.bilibili.com/video/BV1YN411F7RP/'
				},
				success:(res)=>{
					console.log(res.data.data)
					this.boziVIdeo=res.data.data
				}
			})
			
		}
	}
</script>

<style>
.bozi-wrapper>video{
	width: 100%;
}
.bozi-title{
	font-size: 30rpx;
	padding-left: 20rpx;
	padding-right: 20rpx;
}
</style>
