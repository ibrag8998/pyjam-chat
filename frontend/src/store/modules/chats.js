export default {
  state: {
    chats: [
      {
        id: 1,
        title: "Mother",
      },
      {
        id: 2,
        title: "Friend",
      },
      {
        id: 3,
        title: "Teacher",
      },
    ],
  },
  actions: {},
  mutations: {},
  getters: {
    allChats(state) {
      return state.chats
    },
  },
}
