import { createSlice } from "@reduxjs/toolkit";
import { Basket } from "../../app/models/basket";

interface CartState {
    basket: Basket | null;
}

const initialState: CartState = {
    basket: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setBasket: (state, action) => {
            state.basket = action.payload;
        },
        removeItem: (state, action) => {
            const { productId, quantity } = action.payload;
            const itemIndex = state.basket?.items.findIndex(item => item.productId === productId);
            if (itemIndex === -1 || itemIndex === undefined) return;
            state.basket!.items[itemIndex].quantity -= quantity;
            if (state.basket!.items[itemIndex].quantity === 0) {
                state.basket!.items.splice(itemIndex, 1);
            }
        }
    }
})

export const { setBasket, removeItem } = cartSlice.actions;