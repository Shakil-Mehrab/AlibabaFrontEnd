export const state = () => ({
  selectedCategories: [],
  treeCategories: []
})

// Getters
export const getters = {
  // authenticated(state) {
  //   return state.auth.loggedIn
  // },
  // user(state) {
  //   return state.auth.user
  // },
  selectedCategories(state) {
    return state.selectedCategories
  },
  treeCategories(state) {
    return state.treeCategories
  }
}

// Mutations
export const mutations = {
  SET_SELECTEDCATEGORIES(state, selectedCategories) {
    state.selectedCategories = selectedCategories
  },
  SET_TREE_CATEGORIES(state, treeCategories) {
    state.treeCategories = treeCategories
  }
}

// Actions
export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    let selectedCategoryResponse = await app.$axios.$get('categories?selects=richie')
    let treeCategoryResponse = await app.$axios.$get('categories')

    commit('SET_SELECTEDCATEGORIES', selectedCategoryResponse.data)
    commit('SET_TREE_CATEGORIES', treeCategoryResponse.data)
    return selectedCategoryResponse
  }
}
