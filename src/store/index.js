import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from "./user.module";
import NotesModule from "./notes.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserModule,
    notes: NotesModule
  }
})
