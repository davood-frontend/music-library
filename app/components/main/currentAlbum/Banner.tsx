import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { bannerType } from '@/app/constants/banner-data';
import Image from 'next/image';
const numberFormatter = (number: number) => {
    let formattedNumber = number.toLocaleString()
    return formattedNumber
}
const Banner = ({ data, followHandler }: { data: bannerType, followHandler: (data: string) => void }) => {
    return (
        <Box sx={{ height: { xs: 195, lg: 220 }, backgroundColor: data.backgroundColor, mt: 2.5, display: 'flex', position: 'relative', width: 1 }}>
            <Box sx={{ p: { xs: 2, lg: 3 }, zIndex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <VerifiedIcon sx={{ fontSize: 17, marginRight: 0.8 }} />
                    <Typography variant='caption' color='black' sx={{fontWeight:400}}>Verified Account</Typography>
                </Box>
                <Typography variant='h4' color='black' sx={{ fontWeight: 600, mt: 1 }}>{data.title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <HeadphonesIcon />
                    <Typography variant='caption' color='black' sx={{ marginLeft: 1, fontWeight: 600, mt: 0.3 }}>{numberFormatter(data.monthlyListeners)} Monthly listener</Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Button startIcon={<PlayArrowIcon />} variant='contained' color='info' sx={{ borderRadius: 8, px: 2, marginRight: 1.5, fontSize: 11, '& .MuiButton-startIcon': { marginRight: 0.5 }, fontWeight: 600 }} size='small'>Play</Button>
                    <Button onClick={() => followHandler(data.title)} variant='contained' color={data.isFollowing ? 'secondary' : 'info'} sx={{ borderRadius: 8, px: 2, fontSize: 11, fontWeight: 600 }} size='small'>{data.isFollowing ? 'Following' : 'Follow'}</Button>
                </Box>
            </Box>
            <Box sx={{ flexGrow: 1, flexBasis: 0, position: 'relative' }}>
                <Box sx={{ position: 'absolute', bottom: 0, height: { xs: 225, lg: 250 }, width: '100%', display: 'flex', justifyContent: 'end', paddingRight: { xs: 0, lg: 2 } }}>
                    <Image src={data.img} alt='singer' style={{ height: '100%', width: 'auto' }} />
                </Box>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 1, height: '55%', background: `linear-gradient(to top, ${data.backgroundShadow}, rgba(16, 24, 32, 0))`, zIndex: 0 }} />
        </Box>
    );
};

export default Banner;