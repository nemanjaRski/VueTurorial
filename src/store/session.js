const session = {
  state : {
    users: []
  },
  mutations: {
    loginUser(state, user)
    {
      state.users.push(user)
    }
  },
}

export default session