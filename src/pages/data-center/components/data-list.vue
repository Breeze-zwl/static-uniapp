<template>
<view>
  <view ref="list" class="list">
    <scroll-view class="scroll-box" id="scroll-box" :style= "{ height: scrollheight+'px' }" scroll-y="true"  refresher-enabled="true" :refresher-triggered="isRefresher"
             refresher-background="#fff" 	enable-passive="true"
            @refresherrefresh="onRefresh" @refresherrestore="onRestore" @scrolltolower="onScroll">
        <empty-data v-if="state.isEmpty"></empty-data>
        <data-item :item="list"></data-item>
         <!-- 上滑加载的内容 -->
        <view class="load-more-view" v-if="!isRefresher && list.length > 0">
          <van-loading class="uni-load" v-if="!state.finished" size="12px">{{ state.loadingText }}</van-loading>
          <i v-else="state.finished">{{ state.loadingText }}</i>
        </view>
    </scroll-view>
  </view>
</view>
</template>
<script setup lang="ts">
import { defineProps, reactive, ref, watch, onMounted } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import EmptyData from '@/components/empty-data/empty-data.vue'
import DataItem from './data-item.vue'
import type { dataModel } from '../index.service'
import  { Debounced } from '@/common/util'
 const props = defineProps({
    dataList: {
      type: Array<dataModel>,
      default: () => []
    },
    scrollheight:{
      type: Number,
      default:200
    }
  })
  const isRefresher = ref<boolean>(false) //开启自定义下拉刷新，必须开启，不然下拉刷新不回去
  const list = ref<Array<any>>([])
  watch(() => props.dataList, (val) => {
      if(val){
        list.value = val;
      }
    },{ immediate: true })
  const state = reactive({
      page: 1,
      totle:20,
      loadingText:'',
      isEmpty:false,
      finished:false,
      iHeight:'340px' as string | number,
   })
  onLoad(() => {
    state.page = 1
    uni.pageScrollTo({
        scrollTop: 0
    });
    console.log('load','000')
    getData()
  })
  //下拉刷新出发
  const onRefresh =  Debounced.use(() => {
    console.log('下拉刷新','111')
    state.page = 1
    isRefresher.value = true //开启自定义下拉刷新
    getData()
  })
  const getData = ()=>{
      console.log(222)
      setTimeout(() => {
        let res = props.dataList
        list.value = isRefresher.value ? list.value : list.value.concat(res)
        console.log('x下滑',list.value)
        isRefresher.value = false
        state.isEmpty = list.value.length === 0
        state.finished = list.value.length >= state.totle
      }, 1000)
   }
    //滑动底部触发事件
    const onScroll = ()=>{
      console.log('xiauhua',state.finished)
        if(state.finished){
          state.loadingText = "没有更多了"
        }else{
          state.page ++
          state.loadingText = "加载中"
          getData()
        }
    }
    const onRestore = ()=>{
      isRefresher.value = false
      console.log('刷新动作复位了')
    }

</script>
<style lang="scss">
.load-more-view{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:12px;
  color:#333;
}
.uni-load .van-loading__text{
  font-size:12px;
  color:#333;
}
</style>
