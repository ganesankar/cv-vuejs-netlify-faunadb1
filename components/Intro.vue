<script>
export default {
  name: 'Intro',
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
  <div class="block">
    <h4>{{ data.name }}</h4>
    <div v-html="data.desc"></div>
  </div>
</template>
