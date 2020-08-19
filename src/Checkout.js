import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css"
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
          <div className="check__left">
        <img className="checkout__ad" src="https://www.theindianwire.com/wp-content/uploads/2020/08/amazon-freedom-sale-759.jpg" 
        alt="" />            
        {basket?.length === 0 ? (
            <div>
                <h2>your basket is empty</h2>
           <p>you have no item in the basket,to add click the
              "add to basket button"</p>
            </div>
         ): (
           <div>
               <h2 className="checkout__title"> your shopping basket</h2>
           {/* list out of all of the checkout product */}
           {basket?.map((item) => (
             <CheckoutProduct 
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
        {basket.length > 0 && (
          <div className="checkout__right">
            <h1>Subtotal</h1>
             <Subtotal
              /> 
            </div>
        )}
        
        </div>
    );
}

export default Checkout
