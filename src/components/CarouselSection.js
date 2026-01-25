import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CarouselSection.css";

const CarouselSection = () => {
    return (
        <div className="carousel-wrapper">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="posh-carousel"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div 
                        className="slide" 
                        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/caro1.jpg')` }}
                    >
                        <div className="slide-content">
                            <h2>Certified POSH Training</h2>
                            <p>Mandatory annual training for all organizations with 10+ employees.</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div 
                        className="slide" 
                        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/caro2.jpg')` }}
                    >
                        <div className="slide-content">
                            <h2>Conducted by Legal Experts</h2>
                            <p>Workplace safety training delivered by experienced POSH consultants.</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div 
                        className="slide" 
                        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/caro3.jpg')` }}
                    >
                        <div className="slide-content">
                            <h2>Available in Mumbai, Bangalore and Delhi</h2>
                            <p>Book an online or on-site session for your team.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

// This line is crucial to fix the 'export default not found' error
export default CarouselSection;