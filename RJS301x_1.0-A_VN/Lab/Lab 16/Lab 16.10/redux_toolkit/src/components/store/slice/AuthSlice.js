import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isLogin: false,
}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isLogin = true
        },

        logout(state) {
            state.isLogin = false;
        }
    }
})

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export {
    authActions
}
export default authReducer