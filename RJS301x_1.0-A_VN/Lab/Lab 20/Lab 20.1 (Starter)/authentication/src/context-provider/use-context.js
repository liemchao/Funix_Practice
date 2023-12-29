import { createContext } from "react";

const TokenContext = createContext({
    token: "",
    isLogin: false,
    login: () => { },
    logout: () => { },
})

export default TokenContext