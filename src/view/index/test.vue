<template>
  <div class="container" @click="test">
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../../static/daoqiao.jpg" style="width: 100%; height: 150px" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/daoqiao.jpg" style="width: 100%; height: 150px" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/daoqiao.jpg" style="width: 100%; height: 150px" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/daoqiao.jpg" style="width: 100%; height: 150px" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="content-container">
      <div class="script-item">
        <img src="../../static/wind-1.png" alt="" />
      </div>
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
  padding-top: 10px;
  padding-left: 12px;
  padding-right: 12px;
  .banner {
    width: 100%;
    height: 150px;
    // height: 300px;
    overflow: hidden;
    margin: 0 auto;
    border: 1px solid #fff;
    // 解决移动端 滚动时出现border-radius 失效的问题
    border-radius: 30px;
    overflow: hidden;
    transform: translateY(0);
    .my-swipe {
      border-radius: 30px;
      overflow: hidden;
    }
  }
  .content-container {
    width: 95vw;
    height: 120px;
    // background: #cbf3f0;
    // border: 1px solid #000;
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    align-items: center;
    .script-item {
      width: 80vw;
      height: 120px;
      // border: 1px solid #000;
      background: #3b3f47;
      padding: 10px;
      position: relative;
      img {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 45vw;
        height: 100px;
      }
    }
  }
}
</style>
