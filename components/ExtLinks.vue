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
  <el-row class="row-bg-max">
    <el-col :xs="12" :sm="12" :md="6" v-for="citem in data" :key="citem.name">
      <el-link
        :underline="false"
        v-bind:href="citem.link"
        v-if="citem.link"
        type="primary"
        target="_blank"
      >
        <strong class="upperCase">{{ citem.name }}</strong
        ><br />
        {{ citem.desc }}
      </el-link>
      <el-link
        v-if="citem.elink"
        :underline="false"
        v-bind:href="citem.elink"
        class="el-button el-button--default el-button--medium is-round"
        type="primary"
        ><strong class="upperCase">{{ citem.name }}</strong
        ><br />
      </el-link>
    </el-col>
  </el-row>
</template>

<style lang="scss">
.el-divider__text {
  position: absolute;
  background-color: #f7fbfd;
  padding: 0 20px;
  color: #303133;
}
</style>
