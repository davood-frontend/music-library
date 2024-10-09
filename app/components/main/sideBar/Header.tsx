'use client'
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import AlbumIcon from '@mui/icons-material/Album';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMainContext } from '@/app/context/mainContext';
import ResponsiveIcon from '../../common/ResponsiveIcon';
const Header = () => {
    const { setDrawerOpen, setCurrentAlbum } = useMainContext()
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1 }}>
            <Box sx={{ display: 'flex' }}>
                <ResponsiveIcon Icon={AlbumIcon} color='info' />
                <Typography sx={{ marginLeft: 1 }}>Your albums</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <IconButton size='small' onClick={() => setDrawerOpen(true)}>
                    <ResponsiveIcon Icon={AddIcon} />
                </IconButton>

                <IconButton size='small'>
                    <ResponsiveIcon Icon={ArrowForwardIcon} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Header;