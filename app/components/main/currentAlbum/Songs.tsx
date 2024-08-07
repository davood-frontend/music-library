import React from 'react';
import { Box, Typography } from '@mui/material';

import Song from './Song';
const myAray = new Array(120).fill('lol')
const Songs = () => {


    return (
        <Box sx={{ px: 3, pt: 2, pb: 1, flexGrow: 1, flexBasis: 0, display: 'flex', flexDirection: 'column' }}>
            <Typography>
                Your Songs
            </Typography>
            <Box sx={{ overflow: 'auto', flexGrow: 1, flexBasis: 0, mt: 1 }}>
                {myAray.map((item, index) => <Song key={index} counter={index} />)}

            </Box>
        </Box>
    );
};

export default Songs;