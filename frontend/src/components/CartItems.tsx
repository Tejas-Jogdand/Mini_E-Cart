// import type { Product } from "../types"
import { cartState } from "../recoil/cartAtom"
import { useRecoilState } from "recoil";
import type { CartItem } from "../types";

function CartItems() {
    const [cart, setCart] = useRecoilState(cartState);

    const getItemTotal = (item: CartItem) => {
        return item.price * item.quantity;
    };

    function updateCartQuantity(productId: string, delta: number) {
        const existing = cart.find(item => item.id === productId);
        if (existing) {
            const newQty = existing.quantity + delta;
            if (newQty > 0) {
                setCart(cart.map(item =>
                    item.id === productId ? { ...item, quantity: newQty } : item
                ));
            } else {
                setCart(cart.filter(item => item.id !== productId));
            }
        }
    }

    function handleClearCart() {
        setCart([])
        alert("Cart cleared")
    }


    return (
        <div className="border p-4 rounded-lg shadow-sm ">
            <h3>Cart Items</h3>
            <div>
                {cart.map((product) =>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={product.image} alt="Product image" className="w-10 h-10 object-cover mb-4" />
                            <p className="font-medium text-md">{product.title}</p>
                        </div>
                        <div className="grid grid-cols-2 items-center">
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => updateCartQuantity(product.id, -1)}
                                    className="text-gray-600 hover:text-red-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>
                                </button>
                                <span className="mx-2">{product.quantity}</span>
                                <button
                                    onClick={() => { updateCartQuantity(product.id, 1) }}
                                    className="text-gray-600 hover:text-green-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-end pr-1">₹{getItemTotal(product)}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex justify-center">
                <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer" onClick={() => handleClearCart()}>Clear Cart</button>
            </div>
        </div>
    )
}

export default CartItems;