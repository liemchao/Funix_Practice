import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quotesList: [],
    quantity: 0,
}

const quoteSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        onAddQuote(state, { payload }) {
            state.quotesList = [...state.quotesList, payload]
            state.quantity++
        },
    },
})

const quoteActions = quoteSlice.actions;
const quoteReducer = quoteSlice.reducer;

export {
    quoteActions
}

export default quoteReducer