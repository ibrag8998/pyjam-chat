export default {
  state: {
    chats: [
      {
        id: 1,
        with: "Mother",
        messages: [
          {
            id: 3,
            text: "Well!",
            sender: { id: 1, name: "John Doe" },
          },
          {
            id: 2,
            text: "Great!",
            sender: { id: 2, name: "Chat master" },
          },
          {
            id: 1,
            text: "How are you?",
            sender: { id: 1, name: "John Doe" },
          },
        ],
      },
      {
        id: 2,
        with: "Friend",
      },
      {
        id: 3,
        with: "Teacher",
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
