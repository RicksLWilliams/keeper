<template>
  <div class="home container-fluid">
    <h1>Vault Details</h1>

    <select class="select" v-model="selected" @change="changeVault()">
      <option disabled value>
        <h3 class="edit">Keep</h3>
      </option>
      <option
        v-for="listInfo in listItems"
        :key="listInfo.id"
        :value="listInfo.id"
      >{{listInfo.name}}</option>
    </select>

    <button type="button" class="btn btn-primary" @click="nextVault(-1)">Previous</button>
    <button type="button" class="btn btn-primary" @click="nextVault(1)">Next</button>

    <div class="row justify-content-center">
      <keep v-for="keep in keeps" :keepData="keep" :key="keep.vaultKeepid"></keep>
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
      selected: ""
    };
  },
  mounted() {
    let path = "vaults/" + this.$route.params.vaultId + "/keeps";
    this.$store.dispatch("getAllKeeps", path);
    this.$store.dispatch("getVaults");
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
    // need method for router.push code 
    //call from changeVault and nextVault
    pushVault(vaultId){
        let path = "vaults/" + vaultId + "/keeps";
        //console.log("changeVault", path);
        this.$store.dispatch("getAllKeeps", path);
        this.$router.push({
          name: "vaults",
          params: { vaultId: vaultId }
        });
    },

    changeVault() {
      if (this.$route.params.vaultId != this.selected) {
        //console.log("changeVault")
        this.pushVault(this.selected)
      }
    },
    nextVault(num) {
      let vaultIndex = 0;
      //let loopVault = {};
      for (let i = 0; i < this.listItems.length; i++) {
        //loopVault = this.listItems[i];
        if (this.$route.params.vaultId == this.listItems[i].id) {
      //if (this.$route.params.vaultId == loopVault.id) {
          vaultIndex = i;
        }
      }
      vaultIndex =
        (vaultIndex + num + this.listItems.length) % this.listItems.length;

      this.pushVault(this.listItems[vaultIndex].id)
    }
  },
  components: { Keep }
};
</script>