export default {
    namespaced: true,
    state: {
		action:false,
        userInfo: {
			
		}
    },
    mutations: {
        setUserAction(state, val) {
            state.action = val
        },
    },
    actions: {
        setUserAction({ commit }, val) {
            commit('setUserAction', val)
        }
    }
}