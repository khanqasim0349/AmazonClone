export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0)
export const initialState={
    basket:[
        // {
        //     id:"12321341",
        //     title:"The lean startup",
        //     price:11.96,
        //     rating:4,
        //     image:"https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg"
        // }
    ],
    user:null,
}
// console.log(initialState.basket[0].id);
function reducer(state,action)
{
    
    console.log(action);
    switch(action.type)
    {
        case 'ADD_TO_BASKET':   
        // lOGIc for add to basket
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
            // break;
        case 'REMOVE_FROM_BASKET':
            // lOGIC FOR remove from basket;

            //TODO: Here we cloned the basket
            let newBasket = [...state.basket];
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            if(index>=0)
            {
                // Item exit in the basket remove it from the basket
                newBasket.splice(index,1);

            }
            else
            {
                console.warn(
                    `Cant Remove product (id: (id: ${action.id}) as its)`
                );
            }
            return {
                ...state, basket:newBasket
            };
            // break;
        default:
            return state;
    }
}
export default reducer;