<template>
  <LoadingScreen v-if="isLoading"></LoadingScreen>

  <Layout v-if="isLayout" />
</template>

<script>
import Layout from "./components/Home.vue";
import LoadingScreen from "./components/Loading.vue";
export default {
  name: "App",
  components: {
    Layout,
    LoadingScreen,
  },
  data() {
    return {
      isLoading: true,
      isLayout: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      speed: 50;
    }, 2000);
    setTimeout(() => {
      this.isLayout = true;
    }, 2000);
  },
};
</script>

<style></style>
