<template>
  <div id="app" class="app">
    <img src="./assets/logo.png">
    <app-header class="app__header"></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/index.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    appHeader: Header
  }
}
</script>

<style src="./assets/sass/main.scss" lang="scss"></style>
