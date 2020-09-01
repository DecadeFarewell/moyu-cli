<template>
  <div class="about">
    <div class="content">
      <el-form class="el-from" ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ComponetName extends Vue {
  form = {
    name: '',
    name1: '',
    age: '',
    hobby: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  };

  onSubmit() {
    console.log('submit!');
  }
}
</script>
<style lang="scss" scoped>
.about {
  font-size: 0.16rem;
  width: 100vw;
  height: 90vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  background: rgba($color: #ca7f7f, $alpha: 0.5);
  overflow: hidden;
  .content {
    width: 80%;
    height: 40%;
    margin: 0 auto;
    // margin-top: 700px;
    margin-top: 90%;
    background: #fff;
    .el-form {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  }
}
</style>
