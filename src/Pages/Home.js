import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <>
        <Hero>
        <Navbar/>
            <Banner title="Welcome"
             subtitle="Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.">
            <Link to="/rooms" className="btn-primary">
            Browse Genres
            </Link>
            </Banner>
        </Hero>
        <Services/>

        </>
    )
}
