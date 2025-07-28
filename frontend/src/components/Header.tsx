import { useRecoilValue } from 'recoil'
import { cartItemTotalSelector } from '../recoil/cartSelector';
function Header() {

    const cartItems = useRecoilValue(cartItemTotalSelector);

    return (
        <div className="max-w-6xl mx-auto">
            <div className='flex justify-between items-center px-4 mt-4'>
                <h1 className="text-3xl font-bold text-center">🛒 Mini Shopping App</h1>
                <div className="flex justify-between items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <p className='bg-amber-300 rounded-full min-w-5 text-center'>{cartItems}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;