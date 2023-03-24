<template>
  <view class="content">
    <page-tabs :tabData="menuList" :defaultIndex="0"></page-tabs>
    <view class="search-list" :class="arrowDown && 'active'">
      <view v-for="(item, index) in searchList" :key="index"  :class="selectedData === item.code && 'checked'" >
        {{item.title}}
      </view>
      <view class="more"  @click="arrowhandle">
        <uni-icons :type="arrowDown ? 'top' : 'bottom'" size="10"></uni-icons>
      </view>
    </view>
    <view class="data-list">
      <data-list :dataList="dataList"></data-list>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageTabs from '@/components/page-tabs/page-tabs.vue'
import DataList from './components/data-list.vue'
export interface dataModel {
    img: string,
    title: string,
    status: number | string,
    inPiont: string,
    outPiont: string,
  }
 const dataList = ref<Array<dataModel>>([
    { img:"/static/mp-weixin/list_data.jpg",title: '1#冷机', status:1,inPiont:'7',outPiont:'7' },
    { img:"/static/mp-weixin/list_data.jpg",title: '2#冷机', status:2,inPiont:'7',outPiont:'7' },
    { img:"/static/mp-weixin/list_data.jpg",title: '3#冷机', status:1,inPiont:'7',outPiont:'7' },
  ])
 const selectedData = ref<number>(2)
 const arrowDown = ref<boolean>(false)
 const menuList = ref([
   { title: '实时数据', code:1 },
   { title: '电能数据', code:2 },
 ])
 const searchList = ref([
   { title: '全部', code:1 },
   { title: '主机', code:2 },
   { title: '阀门', code:3 },
   { title: '冷却泵', code:4 },
   { title: '冷却泵', code:5 },
   { title: '主机', code:6 },
   { title: '阀门', code:7 },
   { title: '冷却泵', code:8 },
   { title: '冷却泵', code:9 },
   { title: '主机', code:2 },
   { title: '阀门', code:3 },
   { title: '冷却泵', code:4 },
   { title: '冷却泵', code:5 },
   { title: '阀门', code:3 },
   { title: '冷却泵', code:4 },
   { title: '冷却泵', code:5 },
 ])
 const arrowhandle = ()=>{
  arrowDown.value = !arrowDown.value
 }
</script>
<style lang="scss">
 .tab{
   .tab-view{
     font-size: 32rpx;
     font-family: PingFangSC-Regular, PingFang SC;
     font-weight: 400;
     color: #666666;
     position: relative;
     height: 100rpx;
     line-height: 100rpx;
     flex:1;
     text-align: center;
   }
   .tab-view:nth-child(1)::after{
     width: 2rpx;
     height: 40rpx;
     background:#E5E5E5;
     content:' ';
     position: absolute;
     right:0;
     top:50%;
     transform: translate(-50%, -50%);
   }
 }
 .search-list.active{
   height: auto;
 }
 .search-list{
    display: flex;
    flex-wrap: wrap;
    padding:32rpx 32rpx 0 32rpx;
    overflow: hidden;
    // background:red;
    border:1px soild red;
    box-sizing: border-box;
    height: 89px;
    overflow: hidden;
    position: relative;
   view{
     padding:16rpx 24rpx;
     background: #F2F2F2;
     border-radius: 4rpx;
     font-size: 28rpx;
     color: #666666;
     margin:0 24rpx 24rpx 0;

   }
   .checked{
     background: rgba(38,129,255,0.1);
     color: #2681FF;
   }
   .more{
      position: absolute;
      background:#fff;
      right:0;
      bottom:0;
      padding:10rpx;
   }
 }
 .data-list{
  padding:0 32rpx;
 }

</style>
