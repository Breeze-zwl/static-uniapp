<template>
  <view class="data-detail">
    <view class="d-title">
      <view class="name">1#冷机</view>
      <view class="val">
        <i class="t-node"></i>
        <h4 class="t-s-info">{{status ? '开机' : '故障'}}</h4>
      </view>
    </view>
    <view class="list-box">
      <cell  class="list-cell" v-for="(item,index) in list" :key="index">
        <view class="item">
          <view class="title">{{ item.title }}</view>
          <view class="value">{{ item.code }}</view>
        </view>
      </cell>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { detailModel } from './index.service'
 const status = ref<boolean>(true)
 const list = ref<Array<detailModel>>([
    { title:"开关状态",code: '关机'},
    { title:"本地远程状态",code: '远程'},
    { title:"制冷温度设定",code: '7.0°C'},
    { title:"制冷温度设定",code: '95.0%'},
    { title:"制冷温度设定",code: '21.41°C'},
    { title:"制冷温度设定",code: '21.41°C'},
    { title:"制冷温度设定",code: '21.41°C'},
  ])

</script>
<style lang="scss">
.data-detail{
  padding:0 32rpx;
}
 .d-title{
   display: flex;
   align-items: center;
   justify-content:space-between;
   height: 110rpx;
   border-bottom:2rpx solid #E5E5E5;
   padding:0 16rpx;
   .name{
    font-size: 40rpx;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
   }
   .val{
      font-size: 32rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #2681FF;
      color: #2681FF;
      display: flex;
      align-items: center;
      .t-s-info{
        color: #2681FF;
        padding-left:16rpx;
      }
      .t-node{
        width:12rpx;
        height:12rpx;
        border-radius: 50%;
        background: #2681FF;
        display: block;
      }
   }
   .error{
    color: #F05537;
   }
 }
 .list-box{
  margin-top:32rpx;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 18rpx;
 }
 .list-cell{
    margin-bottom:24rpx;
    border-radius: 4rpx;
    border: 2rpx solid #E5E5E5;
    width: 216rpx;
    height: 144rpx;
    overflow: hidden;
    box-sizing: border-box;
  .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: scroll;
    width: 100%;
    height: 100%;
    .title{
      height: 64rpx;
      background: #F2F2F2;
      line-height: 64rpx;
      font-size: 24rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #333333;
      width: 100%;
      text-align: center;
      overflow: hidden;
    }
    .value{
      text-align: center;
      font-size: 28rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      width: 100%;
      display: flex;
      flex: 1 1 auto;
      justify-content: center;
      align-items: center;
    }
  }
 }
</style>
