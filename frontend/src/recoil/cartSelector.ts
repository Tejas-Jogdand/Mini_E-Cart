import { selector } from "recoil";
import { cartState } from "./cartAtom";

export const cartTotalSelector = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
});
