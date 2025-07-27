import { useState,useEffect } from "react";
import type { Product } from "../types"
import { cartState } from "../recoil/cartAtom"
import { useRecoilState } from "recoil";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {

    const [isAdded, setIsAdded] = useState<boolean>(false)
    const [quantity, setQuantity] = useState<number>(0)
    const [cart, setCart] = useRecoilState(cartState);

    useEffect(() => {
        const itemInCart = cart.find(item => item.id === product.id);
        setIsAdded(!!itemInCart);
        setQuantity(itemInCart?.quantity || 0);
    }, [cart, product.id]);

    const updateCartQuantity = (delta: number) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            const newQty = existing.quantity + delta;
            if (newQty > 0) {
                setCart(cart.map(item =>
                    item.id === product.id ? { ...item, quantity: newQty } : item
                ));
            } else {
                setCart(cart.filter(item => item.id !== product.id));
            }
        } else if (delta > 0) {
            setCart([...cart, { ...product, quantity: delta }]);
        }
    };

    return (
        <div className="border p-4 rounded-lg shadow-sm">

            <img src={product.image} alt="Product image" className="w-full h-40 object-cover mb-4" />
            <h3 className="font-bold text-lg">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.description} </p>
            <div className="mt-2 flex justify-between items-center">
                <span className="font-semibold">₹{product.price}</span>
                {!isAdded && <button
                    onClick={() => updateCartQuantity(1)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                >
                    Add to Cart
                </button>}

                {isAdded &&
                    <div className="flex items-center gap-2 ml-auto">
                        <svg onClick={()=>updateCartQuantity(-1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                        <p>{quantity}</p>
                        <svg onClick={()=>updateCartQuantity(1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>}
            </div>
        </div>
    )
}