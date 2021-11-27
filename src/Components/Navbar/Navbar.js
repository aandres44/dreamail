import "./Navbar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <div className="navbar">
                <div className={toggle ? "navbar-web active" : "navbar-web"}>
                    <ul className="menu-ul">
                        <a href="#company">
                            <li
                                onClick={() => {
                                    setToggle(!toggle);
                                }}
                                className="menu-li"
                            >
                                Empresa
                            </li>
                        </a>
                        <a href="#clients">
                            <li
                                onClick={() => {
                                    setToggle(!toggle);
                                }}
                                className="menu-li"
                            >
                                Clientes
                            </li>
                        </a>
                        <a href="#service">
                            <li
                                onClick={() => {
                                    setToggle(!toggle);
                                }}
                                className="menu-li"
                            >
                                Nuestros Servicios
                            </li>
                        </a>
                        <a href="#our-team">
                            <li
                                onClick={() => {
                                    setToggle(!toggle);
                                }}
                                className="menu-li"
                            >
                                Nuestro Equipo
                            </li>
                        </a>
                        <a href="#contact">
                            <li
                                onClick={() => {
                                    setToggle(!toggle);
                                }}
                                className="menu-li"
                            >
                                Contáctanos
                            </li>
                        </a>
                    </ul>
                </div>
               <img
                   src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FMenu.svg?alt=media&token=1e7aae0c-5b86-48cf-9168-6fba66c96390"
                    alt="Menu"
                    className="navbar-menu"
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                />
                <a href="#home">
                   <object
                       type="image/svg+xml" data="https://firebasestorage.googleapis.com/v0/b/ingenali-9f109.appspot.com/o/LogoDark.svg?alt=media&token=7ba65df9-c60e-4fd9-9e17-64ac0334ef3d"
                        alt="logo"
                        className="navbar-logo"
                    />
                </a>
                <a className="a-link" href="#company">
                    <p className="navbar-options">Empresa</p>
                </a>
                <a className="a-link" href="#clients">
                    <p className="navbar-options">Clientes</p>
                </a>
                <a className="a-link" href="#service">
                    <p className="navbar-options">Nuestros Servicios</p>
                </a>
                <a className="a-link" href="#our-team">
                    <p className="navbar-options">Nuestro Equipo</p>
                </a>
                <a className="a-link" href="#contact">
                    <p className="navbar-options">Contáctanos</p>
                </a>

                <a
                    href="https://www.facebook.com/puntobanana/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="navbar-circle navbar-facebook">
                       <object
                           type="image/svg+xml" data="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FFace.svg?alt=media&token=4496e785-ee1e-4db3-b85d-0430def9fea3"
                            alt="Facebook"
                            className="navbar-icon navbar-icon-facebook"
                        />
                    </div>
                </a>
                <a
                    href="https://wa.me/+528120167803/?text=!Quiero crear mi sitio web! 🍌"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="navbar-circle">
                       <object
                           type="image/svg+xml" data="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2Fwhats.svg?alt=media&token=85ec7866-a4ec-4d3b-872c-339d06ef6d91"
                            alt="Whatsapp"
                            className="navbar-icon"
                        />
                    </div>
                </a>
                <a href="http://m.me/puntobanana" target="_blank" rel="noreferrer">
                    <div className="navbar-circle">
                       <object
                           type="image/svg+xml" data="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FMessenger.svg?alt=media&token=024d428c-d13a-452c-9b61-df3de679e0fa"
                            alt="Messenger"
                            className="navbar-icon"
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Navbar