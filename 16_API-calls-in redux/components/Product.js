import { useDispatch } from "react-redux";
import { addItem } from "../store/cartReducer";
import { addToWishlist } from "../store/wishListReducer";

export default function Product({ productId, title, rating, price, imageUrl }) {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button onClick={() => dispatch(addItem({ productId }))}>
          Add to Cart
        </button>
        <button onClick={() => dispatch(addToWishlist({ productId }))}>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
