import React from 'react'
import Navbar from './Navbar'
import LiveDemo from './Landing/LiveDemo'
import Hero from './Landing/Hero'
import VerticalFeatures from './Landing/VerticalFeatures'
import ImageRightFeature from './Landing/ImageRightFeature'
import Pricing from './Landing/Pricing'
import Footer from './Landing/Footer'
import CTA from './Landing/CTA'
import { useAuth } from '../contexts/AuthContext'

export default function Landing() {

    const { currentUser } = useAuth(); 
    return (
        <>
            <Navbar />
            <Hero />
            <LiveDemo />
            <ImageRightFeature />
            <VerticalFeatures />
            <Pricing />
            {!currentUser ? <CTA /> : <></>}
            <Footer />
        </>
    )
}
