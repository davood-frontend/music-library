'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';
import Song from './Song';
import { useMainContext } from '@/app/context/mainContext';

const Songs = () => {
    const { currentAlbum } = useMainContext()
    // const finder = (id: number) => {
    //     const clone = [...data]
    //     const found = clone.findIndex(item => item.id === id)
    //     clone[found].favorite = !clone[found].favorite
    //     setData(clone)
    // }

    return (
        <Box sx={{ px: { xs: 0.5, lg: 2 }, pt: { xs: 2.5, lg: 2 }, flexGrow: 1, flexBasis: 0, display: 'flex', flexDirection: 'column' }}>
            <Typography marginLeft={{ xs: 1, lg: 0 }}>
                {currentAlbum.title}
            </Typography>
            <Box sx={{ overflow: 'auto', flexGrow: 1, flexBasis: 0, mt: 1.5, pb: 1 }}>
                {currentAlbum.musics?.map((item, index) => <Song key={index} counter={index} data={item} />)}
            </Box>
        </Box>
    );
};

export default Songs;