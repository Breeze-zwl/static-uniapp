<template>
  <view class="tab-container">
      <view class="tab-item-box">
          <block v-for="(item, index) in tabList" :key="index">
              <view
                class="tab-item"
                :id="'tab_' + index"
                :class="{ 'tab-item-active': activeIndex === index }"
                @click="tabClick(index)">
                 {{ item.title || '' }}
                  <view  class="underLine"></view>
               </view>
          </block>
      </view>
  </view>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref, watch } from 'vue'
export interface dataModel {
  title: string,
  code: number | string,
}
  const props = defineProps({
    tabData: {
      type: Array<dataModel>,
      default: () => []
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    config: {
      type: Object,
      default: () => {
        return {};
      }
    }
  })
  const tabList = ref<Array<dataModel>>([])
  const activeIndex = ref<number>(0)
  let defaultConfig = reactive({
    underLineWidth: 24,
    underLineHeight: 2,
    ifCenter:false,
  })
  const emit = defineEmits(['tabClick'])
  watch(() => props.tabData, (val) => {
      if(val){
        tabList.value = val;
      }
    },{ immediate: true })
  watch(() => props.defaultIndex, (val) => {
     activeIndex.value = val;
    },{ immediate: true })
  watch(() => props.config, (val) => {
    if(val){
      defaultConfig = { ...defaultConfig, ...val };
    }
  },{ immediate: true })

  const tabClick =( index:number )=> {
      activeIndex.value = index;
      emit('tabClick',index)
  }
</script>

<style lang="scss" scoped>
.tab-container {
  font-size: 32rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  height: 45px;
  line-height: 45px;
        .tab-item-box {
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: space-around;
          .tab-item {
            height: 100%;
            display: inline-block;
            text-align: center;
            position: relative;
            color: #666666;
            flex:1;
            &-active {
              color: #333333;
              .underLine{
                display: block;
              }
            }
          }
          .tab-item::after{
            width: 2rpx;
            height: 40rpx;
            background:#E5E5E5;
            position: absolute;
            right:0;
            content: '';
            top:50%;
            transform: translateY(-50%);
          }
        }
        .underLine {
          height: 2px;
          width: 25px;
          // width: 48rpx;
          // height: 8rpx;
          background-color: #2681FF;
          border-radius: 3px;
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          bottom: 0;
          display: none;
        }
}
</style>
