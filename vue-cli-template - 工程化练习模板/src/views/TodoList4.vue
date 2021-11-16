<template>
  <div style="border:solid 2px blue">
    <h1>我是TodoList4组件</h1>

    <div
      v-for="(item, index) in list"
      @click="delDataFromList(index)"
      :key="index"
    >{{ item }}</div>
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
  methods: {
    delDataFromList(index) {
      this.$bus.$emit('delDataFromList', index)
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss"></style>
