import { cartTotalSelector } from "../recoil/cartSelector";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useMemo } from "react";
import { cartState } from "../recoil/cartAtom";

function BillSummary() {

    const cartTotal = useRecoilValue(cartTotalSelector);
    const cart = useSetRecoilState(cartState)

    function gstCalculator(cartTotal: number): number {
        return Math.round(cartTotal * 0.12);
    }

    const isDeliveryApplicable = useMemo(() => cartTotal <= 500, [cartTotal]);
    function deliveryFeeCalculator(isDeliveryApplicable: boolean): number {
        return isDeliveryApplicable ? 30 : 0;
    }

    function totalCalculator(cartTotal: number, isApplicable: boolean): number {
        return Math.round(cartTotal + gstCalculator(cartTotal) + deliveryFeeCalculator(isApplicable));
    }

    function handleOrder() {
        alert("Order placed")
        cart([])
    }

    return (
        <div className="border p-4 rounded-lg shadow-sm ">
            <h3>Bill Summary</h3>
            <div className="flex justify-between">
                <p>Item Total</p>
                <p>₹{cartTotal}</p>
            </div>
            <div className="flex justify-between">
                <p>GST</p>
                <p>₹{gstCalculator(cartTotal)}</p>
            </div>
            <div className="flex justify-between">
                <p>Delivery Fee{isDeliveryApplicable ? "" : " (Free)"}</p>
                <p>₹{deliveryFeeCalculator(isDeliveryApplicable)}</p>
            </div>
            <div className="flex justify-between">
                <p>Total Pay</p>
                <p>₹{totalCalculator(cartTotal, isDeliveryApplicable)}</p>
            </div>
            <div className="flex justify-center">
                <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer" onClick={() => handleOrder()}>Order Now</button>
            </div>
        </div>
    )
}

export default BillSummary;