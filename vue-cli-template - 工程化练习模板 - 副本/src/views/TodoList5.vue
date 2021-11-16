<template>
  <div style="border:solid 2px blue">
    <h1>我是TodoList5组件</h1>

    <div v-for="(item, index) in list" @click="delDataFromList(index)" :key="index">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {}
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss"></style>
