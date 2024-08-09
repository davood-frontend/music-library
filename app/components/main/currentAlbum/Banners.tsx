'use client'
import React, { useRef, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import { SwiperRef } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Banner from './Banner';
const arr = [1, 2, 3, 4]
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
            <Swiper ref={sliderRef} className="mySwiper" style={{ width: '100%', overflow: 'visible', overflowX: 'clip' }}>
                {arr.map(() => (
                    <SwiperSlide >
                        <Banner />
                    </SwiperSlide>
                ))}
            </Swiper>


        </>
    );
};

export default Banners;