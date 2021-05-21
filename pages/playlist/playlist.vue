<template>
  <view class="playlist-page">
    <template v-if="Object.keys(playList).length > 0">
      <view class="play-details">
        <view class="img-box">
          <u-image
            width="100%"
            height="100%"
            :src="playList.coverImgUrl"
          ></u-image>
          <view class="playCount">{{ playList.playCount | PlayNum }}</view>
        </view>
        <view class="txt-box">
          <view class="top">
            <view class="title">{{ playList.name }}</view>

            <view class="user">
              <u-avatar :src="playList.creator.avatarUrl" size="50"></u-avatar>
              <text class="name">{{ playList.creator.nickname }}</text>
            </view>
          </view>
          <view class="bootm">{{ playList.description || "" }}</view>
        </view>
      </view>
      <view class="songlist">
        <view
          class="item"
          v-for="(item, index) in playList.tracks"
          :key="index"
          @click="palysong(item)"
        >
          <view class="num">{{ index + 1 }}</view>
          <view class="songname">
            <view class="name">
              {{ item.name }}
              <template v-if="item.alia.length > 0">
                ({{ item.alia[0] }})
              </template>
            </view>
            <view class="sing">{{ item.ar[0].name }} - {{ item.al.name }}</view>
          </view>
          <view class="more"><u-icon name="more-dot-fill"></u-icon></view>
        </view>
      </view>
    </template>
  </view>
</template>

<script>
import { playlist } from "../../api/play.js";
import { checkMusic, songUrl } from "@/api/song.js";
export default {
  data() {
    return {
      playList: {},
      data: {
        id: 0,
      },
    };
  },

  onLoad(params) {
    this.data.id = params.id;
    setTimeout(() => {
      uni.startPullDownRefresh();
    }, 100);
  },
  onPullDownRefresh() {
    playlist(this.data).then((res) => {
      this.playList = res.playlist;
      setTimeout(() => {
        uni.stopPullDownRefresh();
      }, 100);
    });
  },
  
  methods: {
    palysong(item) {
      console.log(item);
      let id = item.id;
      checkMusic({ id }).then((res) => {
        if (res.success) {
          songUrl({ id }).then((res) => {
            let url = res.data[0].url;
            console.log(url);
          });
        } else {
          uni.showToast({
            icon: 'none',
            title: res.message,
            // duration: 2000,
          });
        }
      });
    },
  },
};
</script>

<style lang="less">
.playlist-page {
  .play-details {
    padding: 40rpx 20rpx;
    box-sizing: border-box;
    display: flex;

    background-color: #87ceeb;
    .img-box {
      width: 200rpx;
      height: 200rpx;
      border-radius: 24rpx;
      overflow: hidden;
      position: relative;
      .playCount {
        position: absolute;
        top: 10rpx;
        right: 10rpx;
        font-size: 24rpx;
        padding: 3rpx;
        box-sizing: border-box;
        border-radius: 8rpx;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    .txt-box {
      // flex: 1;
      width: calc(100% - 200rpx);
      // padding-left: 20rpx;
      padding: 10rpx 0 0 20rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .top {
        .user {
          margin-top: 10rpx;
          display: flex;
          align-items: center;
          .name {
            margin-left: 10rpx;
          }
        }
      }
      .bootm {
        width: 100%;
        font-size: 24rpx;
        overflow: hidden; /*超出部分隐藏*/
        white-space: nowrap; /*不换行*/
        text-overflow: ellipsis; /*超出部分文字以...显示*/
      }
    }
  }
  .songlist {
    padding: 0 20rpx;
    .item {
      display: flex;
      align-items: center;
      margin-top: 20rpx;

      .num {
        width: 100rpx;
        height: 100rpx;
        text-align: center;
        line-height: 100rpx;
        flex-shrink: 0;
      }
      .songname {
        flex: 1;
        overflow: hidden;
        padding-right: 30rpx;
        box-sizing: border-box;
        .name {
          overflow: hidden; /*超出部分隐藏*/
          white-space: nowrap; /*不换行*/
          text-overflow: ellipsis; /*超出部分文字以...显示*/
        }
        .sing {
          margin-top: 10rpx;
          font-size: 24rpx;
          overflow: hidden; /*超出部分隐藏*/
          white-space: nowrap; /*不换行*/
          text-overflow: ellipsis; /*超出部分文字以...显示*/
        }
      }
      .more {
        // width: 20rpx;
        flex-shrink: 0;
      }
    }
  }
}
</style>
