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
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        v-for="citem in data"
        :key="citem.name"
      >
        <h4>{{ citem.name }}</h4>
        <el-link :underline="false" v-bind:href="citem.link" type="primary">{{
          citem.desc
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
