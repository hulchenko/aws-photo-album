import { createAlbum } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { createAlbum as createAlbumMutation } from '@/graphql/mutations';

export const albumInfo = {
  namespaced: true,
  state: { error: null, albums: null },
  mutations: {
    setAlbums(state, payload) {
      state.albums = payload;
    },
  },
  actions: {
    async createAlbum(_, newAlbum) {
      try {
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {},
};
