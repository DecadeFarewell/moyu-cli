<template>
  <div class="about">
    <gx-dialog></gx-dialog>
    <span class="text">test the jquery</span>
    <el-button type="primary" @click="changeColor">变色</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class ComponetName extends Vue {
  changeColor() {
    $('.text').toggleClass('active');
  }
}
</script>
<style lang="scss" scoped>
.about {
  .active {
    color: chocolate;
  }
}
</style>
