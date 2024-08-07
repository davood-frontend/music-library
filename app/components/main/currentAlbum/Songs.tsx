'use client'
import React, { useRef } from 'react';
import { Box, IconButton, Typography, Button, Tabs, Tab, Avatar } from '@mui/material';
import { TouchRippleProps, TouchRippleActions } from '@mui/material/ButtonBase/TouchRipple';
import Image from 'next/image';
import cover from '@/app/assets/albums/song-cover.jpg'
import Grid from '@mui/material/Unstable_Grid2'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
import Song from './Song';
const myAray = new Array(120).fill('lol')
const arr = [1, 2, 3, 4, 5, 4, 3, 2, 21, 1]
const Songs = () => {
    const click = (e: MouseEvent) => {
        console.log('clicked')
    }


    const rippleRef = useRef<TouchRippleActions>()

    //checks to see if the click was on the song itself or on a button on the song
    const handleMouseDown = (event: any) => {
        if (rippleRef.current) {
            if (!event.target.className.baseVal) {
                rippleRef.current.start(event);
            }
        }
    };

    const handleMouseUp = () => {
        if (rippleRef.current) {
            rippleRef.current.stop();
        }
    };

    return (
        <Box sx={{ px: 3, py: 2, flexGrow: 1, flexBasis: 0, display: 'flex', flexDirection: 'column' }}>
            <Typography>
                Your Library
            </Typography>
            <Box sx={{ overflow: 'auto', flexGrow: 1, flexBasis: 0 }}>
                {myAray.map((item, index) => <Song key={index} counter={index} />)}

            </Box>
        </Box>
    );
};

export default Songs;