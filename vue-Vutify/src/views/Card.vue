<template>
  <div>
    <h3>卡片视图页面</h3>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'Card',
  data() {
    return {}
  },
  components: {},
  created() {
    //mutations1
    this.$store.commit('CAT', { name: 'newCat1' })
    //mutation2
    this.$store.commit({ age: 20 })
    //actions 2秒后执行执行异步更新
    this.$store.dispatch('updateCat')
    this.handleUpdateCat({ name: '我是辅助函数定义的' })
  },
  mounted() {},
  methods: {
    //数组的方式
    ...mapMutations({
      changeCatAge: 'CAT'
    }),
    ...mapActions({
      handleUpdateCat: 'updateCat'
    })
  },
  computed: {}
}
</script>
<style scoped lang="scss"></style>