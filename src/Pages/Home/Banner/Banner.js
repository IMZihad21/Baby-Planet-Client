import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className='mt-5'>
            <div>
                <h1 className='text-3xl font-semibold my-10'>Cherish precious <span className='text-pink-700 font-bold'>Moments</span></h1>
            </div>
            <Carousel
                className='mt-5 h-96 md:h-auto'
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                swipeable={false}
                animationHandler='fade'
                autoPlay={true}
                infiniteLoop={true}
            >
                <div className='h-96 md:h-auto'>
                    <img class="w-full h-full rounded-lg" src="https://i.ibb.co/v1Vsmsk/banner-1.png" alt="bannerimage" />
                </div>
                <div className='h-96 md:h-auto'>
                    <img class="w-full h-full rounded-lg" src="https://i.ibb.co/N7pRdCm/banner-2.png" alt="bannerimage" />
                </div>
                <div className='h-96 md:h-auto'>
                    <img class="w-full h-full rounded-lg" src="https://i.ibb.co/k3xJyK4/banner-3.png" alt="bannerimage" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;