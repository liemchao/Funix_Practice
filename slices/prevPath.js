import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const prevPath = createSlice({
    name: "prevPath",
    initialState,
    reducers: {
        setPrevPath: (state, action) => {
            return action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setPrevPath } = prevPath.actions;

export default prevPath.reducer;
