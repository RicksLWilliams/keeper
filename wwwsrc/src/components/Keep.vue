<template>
  <div class="col-3 m-3 border rounded">
    <div>
      <div v-if="this.userId == this.keepData.userId && this.keepData.isPrivate">
        <button type="button" class="close text-danger" @click="deleteKeep()">
          <span>&times;</span>
        </button>
      </div>
      <h1>{{keepData.name}}</h1>
      <img :src="keepData.img" class="img-fluid" alt srcset @click="keepDetails()" />
      <h2>{{keepData.description}}</h2>
      <h5>{{keepData.userId}}</h5>
      <h5>isPrivate: {{keepData.isPrivate}}</h5>
      <button
        type="button"
        class="btn btn-primary"
        @click="keepDetails()"
      >View({{keepData.views}})</button>
      <button
        type="button"
        class="btn btn-primary"
        @click="editKeep('shares')"
      >Share({{keepData.shares}})</button>

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

      <button
        v-if="this.keepData.vaultKeepId"
        type="button"
        class="btn btn-secondary"
        @click="deleteVaultKeep()"
      >Remove({{keepData.vaultKeepId}})</button>
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
      let data = {}
      data.route = "keeps/" + this.keepData.id
      data.dispatch = "getAllKeeps"
      data.path = "keeps/mykeeps"
      this.$store.dispatch("deleteAny", data);
    },
    deleteVaultKeep() {
      let data = {}
      data.route = "vaultKeeps/" + this.keepData.vaultKeepId
      data.dispatch = "getAllKeeps"
      data.path = "vaults/" + this.$router.currentRoute.params.vaultId + "/keeps"
      this.$store.dispatch("deleteAny", data);
    },
    editKeep(data) {
      let keepData = {};
      keepData["id"] = this.keepData.id;
      keepData[data] = 1;
      //console.log("editKeep",  this.$router.currentRoute)
      this.$store.dispatch("editKeep", keepData);
    },
    vaultKeep() {
      let newVaultKeep = {};
      newVaultKeep.vaultId = this.selected;
      newVaultKeep.keepId = this.keepData.id;
      newVaultKeep.route = "vaultKeeps";
      //console.log("vaultKeep",  this.$router.currentRoute)
      this.$store.dispatch("addAny", newVaultKeep);
    },
    keepDetails(){
      //console.log("keepDetails",this.keepData.id )
      //this.keepData.id
      this.editKeep('views')
      this.$router.push({name: 'keepdetails', params: {keepId: this.keepData.id}})
    }
  },
  computed: {
    userId() {
      if (!this.$auth.userInfo.sub) {
        return "";
      }
      return this.$auth.userInfo.sub;
    },
    listItems() {
      return this.$store.state.vaults;
    }
  }
};
</script>

<style>
</style>