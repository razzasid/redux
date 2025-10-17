import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProducts,
  fetchProductsError,
  updateAllProducts,
} from "../store/productsReducer";
import { loadCartItems } from "../store/cartReducer";

export default function Header() {
  const wishlist = useSelector((state) => state.wishList);
  const cartItems = useSelector((state) => state.cartItems);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    fetch("https://fakestoreapi.com/carts/5")
      .then((res) => res.json())
      .then((data) => dispatch(loadCartItems(data)))
      .catch((err) => {});
    // .catch((error) => dispatch(fetchProductsError()));

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch(updateAllProducts(data)))
      .catch((error) => dispatch(fetchProductsError()));
  }, []);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div className="cart-icon">
          <Link to="/wishlist">
            <div style={{ position: "relative" }}>
              <FaHeart />
              <div className="cart-items-count">{wishlist.length}</div>
            </div>
          </Link>
          <Link to="/cart">
            <div style={{ position: "relative" }}>
              <FaShoppingCart />
              <div className="cart-items-count">
                {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
