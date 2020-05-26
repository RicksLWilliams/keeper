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
        <h2>Views: {{keepData.views}}</h2>
        <h2>Shares: {{keepData.shares}}</h2>
        <h2>Keeps: {{keepData.keeps}}</h2>
        <button type="button" class="btn btn-primary" @click="editKeep('views')">View</button>
        <button type="button" class="btn btn-primary" @click="editKeep('shares')">Share</button>
        <button type="button" class="btn btn-primary" @click="editKeep('keeps')">Keep</button>

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
    editKeep(data) {
      let keepData = {};
      keepData["id"] = this.keepData.id;
      keepData[data] = 1;
      //console.log('editKeep', keepData)
      this.$store.dispatch("editKeep", keepData);
    },
    vaultKeep(){
      console.log("vaultKeep-vault", this.selected)
      console.log("vaultKeep-keep", this.keepData.id)
      let newVaultKeep = {};
      newVaultKeep.vaultId = this.selected
      newVaultKeep.keepId = this.keepData.id
      this.$store.dispatch("addVaultKeep", newVaultKeep);
      this.editKeep("keeps")
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
    },
  }
};
</script>

<style>
</style>