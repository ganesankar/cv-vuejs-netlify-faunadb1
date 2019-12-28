<script>
import _ from 'lodash'
export default {
  name: 'Expertise',
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
  mounted() {
    this.dataall = _.groupBy(this.data, 'desc')
  },
  methods: {}
}
</script>

<template>
  <div>
    <div v-for="(datas, value) in dataall" :key="value">
      <strong class="upperCase">{{ value }}</strong>
      <ol class="skillset">
        <li v-for="datasi in datas" :key="datasi.id">
          <strong class="upperCase">{{ datasi.name }}</strong>
          <el-tag
            v-for="datasip in datasi.values"
            :key="datasip"
            effect="dark"
            size="mini"
          >
            {{ datasip }}
          </el-tag>
        </li>
      </ol>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss">
.el-tag {
  margin-right: 10px;
  margin-bottom: 5px;
}
.skillset li {
  padding-bottom: 16px;
}
.skillset strong {
  display: block;
  padding-bottom: 5px;
}
</style>
