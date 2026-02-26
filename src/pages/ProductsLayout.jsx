import { Outlet } from "react-router-dom";

function ProductsLayout() {
  return (
    <div className="container">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-white border-bottom p-4">
          <h2 className="mb-0">🛍️ Product Catalog</h2>
          <p className="text-muted mb-0">Browse our exclusive collection.</p>
        </div>

        <div className="card-body p-4 bg-light">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProductsLayout;
