<template>
  <view class="electricSearch">
    <van-tabs
      class="electricclass"
      color="#2681FF"
      line-width="24"
      :active="electricactive"
      @change="electriconChange">
      <van-tab
        :title-style="titleStyle"
        :name="0"
        title="按日">
        <view class="dayclass">
          <view class="example-body">
            <view>起止日期</view>
            <uni-datetime-picker
              v-model="range"
              type="daterange"
              rangeSeparator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              start="2016-1-1"
              :end="endtime"
              @maskClick="maskClick" />
          </view>
          <view class="columnclass">
            <qiun-data-charts
              type="column"
              :opts="opts"
              :chartData="chartData" />
          </view>
        </view>
      </van-tab>
      <van-tab
        :title-style="titleStyle"
        :name="1"
        title="按月">
        内容 2
      </van-tab>
      <van-tab
        :title-style="titleStyle"
        :name="2"
        title="按年"></van-tab>
    </van-tabs>
    <view class="barclass"></view>
    <view>
      <view>用电量分类查询</view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const electricactive = ref<number>(0)
const titleStyle = ref('font-size: 32rpx;padding-top: 26rpx;')
const endtime = ref(new Date().getTime())
const opts = ref({
  padding: [10, 0, 0, 0],
  legend: {
    show: false,
  },
  xAxis: {
    disableGrid: true,
  },
  yAxis: {
    data: [
      {
        min: 0,
      },
    ],
  },
  extra: {
    column: {
      type: 'group',
      width: 30,
      linearType: 'custom',
      seriesGap: 5,
      customColor: ['#00C8F0', '#2681FF'],
    },
  },
})
const chartData = ref({
  categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
  series: [
    {
      name: '目标值',
      data: [35, 36, 31, 33, 13, 34],
    },
  ],
})
const electriconChange = (e: any) => {
  console.log(e)
}
const range = ref([])
const maskClick = (e: any) => {
  console.log(e)
}
</script>
<style lang="scss">
.electricclass {
  ::v-deep .van-tabs__wrap {
    height: 140rpx !important;
    color: red;
  }
  ::v-deep .van-tabs__nav {
    height: 112rpx !important;
  }
  .example-body {
    display: flex;
    align-items: center;
    gap: 16rpx;
  }
  .dayclass {
    padding: 32rpx 34rpx 30rpx 34rpx;
    .columnclass {
      width: 100%;
      height: 550rpx;
      margin-top: 40rpx;
    }
  }
}
.barclass {
  height: 8rpx;
  width: 100%;
  background: #f2f2f2;
  margin-top: 20rpx;
}
</style>
