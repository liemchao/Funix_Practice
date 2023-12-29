import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/CounterSlice";
import authReducer from "./slice/AuthSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
})

export default store