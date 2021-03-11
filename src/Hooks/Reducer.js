import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from './action'

export const initialState = {
    basket: [
        {
            id: 15,
            title: 'Amazon Basics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon ',
            price: 10.59,
            rating: 5
        }
    ]
}

export const getBasketTotal = (basket) => basket.reduce((amount,item)=>item.price + amount,0)

export const reducer = (state, action) => {
    console.log(action)



    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]

            }


        case REMOVE_FROM_BASKET:
            let newBasket = [...state.basket]
            const index = state.basket.findIndex(basketItem => basketItem.id === action.id)
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.log(`${action.id} not available`)
            }
            return {
                ...state,
                basket: newBasket
            }

        default:
            return state
    }
}

