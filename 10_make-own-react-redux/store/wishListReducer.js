// Action Types
const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// Action Creators
export function addWishListItem(wishlistData) {
  return { type: WISHLIST_ADD_ITEM, payload: wishlistData };
}
export function removeWishListItem(productId) {
  return { type: WISHLIST_REMOVE_ITEM, payload: { productId } };
}

// Reducer
export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      const existingItem = state.find(
        (wishListItem) => wishListItem.productId === action.payload.productId
      );
      if (existingItem) {
        return state;
      }
      return [...state, action.payload];

    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (wishListItem) => wishListItem.productId !== action.payload.productId
      );
    default:
      return state;
  }
}
