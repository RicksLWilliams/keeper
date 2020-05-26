<template>
  <div class="home container-fluid">
    <h1>Welcome Home</h1>

    <!-- <KeepAdd></KeepAdd> -->

    <!-- <form @submit.prevent="addKeep()">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter name...."
          v-model="newKeep.name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          class="form-control"
          placeholder="Enter description...."
          v-model="newKeep.description"
        />
      </div>
      <div class="form-group">
        <label for="img">Img</label>
        <input
          type="text"
          name="img"
          class="form-control"
          placeholder="Enter img...."
          v-model="newKeep.img"
        />
      </div>
      <input type="checkbox" id="checkbox" v-model="newKeep.isPrivate" />
      <label for="checkbox">{{ checked }}</label>
      <div class="form-group">
        <label for="private">IsPrivate</label>
        <input
          type="number"
          name="private"
          class="form-control"
          placeholder="Enter private...."
          v-model="newKeep.isPrivate"
        />
      </div>
      <button type="submit" class="btn btn-primary">Add Keep</button>
    </form> -->

    <div class="row">
      <div>
        <keep v-for="keep in keeps" :keepData="keep" :key="keep.id"></keep>
      </div>
    </div>

    <!-- <div class="row justify-content-center">
      <div class="col-3 m-3 border rounded" v-for="keep in keeps" :key="keep.id">
        <button type="button" class="close text-danger" @click="deleteKeep()">
          <span>&times;</span>
        </button>
        <h1>{{keep.name}}</h1>
        <h2>{{keep.description}}</h2>
        <img :src="keep.img" class="img-fluid" alt srcset />
        <h2>{{keep.views}}</h2>
        <h2>{{keep.shares}}</h2>
        <h2>{{keep.keeps}}</h2>
        <button type="button" class="btn btn-primary">View</button>
        <button type="button" class="btn btn-primary">Share</button>
        <button type="button" class="btn btn-primary">Keep</button>
      </div>
    </div> -->
    <!-- <KeepAdd></KeepAdd> -->
  </div>
</template>

<script>
import Keep from "../components/Keep";
import KeepAdd from "../components/KeepAdd";
export default {
  name: "home",
  data() {
    return {
      newKeep: {}
    };
  },
  mounted() {
    this.$store.dispatch("getKeeps");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    keeps() {
      return this.$store.state.publicKeeps;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    deleteKeep(id) {
      console.log("deleteKeep", id);
      this.$store.dispatch("deleteKeep", id);
    },
    addKeep() {
      //console.log("addKeep", this.newKeep);
      //this.newOrg.name = this.orgApiData.name;
      //this.newOrg.address = this.orgApiData.address;
      this.newKeep.isPrivate = this.newKeep.isPrivate == "0";
      this.$store.dispatch("addKeep", this.newKeep);
      this.newKeep = {};
    }
  },
  components: { Keep, KeepAdd }
};
</script>
