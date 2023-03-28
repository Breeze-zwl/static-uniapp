<template>
  <div>
    <page-tabs
      :tabData="menuList"
      :defaultIndex="activeindex"
      @tabClick="handletabClick"></page-tabs>
    <div class="historyclass">
      <van-tabs
        type="card"
        color="#2681FF"
        :active="tabactiveindex"
        @change="handletabhistory">
        <van-tab
          title="实时"
          :name="0"></van-tab>
        <van-tab
          title="历史"
          :name="1"></van-tab>
      </van-tabs>
      <div style="height: 32rpx"></div>
      <div
        class="listclass"
        v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]"
        :key="item">
        <img
          class="kimagehs"
          src="~@/static/mp-weixin/home-page/scycle.png" />
        <div>
          <div class="kofirsttitle">
            <div class="text-jiji">1#冷冻崩</div>
            <div class="zhuangtaired">
              <div class="pointyuit"></div>
              <div>紧急</div>
            </div>
          </div>
          <div class="timeclasssa">
            <div class="lpoiuyt">状态：</div>
            <div class="plkiuy">1#冷机故障</div>
          </div>
          <div class="timeclasssa">
            <div class="lpoiuyt">时间：</div>
            <div class="plkiuy">2022-07-31 08:00:00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const activeindex = ref<number>(0)
const tabactiveindex = ref<number>(0)
const menuList = ref([
  { title: '故障列表', code: 1 },
  { title: '通讯记录', code: 2 },
])
const handletabClick = () => {}
const handletabhistory = () => {}
</script>
<style lang="scss">
.historyclass {
  margin-top: 32rpx;
  padding: 0 32rpx;
  padding-bottom: 32rpx;
  .listclass {
    display: flex;
    align-items: center;
    gap: 24rpx;
    padding: 28rpx 32rpx 20rpx 0;
    border-bottom: 2rpx solid #e5e5e5;
    .timeclasssa {
      display: flex;
      .lpoiuyt {
        font-weight: 400;
        display: flex;
      }
      .plkiuy {
        font-size: 28rpx;
        font-weight: 500;
        color: #333333;
      }
    }
    .kimagehs {
      width: 264rpx;
      height: 192rpx;
    }
    .kofirsttitle {
      display: flex;
      justify-content: space-between;
      .text-jiji {
        font-size: 32rpx;
        font-weight: 500;
        color: #333333;
      }
      .zhuangtaired {
        color: #f05537;
        display: flex;
        align-items: center;
        .pointyuit {
          height: 16rpx;
          width: 16rpx;
          border-radius: 50%;
          margin-right: 18rpx;
          background: #f05537;
        }
      }
    }
  }
}
</style>
