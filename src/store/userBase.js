const userBase = {
    state: {
        users: [{ username: 'manas', password: 'manas' }]
    },
    getters: {
      userExists(state)
      {
        return user => state.users.filter(
          (value) => value.username === user.username && value.password === user.password
        ).length !== 0
      }
    },
    mutations: {
      registerUser(state, user)
      {
        state.users.push(user)
      }
    },
  }

  export default userBase