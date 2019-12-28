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
        class="extLinkContent"
      >
        <el-link
          :underline="false"
          v-bind:href="citem.link"
          type="primary"
          class=" extLink"
          target="_blank"
        >
          <strong class="upperCase">{{ citem.name }}</strong>
          <p>{{ citem.desc }}</p>
          <el-divider content-position="left">{{ citem.link }}</el-divider>
        </el-link>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.extLinkContent .el-divider__text {
  background-color: #f7fbfd;
  font-weight: 100;
}
.extLink {
  display: block;
}

.extLinkContent {
  padding: 5px;
}
</style>
