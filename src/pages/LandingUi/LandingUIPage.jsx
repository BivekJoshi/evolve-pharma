import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import News from './News/News';
import Client from './Client/Client';
import MidBavbar from '../../components/navbar/MidBavbar';

const LandingUIPage = () => {
    return (
        <>
        <MidBavbar/>
            <AboutUs />
            <Client />
            <News />
        </>
    );
}

export default LandingUIPage;
