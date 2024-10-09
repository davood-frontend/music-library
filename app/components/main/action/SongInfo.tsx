import React from 'react';
import { Box, Avatar, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useMainContext } from '@/app/context/mainContext';
const SongInfo = () => {
    const data = useMainContext()
    const { currentSong } = data
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'start', sm: 'center', lg: 'start' }, columnGap: 1.5 }}>
            <Avatar variant='rounded'>
                <Image src={currentSong.cover_url} fill style={{ objectFit: 'cover' }} alt='song-cover' />
            </Avatar>
            <Box>
                <Typography variant='subtitle2'>{currentSong.name}</Typography>
                <Typography variant='caption'>{currentSong.artist.name}</Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                <IconButton size='small'>
                    <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default SongInfo;