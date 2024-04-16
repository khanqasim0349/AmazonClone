import React from 'react';
import './Products.css'
import { useStateValue } from './StateProvider';
import { type } from '@testing-library/user-event/dist/type';
const Products = ({id,title,image,price,rating}) => {
  const [{basket},dispatch]=useStateValue();
  const addToBasket=( )=>{
      // Adding item to the basket...
      dispatch({
        type:'ADD_TO_BASKET',
        item:{
          id:id,
          title:title,
          image:image,
          price:price,
          rating:rating
        }
      })
  };

  return (
    <div className='product'>
      <div className='product__info'>
      <p>{title}</p>
      <p className='product__price'>
        <strong>$</strong>
        <small>{price}</small>
      </p>
      <div className='product__rating'>
        {
          Array(rating).fill().map((item,i)=>(
            <p key={i}>⭐</p>
          ))
        }
        </div>
      </div>
      <img src={image} alt='Error 404'/>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}
export default Products;
