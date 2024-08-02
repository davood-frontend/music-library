import React from 'react';
import { Box } from '@mui/material';
import { SxProps } from '@mui/material';
const DarkBlurBg = ({ children, sx }: { children: React.ReactNode, sx?: SxProps }) => {
    return (
        <Box sx={{ p: 1.5, borderRadius: 3.5, ...sx }} className='black-blur'>
            {children}
        </Box>
    );
};

export default DarkBlurBg;