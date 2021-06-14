import axios from 'axios';

export const getPizzasData =(filters)=>{
  return  axios(`http://localhost:3001/pizzas?${filters.category ? `category=${filters.category}`:''}&_sort=${filters.sortBy.type}`)
    .then(({data})=> data)
}

