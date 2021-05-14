import { Auth } from 'aws-amplify';
export const auth = {
  namespaced: true,
  state: { user: null },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async logout({ commit }) {
      commit('setUser', null);
      return await Auth.signOut();
    },
    async login({ commit }, { username, password }) {
      try {
        await Auth.signIn({
          username,
          password,
        });

        const userInfo = await Auth.currentUserInfo();
        commit('setUser', userInfo);
        return Promise.resolve('Success');
      } catch (e) {
        console.log(e);
        return Promise.reject(e);
      }
    },
    async confirmSignUp(_, { username, code }) {
      try {
        await Auth.confirmSignUp(username, code);
        return Promise.resolve();
      } catch (e) {
        console.log(e);
        return Promise.reject(e);
      }
    },
    async signUp(_, { username, password, email }) {
      try {
        await Auth.signUp({ username, password, attributes: { email } });
        return Promise.resolve();
      } catch (e) {
        console.log(e);
        return Promise.reject(e);
      }
    },
    async authAction({ commit }) {
      const userInfo = await Auth.currentUserInfo();
      commit('setUser', userInfo);
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
};
