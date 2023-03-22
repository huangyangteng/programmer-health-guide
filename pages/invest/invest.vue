<template>
    <view class="wrapper">
        <video :poster="videoPoster" :autoplay="true" @ended="onEnded" v-if="videoItem" :src="videoItem.src"></video>
        <text v-if="videoItem" class="title">{{ videoTitle }}</text>
        <view class="list-info">
            <view>ETF大魔头</view>
            <view @click="refresh(1)">刷新</view>
        </view>
        <VideoList :list="list1" @tap="toVideo"></VideoList>
		<view class="list-info">
		    <view>吾爱财经</view>
		    <view @click="refresh(2)">刷新</view>
		</view>
		 <VideoList :list="list2" @tap="toVideo"></VideoList>
    </view>
</template>

<script>
import VideoList from "./video-list";
export default {
    components:{
        VideoList

    },
    data() {
        return {
            videoItem: null,
            videoTitle: '2023投资方法论',
            videoPoster: '',
            list1: [],
			list2:[],
            etfId: 1363445034,
            wacjId: 96081167,
            brandLink: 'https://www.bilibili.com/video/BV1ND4y1J7oJ/',
			nextVideo:null
        }
    },
    methods: {
		async onEnded(){
			// 播放完成之后播放下一个
			if(this.nextVideo){
				this.toVideo(this.nextVideo)
			}
			
		},
        async init() {
			uni.showLoading({
			    title: '加载中'
			});
            this.videoItem = await this.getVideoSrc(this.brandLink)
            this.list1 = await this.getDnyList(this.etfId,1,1)
			this.list2=await this.getDnyList(this.wacjId,1,2)
			uni.hideLoading()
        },
		async refresh(type){
			if(type===1){
				this.list1 = await this.getDnyList(this.etfId,1,1)
			}else{
				this.list2=await this.getDnyList(this.wacjId,1,2)
			}
			
		
		},
        getVideoSrc(link) {
            return new Promise(resolve => {
                uni.request({
                    url: 'https://leexiao.site/gk-api/watch/bb',
                    method: 'POST',
                    data: {
                        link
                    },
                    success: (res) => {
                        resolve(res.data.data)
                    }
                })
            })

        },
        getDnyList(hostId = 1363445034, page = 1,type) {
            return new Promise(resolve => {
                uni.request({
                    url: `https://leexiao.site/gk-api/bb/dynamic?host_mid=${hostId}&page=${page}`,
                    success: (res) => {
                        let list = res.data.data.items.map((item,index) => {
                            const {
                                bvid,
                                cover,
                                title
                            } = item.modules.module_dynamic.major.archive
                            return {
                                id: item.id_str,
                                cover,
                                title,
                                link: `https://www.bilibili.com/video/${bvid}/`,
                                bid: bvid,
								index:index,
								type
                            }
                        })
                        resolve(list)
                    }
                })
            })
        },
        async toVideo(item) {
			if(!item.link)return
			if(item.type==1){
				this.nextVideo=this.list1[item.index+1]
			}else if(item.type==2){
				this.nextVideo=this.list2[item.index+1]
			}
			console.log('🏀🏀🏀',this.nextVideo)
			
            uni.showLoading({
                title: '加载中'
            });
            this.videoTitle = item.title
            this.videoPoster = item.cover
            this.videoItem = await this.getVideoSrc(item.link)

            uni.hideLoading()
            // this.videoItem.src=item.link
        }
    },
    onLoad() {
        this.init()
    }
}
</script>

<style>
.wrapper > video {
    width: 100%;
}

.title {
    font-size: 30rpx;
    padding-left: 20rpx;
    padding-right: 20rpx;
    display: flex;
}
.list-info { 
    font-size: 28rpx;
    display: flex;
    justify-content: space-between;
    padding: 20rpx;
}

</style>
