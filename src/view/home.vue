<template>
    <router-view/>
    <van-tabbar v-model="active"  @change="onChange">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">查询</van-tabbar-item>
        <van-tabbar-item icon="friends-o">分享</van-tabbar-item>
        <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
</template>

<script>
import {toRefs, ref,reactive,onBeforeMount,onMounted,onBeforeUpdate,onUpdated} from "vue";
import { useRouter } from 'vue-router'
export default {
    name:"app",
    setup(){
    const router = useRouter()
    const active = ref(0);
    const onChange = (index)=>{
        console.log('index',index)
        console.log('router',router)
        if(index == 0){
            router.push('/home/index')
        } else if(index == 1){
            router.push('/home/search')
        } else if(index == 2){
            router.push('/home/share')
        } else if(index == 3){
            router.push('/home/setting')
        }
        // router.push('/home/test')
    }
    return { active, onChange};
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>