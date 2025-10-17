import { useSelector } from "react-redux";
import WishListItem from "./WishListItem";

function WishList() {
  const wishList = useSelector(({ products, wishList }) => {
    return wishList.map(({ productId }) => {
      const wishListItems = products.list.find(
        (product) => product.id === productId
      );
      return wishListItems;
    });
  });

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
          wishList.map(({ id, title, rating, price, image }) => (
            <WishListItem
              key={id}
              productId={id}
              title={title}
              price={price}
              imageUrl={image}
              rating={rating.rate}
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
