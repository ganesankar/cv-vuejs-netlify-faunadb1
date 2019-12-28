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
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h4>{{ citem.name }}</h4>
            <strong>{{ citem.company }} - {{ citem.location }}</strong>
            <el-tag size="mini">
              {{ citem.startdate === 'c' ? 'Present' : citem.startdate }}
              {{ citem.enddate === 'c' ? 'Present' : citem.enddate }}</el-tag
            >
          </div>
          <div v-html="citem.desc"></div>
          <br />
          <div>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Responsibility" name="1">
                <ol>
                  <li v-for="citemv in citem.values" :key="citemv.id">
                    {{ citemv.name }}
                  </li>
                </ol>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-card>
        <br />
      </el-col>
    </el-row>
  </div>
</template>
