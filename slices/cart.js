import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        setCart: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            return action.payload;
        },
        addNewCartDetail: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            if (state.length === 0) {
                return [action.payload];
            }
            const addedItem = action.payload;
            let isExisted = false;

            state.forEach(cartItem => {
                if (addedItem.id === cartItem.id) {
                    isExisted = true;
                    cartItem.quantity += addedItem.quantity;
                }
            })
            if (!isExisted) {
                state.push(addedItem);
            }
        },
        deleteCartDetail: (state, action) => {
            const updatedCartDetail = action.payload;
            return state.filter((cart) => !(cart.id === updatedCartDetail.id && cart.date === updatedCartDetail.date));
        },

        updateQuantityCartDetail: (state, action) => {
            const newQuantity = action.payload.quantity;
            const addedItem = action.payload.cart;
            let isExisted = false;

            state.forEach(cartItem => {
                if (addedItem.id === cartItem.id) {
                    isExisted = true;
                    cartItem.quantity = newQuantity;
                }
            })

        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setCart,
    deleteCartDetail,
    updateQuantityCartDetail,
    addNewCartDetail,
} = cartSlice.actions;

export default cartSlice.reducer;
