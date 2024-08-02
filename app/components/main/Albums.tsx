import React from 'react';
import DarkBlurBg from '../common/DarkBlurBg';
import { Box, Typography, IconButton,Chip } from '@mui/material';
import Image from 'next/image';
import AlbumIcon from '@mui/icons-material/Album';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Albums = () => {
    return (
        <DarkBlurBg sx={{ marginTop: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1 }}>
                <Box sx={{ display: 'flex' }}>
                    <AlbumIcon sx={{ marginRight: 1 }} />
                    <Typography>Your album</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <IconButton size='small'>
                        <AddIcon />
                    </IconButton>

                    <IconButton size='small'>
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ mt: 1.5 }}>
                <Chip label='Playlist' sx={{ backgroundColor: '#8f8f8f', px: 0.5, marginRight: 1, opacity: '0.6' }} size='small' />
                <Chip label='Listening' sx={{ backgroundColor: '#8f8f8f', px: 0.5, opacity: '0.6' }} size='small' />
            </Box>

        </DarkBlurBg>

    );
};

export default Albums;