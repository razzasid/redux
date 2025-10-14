import { Link } from "react-router-dom";
// import CartIcon from "../assets/grocery-store.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const wishlist = useSelector((state) => state.wishList);
  const cartItems = useSelector((state) => state.cartItems);

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
