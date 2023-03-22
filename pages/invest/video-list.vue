<template>
	<scroll-view scroll-x="true" class="scroll-view_H">
		<view class="scroll-view-item_H" v-for="(item,index) in list" :key="item.id" @click="toVideo(item,index)">
			<image :src="item.cover"></image>
			<view>{{item.title}}</view>
		</view>
	</scroll-view>
</template>

<script setup>
	const props=defineProps({
		list:{
			type:Array,
			default:()=>([])
		},
		no:{
			type:Number,
			default:1
		}
	})
	const emits=defineEmits(['tap'])
	function toVideo(item,index){
		let next=props.list[index+1]
		emits('tap',item,next)
	}
	
</script>

<style>
.scroll-view_H {
    white-space: nowrap;
    width: 100%;
    padding-left: 20rpx;
}

.scroll-view-item_H {
    display: inline-block;
    width: 300rpx; 
    height: 220rpx;
    text-align: center;
    font-size: 20rpx;
    overflow: hidden;
    margin-right: 20rpx;
    border-radius: 10rpx;
}

.scroll-view-item_H  image {
    width: 100%;
    height: 180rpx;
    object-fit: cover;
}


</style>