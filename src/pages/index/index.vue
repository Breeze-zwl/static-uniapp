<template>
  <view class="content">
    <img src="../static/mp-weixin/login-bg.png" />
    <view class="text-area">
      <div class="text-name">高效机房智控平台</div>
      <div class="title-name-EN">Chiller Plant Intelligent Control System</div>
    </view>
    <div class="login-button">
      <button class="wxlogin">微信用户一键登录</button>
      <button
        class="phonelogin"
        plain>
        切换手机号登陆
      </button>
    </div>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style lang="scss">
.content {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  image {
    z-index: -1;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
  }
}

.text-area {
  margin-top: 504rpx;
  margin-left: 64rpx;
  .text-name {
    font-size: 48rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 66rpx;
    color: #ffffff;
  }
  .title-name-EN {
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 27rpx;
  }
}
.login-button {
  margin-top: 366rpx;
  padding: 0 48rpx;
  .wxlogin {
    background: #2681ff;
    border-radius: 8rpx;
    margin-bottom: 16rpx;
    color: #ffffff;
  }
  .phonelogin {
    border-radius: 8rpx;
    opacity: 0.4;
    border: 2rpx solid #2681ff;
    color: #ffffff;
  }
}
</style>
