import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../imgs/logo.png'
import './Navbar.css';


const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <div className="navbar">
            <nav className="navigation">
                <div className="nav-logo">
                    <a href="/" className="brand-name">
                        <img className="logo-img" src={img1} />
                    </a>

                </div>
                <div className="nav-r">
                    <div
                        className={
                            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                        }
                    >
                        <div className="d-flex nav-ull">
                            <ul>
                                <li>
                                    <Link to={"/news"}>News</Link>
                                </li>
                                <li>
                                    <Link to={"/opinions"}>Opinions</Link>
                                </li>
                                <li>
                                    <Link to={"/store"}>Store</Link>
                                </li>
                                <li>
                                    <Link to={"/universty"}>Universty</Link>
                                </li>
                                <li>
                                    <Link to={"/interviews"}>Interviews</Link>
                                </li>
                                <li>
                                    <Link to={"/reports"}>Reports</Link>
                                </li>
                                <li>
                                    <Link to={"/newsWire"}>NewsWire</Link>
                                </li>
                                <li>
                                    <Link to={"/reviews"}>Reviews</Link>
                                </li>
                                <li className="d-n">
                                    <a href="#">Login</a>
                                </li>
                                <li className="d-n">
                                    <a href="#">Create account</a>
                                </li>
                            </ul>

                        </div>
                        <div className="nav-right d-flex">
                            <ul className="ul-dn">
                                <li className="login">
                                    <a href="#">Login</a>
                                </li>
                                <li className="create-acc">
                                    <a href="#">Create account</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button
                    className="hamburger"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}
                >
                    {/* hamburger svg code... */}
                </button>
            </nav>
        </div>
    )
}
export default Navbar;