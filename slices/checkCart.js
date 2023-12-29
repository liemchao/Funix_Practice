import { createSlice } from "@reduxjs/toolkit";

const initialState = [

];

export const checkCartSlice = createSlice({
    name: "checkCart",
    initialState,
    reducers: {
        setCartNotEnough: (state, action) => {
            return action.payload;
        },
        resetCartNotEnough: (state, action) => {
            return [];
        }
    },
});

// Action creators are generated for each case reducer function
export const { setCartNotEnough, resetCartNotEnough } = checkCartSlice.actions;

export default checkCartSlice.reducer;
