<template>
  <div
    id="box"
    class="editor"
  >
    <div
      id="menu"
      class="menu"
    >
      <div class="colorSelect">
        <label>字体: </label>
        <input
          type="color"
          id="colorGet"
          style="cursor:pointer"
          @click="ColorGetFn(this)"
        >
        <label> 背景: </label>
        <input
          type="color"
          style="cursor:pointer"
          id="colorGet2"
          @click="ColorGetFn(this)"
        >
        <button
          class="btn-change"
          @click="colorSelect"
        >换一换</button>
      </div>
      <div class="menu-tool">
        <img src="../assets/img/Add_32px.png">
        <p style="font-size:40px">新建笔记</p>
      </div>
      <div>
        <div class="menu-tool">
          <img src="../assets/img/ok.png">
          <p>清单</p>
        </div>
      </div>
      <div>
        <div class="menu-tool">
          <img src="../assets/img/booklost.png">
          <p>全部笔记</p>
        </div>
      </div>
      <div>
        <div class="menu-tool">
          <img src="../assets/img/notebook.png">
          <p>笔记本</p>
        </div>
      </div>
      <div>
        <div class="menu-tool">
          <img src="../assets/img/space.png">
          <p>空间</p>
        </div>
      </div>
      <div>
        <div class="menu-tool">
          <img src="../assets/img/mul.png">
          <p>共享给我的</p>
        </div>
      </div>
      <div>
        <div class="menu-tool">
          <img src="../assets/img/st.png">
          <p>标签</p>
        </div>
      </div>
      <div>
        <div class="menu-tool">
          <img src="../assets/img/rubbsh.png">
          <p>废纸篓</p>
        </div>
      </div>
    </div>
    <div
      id="menu_list"
      class="resize"
      @click="dragControllerDiv()"
    ></div>
    <div
      id="list"
      class="noteList"
    ></div>
    <div
      id="list_edit_space"
      class="resize"
      @click="dragControllerDiv()"
    ></div>
    <div
      id="edit_space"
      class="editspace"
    >

      <textarea
        id="edit"
        :value="input"
        @input="update"
        class="edit"
      ></textarea>

      <!-- <div
        id="edit_show"
        class="resize"
      ></div> -->

      <div
        id="show"
        class="show"
        v-html="compiledMarkdown"
        v-bind:class="this.color[index]"
      >
        <!-- v-bind:style="{'color' : fontcolor,'background-color':backgroundColor}" -->
      </div>
    </div>

  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script>
import marked from 'marked'
export default {
  name: 'Markdown',
  data() {
    return {
      input: ' hello markdown',
      color: ['blue', 'xblue', 'green', 'red', 'grey'],
      fontcolor: '#f6f6f6',
      backgroundColor: '#2a333c',
      index: 0
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input)
    }
  },
  methods: {
    update(e) {
      this.input = e.target.value
    },
    colorSelect() {
      if (this.index == this.color.length) {
        this.index = 0
      }
      this.index++
    },
    ColorGetFn(dom) {
      this.fontcolor = document.getElementById('colorInput1').value = dom.value
      this.backgroundColor = document.getElementById('colorInput2').value = dom.value
    },
    dragControllerDiv: function() {
      const box = document.getElementById('box')
      const menu = document.getElementById('menu')
      const menu_list = document.getElementById('menu_list')
      const list = document.getElementById('list')
      const list_edit_space = document.getElementById('list_edit_space')
      const edit_space = document.getElementById('edit_space')
      const edit = document.getElementById('edit')
      // const edit_show = document.getElementById('edit_show')
      const show = document.getElementById('show')
      //左边拖拽去添加mousedown事件
      menu_list.onmousedown = function(e) {
        const initWindowWidth = box.clientWidth
        const initmenuWidth = menu.clientWidth
        const initmenu_listWidth = menu_list.clientWidth
        const initlistWidth = list.clientWidth
        const initlist_edit_spaceWidth = list_edit_space.clientWidth
        const initedit_spaceWidth = edit_space.clientWidth
        const initeditWidth = edit.clientWidth
        // const initedit_showWidth = edit_show.clientWidth
        const initshowWidth = show.clientWidth
        const mouseStartDistanceToWindowLeft = e.clientX
        // 左边拖拽区域添加mousemove事件，并不断计算各区域宽度
        document.onmousemove = function(e) {
          const mouseFinalDistanceToWindowLeft = e.clientX
          //获取鼠标移动的距离
          const mouseMovedDistance = mouseFinalDistanceToWindowLeft - mouseStartDistanceToWindowLeft
          //各种计算距离和宽度
          menu_list.style.left = initmenuWidth + mouseMovedDistance + 'px'
          menu.style.width = initmenuWidth + mouseMovedDistance + 'px'
          list.style.left = initlistWidth + mouseMovedDistance + initmenu_listWidth + 'px'
          list.style.width =
            initWindowWidth -
            initlist_edit_spaceWidth -
            initmenuWidth -
            initmenu_listWidth -
            initlist_edit_spaceWidth -
            mouseMovedDistance +
            'px'
        }
        document.onmouseup = function() {
          document.onmousemove = null
          document.onmouseup = null
          menu_list.releaseCapture && menu_list.releaseCapture()
        }
        menu_list.setCapture && menu_list.setCapture()
        return false
      }

      //右边拖拽去添加mousedown事件
      list_edit_space.onmousedown = function(e) {
        const initWindowWidth = box.clientWidth
        const initmenuWidth = menu.clientWidth
        const initmenu_listWidth = menu_list.clientWidth
        const initlistWidth = list.clientWidth
        const initlist_edit_spaceWidth = list_edit_space.clientWidth
        const initedit_spaceWidth = edit_space.clientWidth
        const initeditWidth = edit.clientWidth
        // const initedit_showWidth = edit_show.clientWidth
        const initshowWidth = show.clientWidth
        const mouseStartDistanceToWindowLeft = e.clientX
        // 右边拖拽区域添加mousemove事件，并不断计算各区域宽度
        document.onmousemove = function(e) {
          const mouseFinalDistanceToWindowLeft = e.clientX
          //获取鼠标移动的距离
          const mouseMovedDistance = mouseStartDistanceToWindowLeft - mouseFinalDistanceToWindowLeft
          //各种计算距离和宽度
          list_edit_space.style.left = initmenuWidth + initmenu_listWidth + initlistWidth + mouseMovedDistance + 'px'
          list.style.width = initlistWidth + mouseMovedDistance + 'px'
          edit_space.style.left =
            initmenuWidth + initmenu_listWidth + initlistWidth + initlist_edit_spaceWidth + mouseMovedDistance + 'px'
          list.style.width =
            initWindowWidth -
            initmenuWidth -
            initmenu_listWidth -
            initlistWidth -
            initlist_edit_spaceWidth -
            mouseMovedDistance +
            'px'
        }
        document.onmouseup = function() {
          document.onmousemove = null
          document.onmouseup = null
          list_edit_space.releaseCapture && list_edit_space.releaseCapture()
        }
        list_edit_space.setCapture && list_edit_space.setCapture()
        return false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.editor {
  position: absolute;
  height: 90%;
  width: 100%;
  display: flex;
  float: left;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  background-color: #f6f6f6;
}
.menu {
  float: left;
  height: 100%;
  width: 15%;
  min-width: 15%;
  background-color: #2a333c;
  color: white;
}
.colorSelect {
  margin-left: 20px;
  margin-top: 10px;
  justify-content: space-around;
}

.btn-change {
  margin-left: 12px;
  border-radius: 3px;
  cursor: pointer;
  width: 70px;
  height: 24px;
}
.resize {
  display: inline-block;
  width: 20px;
  height: 100%;
  cursor: pointer;
  background-color: #eeeeee;
}
.noteList {
  height: 100%;
  width: 20%;
  background-color: #eeeeee;
}
.editspace {
  height: 100%;
  width: 100%;
}
.edit {
  width: 50%;
}
.show {
  float: right;
  width: 44%;
  height: 100%;
  background-color: #eeeeee;
  // word-break: break-all;
  // word-wrap: break-word;
}
.menu-tool {
  margin-top: 20px;
  cursor: pointer;
  width: 100%;
  img {
    display: inline-block;
    margin-left: 30px;
    margin-top: 10px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 40%;
  }
  p {
    margin-left: 20px;
    font-size: 20px;
    display: inline-block;
    line-height: 40px;
  }
}
.menu-tool:hover {
  background-color: rgba(0, 0, 61, 0.8);
}
.active {
  background-color: greenyellow;
  color: rgb(244, 67, 54);
}
.red {
  background: rgb(244, 67, 54);
  color: rgb(0, 188, 212);
}
.blue {
  background: rgb(0, 188, 212);
  color: rgb(158, 158, 158);
}
.grey {
  background: rgb(158, 158, 158);
  color: rgb(76, 175, 80);
}
.green {
  background-color: rgb(76, 175, 80);
  color: rgb(178, 223, 219);
}
.xblue {
  background: rgb(178, 223, 219);
  color: greenyellow;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #2a333c;
  color: #ddd;
  font-size: 18px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
  width: 40%;
  height: 95.5%;
}
code {
  color: #ccc;
  font-size: 18px;
  background-color: #282c34;
  display: block;
  width: 100%;
  border-radius: 5px;
  padding: 20px;
}
</style>
