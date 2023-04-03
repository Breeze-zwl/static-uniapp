<template>
  <view>
    <view class="weibaonav">
      <view class="loki">
        <view class="timetext">维保时间：</view>
        <view class="weibaotime">2020-03-12</view>
      </view>
      <view class="loki">
        <view class="weibao-person">维保人：</view>
        <view class="weibaoname">李长生</view>
      </view>
    </view>
    <view>
      <view class="jianyi">优化建议</view>
      <view class="imagebox">
        <img
          src="~@/static/mp-weixin/emptyimage.png"
          alt=""
          srcset="" />
      </view>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.weibaonav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32rpx 48rpx;
  border: 2rpx solid #e5e5e5;
  .loki {
    display: flex;
  }
  .timetext {
    font-size: 28rpx;
    font-weight: 400;
    color: #666666;
    line-height: 40rpx;
  }
  .weibaotime {
    font-size: 28rpx;
    font-weight: 500;
    color: #333333;
    line-height: 40rpx;
  }
  .weibao-person {
    font-size: 28rpx;
    font-weight: 400;
    color: #666666;
    line-height: 40rpx;
  }
  .weibaoname {
    font-size: 28rpx;
    font-weight: 500;
    color: #333333;
    line-height: 40rpx;
  }
}
.jianyi {
  font-size: 32rpx;
  font-weight: 600;
  color: #333333;
  line-height: 48rpx;
  padding: 32rpx 48rpx;
}
.imagebox {
  width: 686rpx;
  height: 512rpx;
  border-radius: 4rpx;
  border: 2rpx solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  image {
    width: 272rpx;
    height: 272rpx;
  }
}
</style>
