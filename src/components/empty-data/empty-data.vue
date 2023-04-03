<template>
  <view class="empty-data-cocntainer">
    <!-- <image src="~@/static/list_data.jpg" class="img" /> -->
    <view class="txt">暂无数据</view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.empty-data-cocntainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35%;
  .img {
    width: 64px;
    height: 64px;
  }
  .txt {
    margin-top: 30rpx;
    color: #666;
    font-size: 28rpx;
  }
}
</style>
