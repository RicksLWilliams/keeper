<template>
  <div>
    <!-- <div class="row justify-content-center"> -->
    <div class="row  m-3 border rounded" @click="$router.push({name: 'vault', params: {vaultId: vaultData.id}})">
      <div class="col-5 m-1">
        <h1>Name: {{vaultData.name}}</h1>
      </div>
      <div class="col-5 m-1">
        <h2>Description: {{vaultData.description}}</h2>
      </div>
      <div class="col-1 m-1">
        <div>
          <button type="button" class="close text-danger" @click="deleteVault()">
            <span>&times;</span>
          </button>
        </div>
      </div>
      <!-- </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Vault",
  props: ["vaultData"],
  data() {
    return {};
  },
  methods: {
    deleteVault() {
      this.$store.dispatch("deleteVault", this.vaultData.id);
    }
  },
  computed: {
    // userId() {
    //   if (!this.$auth.userInfo.sub) {
    //     return "";
    //   }
    //   return this.$auth.userInfo.sub;
    // }
  }
};
</script>

<style>
</style>