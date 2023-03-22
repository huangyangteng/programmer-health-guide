<template>
	<view class="tag-list">
		<view class="tag-item active">工作</view>
		<view class="tag-item">生活</view>
		<view class="tag-item"> 投资</view>
		{{tags}}
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const tags=ref([])
	const fetchTags=async()=>{
		// uni.request({
		// 	url:''
		// })
		
	}
</script>

<style>
	.tag-item {
		height: 50rpx;
		box-sizing: border-box;
		margin-right: 30rpx;
		padding:8rpx 20rpx;
		border-radius: 4rpx;
		font-size: 24rpx;
		border:1px solid #fff;
		
	}
	.tag-item.active{
			background-color: #fbcb53;
			border:0;
	}
</style>