<template>
  <div>
    <div class="timing-nav-box">
      <div class="timing-nav">
        <div class="box-flow">
          <div>群控就绪</div>
          <div>未就绪</div>
        </div>
        <div class="box-flow">
          <div>在线</div>
          <div>
            <van-switch
              :checked="checked"
              @change="onChange"
              size="44rpx"
              inactive-color="#C2D9FC" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <div>
      <van-tabs
        :active="defaulttabs"
        type="card">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const defaulttabs = ref(0)
const checked = ref(false)
const onChange = (data: any) => {
  console.log(123123123, data)
  checked.value = data.detail
}
</script>
<style scoped lang="scss">
.timing-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.timing-nav-box {
  padding: 48rpx 32rpx 32rpx 32rpx;
  ::v-deep .van-switch {
    display: flex;
  }
}
.box-flow {
  display: flex;
  align-items: center;
}
</style>
