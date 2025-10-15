import { useSelector } from "../react-redux";
import WishListItem from "./WishListItem";

function WishList() {
  const wishList = useSelector((state) => state.wishList || []);

  return (
    <div className="cart-container">
      <h2>Items in Your Wishlist</h2>

      {/* Table header */}
      <div className="cart-header wishlist-header">
        <div className="cart-item">Item</div>
        <div className="item-price">Price</div>
      </div>

      {/* Wishlist items */}
      <div className="wishlist-items-container">
        {wishList.length > 0 ? (
          wishList.map(({ productId, title, rating, price, imageUrl }) => (
            <WishListItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              imageUrl={imageUrl}
              rating={rating}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", padding: "20px" }}>
            Your wishlist is empty.
          </p>
        )}
      </div>
    </div>
  );
}

export default WishList;
