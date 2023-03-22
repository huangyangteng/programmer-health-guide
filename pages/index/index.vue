<template>
	<view class="content" style="padding:20rpx">
		<textarea class="textarea" @confirm="submit" focus placeholder="Write down your thoughts..." />
		<Tags></Tags>
		<scroll-view scroll-y="true" class="scroll-Y">
			<view id="demo1" class="scroll-view-item uni-bg-red">A</view>
			<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
			<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
		</scroll-view>
	</view>
</template>
 
<script>
	import Tags from './Tags.vue'
	export default {
		components:{
			Tags
		},
		data() {
			return {
				title: '开始开始',
				connectId: -1,
				tagList:[
					
				]
			}
		},
		onLoad() {
			this.fetchList()
		},
		methods: {
			submit() {
				console.log('submit')
			},
			fetchList() {
				uni.request({
					url: `https://leexiao.site/gk-api/note/6?connectId=${this.connectId}`,
					success(res) {
						console.log(res.data)
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		box-sizing: border-box;
	}

	.textarea {
		background-color: #17181a;
		width: 100%;
		border-radius: 10rpx;
		box-sizing: border-box;
		padding: 20rpx;
		height: 300rpx;
	}

	.tag-list {
		width: 100%;
		display: flex;
		height: 100rpx;
		align-items: center;
		padding-left: 20rpx;
	}



	.scroll-Y {
		height: calc(100vh - 400rpx);
	}

	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
</style>
