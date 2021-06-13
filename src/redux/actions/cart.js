import { ADD_PIZZA_CART, PIZZA_ON_MINUS, PIZZA_ON_PLUS, REMOVE_PIZZA } from "../types/types"

export const addPizzaCartAC = (payload) =>({
    type:ADD_PIZZA_CART,
    payload
})
export const PizzaOnPlusAC = (id) =>({
    type:PIZZA_ON_PLUS,
    id
})
export const PizzaOnMinusAC = (id) =>({
    type:PIZZA_ON_MINUS,
    id
})
export const removePizzaAC = (id) =>({
    type:REMOVE_PIZZA,
    id
})