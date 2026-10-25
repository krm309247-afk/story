import { FiShoppingCart } from "react-icons/fi";
export default function Card({ title, price, img,cll,pro,onBuy }) {
    return (
        <div className="bg-amber-500 p-5 w-40 h-85  flex  items-center flex-col justify-between    gap-2 rounded-md select-none mt-16 md:w-61 md:h-95 lg:mt-16">
            <p className='text-white  capitalize  '>{ title }</p>
            <img className='  rounded-sm' src={img} alt="" />
            <div className="flex w-full justify-between ">
            <FiShoppingCart onClick={()=> cll(pro)}  className="w-6 h-6 shrink-0 cursor-pointer"/>
            <p className='self-end text-white '>${price}</p>
            </div>
            <button onClick={onBuy}  className='bg-purple-700 p-2 w-full cursor-pointer text-white capitalize hover:bg-purple-600 rud rounded-sm'>buy now</button>
        </div>
    )
}
