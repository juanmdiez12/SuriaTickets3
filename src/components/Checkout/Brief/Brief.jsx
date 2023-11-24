import "./Brief.css";

const Brief = ({ getTotalPrice, clearCart, finishPurchase }) => {
  const total = getTotalPrice();
  return (
    <div>
      <p className="totalPurchase">Total: ${total}</p>
      {total > 0 && (
        <>
          <button className="clearCart" onClick={() => clearCart()}>Vaciar el carrito</button>
          <button className="finishPurchase" onClick={() => finishPurchase()}>Completar Compra</button>{" "}
        </>
      )}
    </div>
  );
};

export default Brief;
