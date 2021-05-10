<template>
    <div class="container">
        <tabbarHead></tabbarHead>
        <router-view/>
        <van-tabbar v-model="active"  @change="onChange">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">查询</van-tabbar-item>
            <van-tabbar-item icon="friends-o">用户</van-tabbar-item>
        </van-tabbar>
    </div>
    
</template>

<script lang="ts">
import {toRefs, ref,reactive,onBeforeMount,onMounted,onBeforeUpdate,onUpdated} from "vue";
import { useRouter } from 'vue-router'
import tabbarHead from '../components/tabbarHead.vue'
interface dataProp{
    
}
export default {
    name:"app",
    components:{tabbarHead},
    setup(){
    const router = useRouter()
    const active = ref(0);
    const onChange = (index:number)=>{
        console.log('index',index)
        console.log('router',router)
        // 目标路由
        let targetRouter = router.options.routes[1].path + '/'+ router.options.routes[1].children[index].path
        console.log(targetRouter)
        router.push(targetRouter)
    }
    return { active, onChange};
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>