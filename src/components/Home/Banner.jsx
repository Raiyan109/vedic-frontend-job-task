import React from 'react';
import bannerImg from '../../assets/solaronsunlight.jpg'
import Navbar from './Navbar';
const Banner = () => {
    return (
        <div className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bannerImg})` }}>
            <Navbar />
            <div className="hero min-h-screen" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl text-primary font-bold">Vedic Energie</h1>
                        <p className="mb-5 text-primary text-xl font-semibold">Connecting World To Green Energy Solutions And Carbon Free Future.</p>
                        <button className="btn btn-primary text-white">SCHEDULE NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;