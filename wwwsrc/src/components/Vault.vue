<template>
  <div>
    <!-- <div class="row justify-content-center"> -->
    <div class="row">
      <div class="col-10 m-3 border rounded">
        <div v-if="this.userId == this.vaultData.userId">
          <button type="button" class="close text-danger" @click="deleteVault()">
            <span>&times;</span>
          </button>
        </div>
        <h1>Name: {{vaultData.name}}</h1>
        <h2>Description: {{vaultData.description}}</h2>
      </div>
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
      //console.log("deleteKeep" , this.$auth.userInfo.sub)
      this.$store.dispatch("deleteVault", this.vaultData.id);
    }
    // viewKeep() {
    //   //console.log("deleteKeep" , this.$auth.userInfo.sub)
    //   this.$store.dispatch("viewKeep", this.keepData.id);
    // },
    // keepKeep() {
    //   //console.log("deleteKeep" , this.$auth.userInfo.sub)
    //   this.$store.dispatch("keepKeep", this.keepData.id);
    // }
  },
  computed: {
    userId() {
      //console.log (this.$auth.userInfo.sub)
      if (!this.$auth.userInfo.sub) {
        return "";
      }
      return this.$auth.userInfo.sub;
    }
  }
};
</script>

<style>
</style>