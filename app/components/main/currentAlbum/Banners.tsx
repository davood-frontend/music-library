'use client'
import React, { useRef, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import { SwiperRef } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Banner from './Banner';
import { bannerData } from '@/app/constants/banner-data';
import { Autoplay } from 'swiper/modules';
const Banners = () => {
    const sliderRef = useRef<SwiperRef>(null)
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
        <>
            <Box sx={{ px: 1.5 }}>
                <IconButton size='small' sx={{ backgroundColor: 'rgba(143, 143, 143,0.3)', marginRight: 1 }} onClick={handlePrev} >
                    <NavigateBefore sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton size='small' sx={{ backgroundColor: 'rgba(143, 143, 143,0.3)' }} onClick={handleNext} >
                    <NavigateNextIcon sx={{ fontSize: 20 }} />
                </IconButton>
            </Box>
            <Swiper spaceBetween={0} autoplay={{ delay: 3500, disableOnInteraction: false }} loop={true} ref={sliderRef} style={{ width: 'calc(100% + 0.3px)', overflow: 'visible', overflowX: 'clip' }}>
                {bannerData.map((item, index) => (
                    <SwiperSlide key={index} >
                        <Banner data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>


        </>
    );
};

export default Banners;