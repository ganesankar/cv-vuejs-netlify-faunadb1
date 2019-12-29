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
        <el-divider content-position="right">
          <span v-if="citem.startdate === 'c'">
            Present
          </span>
          <span v-else>
            {{  citem.startdate | luxon:format('MMM-yyyy', { serverFormat: 'dd/MM/yyyy' })}}</span
          >
          -
          <span v-if="citem.enddate === 'c'">
            Present
          </span>
          <span v-else>
            {{  citem.enddate | luxon:format('MMM-yyyy', { serverFormat: 'dd/MM/yyyy' })}}</span
          ></el-divider
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
