import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../../Images/Banner/banner-1.png'
import banner2 from '../../../Images/Banner/banner-2.png'
import banner3 from '../../../Images/Banner/banner-3.png'

const Banner = () => {
    return (
        <Carousel
            className='mt-5'
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            swipeable={false}
            animationHandler='fade'
            autoPlay={true}
            infiniteLoop={true}
        >
            <div>
                <img class="w-full h-full rounded-lg" src={banner1} alt="bannerimage" />
            </div>
            <div>
                <img class="w-full h-full rounded-lg" src={banner2} alt="bannerimage" />
            </div>
            <div>
                <img class="w-full h-full rounded-lg" src={banner3} alt="bannerimage" />
            </div>
        </Carousel>
    );
};

export default Banner;