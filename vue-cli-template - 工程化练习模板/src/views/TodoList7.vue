<template>
  <div>
    <div
      v-for="(item,index) in list"
      @click="delDataFromList(index)"
      :key="index"
    >{{item}}</div>
  </div>
</template>

<script>
/**
 * 组件化实现
使用 mapGetters 分离 mutations 类型，并用 commit 驱动 mutations 方法实现。
mapGetters 是 Vuex 的辅助函数，将 store 中的 getter 映射到局部计算属性。
分离 mutations 类型可以更好的维护项目。
Vuex 允许直接使用 this.$store.commit 修改 state
 */
import { types } from '../store/types'
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    delDataFromList(index) {
      this.$store.commit(types.DEL_DATA_TO_LIST, index)
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
</style>
