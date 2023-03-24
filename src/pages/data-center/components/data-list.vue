<template>
<view>
  <view ref="list" class="list">
    <scroll-view style="height: 340px;" scroll-y="true" :scroll-top="scrollTop" refresher-enabled="true" :refresher-triggered="triggered"
             refresher-background="#fff" @refresherpulling="onPulling"
            @refresherrefresh="onRefresh" @refresherrestore="onRestore" @refresherabort="onAbort">
        <empty-data v-if="state.isEmpty"></empty-data>
        <cell v-for="(item,index) in list" :key="index">
          <data-item :item="item"></data-item>
        </cell>
    </scroll-view>
  </view>
</view>
</template>
<script setup lang="ts">
import { defineProps, reactive, ref, onMounted, watch } from 'vue'
import EmptyData from '@/components/empty-data/empty-data.vue'
import DataItem from './data-item.vue'
export interface dataModel {
    img: string,
    title: string,
    status: number | string,
    inPiont: string,
    outPiont: string,
  }
 const props = defineProps({
    dataList: {
      type: Array<dataModel>,
      default: () => []
    },
  })
  const mescrollRef = ref<HTMLElement>()
  const scrollTop = ref(100)
  const triggered = ref(false)
  const list = ref<Array<any>>([])
  watch(() => props.dataList, (val) => {
      if(val){
        list.value = val;
      }
    },{ immediate: true })
  const state = reactive({
      resultList: [],
      page: 1,
      mescroll:null,
      isInit:true,
      isEmpty:false
   })
    const onRefresh = ()=>{
      console.log(222);
      triggered.value = false
    }
    const onRestore = ()=>{
      state.page ++ 
      list.value.push(list)
    }
    const onAbort = ()=>{
      console.log(444);
    }
    /**
     * 获取搜索数据
     */
    const onPulling = ()=>{
      // const { data: res } = await getSearchResult({
      //   p: state.page
      // });
      console.log(111)
      let res = props.dataList
      if (state.page === 1) {
        list.value = res;
      } else {
        list.value = [...list.value, ...res];
      }
      if (list.value.length === 0) {
        state.isEmpty = true;
      }
    }
    /**
     * item 点击事件
     */
    const onItemClick = (item:any)=>{
      uni.navigateTo({
        url: `/subpkg/pages/blog-detail/blog-detail?author=${item.author}&articleId=${item.id}`
      });
    }

</script>

<style lang="scss">
</style>
