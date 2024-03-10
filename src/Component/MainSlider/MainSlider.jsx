import React from 'react'
import style from './MainSlider.module.css'
import slide1 from '../../Assets/images/slider-image-1.jpeg'
import slide2 from '../../Assets/images/slider-image-2.jpeg'
import slide3 from '../../Assets/images/slider-image-3.jpeg'
import img1 from '../../Assets/images/grocery-banner.png'
import img2 from '../../Assets/images/grocery-banner-2.jpeg'
import Slider from "react-slick";

export default function MainSlider() {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return <>
        <div className="row my-3 gx-0">
            <div className="col-md-9">
                <Slider {...settings}>
                    <img src={slide1} height={400} className='w-100' alt={slide1} />
                    <img src={slide2} height={400} className='w-100' alt={slide2} />
                    <img src={slide3} height={400} className='w-100' alt={slide3} />
                </Slider>
            </div>
            <div className="col-md-3">
                <div className="images">
                    <img src={img1} alt={img1} height={200} className='w-100' />
                    <img src={img2} alt={img2} height={200} className='w-100' />
                </div>
            </div>
        </div>
    </>
}
