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
      <h4>{{ value }}</h4>
      <ol>
        <li v-for="datasi in datas" :key="datasi.id">
          <strong>{{ datasi.name }}</strong
          ><br />
          <el-tag
            v-for="datasip in datasi.values"
            :key="datasip"
            effect="dark"
            size="medium"
          >
            {{ datasip }}</el-tag
          >
        </li>
      </ol>
      <div></div>
    </div>
  </div>
</template>
