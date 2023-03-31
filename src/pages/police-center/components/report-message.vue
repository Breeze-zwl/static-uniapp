<template>
  <div>
    <div class="onpng">
      <img
        v-if="isOnline"
        src="~@/static/mp-weixin/police-center/online.gif" />
      <img
        v-else
        src="~@/static/mp-weixin/police-center/outline.png" />
    </div>
    <div
      v-if="isOnline"
      class="onlineclass">
      系统通讯正常
    </div>
    <div
      v-else
      class="outline">
      <div class="outline-text">已离线：45分钟</div>
      <div class="outline-call">请联系售后人员进行检修</div>
      <div class="outline-time">离线时间: 2019-07-31 08:</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const isOnline = ref(false)
</script>
<style lang="scss">
.onpng {
  margin-top: 68rpx;
  display: flex;
  justify-content: center;
  image {
    width: 568rpx;
    height: 568rpx;
  }
}
.onlineclass {
  margin-top: 84rpx;
  text-align: center;
  font-size: 40rpx;
  font-weight: 500;
  color: #00b45a;
  line-height: 56rpx;
}
.outline {
  margin-top: 84rpx;
  text-align: center;
  .outline-text {
    font-size: 40rpx;
    font-weight: 500;
    color: #f05537;
    line-height: 56rpx;
  }
  .outline-call {
    margin-top: 32rpx;
    font-size: 28rpx;
    font-weight: 500;
    color: #333333;
    line-height: 40rpx;
  }
  .outline-time {
    margin-top: 8rpx;
    font-size: 24rpx;
    font-weight: 400;
    color: #999999;
  }
}
</style>
