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
    keeps: [],
    vaults: [],
  },
  mutations: {
    setKeeps(state, keeps) {
      state.keeps = keeps
    },
    setVaults(state, vaults) {
      state.vaults = vaults
    },
    setAll(state, object) {
      state[object.name] = object.payload
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },

    async getAllKeeps({ commit, dispatch }, path) {
      //getKeeps      api.get("keeps")
      //getMyKeeps    api.get("keeps/mykeeps")
      //getVaultKeeps api.get("vaults/" + id +"/keeps")
      try {
        let res = await api.get(path)
        commit("setKeeps", res.data)
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },

    async editKeep({ commit, dispatch }, keepData) {
      try {
        let res = await api.put("keeps/" + keepData.id, keepData)
        //dispatch("getKeeps")
        dispatch("getAllKeeps", "keeps")
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
    
    async getVaults({ commit, dispatch }, input) {
      try {
        let res = await api.get("vaults")
        commit("setVaults", res.data)
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },

    async deleteAny({ commit, dispatch }, data) {
      //                data.route            data.dispatch  data.path
      //deleteKeep      "keeps/" + id         "getAllKeeps", "keeps/mykeeps"
      //deleteVault     "vaults/" + id,       "getVaults",   ""
      //deleteVaultKeep "vaultKeeps/" + id,   "getAllKeeps", "vaults/" + router.currentRoute.params.vaultId + "/keeps"
      try {
        //debugger
        let res = await api.delete(data.route);
        this.dispatch(data.dispatch, data.path)
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },

    // async addKeep({ commit, dispatch }, newKeep) {
    //   try {
    //     let res = await api.post("keeps", newKeep)
    //     dispatch("getAllKeeps", "keeps/mykeeps")
    //   } catch (err) {
    //     alert(JSON.stringify(err));
    //   }
    // },
    // async addVault({ commit, dispatch }, newVault) {
    //   try {
    //     let res = await api.post("vaults", newVault)
    //     dispatch("getVaults")
    //   } catch (err) {
    //     alert(JSON.stringify(err));
    //   }
    // },
    // async addVaultKeep({ commit, dispatch }, newVaultKeep) {
    //   try {
    //     let res = await api.post("vaultKeeps", newVaultKeep)
    //   } catch (err) {
    //     alert(JSON.stringify(err));
    //   }
    // },
    //

    //                data.route            data.dispatch  data.path
    //addKeep         "keeps"               "getAllKeeps"  "keeps/mykeeps"
    //addVault        "vaults"              "getVaults"   <none>
    //addVaultKeep    "vaultKeeps"          <none>
    async addAny({ commit, dispatch }, data) {
      try {
        let res = await api.post(data.route, data)
        //debugger
        if (data.dispatch){
          dispatch(data.dispatch, data.path)
        }
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },

  }
});
