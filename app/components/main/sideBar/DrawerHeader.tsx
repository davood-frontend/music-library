import React from 'react';
import { Box, Typography } from '@mui/material';
import AlbumIcon from '@mui/icons-material/Album';

const DrawerHeader = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1 }}>
            <Box sx={{ display: 'flex' }}>
                <AlbumIcon sx={{ marginRight: 1, color: 'whiteSmoke' }} />
                <Typography>Your albums</Typography>
            </Box>
        </Box>
    );
};

export default DrawerHeader;