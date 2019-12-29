<script>
export default {
  name: 'Experience',
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
        <strong></strong>
        <el-card class="box-card exp-card">
          <div slot="header" class="clearfix">
            <el-link type="primary" class="upperCase">{{ citem.name }}</el-link>
            <br />
            <el-link type="info"
              >{{ citem.company }} <small>{{ citem.location }} </small></el-link
            >
          </div>
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
            >
          </el-divider>
          <div v-html="citem.desc"></div>
          <br />
          <div v-if="citem.values">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Responsibilities" name="1">
                <ol>
                  <li v-for="citemv in citem.values" :key="citemv.id">
                    {{ citemv.name }}
                  </li>
                </ol>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div v-if="citem.technology">
            <el-divider content-position="left"> TECHNOLOGY </el-divider>
            <el-tag
              v-for="datasip in citem.technology"
              :key="datasip"
              effect="dark"
              size="mini"
            >
              {{ datasip }}
            </el-tag>
          </div>
        </el-card>
        <br />
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
.exp-card .el-card__body {
  padding-top: 0;
}
.exp-card .el-card__header {
  border-bottom: none;
  padding: 18px 20px 0px 20px;
}
.exp-card .el-divider__text {
  background-color: #fff;
}
.exp-card .el-collapse {
  border-top: 1px solid #ebeef5;
  border-bottom: none;
}
</style>
