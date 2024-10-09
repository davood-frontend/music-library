'use client'
import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import SpeakerIcon from '@mui/icons-material/Speaker';
import TuneIcon from '@mui/icons-material/Tune';
import LaptopIcon from '@mui/icons-material/Laptop';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const SongOptions = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: { lg: 'end' } }}>
                <IconButton>
                    <SplitscreenIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton>
                    <SpeakerIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton>
                    <TuneIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton>
                    <LaptopIcon sx={{ fontSize: 18 }} />
                </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', lg: 'none' }, justifyContent: { xs: 'end', sm: 'center' }, columnGap: { xs: 1, sm: 0 } }}>
                <IconButton size='small'>
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton size='small' onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <SplitscreenIcon sx={{ fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText>
                            Stereo
                        </ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <SpeakerIcon sx={{ fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText>
                            Speaker
                        </ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <TuneIcon sx={{ fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText>
                            Adjust
                        </ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <LaptopIcon sx={{ fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText>
                            Background
                        </ListItemText>
                    </MenuItem>

                </Menu>
            </Box>
        </>
    );
};

export default SongOptions;