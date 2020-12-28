<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>12312</h1>
  <div>
    <button v-for="(item,index) in checkItem" :key="index" @click="selectItem(index)">{{item}}:{{index}}</button>
  </div>
  <div>按下了{{selectNum}}</div>

</template>

<script lang="ts">
//  reactive
  import {toRefs, ref,reactive,onBeforeMount,onMounted,onBeforeUpdate,onUpdated} from "vue";
  interface DataProps{
    checkItem:string[];
    selectNum:string;
    selectItem:(index:number)=>void;
  }

  export default ({
    name:"app",
    setup() {
      console.log('开始创建组件--setup')
      const data :DataProps= reactive({
        checkItem:['按钮1','测试2','还好3'],
        selectNum:'',
        selectItem:(index:number)=>{
          data.selectNum = data.checkItem[index]
        }
      })
      const refData = toRefs(data)

      onBeforeMount(()=>{
        console.log('组件挂载到页面之前执行--onBeforeMount')
      })
      onMounted(()=>{
        console.log('组件挂载到页面之后执行--onMounted')
      })
      onBeforeUpdate(()=>{
        console.log('组件组件更新之前执行--onBeforeUpdate')
      })
      onUpdated(()=>{
        console.log('组件组件更新之后执行--onUpdated')
      })
      // const girls = ref(['测试1','测试2','测试3']);
      // const selectNum = ref("")
      // const selectNumFun =(index:number)=>{
      //   selectNum.value = girls.value[index]
      // }
      return {
        // girls,selectNum,selectNumFun
        ...refData
      }
    }
  })

</script>
