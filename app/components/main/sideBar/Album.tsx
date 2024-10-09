'use client'
import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import Image from 'next/image';
import { albumType } from '@/app/constants/albums-data';
import { useMainContext } from '@/app/context/mainContext';
const Album = ({ data }: { data: albumType }) => {
    const { setCurrentAlbum, setDrawerOpen } = useMainContext()
    const handleClick = () => {
        setCurrentAlbum(data)
        setDrawerOpen(false)
    }
    return (
        <Box sx={{ display: 'flex', mt: 2, cursor: 'pointer' }} onClick={handleClick}>
            <Avatar variant='rounded'>
                <Image src={data.cover} fill style={{ objectFit: 'cover' }} alt='album cover' />
            </Avatar>
            <Box sx={{ marginLeft: { xs: 1, lg: 1.5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant='subtitle2' sx={{ fontSize: 13 }}>{data.title}</Typography>
                <Typography variant='caption'>{data.genre}</Typography>
            </Box>
        </Box>
    );
};

export default Album;