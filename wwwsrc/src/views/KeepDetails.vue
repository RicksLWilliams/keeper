<template>
  <div class="home container-fluid">
    <h1>Keep Details</h1>

    <select class="select" v-model="selected" @change="changeKeep()">
      <option disabled value>
        <h3 class="edit">Keep</h3>
      </option>
      <option v-for="keepInfo in keeps" :key="keepInfo.id" :value="keepInfo.id">{{keepInfo.name}}</option>
    </select>

    <button type="button" class="btn btn-primary" @click="nextKeep(-1)">Previous</button>
    <button type="button" class="btn btn-primary" @click="nextKeep( 1)">Next</button>

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
      keepData: {}
    };
  },
  mounted() {
    this.findKeep();
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
    changeKeep() {
      if (this.$route.params.vaultId != this.selected) {
        this.pushKeep(this.selected);
      }
    },
    pushKeep(keepId) {
      console.log("pushKeep", this.$router.options.routes);
      //loop through this.$router.options.routes and populate
      //this.$store.dispatch("getAllKeeps", path);
      //this.$store.dispatch("myKeeps", path);
      //this.$store.dispatch("vaultKeeps", path);
      this.$router.push({ name: "keepdetails", params: { keepId: keepId } });
      this.findKeep();
    },
    findKeep() {
      for (let i = 0; i < this.keeps.length; i++) {
        let curKeep = this.keeps[i];
        if (curKeep.id == this.$route.params.keepId) {
          this.keepData = curKeep;
        }
      }
    },
    nextKeep(offset) {
      let keepIndex = 0;
      for (let i = 0; i < this.keeps.length; i++) {
        if (this.$route.params.keepId == this.keeps[i].id) {
          keepIndex = i;
        }
      }
      keepIndex =
        (keepIndex + offset + this.keeps.length) % this.keeps.length;

      this.pushKeep(this.keeps[keepIndex].id);
    }
  },
  components: { Keep }
};
</script>