import { Link } from "react-router-dom";
import { productsData } from "../data/products";

function ProductList() {
  return (
    <div className="row g-4">
      {productsData.map((product) => (
        <div key={product.id} className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text text-muted text-truncate">
                {product.description}
              </p>
              <div className="mt-auto d-flex justify-content-between align-items-center">
                <span className="h5 mb-0 text-primary">${product.price}</span>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-outline-dark btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
