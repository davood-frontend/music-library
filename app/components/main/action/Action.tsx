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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Unstable_Grid2'
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
        <Grid container sx={{ alignItems: 'center' }}>

            <Grid xs={6} sm={3} md={2} lg={2.5} sx={{ mt: { xs: 1.5, sm: 0 }, paddingLeft: { xs: 3, sm: 0, lg: 3 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'start', sm: 'center', lg: 'start' }, columnGap: 1.5 }}>
                    <Avatar variant='rounded'>
                        <Image src={currentSong.cover_url} fill style={{ objectFit: 'cover' }} alt='song-cover' />
                    </Avatar>
                    <Box>
                        <Typography variant='subtitle2'>{currentSong.name}</Typography>
                        <Typography variant='caption'>{currentSong.artist.name}</Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                        <IconButton size='small'>
                            <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                    </Box>
                </Box>
            </Grid>

            <Grid order={{ xs: 2, sm: 1 }} xs={12} sm={7.5} md={8.5} lg={7} sx={{ mt: { xs: 1.5, sm: 0 } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', order: { xs: 2, sm: 1 } }}>
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

                    <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1.5, position: 'relative', width: 1, justifyContent: 'center', order: { xs: 1, sm: 2 } }}>
                        {/* <audio ref={audioRef} loop key={currentSong.song_url}>
                         <source src={currentSong.song_url} type='audio/mp3' />
                     </audio> */}

                        <Typography variant='caption'>{formatDuration(position)}</Typography>
                        <Slider value={position} className='action-slider' color='info' min={0} max={currentSong.duration} step={1} onChange={(_, value) => handleSeek(value as number)} size='small' sx={{ width: { xs: 8 / 10, sm: 7 / 10, md: 9 / 10 }, height: 3, pt: 0 }} />
                        <Typography variant='caption'> -{formatDuration(currentSong.duration - position)}</Typography>
                    </Box>
                </Box>

            </Grid>

            <Grid order={{ xs: 1, sm: 2 }} xs={6} sm={1.5} md={1.5} lg={2.5} sx={{ paddingRight: { xs: 3, sm: 0, lg: 3 } }}>
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
                    <IconButton size='small'>
                        <MoreVertIcon />
                    </IconButton>

                </Box>
            </Grid>

        </Grid>
    );
};

export default Action;