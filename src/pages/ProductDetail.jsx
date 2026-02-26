import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        Product not found! <br />
        <button className="btn btn-link" onClick={() => navigate("/products")}>
          Back to List
        </button>
      </div>
    );
  }

  return (
    <div className="card shadow-lg border-0">
      <div className="row g-0">
        <div className="col-md-6">
          <img
            src={product.image}
            className="img-fluid rounded-start w-100"
            alt={product.name}
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Right Side: Details */}
        <div className="col-md-6 d-flex align-items-center">
          <div className="card-body p-5">
            <span className="badge bg-secondary mb-2">{product.category}</span>
            <h1 className="card-title fw-bold">{product.name}</h1>
            <h3 className="text-primary my-3">${product.price}</h3>
            <p className="card-text lead">{product.description}</p>

            <hr />

            <div className="d-flex gap-2">
              <button className="btn btn-success flex-grow-1">
                Add to Cart
              </button>
              <button
                onClick={() => navigate(-1)}
                className="btn btn-outline-secondary"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
