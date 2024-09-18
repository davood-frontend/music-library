'use client'
import { Box, Avatar, IconButton, Typography, Slider } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
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
import { useMainContext } from '@/app/context/mainContext';
//change the style of iconButtons
const audio = new Audio('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3')
console.log(audio)

const duration = 200
const Action = () => {
    const data = useMainContext()
    const { currentSong } = data
    const audioRef = useRef<HTMLAudioElement>(null);
    const onSliderChange = () => {
        console.log('lol')
    }
    const [position, setPosition] = useState(0)
    const [mode, setMode] = useState('none')
    const [paused, setPaused] = useState(true)
    const handlePlayPause = () => {
        if (audioRef.current) {
            if (!paused) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setPaused(!paused);
        }
    };
    const handleSeek = (newTime: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setPosition(newTime)
        }
    };
    const formatDuration = (value: number) => {
        const minute = Math.floor(value / 60);
        const secondLeft = Math.floor(value - minute * 60)
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }

    //fix the performance + UI
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.play();
            setPaused(false);
            console.log(audioRef.current.currentTime)

            // setPaused(!paused);
        }
    }, [currentSong])
    useEffect(() => {
        const intervalId: number = window.setInterval(() => {
            if (audioRef.current) {
                setPosition(audioRef.current.currentTime)
            }
        }, 1000);
        setPaused(true);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 1, height: 1, px: 3 }}>
            <Box sx={{ display: 'flex', columnGap: 2, alignItems: 'center' }}>
                <Avatar variant='rounded'>
                    <Image src={currentSong.cover_url} fill style={{ objectFit: 'cover' }} alt='song-cover' />
                </Avatar>
                <Box>
                    <Typography variant='subtitle2'>{currentSong.name}</Typography>
                    <Typography variant='caption'>{currentSong.artist.name}</Typography>
                </Box>
                <Box>
                    <IconButton size='small'>
                        <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton disableRipple sx={mode === 'shuffle' ? { border: '1px solid white' } : { pb: 0 }} onClick={() => setMode('shuffle')}>
                        <ShuffleIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                    <IconButton disableRipple sx={{ pb: 0 }}>
                        <SkipPreviousIcon sx={{ fontSize: 25 }} />
                    </IconButton>
                    <IconButton sx={{ pb: 0 }} onClick={handlePlayPause} disableRipple>
                        {paused ? <PlayCircleIcon sx={{ fontSize: 35 }} /> : <PauseCircleIcon sx={{ fontSize: 35 }} />}
                    </IconButton>
                    <IconButton disableRipple sx={{ pb: 0 }}>
                        <SkipNextIcon sx={{ fontSize: 25 }} />
                    </IconButton>
                    <IconButton disableRipple sx={mode === 'repeat' ? { border: '1px solid white' } : { pb: 0 }} onClick={() => setMode('repeat')}>
                        <RepeatIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1.5, position: 'relative' }}>
                    <audio ref={audioRef} loop key={currentSong.song_url}>
                        <source src={currentSong.song_url} type='audio/mp3' />
                    </audio>

                    <Typography variant='caption'>{formatDuration(position)}</Typography>
                    <Slider value={position} className='action-slider' color='info' min={0} max={currentSong.duration} step={1} onChange={(_, value) => handleSeek(value as number)} size='small' sx={{ width: 500, height: 3, pt: 0 }} />
                    <Typography variant='caption'> -{formatDuration(currentSong.duration - position)}</Typography>
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