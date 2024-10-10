'use client'
import React, { useRef, useCallback, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import { SwiperRef } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Banner from './Banner';
import { bannerData } from '@/app/constants/banner-data';
import { Autoplay } from 'swiper/modules';
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveIcon from '../../common/ResponsiveIcon';
import { useMainContext } from '@/app/context/mainContext';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
const Banners = () => {
    const theme = useTheme()
    const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'))
    const { setDrawerOpen } = useMainContext()
    const sliderRef = useRef<SwiperRef>(null)
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    const [banners, setBanners] = useState(bannerData)
    const followHandler = (data: string) => {
        const clone = [...banners]
        clone.forEach(item => {
            if (item.title === data) {
                item.isFollowing = !item.isFollowing
            }
        })
        setBanners(clone)
    }
    return (
        <>
            <Box sx={{ px: 1.5 }}>
                <IconButton onClick={() => setDrawerOpen(true)} sx={{ display: smallerThanMd ? '' : 'none' }}>
                    <ResponsiveIcon Icon={MenuIcon} />
                </IconButton>
                <Box sx={{ display: smallerThanMd ? 'none' : 'block' }}>
                    <IconButton size='small' sx={{ backgroundColor: 'rgba(143, 143, 143,0.3)', marginRight: 1 }} onClick={handlePrev} >
                        <NavigateBefore sx={{ fontSize: 20 }} />
                    </IconButton>
                    <IconButton size='small' sx={{ backgroundColor: 'rgba(143, 143, 143,0.3)' }} onClick={handleNext} >
                        <NavigateNextIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                </Box>

            </Box>
            <Swiper modules={[Autoplay]} spaceBetween={0} autoplay={{ delay: 3500, disableOnInteraction: false }} loop={true} ref={sliderRef} style={{ width: 'calc(100% + 0.3px)', overflow: 'visible', overflowX: 'clip' }}>
                {banners.map((item, index) => (
                    <SwiperSlide key={index} >
                        <Banner data={item} followHandler={followHandler} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Box position='relative' sx={{ display: smallerThanMd ? 'block' : 'none' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: 1, height: 1, display: 'flex', justifyContent: 'end', p: 1.2 }}>
                    <Box>
                        <IconButton size='small' sx={{ backgroundColor: 'rgba(143, 143, 143,0.3)', marginRight: 1 }} onClick={handlePrev} >
                            <NavigateBefore sx={{ fontSize: 20 }} />
                        </IconButton>
                        <IconButton size='small' sx={{ backgroundColor: 'rgba(143, 143, 143,0.3)' }} onClick={handleNext} >
                            <NavigateNextIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

        </>
    );
};

export default Banners;