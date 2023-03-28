<template>
  <div>
    <div class="my-nav">
      <img src="~@/static/mp-weixin/home-page/plice-center.png" />
      <div class="username">{{ username }}</div>
      <div class="phone">{{ phoneNumb }}</div>
    </div>
    <div class="revisepass">
      <van-cell
        custom-class="mycellclass"
        title="修改密码"
        link-type="navigateTo"
        url="/pages/revisepassword/index"
        is-link />
      <van-cell
        title="清除缓存"
        is-link />
      <van-cell
        title="关于我们"
        is-link />
    </div>
    <van-button
      class="backlogin"
      plain
      type="info">
      退出登录
    </van-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const username = ref('王经理')
const phoneNumb = ref('183****6720')
</script>
<style lang="scss" scoped>
.my-nav {
  text-align: center;
  margin-top: 48rpx;
  image {
    width: 192rpx;
    height: 192rpx;
    border-radius: 50%;
  }
  .username {
    font-size: 32rpx;
    font-weight: 600;
    color: #333333;
    line-height: 48rpx;
    margin-top: 16rpx;
    margin-bottom: 8rpx;
  }
  .phone {
    font-size: 28rpx;
    font-weight: 500;
    color: #5f646d;
    line-height: 32rpx;
  }
}
.revisepass {
  margin-top: 48rpx;
  margin-left: 30rpx;
  margin-right: 30rpx;
  ::v-deep .van-cell__title {
    height: 70rpx;
  }
  ::v-deep .van-cell--clickable {
    display: flex;
    align-items: center;
  }
  ::v-deep .van-cell__title {
    line-height: 70rpx;
  }
}
.backlogin {
  position: absolute;
  bottom: 32rpx;
  text-align: center;
  width: 100%;
  ::v-deep .van-button {
    width: 85%;
  }
}
</style>
