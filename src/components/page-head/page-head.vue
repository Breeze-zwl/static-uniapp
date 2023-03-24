<template name="page-head">
	<uni-section>
      <view class="header-nav">
        <uni-nav-bar left-icon="back" :title="title"  statusBar="true" color="#323233" @clickLeft="back"/>
      </view>
	</uni-section>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  const props = defineProps({
    title: {
    	type: String,
    	default: ""
    }
  })
  const back = ()=>{
    uni.navigateBack()
  }
</script>
<style lang="scss" scoped>
  .header-nav{
    // height: var(--status-bar-height);
    font-size: 36rpx;
    font-family: PingFangSC-Semibold, PingFang SC;
  }
</style>
