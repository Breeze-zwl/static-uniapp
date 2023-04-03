<template>
<view>
  <view ref="list" class="list">
    <cell class="list-cell" v-for="(item,index) in list" :key="index" >
        <view class="images-box" @click.native="onItemClick(item)">
          <img class="images" :src="item.img"/>
        </view>
        <view class="data-right" @click.native="onItemClick(item)">
          <view class="title">
            <h4 class="t-name">{{item.title}}</h4>
            <h3 class="t-status" :class="{ 'error': item.status !== 1 }">
              <i class="t-node"></i>
              <h4 class="t-s-info">{{item.status === 1 ? '开机' : '故障'}}</h4>
            </h3>
          </view>
          <view class="detail">
            <h3 class="datail-info mb">
              <span class="d-name">出水温度：</span>
              <view class="d-val">
                <view class="d-val-l">{{item.inPiont}}</view>
                <i class="d-val-r"> ℃</i>
              </view>

            </h3>
            <h3 class="datail-info">
              <span class="d-name">进水温度：</span>
              <view class="d-val">
                <view class="d-val-l">{{item.inPiont}}</view>
                <i class="d-val-r"> ℃</i>
              </view>
            </h3>
          </view>
        </view>
    </cell>
  </view>
</view>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref, watch } from 'vue'
import type { dataModel } from '../index.service'
 const props = defineProps({
   item: {
      type: Array<dataModel>,
      default: () => []
    },
  })
  const list = ref<Array<dataModel>>([])
  watch(() => props.item, (val) => {
      if(val){
        list.value = val;
      }
    },{ immediate: true })
  const onItemClick = (item:dataModel)=>{
      uni.navigateTo({
        url: `/pages/data-detail/index`
      });
  }
</script>

<style lang="scss">
.list{
  .list-cell{
    display: flex;
    padding:32rpx 32rpx;
    height: 240rpx;
    background: #FFFFFF;
    box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0,0,0,0.1);
    border-radius: 4rpx;
    box-sizing: border-box;
    margin-bottom:32rpx;
    .images-box{
      width: 280rpx;
      height: 170rpx;
      margin-right:64rpx;
     .images{
       max-width: 280rpx;
       max-height: 180rpx;
       object-fit: contain;
     }
    }
    .data-right{
      display: flex;
      flex-direction: column;
      width: 280rpx;
      height: 180rpx;
    }
    .title{
      margin-bottom: 32rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      view{
        max-width: 120rpx;
        font-size: 32rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
      }
       .t-name{
          color: #333333;
          line-height: 44rpx;
          height:44rpx;
          overflow: hidden;
        }
        .t-status{
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
          .t-s-info{
            color: #F05537;
          }
          .t-node{
            background: #F05537;
          }
          
        }
    }
    .datail-info{
      display: flex;
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      .d-name,.d-val{
        flex:1;
        height:40rpx;
        overflow: hidden;
      }
      .d-val{
        display: flex;
      }
      .d-val-l{
        max-width:76%;
        overflow: hidden;
      }
      .d-val-r{
        padding-left:4rpx;
      }
    }
    .mb{
      margin-bottom:8rpx;
    }
  }
}
</style>
