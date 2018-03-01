let isLogin = false;

function loginRedux(state = isLogin,action) {
    console.log(action)
    switch (action.type) {
        case "GO_LOGIN":
            return true
        case "OUT_LOGIN":
            return false
        default:
            return false
    }
}
export default loginRedux
