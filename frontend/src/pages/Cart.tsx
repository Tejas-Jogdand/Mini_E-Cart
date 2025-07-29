import CartItems from "../components/CartItems";
import BillSummary from "../components/BillSummary";
import { cartItemsSelector } from '../recoil/cartSelector'
import { useRecoilValue } from "recoil";
import EmptyCart from "../components/EmptyCart";
function Cart() {
    const cartItems = useRecoilValue(cartItemsSelector);
    const isCartEmpty = cartItems === 0;

    return (
        <div className="px-4 pt-4">
            {isCartEmpty && <EmptyCart />}
            {!isCartEmpty && <CartItems />}
            {!isCartEmpty && <BillSummary />}
        </div>
    )
}

export default Cart;