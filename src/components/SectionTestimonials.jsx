import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { useIsOnScreen } from '../hooks/useIsOnScreen';

const SectionTestimonials = () => {
    const testimonialsRef=useRef();
    const onScreen=useIsOnScreen(testimonialsRef);
    return (
        <section id="testimonials" ref={testimonialsRef} className={onScreen.testimonialsIntersecting ? 'sectionTestimonials sectionTestimonials--active' : 'sectionTestimonials'}>
            <div className="container">
                <div className="secitonTestimonials__inner">
                    <div className="sectionProducts__info">
                        <div className="sectionProducts__info-titles">
                            <h1 className="sectionProducts__info-title">Our <span className="info__title-span">Testimonials</span></h1>
                            <p className="sectionProducts__text">Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
                        </div>
                        <div className="sectionProducts__btnInfo">
                            <div className="btnInfo__text1">For Individuals</div>
                            <div className="btnInfo__text2">For Businesses</div>
                        </div>
                    </div>
                    <div className="slider">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={3}
                            spaceBetween={5}
                            navigation={{
                                prevEl: '.slider__navigation-prev',
                                nextEl: '.slider__navigation-next'
                            }}
                            loop={true}
                            breakpoints={{
                                320:{
                                    slidesPerView:1
                                },
                                620:{
                                    slidesPerView:3
                                }
                            }}
                        >
                            <SwiperSlide>
                                <div className="swiperSlide__inner">
                                    <div className="swiperSlide__topline">
                                        <div className="swiperSlide__topline-border"></div>
                                        <img src="/images/sectionTestimonials/Icon.png" alt="" className="swiperSlide__topline-img" />
                                        <div className="swiperSlide__topline-border"></div>
                                    </div>
                                    <div className="swiperSlide__textContent">
                                        <p className="swiperSlide__text">YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.</p>
                                        <p className="swiperSlide__subtext">Sara T</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiperSlide__inner">
                                    <div className="swiperSlide__topline">
                                        <div className="swiperSlide__topline-border"></div>
                                        <img src="/images/sectionTestimonials/Icon.png" alt="" className="swiperSlide__topline-img" />
                                        <div className="swiperSlide__topline-border"></div>
                                    </div>
                                    <div className="swiperSlide__textContent">
                                        <p className="swiperSlide__text">I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                                        <p className="swiperSlide__subtext">John D</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiperSlide__inner">
                                    <div className="swiperSlide__topline">
                                        <div className="swiperSlide__topline-border"></div>
                                        <img src="/images/sectionTestimonials/Icon.png" alt="" className="swiperSlide__topline-img" />
                                        <div className="swiperSlide__topline-border"></div>
                                    </div>
                                    <div className="swiperSlide__textContent">
                                        <p className="swiperSlide__text">I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.</p>
                                        <p className="swiperSlide__subtext">Emily G</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiperSlide__inner">
                                    <div className="swiperSlide__topline">
                                        <div className="swiperSlide__topline-border"></div>
                                        <img src="/images/sectionTestimonials/Icon.png" alt="" className="swiperSlide__topline-img" />
                                        <div className="swiperSlide__topline-border"></div>
                                    </div>
                                    <div className="swiperSlide__textContent">
                                        <p className="swiperSlide__text">I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                                        <p className="swiperSlide__subtext">Bob A</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <div className="slider__navigation">
                                <div className="slider__navigation-prev">
                                    <img src="/images/sectionTestimonials/Icon (2).png" alt="" className="navigation__prev-img" />
                                </div>
                                <div className="slider__navigation-next">
                                    <img src="/images/sectionTestimonials/Icon (1).png" alt="" className="navigation__prev-img" />
                                </div>
                            </div>
                            <div className="slider__gradientBlock1"></div>
                            <div className="slider__gradientBlock2"></div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionTestimonials;