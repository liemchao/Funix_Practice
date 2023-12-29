import { useReducer } from "react";
import TokenContext from "./use-context";

const token = localStorage.getItem("token")
const defaultAuthnState = {
    token: token,
    isLogin: token ? true : false
}

const tokenReducer = (state, action) => {
    if (action.type === "LOGIN") {
        const newToken = action.token
        if (newToken) {
            localStorage.setItem("token", newToken)
            return {
                token: newToken,
                isLogin: true
            }
        } else {
            return {
                token: "",
                isLogin: false
            }
        }
    } else if (action.type === "LOGOUT") {
        localStorage.removeItem("token");
        return {
            token: "",
            isLogin: false
        }
    }
}

function ContextProvider(props) {

    const [stateAuthn, dispatchTokenAction] = useReducer(tokenReducer, defaultAuthnState);

    function login(token) {
        dispatchTokenAction({ type: "LOGIN", token: token })
    }

    function logout() {
        dispatchTokenAction({ type: "LOGOUT" })
    }

    const tokenContext = {
        token: stateAuthn.token,
        isLogin: stateAuthn.isLogin,
        login: login,
        logout: logout,
    }

    return (
        <TokenContext.Provider value={tokenContext}>
            {props.children}
        </TokenContext.Provider>
    );
}

export default ContextProvider;