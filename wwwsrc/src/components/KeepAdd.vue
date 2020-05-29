<template>
  <div class="row">
    <h1>Add Keep</h1>
    <h5></h5>

    <form @submit.prevent="addKeep()">
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

      <div class="form-group">
        <label for="isPrivate">isPrivate</label>
        <input
          type="checkbox"
          name="isPrivate"
          class="form-control"
          v-model="newKeep.isPrivate"
        />
      </div>

      <!-- <input type="checkbox" id="checkbox" v-model="newKeep.isPrivate" /> -->
      <!-- <label for="checkbox">{{ checked }}</label> -->
      <!-- <div class="form-group">
        <label for="private">IsPrivate</label>
        <input
          type="number"
          name="private"
          class="form-control"
          placeholder="Enter private...."
          v-model="newKeep.isPrivate"
        />
      </div>-->
      <button type="submit" class="btn btn-primary">Add Keep</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "keepAdd",
  data() {
    return {
      newKeep: {}
    };
  },
  mounted() {
    //this.$store.dispatch("getVaults");
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
    // vaults() {
    //   return this.$store.state.vaults;
    // }
  },
  methods: {
    addKeep() {
      //this.newKeep.isPrivate = this.newKeep.isPrivate == "0";
      //this.$store.dispatch("addKeep", this.newKeep);
      //                data.route            data.dispatch  data.path
      //addKeep         "keeps"               "getAllKeeps"  "keeps/mykeeps"
      this.newKeep.route = "keeps"
      this.newKeep.dispatch = "getAllKeeps"
      this.newKeep.path = "keeps/mykeeps"
      this.$store.dispatch("addKeep", this.newKeep);
      this.newKeep = {};
    }
  }
  //components: { Vault }
};
</script>

<style></style>