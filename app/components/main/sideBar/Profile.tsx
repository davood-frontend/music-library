'use client'
import React from 'react';
import DarkBlurBg from '../../common/DarkBlurBg';
import { Box, Avatar, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import pfp from '@/app/assets/pfp.jpg'
import CloseIcon from '@mui/icons-material/Close';
import { useMainContext } from '@/app/context/mainContext';
const Profile = ({ inDrawer }: { inDrawer?: boolean }) => {
    const { setDrawerOpen } = useMainContext()

    return (
        <DarkBlurBg disabledRadius={inDrawer} sx={{ display: { xs: inDrawer ? 'flex' : 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', paddingLeft: { xs: 2, md: 1.5 }, pt: { xs: 2, md: 1.5 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', }}>
                <Avatar sx={{ height: 50, width: 50, marginRight: 2 }}>
                    <Image src={pfp} alt='background picture' style={{ objectFit: 'cover' }} fill />
                </Avatar>
                <Box>
                    <Typography variant='subtitle2' color='textPrimary'>John doe</Typography>
                    <Typography variant='caption' color='textPrimary'>Pro membership</Typography>
                </Box>
            </Box>
            <Box sx={{ display: inDrawer ? 'block' : 'none' }}>
                <IconButton size='small' onClick={() => setDrawerOpen(false)}>
                    <CloseIcon />
                </IconButton>
            </Box>
        </DarkBlurBg>
    );
};

export default Profile;