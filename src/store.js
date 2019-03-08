import Vuex from 'vuex'
import Vue from 'vue'
import EventService from '@/services/EventService'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      id: 'abc123',
      name: 'Adam Jahr'
    },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: []
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch(() => {
          console.log('There was a problem creating your event')
        })
    }
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  getters: {
    catLength: state => state.categories.length,
    getEventById: state => id => state.events.find(event => event.id === id)
  }
})

export default store
