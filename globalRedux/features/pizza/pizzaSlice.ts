'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/globalRedux/store';

// Define a type for the slice state
export interface PizzaState {
    mainModal: boolean
  }
  
  // Define the initial state using that type
  const initialState: PizzaState = {
    mainModal: false
  }
  
  export const pizzaSlice = createSlice({
    name: 'pizza',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    toggleMainModal:((state, action:PayloadAction<boolean>) => {
    state.mainModal = action.payload
    }) 
    }
  })
  
  export const { toggleMainModal } = pizzaSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectPizza = (state: RootState) => state.pizza
  
  export default pizzaSlice.reducer