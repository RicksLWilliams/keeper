<template>
  <div class="dashboard container-fluid">
    <h1>WELCOME TO THE DASHBOARD</h1>

    <VaultAdd></VaultAdd>

    <div>
      <vault v-for="vault in vaults" :vaultData="vault" :key="vault.id"></vault>
    </div>

    <KeepAdd></KeepAdd>

    <div class="row justify-content-center">
      <keep v-for="keep in keeps" :keepData="keep" :key="keep.id"></keep>
    </div>
  </div>
</template>

<script>
import Vault from "../components/Vault";
import VaultAdd from "../components/VaultAdd";
import Keep from "../components/Keep";
import KeepAdd from "../components/KeepAdd";
export default {
  mounted() {
    this.$store.dispatch("getVaults");
    this.$store.dispatch("getMyKeeps");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    vaults() {
      return this.$store.state.vaults;
    },
    keeps() {
      return this.$store.state.myKeeps;
    }
  },
  components: { Vault, VaultAdd, Keep, KeepAdd }
};
</script>

<style></style>
