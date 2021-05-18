<template>
  <div class="tabber-container">
    <!-- <div @click="clickTest">测试点击</div> -->
    <div
      class="tabber-item"
      v-for="(item, index) in routers"
      :key="index"
      @click="onChange(index, item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  props: {
    testID: {
      type: String,
    },
    router: {
      type: Object,
    },
  },
  setup(props) {
    const router = useRouter();
    const routers = router.options.routes[1].children;
    const onChange = (index, item) => {
      // console.log(index, item);
      // console.log("index", index);
      console.log("router", router.options);
      // // 目标路由
      let targetRouter =
        router.options.routes[1].path +
        "/" +
        router.options.routes[1].children[index].path;
      console.log(targetRouter);
      router.push(targetRouter);
    };
    return { onChange, router, routers };
  },
};
</script>

<style lang="scss" scoped>
.tabber-container {
  width: 100vw;
  height: 70px;
  background: #000;
  position: fixed;
  bottom: 0;
  z-index: 5000;
  display: flex;
  .tabber-item {
    width: 25%;
    height: 70px;
    background: #f00;
  }
}
</style>
