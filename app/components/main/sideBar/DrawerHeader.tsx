'use client'
import React from 'react';
import { Box, Typography, IconButton, Chip, Button } from '@mui/material';
import AlbumIcon from '@mui/icons-material/Album';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMainContext } from '@/app/context/mainContext';
import CloseIcon from '@mui/icons-material/Close';

const DrawerHeader = () => {
    const { setDrawerOpen, setCurrentAlbum } = useMainContext()
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1 }}>
            <Box sx={{ display: 'flex' }}>
                <AlbumIcon sx={{ marginRight: 1, color: 'whiteSmoke' }} />
                <Typography>Your albums</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <IconButton size='small' onClick={() => setDrawerOpen(false)}>
                    <CloseIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default DrawerHeader;