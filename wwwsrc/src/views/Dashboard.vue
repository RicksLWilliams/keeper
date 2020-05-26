<template>
  <div class="dashboard container-fluid">
    <h1>WELCOME TO THE DASHBOARD</h1>

    <VaultAdd></VaultAdd>

    <div>
      <vault v-for="vault in vaults" :vaultData="vault" :key="vault.id"></vault>
    </div>

    <KeepAdd></KeepAdd>
  </div>
</template>

<script>
import Vault from "../components/Vault";
import VaultAdd from "../components/VaultAdd";
import KeepAdd from "../components/KeepAdd";
export default {
  mounted() {
    this.$store.dispatch("getVaults");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    vaults() {
      return this.$store.state.vaults;
    }
  },
  components: { Vault, VaultAdd, KeepAdd }
};
</script>

<style></style>
