import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';
import { Autoplay, Pagination } from 'swiper/modules';

const slides = [
    {
        img:  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
        title: '> 1000 наименований продуктов питания оптом',
        subtitle: 'для HoReCa, общепита, производителей',
    },
    {
        img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1600&q=80",
        title: '> 1000 наименований продуктов питания оптом',
        subtitle: 'для HoReCa, общепита, производителей',
    },
    {
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=80",
        title: '> 1000 наименований продуктов питания оптом',
        subtitle: 'для HoReCa, общепита, производителей',
    },

    {
        img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1600&q=80",
        title: '> 1000 наименований продуктов питания оптом',
        subtitle: 'для HoReCa, общепита, производителей',
    },
];

const Swiperr = () => {
    return (
        <div className="px-[100px] py-6">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-inner">
                            <div className="slide-image-wrap">
                                <img src={slide.img} alt={`slide-${index}`} className="slide-img" />
                            </div>
                            <div className="slide-overlay" />
                            <div className="slide-content">
                                <h2 className="slide-title">{slide.title}</h2>
                                <p className="slide-subtitle">{slide.subtitle}</p>
                                <button className="slide-btn">Получить прайс</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Swiperr;





