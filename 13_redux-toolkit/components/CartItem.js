import { useDispatch } from "../react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "../store/cartReducer";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
  quantity,
}) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={() => dispatch(decreaseItemQuantity({ productId }))}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => dispatch(increaseItemQuantity({ productId }))}>
          +
        </button>
        <button
          onClick={() => {
            dispatch(removeItem({ productId }));
          }}
        >
          remove
        </button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  );
}
