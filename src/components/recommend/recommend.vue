<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrapper">
        <div class="slider-content">
          <slider>
            <div v-for="(item,index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
      </div>
      <div class="music-list">
        <h1 class="list-title">热门歌曲推荐</h1>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getRecommend } from 'api/recommend'
import { CODE_OK } from 'api/config'
import Slider from 'base/slider/slider'

export default {
  data () {
    return {
      recommends: []
    }
  },
  created () {
    getRecommend().then((res) => {
      if (res.code === CODE_OK) {
        this.recommends = res.data.slider
      }
    }).catch((err) => {
      console.log(err)
    })
  },
  components: {
    Slider
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .recommend
    display: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        height: 0
        width: 100%
        padding-top: 40%
        overflow: hidden
        .slider-content
          position: absolute
          left: 0
          top: 0
          width: 100%
          height: 100%
    .music-list
      .list-title
        height: 65px
        line-height: 65px
        text-align: center
        color: $color-theme
        font-size: $font-size-medium
</style>
