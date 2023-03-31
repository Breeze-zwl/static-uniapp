<template>
  <page-meta :page-style="popupShow ? 'overflow: hidden;' : ''"></page-meta>
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
              :reshow="reshowChart == 0"
              type="column"
              :opts="opts"
              :chartData="daychartData" />
          </view>
        </view>
      </van-tab>
      <van-tab
        :title-style="titleStyle"
        :name="1"
        class="tab2chart"
        title="按月">
        <view class="mouthclass">
          <view>选择时间</view>
          <uni-data-select
            class="selclass"
            v-model="yearvalue"
            :localdata="yearrange"
            label="选择时间"
            @change="yearchange"></uni-data-select>
        </view>
        <view class="mouthcss">
          <view class="columnclass">
            <qiun-data-charts
              :reshow="reshowChart == 1"
              type="column"
              :opts="opts"
              :chartData="mouthchartData" />
          </view>
        </view>
      </van-tab>
      <van-tab
        :title-style="titleStyle"
        :name="2"
        title="按年">
        <view class="mouthcss">
          <view class="columnclass">
            <qiun-data-charts
              :reshow="reshowChart == 2"
              type="column"
              :opts="opts"
              :chartData="yearchartData" />
          </view>
        </view>
      </van-tab>
    </van-tabs>
    <view class="barclass"></view>
    <view class="electricbotom">
      <view class="electricbotomtitle">用电量分类查询</view>
      <van-cell
        title="统计方式"
        is-link
        custom-class="cellrootclass"
        class="cellrootclass"
        @click="handlecount"
        :value="chooselocal" />
      <van-cell
        title="选择时间"
        is-link
        :value="daterange"
        @click="handlechoosetime" />
      <view class="electricRes">
        <view class="sameStyle">
          <view class="grayclass">示数</view>
          <view class="whitclass">0.45</view>
        </view>
        <view class="sameStyle">
          <view class="grayclass">示数</view>
          <view class="whitclass">0.45</view>
        </view>
      </view>
      <van-button
        class="searchclass"
        type="primary"
        color="#2681FF"
        block>
        查询
      </van-button>
    </view>
    <van-popup
      :show="popupShow"
      position="bottom"
      round
      @close="onClosepopup">
      <div>
        <van-picker
          show-toolbar
          :visible-item-count="4"
          title="请选择"
          :columns="columns"
          @cancel="handleonCancel"
          @confirm="handleonConfirm" />
      </div>
    </van-popup>
    <van-calendar
      :show="dateshow"
      type="range"
      @close="onClose"
      @confirm="onConfirm"
      :max-range="730"
      color="#2681FF" />
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const electricactive = ref<number>(0)
const titleStyle = ref('font-size: 32rpx;padding-top: 26rpx;')
const popupShow = ref(false)
const columns = ref(['杭州', '宁波', '温州', '嘉兴', '湖州'])
const endtime = ref(new Date().getTime())
const chooselocal = ref('全部')
const dateshow = ref(false)
const daterange = ref<string>('开始日期 ⇀ 结束日期')
const yearvalue = ref<number>(0)
const reshowChart = ref<number>(0)
const yearrange = ref([
  { value: 0, text: '2021' },
  { value: 1, text: '2022' },
  { value: 2, text: '2023' },
  { value: 3, text: '2023' },
  { value: 4, text: '2023' },
  { value: 5, text: '2023' },
  { value: 6, text: '2023' },
])
const yearchange = (e: any) => {
  console.log(e)
}
const handleonCancel = (event: any) => {
  const { value, index } = event.detail
  console.log(value, index)
  chooselocal.value = value
  popupShow.value = false
}
const handleonConfirm = (event: any) => {
  const { value, index } = event.detail
  console.log(value, index)
  chooselocal.value = value
  popupShow.value = false
}
const formatDate = (date: any) => {
  date = new Date(date)
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}
const onConfirm = (event: any) => {
  console.log(event)
  const [start, end] = event.detail
  daterange.value = `${formatDate(start)} ⇀ ${formatDate(end)}`
  dateshow.value = false
}
const onClose = () => {
  dateshow.value = false
}
const onClosepopup = () => {
  popupShow.value = false
}
const handlechoosetime = () => {
  dateshow.value = true
}
const handlecount = () => {
  popupShow.value = true
}
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
const daychartData = ref({
  categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
  series: [
    {
      name: '目标值',
      data: [35, 36, 31, 33, 19, 34],
    },
  ],
})
const mouthchartData = ref({
  categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
  series: [
    {
      name: '目标值',
      data: [35, 36, 31, 33, 83, 34],
    },
  ],
})
const yearchartData = ref({
  categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
  series: [
    {
      name: '目标值',
      data: [35, 36, 31, 33, 43, 34],
    },
  ],
})
const electriconChange = (e: any) => {
  reshowChart.value = e.detail.name
  console.log(e, reshowChart.value)
}
const range = ref([])
const maskClick = (e: any) => {
  console.log(e)
}
</script>
<style lang="scss">
.electricSearch {
  .electricclass {
    .mouthclass {
      display: flex;
      align-items: center;
      margin-left: 32rpx;
      gap: 16rpx;
      .selclass {
        width: 556rpx;
        .uni-stat__select {
          height: 82rpx;
        }
      }
    }
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
      padding: 10rpx 34rpx;
    }
  }
  .barclass {
    height: 8rpx;
    width: 100%;
    background: #f2f2f2;
    margin-top: 20rpx;
  }
  .electricbotom {
    padding: 32rpx;
    .searchclass {
      display: flex;
      margin-top: 48rpx;
    }
    .electricbotomtitle {
      font-size: 32rpx;
      font-weight: 600;
      color: #333333;
      line-height: 48rpx;
      margin-bottom: 16rpx;
    }
    .electricRes {
      gap: 18rpx;
      display: flex;
      margin-top: 48rpx;
      display: flex;
      .sameStyle {
        width: 334rpx;
        height: 144rpx;
        border-radius: 4rpx;
        border: 2rpx solid #e5e5e5;
        text-align: center;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .grayclass {
          height: 64rpx;
          background: #f2f2f2;
          line-height: 64rpx;
        }
        .whitclass {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .columnclass {
    width: 100%;
    height: 550rpx;
    margin-top: 40rpx;
  }
  .mouthcss {
    padding: 0 34rpx 10rpx 34rpx;
  }
  ::v-deep .van-cell--clickable {
    padding-right: 0;
    padding-left: 0;
    height: 96rpx;
    align-items: center;
    border-bottom: 2rpx solid #ebedf0;
  }
}
</style>
