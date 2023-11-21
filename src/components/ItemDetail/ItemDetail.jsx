import Card from "react-bootstrap/Card";
import { Counter } from "../Counter";
import { Loader } from "../Loader";

export const ItemDetail = (props) => {
  const { product, loading } = props;
  return loading ? (
    <Loader />
  ) : (
    <div className="render">
      <div className="welcome">
        <h1 style={{ fontWeight: "lighter", textTransform: "uppercase" }}>Detalles del show</h1>
      </div>
      {product ? (
        <div>
          <Card className="cardProduct" key={product.id}>
            <Card.Img className="imgProduct" variant="top" src={`/images/${product.img}`} />
            <span className="cardContent">
              <h2>{product.name}</h2>
              <p className="productParagraph">ID: {product.id}</p>
              <p className="productParagraph">Precio: ${product.price}</p>
              <p className="productParagraph">Artista: {product.title}</p>
              <p className="productParagraph">Descripcion: {product.description}</p>
              <Counter />
            </span>
          </Card>
        </div>
      ) : (
        <p>Show no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetail;
