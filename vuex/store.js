import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    note_list: [],
    new_note: {text: '新笔记', favorite: false},
    note: {},
    active_note: {}
  },
  mutations: {
    createNote (state) {
      state.note = JSON.parse(JSON.stringify(state.new_note))
      state.note_list.push(state.note)
    },
    editNote (state, text) {
      state.active_note.text = text
      state.active_note.favorite = false
    },
    activeNote (state, index) {
      state.active_note = state.note_list[index]
    },
    favoriteNote (state) {
      state.active_note.favorite = !state.active_note.favorite
    },
    removeNote (state) {
      var index = state.note_list.indexOf(state.active_note)
      state.note_list.splice(index, 1)
      state.active_note = state.note_list[state.note_list.length - 1]
    }
  },
  actions: {
    createNote ({commit}) {
      commit('createNote')
    },
    editNote ({commit}, text) { // payload
      commit('editNote', text)
    },
    activeNote ({commit}, index) {
      commit('activeNote', index)
    },
    favoriteNote ({commit}) {
      commit('favoriteNote')
    },
    removeNote ({commit}) {
      commit('removeNote')
    }
  }
})
