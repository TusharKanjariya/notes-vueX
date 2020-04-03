export default {
    state: {
        isLoggedIn: false
    },
    mutations: {
        loggedInChange(state, statusText) {
            state.isLoggedIn = statusText;
        }
    },
    actions: {
        toggleLogIn(context, statusText) {
            context.commit('loggedInChange', statusText);
        }
    },
    getters: {
        getLoginStatus(state) {
            return state.isLoggedIn
        }
    }
}