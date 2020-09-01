<template>
  <div class="about">
    <h1>This is an about page 1234</h1>
    <el-button>按钮</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ComponetName extends Vue {
  mounted() {
    // document.execCommand("SaveAs");
    document.execCommand('CreateLink', false, 'www.baidu.com');
    console.log(111);
  }
}
</script>
<style lang="scss" scoped>
.about {
  font-size: 0.16rem;
}
</style>
