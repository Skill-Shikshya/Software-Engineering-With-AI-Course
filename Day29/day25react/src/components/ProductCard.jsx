import Button from "./Input";

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <article className="product-card">
      <div className="product-media">
        <img className="product-image" src={product.url} alt={product.name} />
      </div>
      <div className="product-content">
        <div className="product-heading">
          <div>
            <p className="product-category">Smartphone</p>
            <h2>{product.name}</h2>
          </div>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-actions">
          <Button name="Edit" onClick={onEdit} />
          <Button name="Delete" onClick={onDelete} />
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
