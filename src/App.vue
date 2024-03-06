<template>
  <div id="app">
    <LeftPanel></LeftPanel>
    <router-view class="page"></router-view>
  </div>
</template>

<script>
// 6 pages , how to generating all pages dynamically
import LeftPanel from "@/components/LeftPanel.vue"
import HomePage from "@/pages/HomePage.vue";
import DashboardPage from "@/pages/DashboardPage.vue";
export default {
  components: {
    LeftPanel
  },
  data() {
    return {
      pages: [
        { name: "Home", component: HomePage },
        { name: "Dashboard", component: DashboardPage }
      ],
      currentPageIndex: 0
    };
  },
  computed: {
    currentPage() {
      console.log(this.pages[this.currentPageIndex])
      return this.pages[this.currentPageIndex].component;
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  background: #E5E8EF;

  .page {
    margin-left: 72px;
    padding: 28px;
  }
}
</style>
