const session = {
  state : {
    users: []
  },
  mutations: {
    loginUser(state, user)
    {
      state.users.push(user)
    },
    logoutUser(state, user)
    {
      state.users = []
    }
  },
}

export default session