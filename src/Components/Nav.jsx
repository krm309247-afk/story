import { Link } from "react-router-dom"
import { CiMenuBurger } from "react-icons/ci";
// import logo from '../assets/logo.png'
// import { FiShoppingCart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
export default function Nav() {
    return (
        <nav className="bg-amber-400 p-2 w-full fixed">
            <ul className=" flex justify-around list-none text-white text-lg capitalize ">
                <Link to={"/Login"}> <li>Login</li> </Link>
                <Link to={"/Home"}> <li className="">Home</li> </Link>
                <Link to={"/Sala"}> <li> <FiShoppingCart size={26}/> </li> </Link>
                <Link to={"/About"}><li className="">About</li></Link>
                <CiMenuBurger className="text-black text-3xl cursor-pointer"/>
            </ul>
        </nav>
    )
}
