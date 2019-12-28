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
  <div>
    <h4>{{ data.name }}</h4>
    <p>{{ data.desc }}</p>
  </div>
</template>
