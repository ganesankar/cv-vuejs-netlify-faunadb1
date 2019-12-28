<template>
  <ElContainer direction="vertical" class="Layout">
    <ElHeader height="auto">
      <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="1"> Ganesan Karuppaiya</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-submenu>
      </el-menu>
    </ElHeader>
    <ElMain>
      <nuxt />
    </ElMain>
    <ElFooter>
      <a href="https://ganesan.xyz" target="_blank"> Ganesan Karupaiya</a>
    </ElFooter>
  </ElContainer>
</template>

<style src="./layout.scss" lang="scss" />
