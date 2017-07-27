<template>
  <div id="app">
    <header class="navbar">
      <section class="navbar-section">
        <a href="https://marketplace.visualstudio.com" class="navbar-brand mr-10" target="_blank">VS Code 插件官网</a>
        <a class="btn btn-link" @click="showHelp=!showHelp">如何使用</a>
      </section>
      <section class="navbar-section">
        <div class="input-group input-inline">
          <a href="https://github.com/noraincode/vscode-ext-transform" class="btn btn-link" target="_blank">GitHub</a>
        </div>
      </section>
    </header>
    <div class="icon-box">
      <img class="icon-img" src="http://or60gmbpq.bkt.clouddn.com/17-7-27/14006309.jpg">
    </div>
    <home></home>
    <footer>
      © 2017 Designed By &nbsp;<a class="author" href="https://github.com/noraincode" target="_blank">norain4u</a>
    </footer>
    <help :show.sync="showHelp"></help>
  </div>
</template>

<script>
import Home from './components/index'
import help from './components/help.vue'
export default {
  name: 'app',
  components: {
    Home, help
  },
  data () {
    return {
      showHelp: false
    }
  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 95%;
  width: 80%;
  border-radius: 4px;
  background-color: #fff;
}
.icon-box{
  display: flex;
  justify-content: center;
}
.icon-box .icon-img {
  height: 200px;
}
footer{
  position: absolute;
  bottom: 20px;
  align-self: center;
}
.author{
  cursor: pointer;
}

</style>
