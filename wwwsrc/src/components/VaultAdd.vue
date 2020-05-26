<template>
  <div class="row">
    <h1>Add Vault</h1>
    <h5></h5>

    <form @submit.prevent="addVault()">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter name...."
          v-model="newVault.name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          class="form-control"
          placeholder="Enter description...."
          v-model="newVault.description"
        />
      </div>
      <button type="submit" class="btn btn-primary">Add Vault</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "vaultAdd",
  data() {
    return {
      newVault: {}
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    addVault() {
      this.$store.dispatch("addVault", this.newVault);
      this.newVault = {};
    }
  }
};
</script>

<style></style>