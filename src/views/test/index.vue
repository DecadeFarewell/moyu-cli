<template>
  <div id="September" @touchmove="touchmove">
    <div class="main commBg">
      <div class="Title"></div>

      <div class="Abox" ref="basketA"></div>
      <div class="Bbox" ref="basketB"></div>
      <div class="Cbox" ref="basketC"></div>
      <div class="Dbox" ref="basketD"></div>

      <div ref="ball" class="basketball" @touchstart="touchstart" @touchend="touchend"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class September extends Vue {
  mounted() {
    // 记录球的大小
    this.initBall();
    // 计算出四个篮筐的位置和大小
    this.initBasket();
    // 获取容器的尺寸
    this.initContainerSize();
  }

  initContainerSize() {
    const { offsetWidth, offsetHeight } = this.$el as any;
    this.container = { offsetWidth, offsetHeight };
  }

  initBall() {
    this.ball = this.$refs.ball as any;
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = this.ball;
    console.log('offsetWidth, offsetHeight: ', offsetWidth, offsetHeight);
    this.ballOffset.width = offsetWidth;
    this.ballOffset.height = offsetHeight;

    // const { offsetLeft, offsetTop } = e.touches[0];
    this.startPosition = {
      x: offsetLeft + offsetWidth / 2,
      y: offsetTop + offsetHeight / 2,
    };
  }

  initBasket() {
    const { basketA, basketB, basketC, basketD } = this.$refs;
    this.baskets = this.initBasketPistion({ basketA, basketB, basketC, basketD });
    console.log('this.baskets: ', this.baskets);
  }

  initBasketPistion(baskets: any) {
    const keys = Object.keys(baskets);
    const offsetInfos: any = {};
    keys.forEach((item) => {
      const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = baskets[item];
      offsetInfos[item] = {
        offsetWidth,
        offsetHeight,
        offsetLeft,
        offsetTop,
      };
    });
    return offsetInfos;
  }

  // 顶层容器大小
  container = {
    offsetWidth: 0,
    offsetHeight: 0,
  };

  ball: any = null;

  // 球的大小
  ballOffset = {
    width: 0,
    height: 0,
  };

  // 开始拖动的位置
  startPosition = {
    x: 0,
    y: 0,
  };

  // 蓝框的位置大小信息
  baskets: any = {
    basketA: {},
    basketB: {},
    basketC: {},
    basketD: {},
  };

  // 判断在不在篮筐内

  // 拖动开始
  touchstart(e: any) {
    // console.log('拖动开始');
    // const { clientX, clientY } = e.touches[0];
    // this.startPosition = {
    //   x: clientX,
    //   y: clientY,
    // };
  }

  // 持续拖动
  touchmove(e: any) {
    let { clientX, clientY } = e.touches[0];
    const { offsetWidth, offsetHeight } = this.container;
    // console.log('clientX, clientY: ', clientX, clientY, this.$refs.ball);
    if (clientX <= 0) {
      clientX = 0;
    }
    if (clientX >= offsetWidth) {
      clientX = offsetWidth;
    }
    if (clientY <= 0) {
      clientY = 0;
    }
    if (clientY >= offsetHeight) {
      clientY = offsetHeight;
    }

    console.log(' clientX, clientY: ', clientX, clientY);

    this.ball.style.left = `${clientX}px`;
    this.ball.style.top = `${clientY - this.ballOffset.height / 2}px`;
  }

  // 拖动结束
  touchend(e: any) {
    const { clientX, clientY } = e.changedTouches[0];
    // const [basket, isContain] = this.inBaseketArea(clientX, clientY);
    const select = this.isInBasket(clientX, clientY);

    if (select) {
      // 判断选择的答案是否正确
      const { basket } = select[0];
      this.ballDrop(basket);
    } else {
      this.toOrigin();
    }
  }

  // 小球从选中篮筐落下
  ballDrop(basket: any) {
    const { offsetWidth, offsetLeft, offsetHeight, offsetTop } = basket;
    console.log('offsetTop: ', offsetTop);
    this.ball.style.left = `${offsetLeft + offsetWidth / 2}px`;
    this.ball.style.top = `${offsetTop}px`;

    setTimeout(() => {
      this.ball.style.top = `${offsetTop + 10 + offsetHeight * 0.5}px`;
      this.ball.classList.add('dropping');
    }, 500);
    setTimeout(() => {
      this.ball.classList.remove('dropping');
    }, 1000);
  }

  // x,y坐标所在的位置是不是在篮筐内
  isInBasket(x: number, y: number) {
    const baskets = this.baskets;
    const keys = Object.keys(this.baskets);

    let res = keys.map((item) => {
      return this.isInBasketArea(baskets[item], x, y);
    });
    res = res.filter((item) => item.isContain);

    return res.length ? res : null;
  }

  // 判断x y 坐标是否在某个篮筐范围之中
  isInBasketArea(basket: any, x: number, y: number) {
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = basket;
    let matchedBasket = null;
    let isContain = false;

    if (
      x >= offsetLeft &&
      x <= offsetLeft + offsetWidth &&
      y >= offsetTop &&
      y <= offsetTop + offsetHeight
    ) {
      matchedBasket = basket;
      isContain = true;
    }

    return {
      basket: matchedBasket,
      isContain,
    };
  }

  // 回到起始的位置
  toOrigin() {
    const { x, y } = this.startPosition;
    this.ball.style.left = `${x}px`;
    this.ball.style.top = `${y - this.ballOffset.height / 2}px`;
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
      margin-left: -0.75rem;
      &.dropping {
        transition: top 0.5s ease-in;
      }
    }
  }
}
</style>
