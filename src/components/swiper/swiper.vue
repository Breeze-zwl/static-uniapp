<template>
  <view>
    <swiper
      :current="currentIndex"
      class="swiper"
      @change="swiperTab"
      indicator-dots="true"
      :duration="1000"
      :circular="true"
      :previous-margin="previous_next"
      :next-margin="previous_next">
      <swiper-item
        v-for="(item, index) in imageList"
        :key="index">
        <view class="swiper-item">
          <div
            class="swiper-itemImage"
            :class="currentIndex === index ? 'swiperItemActive' : ''">
            {{ item }}
          </div>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const currentIndex = ref(0) // 当前
const previous_next = ref('60rpx') // 前后边距
const imageList = ref([1, 2, 3, 4])
const swiperTab = (e: any) => {
  currentIndex.value = e.detail.current
}
</script>

<style>
.swiper {
  width: 100%;
  height: 880rpx;
  position: absolute;
}
.swiper-itemImage {
  position: relative;
  margin-top: 58rpx;
  width: 606rpx;
  height: 836rpx;
  border-radius: 4rpx;
  background-color: red;
}
.swiperItemActive {
  position: relative;
  transition: top 0.5s linear, height 0.5s linear;
  top: -34rpx;
  height: 880rpx;
  box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0, 0, 0, 0.1);
  border-radius: 4rpx;
}
</style>
