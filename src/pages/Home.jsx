import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Welcome to TechShop</h1>
          <p className="col-md-8 fs-4 mx-auto">
            Discover the latest gadgets and accessories with the best deals in
            town.
          </p>
          <Link to="/products" className="btn btn-primary btn-lg px-4 mt-3">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
