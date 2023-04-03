<template>
  <div>
    <div class="login-box">
      <div class="login-text">登录/注册</div>
      <div class="login-desc">欢迎使用海尔高效机房智控平台</div>
    </div>
    <div class="form-box">
      <uni-easyinput
        class="account"
        prefixIcon="person"
        v-model="account"
        trim="all"
        :styles="styles"
        :inputBorder="false"
        placeholder="请输入手机号码/账号"></uni-easyinput>
      <uni-easyinput
        class="password"
        prefixIcon="locked"
        v-model="password"
        trim="all"
        type="password"
        :inputBorder="false"
        placeholder="请输入登录密码">
        <slot name="prefixIcon"></slot>
      </uni-easyinput>
      <div
        v-if="successlogin"
        class="errormsg">
        *请输入正确的用户名或密码
      </div>
      <button
        class="login-button"
        @click="login">
        登 录
      </button>
      <div
        class="miss-password"
        @click="forgetpassword">
        忘记密码
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const account = ref()
const password = ref()
const successlogin = ref(false)
const styles = ref({
  borderBottom: '2rpx solid red',
})
const login = () => {
  successlogin.value = true
  uni.reLaunch({
    url: '/pages/home-page/index',
  })
}
const forgetpassword = () => {
  uni.navigateTo({
    url: '/pages/forget-password/index',
  })
}
</script>
<style lang="scss">
.login-box {
  margin-top: 80rpx;
  margin-left: 48rpx;
  .login-text {
    font-size: 48rpx;
    font-weight: 500;
    color: #333333;
    line-height: 66rpx;
    margin-bottom: 16rpx;
  }
  .login-desc {
    font-size: 28rpx;
    font-weight: 400;
    color: #666666;
    line-height: 40rpx;
  }
}
.form-box {
  margin-top: 158rpx;
  padding: 0 48rpx;
  .uni-easyinput {
    border-bottom: 2rpx solid #e5e5e5;
    margin-bottom: 14rpx;
  }
  .uni-easyinput__content {
    height: 96rpx;
  }
  .uni-easyinput__content-input {
    font-size: 32rpx;
  }
  .login-button {
    margin-top: 80rpx;
    background-color: #2681ff;
    color: #fff;
  }
  .miss-password {
    margin-top: 32rpx;
    font-size: 28rpx;
    font-weight: 400;
    color: #666666;
    line-height: 40rpx;
    text-align: right;
  }
}
.errormsg {
  font-size: 24rpx;
  font-weight: 400;
  color: #f05537;
  line-height: 34rpx;
  margin-left: 50rpx;
}
</style>
