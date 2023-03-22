<template>
  <view class="content">
    <img
      class="bgimages"
      src="../static/mp-weixin/login-bg.png" />
    <view class="text-area">
      <div class="text-name">高效机房智控平台</div>
      <div class="title-name-EN">Chiller Plant Intelligent Control System</div>
    </view>
    <div class="login-button">
      <button
        class="wxlogin"
        open-type="getPhoneNumber"
        @getphonenumber="getphonenumber">
        微信用户一键登录
      </button>
      <button
        class="phonelogin"
        plain
        @click="toLogin">
        切换手机号登陆
      </button>
      <div
        class="userargeement"
        @click="handlegrement">
        <img
          v-if="argeement"
          src="../static/mp-weixin/rij.png" />
        <img
          v-else
          src="../static/mp-weixin/rig.png" />
        <view class="user-text">已阅读并同意</view>
        <a href="###">《》</a>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const argeement = ref(false)
const handlegrement = () => {
  argeement.value = !argeement.value
}
const toLogin = () => {
  uni.navigateTo({
    url: '/pages/login/index',
  })
}
const getphonenumber = (e: any) => {
  console.log(e)
}
</script>

<style lang="scss">
.content {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .bgimages {
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
    margin-bottom: 34rpx;
  }
}
.user-text {
  font-size: 24rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #cccccc;
  line-height: 34rpx;
  margin-left: 16rpx;
}
.userargeement {
  display: flex;
  align-items: center;
  image {
    width: 40rpx;
    height: 40rpx;
  }
}
</style>
