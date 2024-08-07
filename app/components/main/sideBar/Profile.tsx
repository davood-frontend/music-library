import React from 'react';
import DarkBlurBg from '../../common/DarkBlurBg';
import { Box, Avatar, Typography } from '@mui/material';
import Image from 'next/image';
import pfp from '@/app/assets/pfp.jpg'

const Profile = () => {
    return (
        <DarkBlurBg>
            <Box sx={{ display: 'flex', alignItems: 'center', }}>
                <Avatar sx={{ height: 50, width: 50, marginRight: 2 }}>
                    <Image src={pfp} alt='background picture' style={{ objectFit: 'cover' }} fill />
                </Avatar>
                <Box>
                    <Typography variant='subtitle2' color='textPrimary'>John doe</Typography>
                    <Typography variant='caption' color='textPrimary'>Front-end dev</Typography>
                </Box>
            </Box>
        </DarkBlurBg>
    );
};

export default Profile;