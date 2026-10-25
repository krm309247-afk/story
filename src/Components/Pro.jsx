
export default function Pro({onClose}) {
    return (
        <div className="fixed  inset-0 bg-black/60 flex items-center justify-center z-50" oncl>
        <div className=" bg-purple-700 p-5 flex flex-col justify-evenly  h-75 w-70 lg:w-90 lg:h-90  rounded-lg fixed top-30 ">
            <div className="flex flex-row  justify-between items-start w-full lg:justify-around">
                <input className="bg-white rounded-lg  p-2 lg:p-4 w-26 lg:w-30" type="text " placeholder="الكمية" />
                <input className="bg-white rounded-lg  p-2 lg:p-4 w-26 lg:w-30" type="text" placeholder="السعر" />
            </div>
            <div className=" flex flex-col gap-4 p-2">
                <input className="bg-white w-full p-2 lg:p-3 rounded-md" type="text" placeholder="مدينة" />
                <input className="bg-white w-full p-2 lg:p-3 rounded-md" type="text" placeholder="عنوان" />
                <input className="bg-white w-full p-2 lg:p-3 rounded-md" type="text" placeholder="رقم هاتف" />
            </div>
            <div className="-2 flex justify-between lg:justify-around">
                <button onClick={onClose} className=" text-center border-2 border-red-600 hover:border-red-700 text-red-800 w-24  rounded-xl p-1 lg:h-14 text-lg cursor-pointer lg:w-30 capitalize ">الغاء</button>
                    <button className="  text-green-200 w-24 rounded-xl p-2 text-lg cursor-pointer lg:w-30 lg:14  capitalize bg-linear-to-b from-green-400 via-green-600 to-green-800 hover:from-green-300 hover:via-green-500  hover:to-green-700 transition-all duration-300">شراء</button>
                </div>
                
        </div>
        </div>
    )
}
