<template>
  <div id="app">
    <VendingMachine />
  </div>
</template>

<script>
import VendingMachine from "@/components/VendingMachine/VendingMachine";
export default {
  name: 'app',
  components: {
    VendingMachine
}}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
