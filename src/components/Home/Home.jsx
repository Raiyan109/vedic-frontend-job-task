import React from 'react';
import Articles from './Articles';
import Banner from './Banner';
import Brands from './Brands';
import Footer from './Footer';
import NewLaunch from './NewLaunch';
import OurServices from './OurServices';
import Schedule from './Schedule';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurServices />
            <NewLaunch />
            <Testimonial />
            <Brands />
            <Schedule />
            <Articles />
            <Footer />
        </div>
    );
};

export default Home;