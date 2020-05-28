<template>
  <div class="home container-fluid">
    <h1>Vault Details</h1>

    <select class="select" v-model="selected" @change="changeVault()">
      <option disabled value>
        <h3 class="edit">Keep</h3>
      </option>
      <option
        v-for="listInfo in listItems"
        :key="listInfo.id"
        :value="listInfo.id"
      >{{listInfo.name}}</option>
    </select>

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
      newKeep: {},
      selected: ""
    };
  },
  mounted() {
    //debugger
    this.$store.dispatch("getVaultKeeps", this.$route.params.vaultId);
    this.$store.dispatch("getVaults");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    keeps() {
      return this.$store.state.keeps;
    },
    listItems() {
      return this.$store.state.vaults;
    }
  },
  methods: {
    // logout() {
    //   this.$store.dispatch("logout");
    // },
    deleteKeep(id) {
      //console.log("deleteKeep", id);
      this.$store.dispatch("deleteKeep", id);
    },
    addKeep() {
      this.newKeep.isPrivate = this.newKeep.isPrivate == "0";
      this.$store.dispatch("addKeep", this.newKeep);
      this.newKeep = {};
    },
    changeVault() {
      this.$store.dispatch("getVaultKeeps", this.selected);
      this.$router.push({name: 'vault', params: {vaultId: this.selected}})
    }
  },
  components: { Keep }
};
</script>