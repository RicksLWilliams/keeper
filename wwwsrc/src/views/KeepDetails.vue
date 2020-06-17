<template>
  <div class="home container-fluid">
    <h1>Vault Details</h1>
    <div class="row text-center">
    <div class="col-10 m-3 border rounded">
      <div>
        <div v-if="this.userId == this.keepData.userId && this.keepData.isPrivate">
          <button type="button" class="close text-danger" @click="deleteKeep()">
            <span>&times;</span>
          </button>
        </div>
        <h1>{{keepData.name}}</h1>
        <h1>{{keepData.id}}</h1>
        <img :src="keepData.img" class="img-fluid" alt srcset />
        <h2>{{keepData.description}}</h2>
        <h5>{{keepData.userId}}</h5>
        <h5>isPrivate: {{keepData.isPrivate}}</h5>
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
    </div>
  </div>
</template>

<script>
import Keep from "../components/Keep";
export default {
  name: "home",
  data() {
    return {
      newKeep: {},
      selected: "",
      keepData:{}
    };
  },
  mounted() {
    //created() {
    // make changes here
    //let path = "vaults/" + this.$route.params.vaultId + "/keeps";
    //this.$store.dispatch("getAllKeeps", path);
    //this.$store.dispatch("getVaults");

    //loop through keeps looking for id = this.$route.params.keepId
    //then set keepData to that one
    for (let i = 0; i < this.keeps.length; i++){
      //console.log("mounted", i)
      //console.log("mounted", this.keeps)
      //console.log("mounted", this.$route.params.keepId)
      let curKeep = this.keeps[i]
      if (curKeep.id == this.$route.params.keepId ){
        this.keepData = curKeep
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    userId() {
      if (!this.$auth.userInfo.sub) {
        return "";
      }
      return this.$auth.userInfo.sub;
    },
    keeps() {
      return this.$store.state.keeps;
    },
    listItems() {
      return this.$store.state.vaults;
    }
  },
  methods: {
    // deleteKeep(id) {
    //   this.$store.dispatch("deleteKeep", id);
    // },
    // addKeep() {
    //   this.newKeep.isPrivate = this.newKeep.isPrivate == "0";
    //   this.$store.dispatch("addKeep", this.newKeep);
    //   this.newKeep = {};
    // },
    changeVault() {
      if (this.$route.params.vaultId != this.selected) {
        let path = "vaults/" + this.selected + "/keeps";
        this.$store.dispatch("getAllKeeps", path);
        this.$router.push({
          name: "vault",
          params: { vaultId: this.selected }
        });
      }
    }
  },
  components: { Keep }
};
</script>