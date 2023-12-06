import { Layout } from "../Layout";
import { Checkout } from "../Checkout";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cart, removeFromCart, clearCart, finishPurchase, getTotalPrice } = useContext(CartContext);

  return (
    <Layout>
      <div className="render">
        <div className="welcome">
          <h1 className="greeting"> <span>
              <img src="../../public/images/sol.png" alt="Sol Logo" className="sunLogo1"/>
            </span>Carrito🛒<span>
              <img src="../../public/images/sol.png" alt="Sol Logo" className="sunLogo2"/>
            </span></h1>
        </div>
        <Checkout cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} finishPurchase={finishPurchase} getTotalPrice={getTotalPrice} />
      </div>
    </Layout>
  );
};

export default CartContainer;
