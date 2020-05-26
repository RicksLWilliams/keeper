<template>
  <div>
    <div class="col-3 m-3 border rounded">
      <div>
        <div v-if="this.userId == this.keepData.userId">
          <button type="button" class="close text-danger" @click="deleteKeep()">
            <span>&times;</span>
          </button>
        </div>
        <h1>{{keepData.name}}</h1>
        <h2>{{keepData.description}}</h2>
        <img :src="keepData.img" class="img-fluid" alt srcset />
        <!-- <h2>Views: {{keepData.views}}</h2>
        <h2>Shares: {{keepData.shares}}</h2>
        <h2>Keeps: {{keepData.keeps}}</h2> -->
        <button type="button" class="btn btn-primary" @click="editKeep('views')">View({{keepData.views}})</button>
        <button type="button" class="btn btn-primary" @click="editKeep('shares')">Share({{keepData.shares}})</button>
        <button type="button" class="btn btn-primary" @click="editKeep('keeps')">Keep({{keepData.keeps}})</button>

        <select class="select" v-model="selected" @change="vaultKeep()">
          <option disabled value>
            <h3 class="edit">Keep</h3>
          </option>
          <option
            v-for="listInfo in listItems"
            :key="listInfo.id"
            :value="listInfo.id"
          >{{listInfo.name}}</option>
        </select>
        <div v-if="this.keepData.vaultKeepId">
          <!-- <h5>vaultKeepID: {{keepData.vaultKeepId}}</h5> -->
          <button type="button" class="btn btn-danger" @click="deleteVaultKeep()">Remove({{keepData.vaultKeepId}})</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keep",
  props: ["keepData"],
  data() {
    return { selected: "" };
  },
  methods: {
    deleteKeep() {
      //console.log("deleteKeep" , this.$auth.userInfo.sub)
      this.$store.dispatch("deleteKeep", this.keepData.id);
    },
    deleteVaultKeep() {
      //console.log("deleteKeep" , this.$auth.userInfo.sub)
      this.$store.dispatch("deleteVaultKeep", this.keepData.vaultKeepId);
    },
    editKeep(data) {
      let keepData = {};
      keepData["id"] = this.keepData.id;
      keepData[data] = 1;
      //console.log('editKeep', keepData)
      this.$store.dispatch("editKeep", keepData);
    },
    vaultKeep() {
      //console.log("vaultKeep-vault", this.selected)
      console.log("vaultKeep-keep", this.keepData);
      let newVaultKeep = {};
      newVaultKeep.vaultId = this.selected;
      newVaultKeep.keepId = this.keepData.id;
      this.$store.dispatch("addVaultKeep", newVaultKeep);
      this.editKeep("keeps");
    }
  },
  computed: {
    userId() {
      //console.log (this.$auth.userInfo.sub)
      if (!this.$auth.userInfo.sub) {
        return "";
      }
      return this.$auth.userInfo.sub;
    },
    listItems() {
      //console.log("listItems",this.$store.state.lists )
      return this.$store.state.vaults;
    }
  }
};
</script>

<style>
</style>