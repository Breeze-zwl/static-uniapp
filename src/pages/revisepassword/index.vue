<template>
  <div>
    <div class="forget-password-form">
      <div class="forget-password-phone">
        <img src="~@/static/mp-weixin/phone.png" />
        <div class="area-code">+86</div>
        <input
          class="forget-password-uni-input"
          type="number"
          placeholder="请输入手机号码" />
      </div>
      <div class="forget-password-phone-code">
        <img src="~@/static/mp-weixin/pic-code.png" />
        <input
          class="forget-password-phone-code-input"
          type="number"
          placeholder="请输入短信验证码" />
        <div class="handle-code-class">获取验证码</div>
      </div>
      <div class="forget-password-phone-code">
        <img src="~@/static/mp-weixin/pic-code.png" />
        <input
          class="forget-password-phone-code-input"
          type="number"
          placeholder="请输入图形验证码" />
        <div class="handle-code-class">
          <verifyCode @emitsVerify="emitsVerify"></verifyCode>
        </div>
      </div>
      <div class="forget-password-phone">
        <img src="~@/static/mp-weixin/password.png" />
        <input
          class="forget-password-uni-input"
          placeholder="请输入新密码" />
      </div>
      <div class="pass-tips">8～20位的大小写、数字、符号三种组合类</div>
      <button
        class="forget-password-login"
        @click="handleTohome">
        确定
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import verifyCode from '@/components/verify-code.vue'
import { reactive } from 'vue'
const handleTohome = () => {
  uni.reLaunch({
    url: '/pages/home-page/index',
  })
}
const emitsVerify = (value: any) => {
  console.log('value', value)
}
</script>
<style lang="scss">
.forget-password-form {
  padding: 0 48rpx;
  margin-top: 32rpx;
  image {
    width: 48rpx;
    height: 48rpx;
  }
  .forget-password-phone {
    display: flex;
    align-items: center;
    font-size: 32rpx;
    border-bottom: 2rpx solid #e5e5e5;
    height: 96rpx;
    .area-code {
      margin: 0 14rpx;
    }
    .forget-password-uni-input {
      flex: 1;
    }
  }
  .forget-password-phone-code {
    display: flex;
    align-items: center;
    font-size: 32rpx;
    border-bottom: 2rpx solid #e5e5e5;
    height: 96rpx;
    .forget-password-phone-code-input {
      margin-right: 16rpx;
      flex: 1;
    }
    .handle-code-class {
      color: #2681ff;
      font-size: 28rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      border-left: 2rpx solid #f2f2f2;
      height: 60rpx;
      line-height: 60rpx;
      padding-left: 14rpx;
    }
  }
  .pass-tips {
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #b2b2b2;
    line-height: 34rpx;
    text-align: center;
    margin-top: 14rpx;
  }
  .forget-password-login {
    width: 654rpx;
    height: 88rpx;
    background: #2681ff;
    border-radius: 8rpx;
    margin-top: 80rpx;
    color: #ffffff;
  }
}
</style>
