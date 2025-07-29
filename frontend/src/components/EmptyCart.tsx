import { useNavigate } from "react-router-dom";
function EmptyCart() {
    const navigate = useNavigate();
    return (
        <div className="text-center py-10 text-gray-600">
            {/* <img
                src="/empty-cart.svg"
                alt="Empty cart illustration"
                className="mx-auto mb-6 w-40 h-40"
            /> */}
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="mb-4">Looks like you haven’t added anything yet.</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer" onClick={()=>navigate('/')}>
                Start Shopping
            </button>
        </div>

    )
}

export default EmptyCart;