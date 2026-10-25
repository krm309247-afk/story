
export default function Ser({add,vall}) {
  return (
    <div className="  w-85 mt-5 md:w-180 lg:w-290 p-2 flex justify-center">
      <input className="bg-white w-full p-2 " type="search" placeholder="Search" onChange={(e)=>add(e.target.value)} value={vall}/>
    </div>
  )
}
