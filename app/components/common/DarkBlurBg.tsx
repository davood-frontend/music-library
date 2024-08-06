import React from 'react';
import { Box } from '@mui/material';
import { SxProps } from '@mui/material';
const DarkBlurBg = ({ children, sx, disabledPX }: { children: React.ReactNode, sx?: SxProps, disabledPX?: boolean }) => {
    return (
        <Box sx={{ py: 1.5, px: disabledPX ? 0 : 1.5, borderRadius: 3.5, ...sx }} className='black-blur'>
            {children}
        </Box>
    );
};

export default DarkBlurBg;