import React from 'react';
import DarkBlurBg from '../../common/DarkBlurBg';
import { Box, Typography } from '@mui/material';
import Song from './Song';
import { suggestions } from '@/app/constants/musics'

const Mix = () => {

    return (
        <DarkBlurBg sx={{ mb: 2 }}>
            <Box mb={1}>
                <Typography variant='body1' >Suggested Songs</Typography>
            </Box>
            {suggestions.map((item, index) => (
                <Song key={index} data={item} />
            ))}
        </DarkBlurBg>
    );
};

export default Mix;