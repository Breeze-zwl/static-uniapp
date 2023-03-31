<template>
  <view>
    <page-tabs
      :tabData="consumeMenuList"
      :defaultIndex="consumeActiveindex"
      @tabClick="handletabClickconsume"></page-tabs>
    <view class="consumetabclass">
      <van-tabs
        type="card"
        color="#2681FF"
        :active="consumetabactiveindex"
        @change="handletabhistoryconsume">
        <van-tab
          title="本周"
          :name="0"></van-tab>
        <van-tab
          title="本月"
          :name="1"></van-tab>
        <van-tab
          title="本年"
          :name="1"></van-tab>
      </van-tabs>
    </view>
    <view class="averge-text">
      <view class="point"></view>
      <view>平均COP:5.2</view>
    </view>
    <view class="zhexian">
      <qiun-data-charts
        :opts="opts"
        type="line"
        :chartData="chartData" />
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onReady } from '@dcloudio/uni-app'
const consumeActiveindex = ref<number>(0)
const consumeMenuList = ref([
  { title: 'COP趋势', code: 0 },
  { title: '耗电趋势', code: 1 },
])
const cHeight = ref(0)
onReady(() => {
  cHeight.value = uni.upx2px(1200)
})
const opts = ref({
  padding: [15, 15, 0, 15],
  legend: {
    show: true,
    position: 'bottom',
    float: 'right',
  },
  extra: {
    tooltip: {
      showCategory: true,
      borderRadius: 4,
      fontColor: '#666666',
      legendShape: 'circle',
      borderWidth: 4,
      borderColor: '#000000',
      borderOpacity: 0.2,
      bgColor: '#FFFFFF',
      bgOpacity: 1,
      boxPadding: 14,
      showArrow: false,
      fontSize: 16,
    },
  },
  xAxis: {
    calibration: true,
  },
  yAxis: {
    dashLength: 4,
    splitNumber: 2,
    data: [
      {
        min: 0,
      },
    ],
  },
})
const chartData = ref({
  categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
  series: [
    {
      name: 'COP',
      data: [350, 80, 250, 370, 400, 200],
      color: '#2681FF',
    },
  ],
})
const consumetabactiveindex = ref<number>(0)
const handletabClickconsume = (e: any) => {
  console.log(e)
}
const handletabhistoryconsume = (e: any) => {
  console.log(e)
}
</script>
<style lang="scss">
.consumetabclass {
  margin-top: 32rpx;
}
.zhexian {
  width: 100%;
  height: 900rpx;
  margin-top: 48rpx;
}
.averge-text {
  display: flex;
  align-items: center;
  justify-self: start;
  font-size: 32rpx;
  font-weight: 400;
  color: #333333;
  line-height: 44rpx;
  padding: 0 32rpx;
  margin: 48rpx 0;
  gap: 14rpx;
  .point {
    width: 16rpx;
    height: 16rpx;
    border-radius: 50%;
    background-color: #2681ff;
  }
}
</style>
