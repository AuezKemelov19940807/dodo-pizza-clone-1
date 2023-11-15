import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/globalRedux/store';


interface IPizzaCartProps {
    id:number
    name: string
    image: string
    type: number
    toppings: ToppingProps[]
    price: number
    size: number
    quantity: number
    
}

interface INewPizzaITemProps {
    id: number
    name: string
    image: string
    type: number
    toppings: ToppingProps[]
    price: number
    size: number
    quantity?: number
}


interface cartState {
    items: IPizzaCartProps[]
    openModal: boolean
}


const initialState : cartState = {
    items: [],
    openModal: false
}



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleModal: (state, action: PayloadAction<boolean>) => {
            state.openModal = action.payload
        },
        addPizzaToCart: (state, action:PayloadAction<INewPizzaITemProps>) => {
            const findPizzaId = state.items.find((pizza) => pizza.id === action.payload.id && pizza.size === action.payload.size && pizza.type === action.payload.type && JSON.stringify(pizza.toppings) === JSON.stringify(action.payload.toppings) )
            
            if(findPizzaId) {
                findPizzaId.quantity++
            }  else {
                state.items.push({...action.payload, quantity: 1})
            }

        },
        removePizzaItem: (state, action:PayloadAction<INewPizzaITemProps>) => {
            state.items =  state.items.filter((pizza) => pizza.id !== action.payload.id && pizza.size !== action.payload.size && pizza.type !== action.payload.type && JSON.stringify(pizza.toppings) !== JSON.stringify(action.payload.toppings) )
           
        },
        incrementQuantity: (state, action:PayloadAction<number>) => {
             const findPizzaId = state.items.find((pizza) => pizza.id === action.payload)

             if(findPizzaId) {
                findPizzaId.quantity++
            }
          },
          decrementQuantity: (state, action:PayloadAction<number>) => {
            const findPizzaId = state.items.find((pizza) => pizza.id === action.payload)

            if(findPizzaId ) {
                if(findPizzaId.quantity > 1 ) {
                    findPizzaId.quantity--
                } else {
                    state.items =  state.items.filter((item) => item.id !== action.payload)
                }
            }
           
          },

    }
})

export const {toggleModal, addPizzaToCart, removePizzaItem, incrementQuantity, decrementQuantity} = cartSlice.actions
export const cartSelect = (state:RootState) => state.cart
export default cartSlice.reducer