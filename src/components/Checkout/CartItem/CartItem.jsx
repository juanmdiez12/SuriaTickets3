import Card from "react-bootstrap/Card";

import "./CartItem.css";

const CartItem = ({ item, quantity, removeFromCart }) => {
  return (
    <div key={item.id} className="cart">
      <span className="imgShoppingCart">
        <Card.Img className="cartImg" variant="top" src={`/images/${item.img}`} />
      </span>
      <span className="cartParagraph">
        <h3>{item.title}</h3>
        <p >Precio: ${item.price}</p>
        <p>Cantidad: {quantity} entradas</p>
        <p>Subtotal: ${item.price * quantity}</p>
        <button className="removeProduct" onClick={() => removeFromCart(item.id)}>
          quitar del carrito
        </button>
      </span>
    </div>
  );
};

export default CartItem;
