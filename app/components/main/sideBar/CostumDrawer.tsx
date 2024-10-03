'use client'
import React from 'react';
import { Box, Drawer } from '@mui/material';
import { useMainContext } from '@/app/context/mainContext';
import Albums from './Albums';
const CostumDrawer = () => {
    const { drawerOpen } = useMainContext()
    return (
        <Drawer open={drawerOpen} variant='persistent'>
            <Box sx={{ width: 300 }} />
            <Albums inDrawer={true} />
        </Drawer>
    );
};

export default CostumDrawer;