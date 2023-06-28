import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link to="/">Lodgify</Link>
            <nav>
                <NavLink to="host">Host</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="rentals">Rentals</NavLink>
                <Link to="login">Login</Link>
            </nav>
        </header>
    )
}