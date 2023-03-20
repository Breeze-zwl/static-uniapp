<template>
  <view class="content">
    <view class="text-area">
      <text class="text-name">高效机房智控平台</text>
      <text class="title-name-EN">Chiller Plant Intelligent Control System</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style lang="scss">
.content {
  background-color: pink;
  width: 100%;
  height: 100vh
}

.text-area {
.test-name {
    font-size: 48rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 66rpx;
  }
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
