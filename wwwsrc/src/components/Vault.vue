<template>
  <div>
    <!-- <div class="row justify-content-center"> -->
    <div class="row  m-3 border rounded">
      <div class="col-5 m-1" @click="gotoVault()">
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
      let data = {}
      data.route = "vaults/" + this.vaultData.id
      data.dispatch = "getVaults"
      data.path = ""
      //console.log("deleteVault", data)
      this.$store.dispatch("deleteAny", data);
    },
    gotoVault(){
      this.$router.push({name: 'vaults', params: {vaultId: this.vaultData.id}})
    }
  },
};
</script>

<style>
</style>