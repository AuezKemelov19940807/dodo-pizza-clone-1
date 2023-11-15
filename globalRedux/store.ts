'use client'
import { configureStore } from "@reduxjs/toolkit"
import cartReduser from '@/globalRedux/features/cart/cartSlice'
import pizzaReduser from '@/globalRedux/features/pizza/pizzaSlice'
export const store = configureStore({
    reducer: {
      pizza:pizzaReduser,
      cart: cartReduser
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch