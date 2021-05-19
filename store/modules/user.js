export default {
    namespaced: true,
    state: {
		action:false,
        userInfo: {
			
		},
		userPlayList:[]
    },
    mutations: {
        setUserAction(state, val) {
            state.action = val
        },
		setUserInfo(state, val) {
		    state.userInfo = JSON.parse(JSON.stringify(val));
		},
		setuserPlayList(state, val) {
		    state.userPlayList = JSON.parse(JSON.stringify(val));
		},
    },
    actions: {
        setUserAction({ commit }, val) {
            commit('setUserAction', val)
        },
		setUserInfo({ commit }, val) {
		    commit('setUserInfo', val)
		},
		setuserPlayList({ commit }, val) {
		    commit('setuserPlayList', val)
		}
    }
}