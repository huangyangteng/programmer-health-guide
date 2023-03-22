<template>
    <view class="tag-list">
        <view
            v-for="item in tags"
            :class="{'active':item.id===selectId}"
            :key="item.id"
            @click="select(item)"
            class="tag-item"
            >{{item.value}}</view
        >
    </view>
</template>

<script setup>
import { ref, onMounted,watch } from 'vue'
import { FetchTags } from '../../api/tag'

const emit = defineEmits(['select'])


const tags = ref([])
const selectId = ref(-1)
//获取数据
const fetchTags = async () => {
    const res = await FetchTags()
    tags.value = res.data.data
	selectId.value=tags.value[0].id
} 
//选中操作
function select(item) {
    selectId.value = item.id
}
watch(selectId,(val)=>{
	console.log('😊😊😊',val)
	emit('select',val)

})
onMounted(() => {
    fetchTags()
})
</script>

<style>
.tag-item {
    height: 50rpx;
    box-sizing: border-box;
    margin-right: 30rpx;
    padding: 8rpx 20rpx;
    border-radius: 4rpx;
    font-size: 24rpx;
    border: 1px solid #fff;
}
.tag-item.active {
    background-color: #fbcb53;
    border: 0;
}
</style>
