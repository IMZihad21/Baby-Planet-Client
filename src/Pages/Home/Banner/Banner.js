import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
                <img class="w-full h-full rounded-lg" src="https://i.ibb.co/v1Vsmsk/banner-1.png" alt="bannerimage" />
            </div>
            <div>
                <img class="w-full h-full rounded-lg" src="https://i.ibb.co/N7pRdCm/banner-2.png" alt="bannerimage" />
            </div>
            <div>
                <img class="w-full h-full rounded-lg" src="https://i.ibb.co/k3xJyK4/banner-3.png" alt="bannerimage" />
            </div>
        </Carousel>
    );
};

export default Banner;