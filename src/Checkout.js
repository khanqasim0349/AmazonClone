import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import CurrencyFormat from "react-currency-format";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
      />

      {basket?.length === 0 ? (
        <div>
          <h1>Your Shopping basket is Empty</h1>
          <p>You have no items in your basket. To buy one or more click "Add to basket" next to the item</p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping basket</h2>
           {/* TODO: list out all the checkout products */}
           {
            basket?.map((item,key)=>(
              <CheckoutProducts key={key}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))}
        </div>
      )}
    </div>
    {
      basket.length>0 &&(
        <div className="checkout__right">
          <Subtotal/>
          
        </div>
      )
    }
    </div>
  );
}

export default Checkout;
