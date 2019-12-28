<script>
export default {
  name: 'ExtLinks',
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {}
  },

  methods: {}
}
</script>

<template>
  <div>
    <el-row class="row-bg-max">
      <el-col :xs="12" :sm="12" :md="6" v-for="citem in data" :key="citem.name">
        <el-link :underline="false" v-bind:href="citem.link" type="primary">{{
          citem.name
        }}</el-link>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.el-divider__text {
  position: absolute;
  background-color: #f7fbfd;
  padding: 0 20px;
  color: #303133;
}
</style>
