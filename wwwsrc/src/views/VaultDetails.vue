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
        console.log("changeVault", path);
        this.$store.dispatch("getAllKeeps", path);
        this.$router.push({
          name: "vaults",
          params: { vaultId: this.selected }
        });
      }
    },
    nextVault(num) {
      let vaultIndex = 0;
      let loopVault = {};
      for (let i = 0; i < this.listItems.length; i++) {
        loopVault = this.listItems[i];
        if (this.$route.params.vaultId == loopVault.id) {
          vaultIndex = i;
        }
      }

      //  this.selected = this.listItems[vaultIndex].id
      //  this.changeVault()
      //console.log("nextVault", vaultIndex);
      vaultIndex =
        (vaultIndex + num + this.listItems.length) % this.listItems.length;
      //console.log("nextVault", vaultIndex);

      let path = "vaults/" + this.listItems[vaultIndex].id + "/keeps";
      this.$store.dispatch("getAllKeeps", path);
      this.$router.push({
        name: "vaults",
        params: { vaultId: this.listItems[vaultIndex].id }
      });
    }
  },
  components: { Keep }
};
</script>