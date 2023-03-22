
export function FetchNotes(userId,tag){
    return uni.request({
        url: `https://leexiao.site/gk-api/note/${userId}?tagId=${tag}`
    })
}

export function AddNote(data){
    return uni.request({
        url: `https://leexiao.site/gk-api/note`,
        method:'post',
        data
    })
}