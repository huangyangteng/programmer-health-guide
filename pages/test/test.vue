<template>
	<view>

	</view>
</template>

<script setup>
	import {
		onMounted
	} from 'vue'
	onMounted(() => {
		const bgm = uni.getBackgroundAudioManager();
		bgm.title = 'your_video_title';
		bgm.epname = 'your_video_epname';
		bgm.singer = 'your_video_singer';
		bgm.coverImgUrl = 'your_video_coverImgUrl';
		bgm.src = "http://freevod.nf.migu.cn/tVQLn0jAVv3sYPFiBbGnYENgkdq679fivxLFaRgCGllERMoRR8g%2Fp0oAQBtUxXumDIzrKoEhyr9tr8ZISxXCA6MMoZQLHDERrET%2FJEnUg8JntziOuAA6cO5KciGgAdib/1040080564111652256568684GVVlLa0ringtonemp4-cp-daily1_ringtonemp4-cp-daily.mp4?ec=2&flag=+&F=013015";
		console.log('🏀🏀🏀', bgm)

	})
</script>

<style>

</style>
