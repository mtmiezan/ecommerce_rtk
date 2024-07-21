import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cartItems: [],
};


// cart slice
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //add item
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        // Remove item
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        //Clear all item at once
        clearCart(state) {
            state.cartItems = [];
        },
        //Increase item quantity
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
        },
        //Decrease item quantity
        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
            }
        },
    }
});


//Export actions creators and reducer function
export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = CartSlice.actions;
  export default CartSlice.reducer; 