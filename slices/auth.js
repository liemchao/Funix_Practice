import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    token: "",
    userId: "",
    roleName: "",
    image: "",
    email: "",
    name: "",
};

export const counterSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isAuth = true;
            state.token = action.payload.token;
            state.userId = action.payload.credentialId;
            state.roleName = action.payload.roleName;
            state.image = action.payload.image;
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
        },
        logout: (state, action) => {
            state.isAuth = false;
            state.token = "";
            state.userId = "";
            state.roleName = "";
            state.image = "";
            state.displayName = "";
            state.email = "";
        },
        signup: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isAuth = true;
            state.token = action.payload.jwt;
            state.userId = action.payload.userId;
            state.roleName = action.payload.role;
            state.image = action.payload.image;
        },
        updateImage: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            return { ...state, image: action.payload };
        },
    },
});

// Action creators are generated for each case reducer function
export const { login, logout, signup, updateImage } = counterSlice.actions;

export default counterSlice.reducer;
