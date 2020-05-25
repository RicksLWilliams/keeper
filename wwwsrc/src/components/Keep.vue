<template>
  <div>

    <!-- <div class="row justify-content-center"> -->
      <div class="col-3 m-3 border rounded">
        <button type="button" class="close text-danger" @click="deleteKeep()">
          <span>&times;</span>
        </button>
        <h1>{{keepData.name}}</h1>
        <h2>{{keepData.description}}</h2>
        <img :src="keepData.img" class="img-fluid" alt srcset />
        <h2>{{keepData.views}}</h2>
        <h2>{{keepData.shares}}</h2>
        <h2>{{keepData.keeps}}</h2>
        <button type="button" class="btn btn-primary">View</button>
        <button type="button" class="btn btn-primary">Share</button>
        <button type="button" class="btn btn-primary">Keep</button>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "Keep",
  props: ["keepData"],
  data() {
    return {};
  },

  methods: {
    deleteKeep() {
      console.log("deleteKeep")
      this.$store.dispatch("deleteKeep", this.keepData.id);
      //this.$store.dispatch("deleteComment", this.keepData.id);
    }
  }
};
</script>

<style>
</style>