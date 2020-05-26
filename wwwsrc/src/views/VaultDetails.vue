<template>
  <div class="home container-fluid">
    <h1>Vault Details</h1>

    <div class="row justify-content-center">
      <keep v-for="keep in keeps" :keepData="keep" :key="keep.vaultKeepid"></keep>
    </div>
  </div>
</template>

<script>
import Keep from "../components/Keep";
export default {
  name: "home",
  data() {
    return {
      newKeep: {}
    };
  },
  mounted() {
    //console.log ( "mounted vaultDetails", this.$route.params.vaultId)
    this.$store.dispatch("getVaultKeeps", this.$route.params.vaultId);
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    keeps() {
      return this.$store.state.vaultKeeps;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    deleteKeep(id) {
      console.log("deleteKeep", id);
      this.$store.dispatch("deleteKeep", id);
    },
    addKeep() {
      //console.log("addKeep", this.newKeep);
      //this.newOrg.name = this.orgApiData.name;
      //this.newOrg.address = this.orgApiData.address;
      this.newKeep.isPrivate = this.newKeep.isPrivate == "0";
      this.$store.dispatch("addKeep", this.newKeep);
      this.newKeep = {};
    }
  },
  components: { Keep }
};
</script>