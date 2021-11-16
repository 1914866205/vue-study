<template>
  <div>

    <input
      v-model="inputValue"
      type="text"
    />
    <button @click="addDataTolist">添加</button>
    <!-- 这里一定要有个key -->
    <div
      v-for="(item, index) in list"
      :key="index"
      @click="delDataFromList(index)"
    >
      <h1 style="cursor:pointer">
        {{ item }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      list: [],
      inputValue: ''
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    /**
     * inputValue 保存添加输入框数据，list 保存添加之后的数据；addDataTolist 方法将输入框数据添加到 list，点击添加后数据执行 delDataFromList 方法删除相应数据。
       另外，输入框为空时候，不添加；添加结束后输入框清空。
     */
    addDataTolist() {
      // inputValue长度为0的时候不添加
      if (this.inputValue.length === 0) {
        return
      }
      this.list.push(this.inputValue)
      //添加之后清空inputValue输入框
      this.inputValue = ''
    },
    delDataFromList(index) {
      // splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目
      // arrayObject.splice(index,howmany,item1,.....,itemX)
      /**
       * index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
         howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。
         item1, ..., itemX	可选。向数组添加的新项目。
       */
      this.list.splice(index, 1)
      // alert('您删除了' + info)
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss"></style>
