<template>
  <div>
    <!-- <div class="row justify-content-center"> -->
    <div class="col-3 m-3 border rounded">
      <div v-if="this.userId == this.keepData.userId">
        <button type="button" class="close text-danger" @click="deleteKeep()">
          <span>&times;</span>
        </button>
      </div>
      <h1>{{keepData.name}}</h1>
      <h2>{{keepData.description}}</h2>
      <img :src="keepData.img" class="img-fluid" alt srcset />
      <h2>{{keepData.views}}</h2>
      <h2>{{keepData.shares}}</h2>
      <h2>{{keepData.keeps}}</h2>
      <button type="button" class="btn btn-primary" @click="viewKeep()">View</button>
      <button type="button" class="btn btn-primary">Share</button>
      <button type="button" class="btn btn-primary" @click="keepKeep()">Keep</button>
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
      //console.log("deleteKeep" , this.$auth.userInfo.sub)
      this.$store.dispatch("deleteKeep", this.keepData.id);
    },
    viewKeep() {
      //console.log("deleteKeep" , this.$auth.userInfo.sub)
      this.$store.dispatch("viewKeep", this.keepData.id);
    },
    keepKeep() {
      //console.log("deleteKeep" , this.$auth.userInfo.sub)
      this.$store.dispatch("keepKeep", this.keepData.id);
    }
  },
  computed: {
    userId() {
      //console.log (this.$auth.userInfo.sub)
      if (!this.$auth.userInfo.sub) {
        return "";
      }
      return this.$auth.userInfo.sub;
    }
  }
};
</script>

<style>
</style>