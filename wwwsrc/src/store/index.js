import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    publicKeeps: [],
    vaults:[],
    vaultKeeps:[],
  },
  mutations: {
    setKeeps(state, keeps) {
      state.publicKeeps = keeps
    },
    setVaults(state, vaults) {
      state.vaults = vaults
    },
    setVaultKeeps(state, vaultKeeps) {
      state.vaultKeeps = vaultKeeps
    },
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async addKeep({ commit, dispatch }, newKeep) {
      try {
        let res = await api.post("keeps", newKeep)
        dispatch("getKeeps")
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
    async getKeeps({ commit, dispatch }) {
      try {
        let res = await api.get("keeps")
        commit("setKeeps", res.data)
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
    async deleteKeep({ commit, dispatch }, id) {
      try {
        let res = await api.delete("keeps/" + id);
        this.dispatch("getKeeps")
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
    async editKeep({ commit, dispatch }, keepData) {
      try {
        //let newKeep = { id: id , keeps: 1};
        let res = await api.put("keeps/" + keepData.id, keepData)
        dispatch("getKeeps")
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
    async getVaults({ commit, dispatch }) {
      try {
        let res = await api.get("vaults")
        commit("setVaults", res.data)
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
    async deleteVault({ commit, dispatch }, id) {
      try {
        let res = await api.delete("vaults/" + id);
        this.dispatch("getVaults")
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
    async addVault({ commit, dispatch }, newVault) {
      try {
        let res = await api.post("vaults", newVault)
        dispatch("getVaults")
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
    async addVaultKeep({ commit, dispatch }, newVaultKeep) {
      try {
        let res = await api.post("vaultKeeps", newVaultKeep)
        //do I need to do this now?
        //dispatch("getVaultKeeps")
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
    async getVaultKeeps({ commit, dispatch }, id) {
      try {
        let res = await api.get("vaults/" + id +"/keeps")
        commit("setVaultKeeps", res.data)
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
    //deleteVaultKeep
    async deleteVaultKeep({ commit, dispatch }, id) {
      try {
        let res = await api.delete("vaultKeeps/" + id);
        this.dispatch("getVaultKeeps", router.currentRoute.params.vaultId)
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
  }
});
