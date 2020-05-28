<template>
  <!-- <div> -->
  <div class="col-3 m-3 border rounded">
    <div>
      <div v-if="this.userId == this.keepData.userId && this.keepData.isPrivate">
        <button type="button" class="close text-danger" @click="deleteKeep()">
          <span>&times;</span>
        </button>
      </div>
      <h1>{{keepData.name}}</h1>
      <img :src="keepData.img" class="img-fluid" alt srcset />
      <h2>{{keepData.description}}</h2>
      <h5>{{keepData.userId}}</h5>
      <h5>isPrivate: {{keepData.isPrivate}}</h5>
      <!-- <h2>Views: {{keepData.views}}</h2>
        <h2>Shares: {{keepData.shares}}</h2>
      <h2>Keeps: {{keepData.keeps}}</h2>-->
      <button
        type="button"
        class="btn btn-primary"
        @click="editKeep('views')"
      >View({{keepData.views}})</button>
      <button
        type="button"
        class="btn btn-primary"
        @click="editKeep('shares')"
      >Share({{keepData.shares}})</button>
      <!-- <button type="button" class="btn btn-primary" @click="editKeep('keeps')">Keep({{keepData.keeps}})</button> -->

      <select v-if="this.userId" class="select" v-model="selected" @change="vaultKeep()">
        <option disabled value>
          <h3 class="edit">Keep({{keepData.keeps}})</h3>
        </option>
        <option
          v-for="listInfo in listItems"
          :key="listInfo.id"
          :value="listInfo.id"
        >{{listInfo.name}}</option>
      </select>

      <!-- <h5>vaultKeepID: {{keepData.vaultKeepId}}</h5> -->
      <button
        v-if="this.keepData.vaultKeepId"
        type="button"
        class="btn btn-secondary"
        @click="deleteVaultKeep()"
      >Remove({{keepData.vaultKeepId}})</button>
    </div>
  </div>
  <!-- </div> -->
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
      //this.$store.dispatch("deleteKeep", this.keepData.id);
      //                data.route            data.dispatch  data.path
      //deleteKeep      "keeps/" + id         "getAllKeeps", "keeps/mykeeps"
      let data = {}
      data.route = "keeps/" + this.keepData.id
      data.dispatch = "getAllKeeps"
      data.path = "keeps/mykeeps"
      //console.log("deleteKeep", data)
      this.$store.dispatch("deleteAny", data);
    },
    deleteVaultKeep() {
      //console.log("deleteKeep" , this.$auth.userInfo.sub)
      //this.$store.dispatch("deleteVaultKeep", this.keepData.vaultKeepId);
      //data.route      data.dispatch         data.path
      //deleteVaultKeep "vaultKeeps/" + id,   "getAllKeeps", "vaults/" + router.currentRoute.params.vaultId + "/keeps"
      let data = {}
      data.route = "vaultKeeps/" + this.keepData.vaultKeepId
      data.dispatch = "getAllKeeps"
      data.path = "vaults/" + this.$router.currentRoute.params.vaultId + "/keeps"
      //console.log("deleteVaultKeep", data)
      this.$store.dispatch("deleteAny", data);
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
      //console.log("vaultKeep-keep", this.keepData);
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