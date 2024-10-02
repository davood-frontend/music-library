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
        <Box sx={{ px: 2, pt: 2, flexGrow: 1, flexBasis: 0, display: 'flex', flexDirection: 'column' }}>
            <Typography>
                {currentAlbum.title}
            </Typography>
            <Box sx={{ overflow: 'auto', flexGrow: 1, flexBasis: 0, mt: 1, pb: 1 }}>
                {currentAlbum.musics?.map((item, index) => <Song key={index} counter={index} data={item} />)}
            </Box>
        </Box>
    );
};

export default Songs;