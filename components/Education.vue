<script>
export default {
  name: 'Education',
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {
      form: {
        name: ''
      },
      error: null,
      dataall: {}
    }
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
        <el-divider content-position="right"
          >{{ citem.startdate === 'c' ? 'Present' : citem.startdate }}
          {{ citem.enddate === 'c' ? 'Present' : citem.enddate }}</el-divider
        >
        <el-link type="primary" class="upperCase">{{ citem.name }}</el-link>
        <br />
        <el-link type="info">{{ citem.institute }} </el-link>
        <br />
        {{ citem.location }}
        {{ citem.desc }}
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
