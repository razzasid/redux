import { produce } from "immer";

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
export default function wishListReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    const existingItemIndex = state.findIndex(
      (wishListItem) => wishListItem.productId === action.payload.productId
    );
    switch (action.type) {
      case WISHLIST_ADD_ITEM:
        if (existingItemIndex !== -1) {
          return state;
        }
        state.push(action.payload);
        break;

      case WISHLIST_REMOVE_ITEM:
        state.splice(existingItemIndex, 1);
    }
    return state;
  });
}
