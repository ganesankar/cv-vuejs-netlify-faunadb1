<script>
export default {
  name: 'Skills',
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
        :md="12"
        v-for="citem in data"
        :key="citem.name"
      >
        <strong>{{ citem.name }}</strong>

        <el-progress :percentage="citem.percentage"></el-progress>
      </el-col>
    </el-row>
  </div>
</template>
