import Vue from "vue"
import Vuex from "vuex"

import user from "./modules/user"
import chats from "./modules/chats"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { chats, user },
})
