<template>
  <div id="app">
    <header class="navbar">
      <section class="navbar-section">
        <a href="#" class="navbar-brand mr-10">VS Code Ext</a>
        <a href="#" class="btn btn-link">Docs</a>
        <a href="https://github.com/picturepan2/spectre" class="btn btn-link">GitHub</a>
      </section>
      <section class="navbar-section">
        <div class="input-group input-inline">
          <input class="form-input" type="text" placeholder="search" />
          <button class="btn btn-primary input-group-btn">Search</button>
        </div>
      </section>
    </header>
    <div class="icon-box">
      <img class="icon-img" src="http://or60gmbpq.bkt.clouddn.com/17-7-26/12755791.jpg">
    </div>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
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
  // box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
.icon-box{
  display: flex;
  justify-content: center;
}
.icon-box .icon-img {
  height: 200px;
}
</style>