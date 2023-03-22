<template>
    <view class="content" style="padding: 20rpx">
        <textarea
			v-model="value"
            class="textarea"
            @confirm="submit"
            placeholder="Write down your thoughts..."
        />
        <Tags @select="onSelect"></Tags>
        <scroll-view scroll-y="true" class="scroll-Y">
            <view
                class="scroll-view-item"
                v-for="item in noteList"
                :key="item.id"
            >
                <view class="time">
					<text>{{ item.updateDate }}</text>
					<!-- <text>x</text> -->
				</view>
                <view class="note-content">
                    {{ item.value }}
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script>
import Tags from './Tags.vue'
import { FetchNotes, AddNote } from '../../api/note'
export default {
    components: {
        Tags
    },
    data() {
        return {
            title: '开始开始',
            connectId: -1,
            curTag: -1,
            noteList: [],
			value:'',
			userId:6
        }
    },
    onLoad() {
        this.fetchList(this.curTag)
    },
    methods: {
		onSelect(id){
			this.curTag=id
			this.fetchList(id)
		},
        async submit() {
			if(!this.value)return
            await AddNote({ value:this.value, userId: this.userId,tag:this.curTag })
			this.value=''
			this.fetchList(this.curTag)
			
			
        },
        async fetchList(tag) {
            const res = await FetchNotes(this.userId,tag)
            console.log(res.data.data)
            this.noteList = res.data.data
        }
    },
    mounted() {
        this.fetchList(this.curTag)
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
    /* height: 200rpx; */
    background-color: #17181a;
    margin-bottom: 20rpx;
    padding: 20rpx;
    border-radius: 8rpx;
    line-height: 1.5;
    overflow-y: auto;
    /* max-height: 200rpx; */
    font-size: 30rpx;
}
.scroll-view-item .time {
    font-size: 22rpx;
    opacity: 0.8;
    margin-bottom: 18rpx;
	display: flex;
	justify-content: space-between;
}
.note-content {
    padding: 10rpx 20rpx;
}
</style>
