import { ADD_PIZZA_CART, PIZZA_ON_MINUS, PIZZA_ON_PLUS, REMOVE_PIZZA } from "../types/types";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART:
      let newState = { ...state };
      newState.items = [...state.items, action.payload];
      //если пицца не уникальная добавить к счетчику в обьекте с этой пиццей +1
      for (let i = 0; i < newState.items.length; i++) {
        for (let j = i; j < newState.items.length; j++) {
          if (
            newState.items[i].name === newState.items[j].name &&
            newState.items[i].types === newState.items[j].types &&
            newState.items[i].sizes === newState.items[j].sizes &&
            i !== j
          ) {
            newState.items[i].totalCount++;
          }
        }
      }
      //  удалить не уникальные эелементы
      newState.items = newState.items.filter(
        (pizza, index, self) =>
          index === self.findIndex((t) => t.types === pizza.types && t.name === pizza.name  && t.sizes === pizza.sizes),
      );
      
      //set total count
      newState.totalCount = newState.items.reduce(function(sum, pizza) {
        return sum + pizza.totalCount;
      }, 0);

      // set total sum 

      return newState;
    case 'REMOVE_CART_ITEM': {
    }
    case PIZZA_ON_PLUS:{
     let newState = {...state}
     newState.items = [...newState.items].map(item=>{
      if(item.id === action.id){
         item.totalCount ++
      }
      return item
    })

     newState.totalCount ++
     return newState
    }
    case PIZZA_ON_MINUS:
      {
        let newState = {...state}
        newState.items = [...newState.items].map(item=>{
         if(item.id === action.id){
            item.totalCount --
         }
         return item
       })
   
        newState.totalCount --
        return newState
       }
    case REMOVE_PIZZA :
      return{
        ...state,items:[...state.items].filter(item=>item.id !== action.id)
      }
    default:
      return state;
  }
};

export default cart;
