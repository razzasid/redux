import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../store/wishListReducer";

function WishListItem({ productId, title, rating, price, imageUrl }) {
  const dispatch = useDispatch();
  return (
    <div className="wishlist-item-container" key={productId}>
      {/* Product info */}
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p className="rating">{rating} ★</p>
        </div>
        <button onClick={() => dispatch(removeFromWishlist(productId))}>
          <RxCross2 />
        </button>
      </div>

      {/* Price */}
      <div className="item-price">${price}</div>
    </div>
  );
}

export default WishListItem;
