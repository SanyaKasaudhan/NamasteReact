import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../Header/utils/constants";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const totalPrice = ()=>{
    let price=0;
    cartItems.forEach(element => {
        price+=element?.price;
    });
    return price/100;
  }
  return (
    <>
      <h1>Cart Total</h1>
      {cartItems?.map((cart) => {
        return (
          <>
            <div className="food-items" key={cart.id}>
              <div className="cart-body">
                <div className="cart-item-name">{cart?.name}</div>
                <img
                  className="food-add-img"
                  src={IMG_CDN_URL + cart?.cloudinaryImageId}
                />
              </div>
              <div className="add-cart">
                <div
                  className="addTocart">Price {(cart?.price)/100}
                  
                </div>
              </div>
            </div>

            
            
          </>
        );
      })}
      <div className="totalPrice">
                <div>Total Price
                </div>
                   <div className="total">{totalPrice()}</div> 
                
            </div>
    </>
  );
};

export default Cart;
