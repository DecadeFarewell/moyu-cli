<template>
  <div>
    <h2>test</h2>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ComponetName extends Vue {
  mounted() {
    this.$msgbox('123', 'msgbox');
  }
}
</script>
<style lang="scss" scoped></style>
