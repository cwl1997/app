<template>
  <div class="container">
    <tabbarHead class="head"></tabbarHead>
    <router-view class="content" style="height: 100vh; margin-bottom: 50px" />
    <!-- <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">查询</van-tabbar-item>
      <van-tabbar-item icon="friends-o">用户</van-tabbar-item>
    </van-tabbar> -->
    <tabbarFoot></tabbarFoot>
  </div>
</template>

<script lang="ts">
import {
  toRefs,
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
} from "vue";
import { useRouter } from "vue-router";
import tabbarHead from "../components/tabbarHead.vue";
import tabbarFoot from "../components/wl-tabbar/index.vue";
interface dataProp {}
export default {
  name: "app",
  components: { tabbarHead, tabbarFoot },
  setup() {
    const router = useRouter();
    const active = ref(0);
    const onChange = (index: number) => {
      console.log("index", index);
      console.log("router", router);
      // 目标路由
      let targetRouter =
        router.options.routes[1].path +
        "/" +
        router.options.routes[1].children[index].path;
      console.log(targetRouter);
      router.push(targetRouter);
    };
    return { active, onChange, router };
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.container {
  background: #292c31;
}
.head {
  position: fixed;
  top: 0;
  z-index: 1;
}
.content {
  margin-top: 50px;
}
</style>
