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
const Song = ({ counter }: { counter: number }) => {
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
        <Box sx={{ width: 1, display: 'flex', justifyContent: 'start', alignItems: 'center', borderRadius: 0.8, p: 1, overflow: 'hidden', cursor: 'pointer', position: 'relative', }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <TouchRipple ref={rippleRef} />
            <Grid container sx={{ alignItems: 'center', width: 1 }}>
                <Grid xs={1}>
                    <Typography sx={{ textAlign: counter < 99 ? 'center' : 'start' }}>{counter + 1}</Typography>
                </Grid>
                <Grid xs={1}>
                    <Avatar variant='rounded'>
                        <Image src={cover} fill style={{ objectFit: 'cover' }} alt='album cover' />
                    </Avatar>
                </Grid>
                <Grid xs={5} sx={{ display: 'flex', justifyContent: 'start' }}>
                    <Box sx={{ marginLeft: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='subtitle2' sx={{ fontSize: 13 }}>My happy melodies</Typography>
                    </Box>
                </Grid>
                <Grid xs={2}>
                    <Typography variant='subtitle2'>the living...</Typography>
                </Grid>
                <Grid xs={1}>
                    <IconButton size='small'>
                        <FavoriteBorderIcon className='inButton-icon' />
                    </IconButton>
                </Grid>
                <Grid xs={1}>
                    <Typography variant='subtitle2'>3:20</Typography>
                </Grid>
                <Grid xs={1}>
                    <IconButton size='small' >
                        <MoreHorizIcon className='inButton-icon' />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Song;