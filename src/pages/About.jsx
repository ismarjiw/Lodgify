// import React from "react"
import { Link } from "react-router-dom"
import aboutImg from "../assets/about-img.jpeg"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={aboutImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Unlock your dream rental experience!</h1>
                <p>Our mission is to enhance your travel adventures with the perfect rental property. Each property is meticulously prepared before your stay, ensuring a seamless and memorable experience. (Extra perks? They are included! 😉)</p>
                <p>Our team is a dedicated group of rental property enthusiasts who understand the incredible experiences that come with exploring the worlds wonders through exceptional accommodations.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your rental is ready.</h2>
                <Link className="link-button" to="/rentals">Explore our rentals</Link>
            </div>
        </div>
    );
}