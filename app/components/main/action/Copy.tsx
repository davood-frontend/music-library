'use client'
import { Box, Avatar, IconButton, Typography, Slider } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import cover from '@/app/assets/albums/song-cover.jpg'

import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import SpeakerIcon from '@mui/icons-material/Speaker';
import TuneIcon from '@mui/icons-material/Tune';
import LaptopIcon from '@mui/icons-material/Laptop';
const duration = 200
const Action = () => {
    const onSliderChange = () => {
        console.log('lol')
    }
    const [position, setPosition] = useState(32)
    const [paused, setPaused] = useState(true)
    const handlePause = () => {
        setPaused(!paused)
    }
    const formatDuration = (value: number) => {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 1, height: 1, px: 3 }}>
            <Box sx={{ display: 'flex', columnGap: 2, alignItems: 'center' }}>
                <Avatar variant='rounded'>
                    <Image src={cover} fill style={{ objectFit: 'cover' }} alt='song-cover' />
                </Avatar>
                <Box>
                    <Typography variant='subtitle2'>lovely with khalid</Typography>
                    <Typography variant='caption'>Billie eilish</Typography>
                </Box>
                <Box>
                    <IconButton size='small'>
                        <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton disableRipple sx={{ pb: 0 }}>
                        <ShuffleIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                    <IconButton disableRipple sx={{ pb: 0 }}>
                        <SkipPreviousIcon sx={{ fontSize: 25 }} />
                    </IconButton>
                    <IconButton sx={{ pb: 0 }} onClick={handlePause} disableRipple>
                        {paused ? <PlayCircleIcon sx={{ fontSize: 35 }} /> : <PauseCircleIcon sx={{ fontSize: 35 }} />}
                    </IconButton>
                    <IconButton disableRipple sx={{ pb: 0 }}>
                        <SkipNextIcon sx={{ fontSize: 25 }} />
                    </IconButton>
                    <IconButton disableRipple sx={{ pb: 0 }}>
                        <RepeatIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}>
                    <Typography variant='caption'>{formatDuration(position)}</Typography>
                    <Slider value={position} color='info' min={0} max={duration} step={1} onChange={(_, value) => setPosition(value as number)} size='small' sx={{ width: 500, height: 3, pt: 0 }} />
                    <Typography variant='caption'> -{formatDuration(duration - position)}</Typography>
                </Box>
            </Box>
            <Box>
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
        </Box>
    );
};

export default Action;