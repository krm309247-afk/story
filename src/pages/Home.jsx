import { useState,useEffect } from "react"
import axios from 'axios'
import Card from "../Components/Card"
import Pro from "../Components/Pro"
import Ser from "../Components/Ser"
export default function Home({cll}) {
  const [prodacts, setprodacts] = useState([])
  useEffect(() => {
      axios.get("https://dummyjson.com/products?limit=100")
  .then(U=> setprodacts(U.data.products))
  }, [])
  const [sellCard, setsellCard] = useState(null)
  const [search, setSearch] = useState('')

  const filluser = prodacts.filter((i) => {
   return i.title.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <>
      <div className="bg-blue-500 p-10  min-h-screen flex justify-center items-center flex-col">
  <Ser add={setSearch} vall={search} />  
          <div className="  p-6 w-full justify-center items-center  grid gap-3 grid-cols-[repeat(2,180px)] md:grid-cols-[repeat(3,250px)] lg:grid-cols-[repeat(4,260px)] lg:gap-6">
    
      {sellCard && <Pro onClose={()=>{setsellCard(null) }}/>}
        {filluser.map((e) => {
          return <Card key={e.id} title={e.title } img={e. thumbnail} price={e.price} cll={cll} pro={e} onBuy={()=>{setsellCard(e)}} />
        })}
      </div>

      </div>
    </>

  )
}





















  // const [Prodacts, setProdacts] = useState([
  //   { id: 1, tite: "iphone 14", img: if1, price: 900 },
  //   { id: 2, tite: "iphone 15", img: if2, price: 1000 },
  //   { id: 3, tite: "iphone 16", img: if3, price: 1200 },
  //   { id: 4, tite: "iphone 17", img: if4, price: 1500 },
  //   { id: 5, tite: "iphone 18", img: if5, price: 2000 },
  //   { id: 6, tite: "mac 16", img: m1, price: 1000 },
  //   { id: 7, tite: "mac 3", img: m2, price: 1200 },
  //   { id: 8, tite: "max 4", img: m3, price: 1400 },
  //   { id: 9, tite: "max 5", img: m4, price: 1600 },
  //   { id: 10, tite: "max pro", img: m5, price: 1800 },
// ])
  



// these imges
// import if1 from '../assets/iphone 14.jpg'
// import if2 from '../assets/iphone 15.jpg'
// import if3 from '../assets/iphone 16.webp'
// import if4 from '../assets/iphone 17.jpg'
// import if5 from '../assets/iphone 18.jpg'
// import m1 from '../assets/mac16.jpg'
// import m2 from '../assets/mac3.jpg'
// import m3 from '../assets/mac4.jpg'
// import m4 from '../assets/mac5.jpg'
// import m5 from '../assets/mac6.jpg'
