<template>
  <div class="container" @click="test">
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../../static/daoqiao.jpg" style="width: 100%; height: 150px" alt="" />
          <!-- 1 -->
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/daoqiao.jpg" style="width: 100%; height: 150px" alt="" />
          <!-- 1 -->
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/daoqiao.jpg" style="width: 100%; height: 150px" alt="" />
          <!-- 1 -->
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/daoqiao.jpg" style="width: 100%; height: 150px" alt="" />
          <!-- 1 -->
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import {
  toRefs,
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
} from "vue";
export default {
  name: "app",
  setup() {
    let age = ref(123);
    function test() {
      age.value++;
    }
    return { test, age };
  },
};
</script>

<style lang="scss" scoped>
.container {
  .banner {
    width: 90vw;
    height: 300px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 12px;
  }
  //   .my-swipe .van-swipe-item {
  //     color: #fff;
  //     font-size: 20px;
  //     line-height: 150px;
  //     text-align: center;
  //     background-color: #39a9ed;
  //   }
}
</style>
