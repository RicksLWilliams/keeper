<template>
  <div class="home container-fluid">
    <h1>Welcome Home:  {{this.$auth.userInfo.sub}}</h1>

    <!-- <KeepAdd></KeepAdd> -->

    <div class="row justify-content-center">
      <keep v-for="keep in keeps" :keepData="keep" :key="keep.id"></keep>
    </div>

    <!-- <KeepAdd></KeepAdd> -->
  </div>
</template>

<script>
import Keep from "../components/Keep";
import KeepAdd from "../components/KeepAdd";
export default {
  name: "home",
  data() {
    return {
      newKeep: {}
    };
  },
  mounted() {
    //console.log(this.$auth.userInfo.sub)
    this.$store.dispatch("getAllKeeps", "keeps");
    if (this.$auth.userInfo.sub) {
      this.$store.dispatch("getVaults");
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    keeps() {
      return this.$store.state.keeps;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  components: { Keep, KeepAdd }
};
</script>
