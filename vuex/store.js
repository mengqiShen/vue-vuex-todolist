import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    note_list: [],
    new_note: {text: '新笔记', favorite: false},
    note: {}
  },
  mutations: { // 矛盾：active_note 和 初始化时的note内容
    createNote (state) {
      state.note = JSON.parse(JSON.stringify(state.new_note))
      state.note_list.push(state.note)
    },
    editNote (state, text) {
      state.active_note.text = text
      state.active_note.favorite = false
    },
    activeNote (state, index) { // active_note 和 note怎么传递值，怎么更新
      state.active_note = state.note_list[index]
    }
    // favoriteNote (state) {
    //   state.active_note.favorite = !state.active_note.favorite
    // }
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
    }
    // favoriteNote ({commit}) {
    //   commit('favoriteNote')
    // }
  }
})
