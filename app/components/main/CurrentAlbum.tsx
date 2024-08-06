import React from 'react';
import DarkBlurBg from '../common/DarkBlurBg';
import { Box, IconButton, Typography, Button, Avatar } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import VerifiedIcon from '@mui/icons-material/Verified';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import bannerImage from '@/app/assets/banner-image.png'
import Image from 'next/image';
const CurrentAlbum = () => {
    return (
        <DarkBlurBg disabledPX={true}>
            <Box sx={{ px: 1.5 }}>
                <IconButton size='small' sx={{ backgroundColor: 'rgba(143, 143, 143,0.3)', marginRight: 1 }}>
                    <NavigateBefore sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton size='small' sx={{ backgroundColor: 'rgba(143, 143, 143,0.3)' }}>
                    <NavigateNextIcon sx={{ fontSize: 20 }} />
                </IconButton>
            </Box>
            <Box sx={{ height: 220, backgroundColor: '#8bc34a', mt: 2.5, display: 'flex', position: 'relative' }}>
                <Box sx={{ p: 3, zIndex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <VerifiedIcon sx={{ fontSize: 17, marginRight: 0.8 }} />
                        <Typography variant='caption' color='black'>Verified Account</Typography>
                    </Box>
                    <Typography variant='h4' color='black' sx={{ fontWeight: 600, mt: 1 }}> Billie Eilish</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <HeadphonesIcon />
                        <Typography variant='caption' color='black' sx={{ marginLeft: 1, fontWeight: 600, mt: 0.3 }}>71,478,075 Monthly listener</Typography>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Button startIcon={<PlayArrowIcon />} variant='contained' color='info' sx={{ borderRadius: 8, px: 2, marginRight: 1.5, fontSize: 12, '& .MuiButton-startIcon': { marginRight: 0.5 }, fontWeight: 600 }} size='small'>Play</Button>
                        <Button variant='outlined' color='info' sx={{ borderRadius: 8, px: 2, fontSize: 12, fontWeight: 600 }} size='small'>Follow</Button>
                    </Box>
                </Box>
                <Box sx={{ flexGrow: 1, flexBasis: 0, position: 'relative' }}>
                    <Image src={bannerImage} alt='singer' style={{ objectFit: 'contain', position: 'absolute', bottom: 0, height: '250px', right: -50, width: '100%' }} />
                </Box>
                <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 1, height: '55%', background: 'linear-gradient(to top, #7cb342, rgba(16, 24, 32, 0))', zIndex: 0 }} />
            </Box>
            <Box sx={{ height: 100 }}></Box>
        </DarkBlurBg>
    );
};

export default CurrentAlbum;