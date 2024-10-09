'use client'
import React from 'react';
import { Box, Drawer } from '@mui/material';
import { useMainContext } from '@/app/context/mainContext';
import Albums from './Albums';
import Profile from './Profile';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const CostumDrawer = () => {
    const theme = useTheme()
    const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm'))
    const { drawerOpen } = useMainContext()
    return (
        <Drawer open={drawerOpen} variant={smallerThanSm ? 'temporary' : 'persistent'}>
            <Box sx={{ width: 300 }} />
            <Profile inDrawer />
            <Albums inDrawer={true} />
        </Drawer>
    );
};

export default CostumDrawer;