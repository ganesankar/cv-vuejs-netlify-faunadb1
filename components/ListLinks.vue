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
          v-bind:href="citem.portfolio"
          type="primary"
          class=" extLink"
          target="_blank"
          ><strong class="upperCase">{{ citem.name }}</strong>
        </el-link>
        <p>{{ citem.desc }}</p>
        <el-divider content-position="left">
          <el-link
            :underline="false"
            v-bind:href="citem.portfolio"
            type="primary"
            class=" extLink"
            target="_blank"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjIgN2gtN3YtMmg3djJ6bTEuNzI2IDEwYy0uNDQyIDEuMjk3LTIuMDI5IDMtNS4xMDEgMy0zLjA3NCAwLTUuNTY0LTEuNzI5LTUuNTY0LTUuNjc1IDAtMy45MSAyLjMyNS01LjkyIDUuNDY2LTUuOTIgMy4wODIgMCA0Ljk2NCAxLjc4MiA1LjM3NSA0LjQyNi4wNzguNTA2LjEwOSAxLjE4OC4wOTUgMi4xNGgtOC4wMjdjLjEzIDMuMjExIDMuNDgzIDMuMzEyIDQuNTg4IDIuMDI5aDMuMTY4em0tNy42ODYtNGg0Ljk2NWMtLjEwNS0xLjU0Ny0xLjEzNi0yLjIxOS0yLjQ3Ny0yLjIxOS0xLjQ2NiAwLTIuMjc3Ljc2OC0yLjQ4OCAyLjIxOXptLTkuNTc0IDYuOTg4aC02LjQ2NnYtMTQuOTY3aDYuOTUzYzUuNDc2LjA4MSA1LjU4IDUuNDQ0IDIuNzIgNi45MDYgMy40NjEgMS4yNiAzLjU3NyA4LjA2MS0zLjIwNyA4LjA2MXptLTMuNDY2LTguOTg4aDMuNTg0YzIuNTA4IDAgMi45MDYtMy0uMzEyLTNoLTMuMjcydjN6bTMuMzkxIDNoLTMuMzkxdjMuMDE2aDMuMzQxYzMuMDU1IDAgMi44NjgtMy4wMTYuMDUtMy4wMTZ6Ii8+PC9zdmc+"
            /> </el-link
        ></el-divider>
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
