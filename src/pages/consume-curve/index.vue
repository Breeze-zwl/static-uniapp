<template>
  <view class="about">
    <view class="tips">
      <img src="~@/static/mp-weixin/consume-curve/yellowtips.png" />
      <view class="about-text">当前时间表不支持修改,请前往WEB进行设</view>
    </view>
    <view
      class="time-item-box"
      v-for="item in [1, 2, 3, 4, 5, 90, 6, 7, 8]"
      :key="item">
      <view class="time-time">
        <view class="time-date">星期一</view>
        <view class="time-clock">08:00 ~12:00</view>
      </view>
      <view class="time-zt">
        <view :class="isgegin ? 'greenpoint' : 'gaypoint'"></view>
        <view :class="isgegin ? 'time-isbegin' : 'time-gay'">{{ isgegin ? '启用' : '未启用' }}</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isgegin = ref(false)
</script>

<style lang="scss">
.about {
  .tips {
    width: 100%;
    height: 80rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 170, 50, 0.1);
    image {
      width: 40rpx;
      height: 40rpx;
    }
    .about-text {
      font-size: 28rpx;
      font-weight: 400;
      color: #666666;
      line-height: 40rpx;
      margin-left: 8rpx;
    }
  }
  .time-item-box {
    margin: 0 36rpx;
    height: 160rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2rpx solid #e5e5e5;
    .time-zt {
      display: flex;
      align-items: center;
      .greenpoint {
        width: 12rpx;
        height: 12rpx;
        border-radius: 50%;
        margin-right: 18rpx;
        background-color: #00b45a;
      }
      .gaypoint {
        width: 12rpx;
        height: 12rpx;
        border-radius: 50%;
        margin-right: 18rpx;
        background-color: #666666;
      }
      .time-isbegin {
        font-size: 28rpx;
        font-weight: 500;
        color: #00b45a;
        line-height: 40rpx;
      }
      .time-gay {
        font-size: 28rpx;
        font-weight: 500;
        color: #666666;
        line-height: 40rpx;
      }
    }
    .time-time {
      display: flex;
      flex-direction: column;
      .time-date {
        font-size: 32rpx;
        font-weight: 500;
        color: #333333;
        line-height: 44rpx;
      }
      .time-clock {
        font-size: 28rpx;
        font-weight: 400;
        color: #b2b2b2;
        line-height: 44rpx;
      }
    }
  }
}
</style>
