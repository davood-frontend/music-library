import React from 'react';
import { Box } from '@mui/material';
import { SxProps } from '@mui/material';
const DarkBlurBg = ({ children, sx, disabledPX, disabledRadius }: { children: React.ReactNode, sx?: SxProps, disabledPX?: boolean, disabledRadius?: boolean }) => {
    return (
        <Box sx={{ py: 1.5, px: disabledPX ? 0 : 1.5, borderRadius: disabledRadius ? 0 : 3.5, ...sx }} className='black-blur'>
            {children}
        </Box>
    );
};

export default DarkBlurBg;