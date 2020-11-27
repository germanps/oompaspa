import React from 'react'
import './Navbar.scss'
import Logo from '../../assets/logo-umpa-loompa.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <nav className="mb-2 header-navbar">
            <div className="container flex-wrapper">

                <Link
                    className="logo-link"
                    to="/"
                >
                    <div className="img-wrapper">
                        <img className="logo" src={Logo} alt="Oompa Loompa logo" />
                    </div>
                </Link>
                <h1 className="main-title"> Oompa Loompa's Crew </h1>
            </div>
        </nav>
    )
}