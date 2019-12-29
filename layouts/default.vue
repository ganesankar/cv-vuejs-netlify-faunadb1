<script>
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          name: 'JavaScript Framework',
          address: 'Element UI, Vue.js, Nuxt.js'
        },
        {
          name: 'JavaScript Library',
          address: 'Lodash'
        },
        {
          name: 'Server',
          address: 'Netlify, Lambda'
        },
        {
          name: 'CDN',
          address: 'Netlify'
        },
        {
          name: 'Database',
          address: 'FaunaDB'
        },
        {
          name: 'Others',
          address: 'Webpack, Normalize, ESLint, ScSS'
        }
      ],
      links: [
        {
          name: 'Intro',
          address: '#intro'
        },
        {
          name: 'Contact',
          address: '#contact'
        },
        {
          name: 'Social',
          address: '#social'
        },
        {
          name: 'Expertise',
          address: '#expertise'
        },
        {
          name: 'Skills',
          address: '#skills'
        },
        {
          name: 'Experience',
          address: '#experience'
        },
        {
          name: 'Education',
          address: '#education'
        },
        {
          name: 'Projects',
          address: '#projects'
        },
        {
          name: 'Other Projects',
          address: '#otherprojects'
        },
        {
          name: 'Awards',
          address: '#awards'
        },
        {
          name: 'Profile',
          address: '#profile'
        }
      ]
    }
  },
  mounted() {},
  methods: {}
}
</script>
<template>
  <ElContainer direction="vertical" class="Layout">
    <ElHeader height="auto">
      <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="1">
          <h2 class="el-logo">Ganesan Karuppaiya</h2>
        </el-menu-item>
        <el-submenu index="2" class="rightMenu">
          <template slot="title"><i class="el-icon-more-outline"></i></template>
          <el-menu-item v-for="citem in links" :key="citem.name" index="2-1">
            <el-link>
              <strong class="upperCase">{{ citem.name }}</strong>
            </el-link></el-menu-item
          >
        </el-submenu>
      </el-menu>
    </ElHeader>
    <ElMain class="page">
      <nuxt />
    </ElMain>
    <ElFooter class="footer">
      <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="4"
          ><a href="http://ganesan.xyz" target="_blank">
            <i class="el-icon-link"></i> Ganesan Karupaiya</a
          ></el-menu-item
        >
        <el-menu-item @click="dialogVisible = true" type="text" index="3">
          <i class="el-icon-info"></i> Info</el-menu-item
        >
      </el-menu>

      <el-dialog
        :visible.sync="dialogVisible"
        :before-close="handleClose"
        title="Built With"
        width="60%"
      >
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="name" width="180"> </el-table-column>
          <el-table-column prop="address"> </el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">CLOSE</el-button>
        </span>
      </el-dialog>
    </ElFooter>
  </ElContainer>
</template>

<style src="./layout.scss" lang="scss" />
