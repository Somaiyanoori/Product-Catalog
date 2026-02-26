# Product Catalog 

A multi-page React application demonstrating **React Router v6/v7**, **Nested Routes**, and **Dynamic Routing**. This project serves as a functional product catalog where users can browse products and view specific details.

##  Features & Requirements Met

This project fulfills all functional and technical requirements of the assignment:

### 1. Routing & Navigation
- [x] **Routes:** `/` (Home), `/products` (List), `/products/:id` (Details), and `*` (404 Not Found).
- [x] **Navigation:** Top Navbar is visible on all pages.
- [x] **Active State:** Uses `<NavLink>` to highlight the current active page.

### 2. Nested Routes & Layouts
- [x] **Shared Layout:** The `/products` route acts as a parent layout.
- [x] **Outlet:** Uses `<Outlet />` to render the Product List or Product Details inside the shared layout container.

### 3. Dynamic Data
- [x] **Data Source:** Uses a local array of objects (minimum 6 products).
- [x] **Dynamic Routing:** Uses `:id` to generate unique URLs for every product.
- [x] **Hooks Used:**
  - `useParams()` to read the product ID from the URL.
  - `useNavigate()` to implement the "Go Back" button functionality.

### 4. Styling
- [x] **Bootstrap 5:** Used for a responsive grid system, professional cards, and navigation styling.
- [x] **Responsive Images:** Product images are styled with `object-fit: cover` to maintain aspect ratio.

---

## Technologies Used

- **React.js** (Functional Components, Hooks)
- **React Router DOM** (Routing management)
- **Bootstrap 5** (UI Framework via CDN)
- **Vite** (Build tool)

---

##  Project Structure

```text
src/
├── components/
│   └── Navbar.jsx       
├── data/
│   └── products.js       
├── pages/
│   ├── Home.jsx          
│   ├── ProductsLayout.jsx 
│   ├── ProductList.jsx   
│   ├── ProductDetail.jsx 
│   └── NotFound.jsx      
├── App.jsx               
├── App.css               
└── main.jsx
```
### How to Install and Run
 - git clone origin https://github.com/Somaiyanoori/Product-Catalog.git
 - cd Product-Catalog
 - npm install
 - npm run dev

## Author
Somaiya noori
