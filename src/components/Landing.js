import React from 'react'
import Navbar from './Navbar'
import LiveDemo from './Landing/LiveDemo'
import Hero from './Landing/Hero'
import VerticalFeatures from './Landing/VerticalFeatures'
import Pricing from './Landing/Pricing'
import Footer from './Landing/Footer'
import CTA from './Landing/CTA'

export default function Landing() {


    return (
        <>
            <Navbar />
            <Hero />
            <LiveDemo />
            <VerticalFeatures />
            <Pricing />
            <CTA />
            <Footer />
        </>
    )
}
