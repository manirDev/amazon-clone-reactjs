export const initialState={
    basket: [],
    
  
};
export const getBasketTotal=(basket)=>
    basket?.reduce((amount, item)=> item.price + amount, 0);


const Reducer=(state, action)=>{

    switch(action.type){
        case 'SET_USER' :
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
        //Logic for adding item to the basket
            return {
                ...state, 
                basket:[...state.basket, action.item]
            };
            
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket
            let newBasket=[...state.basket];

            const index= state.basket.findIndex((basketItem)=>
                basketItem.id===action.id
            );
            if(index>=0){
                //items exists in the basket, remaove it
                newBasket.splice(index, 1);
                
            }
            else{
                console.warn(
                    `Cant remove product (id: ${action.id}) as its `
                )
            }
            return{ ...state, basket: newBasket};
            
        default: 
            return state;
    }
}
export default Reducer;