import { Item } from "../Item";
import "./ItemList.css";

const ItemList = (props) => {
  const { products, loading } = props;
  return loading ? (
    <span> Cargando... </span>
  ) : (
    <div className="itemlist">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
