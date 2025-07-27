import { atom } from "recoil";
import type { CartItem } from "../types";

export const cartState = atom<CartItem[]>({
    key:"cartState",
    default:[]
})
