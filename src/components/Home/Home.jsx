import React from 'react';
import Banner from './Banner';
import NewLaunch from './NewLaunch';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurServices />
            <NewLaunch />
        </div>
    );
};

export default Home;