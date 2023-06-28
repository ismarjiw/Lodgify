// import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You got the travel plans, we got the travel rentals.</h1>
            <p>Rent the perfect rental to make your perfect destination.</p>
            <Link to="rentals">Find your rental</Link>
        </div>
    )
}