import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "../Header/index.module.scss"
import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
<header>
    <div className={style["container"]}>
        <div className="Logo">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
        </div>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/watches"}>Watches</NavLink></li>
            <li><NavLink to={"/add"}>Add</NavLink></li>
            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>
        <div>
        <FaUser />
        </div>
    </div>
</header>
  )
}

export default Header
