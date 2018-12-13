<template>
  <div id="app">
    
    <ComponentHeader/>

    <router-view/>
    
    <ComponentFooter/>
  </div>
</template>

<script>
import ComponentHeader from './components/component-header'
import ComponentFooter from './components/component-footer'

export default {
  name: 'App',
  components: {
    ComponentHeader,
    ComponentFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

</style>
