import { selector } from "recoil";
import { cartState } from "./cartAtom";

export const cartTotalSelector = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
});

export const cartItemsSelector = selector({
  key: "cartItems",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((count,item) => count + item.quantity, 0);
  }
});

