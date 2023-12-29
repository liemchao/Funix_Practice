import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    isShow: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        toggleHideNShow(state) {
            state.isShow = !state.isShow
        }
    },
})

const counterActions = counterSlice.actions;
const counterReducer = counterSlice.reducer

export {
    counterActions
}

export default counterReducer

