<template>
  <div>
    <div class="timing-nav-box">实时监控</div>
    <div>
      <van-tabs
        :active="defaulttabs"
        color="#2681FF">
        <van-tab title="冷源系统">内容 1</van-tab>
        <van-tab title="冷冻系统">内容 2</van-tab>
        <van-tab title="冷却系统">内容 3</van-tab>
        <van-tab title="冷却塔系统">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const defaulttabs = ref(0)
</script>
<style scoped lang="scss">
.timing-nav-box {
  padding: 48rpx 32rpx 32rpx 32rpx;
}
</style>
