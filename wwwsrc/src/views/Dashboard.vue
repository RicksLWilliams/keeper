<template>
  <div class="dashboard container-fluid">
    <h1>WELCOME TO THE DASHBOARD</h1>

    <!-- public {{ publicKeeps }} user {{ userKeeps }} -->
    <!-- <div class="row"> -->
      <div>
        <vault v-for="vault in vaults" :vaultData="vault" :key="vault.id"></vault>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import Vault from "../components/Vault";
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
  components: { Vault }
};
</script>

<style></style>
