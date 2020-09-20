<template>
  <div id="September" @touchmove="touchmove">
    <div class="main commBg">
      <div class="Title"></div>

      <div class="Abox"></div>
      <div class="Bbox"></div>
      <div class="Cbox"></div>
      <div class="Dbox"></div>

      <div
        ref="ball"
        class="basketball"
        @touchstart="touchstart"
        @touchend="touchend"
        @click="click"
      ></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class ComponetName extends Vue {
  click() {
    console.log('click: ', this);
  }

  // 拖动开始
  touchstart(e: any) {
    console.log('拖动开始');
    console.log(this);
  }

  touchmove(e: any) {
    console.log('e: ', e);
    const { clientX, clientY } = e.touches[0];
    // console.log('clientX, clientY: ', clientX, clientY, this);
    // const ballEl = _self.$refs.ball as any;
    // ballEl.style.left = `${clientX}px`;
    // ballEl.style.top = `${clientX}px`;
  }

  // 拖动结束
  touchend() {
    console.log('拖动结束');
  }
  mounted() {
    console.log('created: ', this);
  }
}
</script>
<style lang="scss" scoped>
#September {
  position: absolute;
  top: 0;
  width: 100%;
  bottom: 0;
  .main {
    width: 100%;
    height: 100vh;
    .Title {
      position: absolute;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
    .Title {
      height: 2.98rem;
      width: 6.79rem;
      top: 6%;
      left: 50%;
      transform: translateX(-50%);
      background-size: 100%;
    }
    .Abox,
    .Bbox,
    .Cbox,
    .Dbox {
      position: absolute;
      height: 3.22rem;
      width: 2.21rem;
      background-size: 100%;
      border: 1px solid rgb(53, 238, 78);
    }
    .Abox {
      bottom: 7.3rem;
      left: 0.64rem;
    }
    .Bbox {
      bottom: 7.3rem;
      right: 0.64rem;
    }
    .Cbox {
      bottom: 2.91rem;
      left: 0.64rem;
    }
    .Dbox {
      bottom: 2.91rem;
      right: 0.64rem;
    }
    .basketball {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: aqua;
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
