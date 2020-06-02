import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner"; 
import {Link} from "react-router-dom";
import GenresList from '../components/GenresList';
import Services from "../components/Services"
import Navbar from '../components/Navbar';

export default function Rooms() {
    return (
        <>
        <GenresList/>
        <Navbar/>
        <Hero hero="roomsHero">
        <Banner title="Our genres"
        subtitle="Without books, life would be a mistake.">
        <Link to='/home' className="btn-primary">
        Return to home
        </Link>
        </Banner>
        </Hero>
        <Services/>
        </>

    )
}
