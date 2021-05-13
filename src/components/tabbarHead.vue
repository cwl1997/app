<template>
  <div class="title">廖狗的剧本杀店</div>
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
  setup() {},
};
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  height: 50px;
  background: #000;
  //   color: #fff;
  font-size: 24px;
  color: #fafafa;
  letter-spacing: 0;
  text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666,
    0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
  line-height: 50px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
