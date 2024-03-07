<template>
  <div id="app">
    <LeftPanel></LeftPanel>
    <div class="page">
      <NavBar></NavBar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 6 pages , how to generating all pages dynamically
import LeftPanel from "@/components/LeftPanel.vue"
import NavBar from "@/components/NavBar.vue"
export default {
  components: {
    LeftPanel,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  background: #E5E8EF;

  .page {
    margin-left: 80px;
  }
}
</style>
