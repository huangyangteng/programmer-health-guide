
export function FetchTags(){
    return  uni.request({
        url: `https://leexiao.site/gk-api/tag`
    })
}