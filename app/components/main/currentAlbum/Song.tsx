'use client'
import React, { useRef } from 'react';
import { Box, IconButton, Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { TouchRippleActions } from '@mui/material/ButtonBase/TouchRipple';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
import { music_type } from '@/app/constants/musics';
import { useMainContext } from '@/app/context/mainContext';
const Song = ({ counter, data }: { counter: number, data: music_type }) => {
    const { setCurrentSong } = useMainContext()
    const rippleRef = useRef<TouchRippleActions>()

    //checks to see if the click was on the song itself or on a button on the song
    const handleMouseDown = (event: any) => {

        console.log(event.target.tagName)
        if (event.target.tagName === 'svg') {
            return
        }
        if (event.target.tagName === 'BUTTON') {
            return
        }
        if (event.target.tagName === 'path') {
            return
        }
        if (event.target.tagName === 'LI') {
            return
        }
        if (event.target.className.includes('MuiButtonBase-root')) {
            return
        }
        if (event.target.className.includes('MuiBackdrop-root')) {
            return
        }
        if (rippleRef.current) {
            rippleRef.current.start(event);
            setCurrentSong(data)
        }
    };

    const handleMouseUp = () => {
        if (rippleRef.current) {
            rippleRef.current.stop();
        }
    };
    window.addEventListener('mouseup', handleMouseUp)

    const numberFormatter = (number: number) => {
        let minutes = Math.floor(number / 60)
        let seconds = number - (minutes * 60)
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }
    const nameFormatter = (data: String) => {
        let newString = data.slice(0, 8)
        if (data.length > 8) {
            newString += '...'
        }
        return newString
    }
    const songNameFormatter = (data: String) => {
        let newString = data.slice(0, 16)
        if (data.length > 16) {
            newString += '...'
        }
        return newString
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: MouseEvent) => {
        event.stopPropagation()
        setAnchorEl(null);
    };

    return (
        <Box sx={{ width: 1, display: 'flex', justifyContent: 'start', alignItems: 'center', borderRadius: 0.8, p: 1, overflow: 'hidden', cursor: 'pointer', position: 'relative', }} onMouseDown={handleMouseDown}>
            <TouchRipple ref={rippleRef} />
            <Grid container sx={{ alignItems: 'center', width: 1 }}>
                <Grid xs={1}>
                    <Typography sx={{ textAlign: counter < 99 ? 'center' : 'start' }}>{counter + 1}</Typography>
                </Grid>
                <Grid xs={1}>
                    <Avatar variant='rounded'>
                        <Image src={data.cover_url} fill style={{ objectFit: 'cover' }} alt='album cover' />
                    </Avatar>
                </Grid>
                <Grid xs={5} sx={{ display: 'flex', justifyContent: 'start' }}>
                    <Box sx={{ marginLeft: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='subtitle2' sx={{ fontSize: 13 }}>{songNameFormatter(data.name)}</Typography>
                    </Box>
                </Grid>
                <Grid xs={2}>
                    <Typography variant='subtitle2'>{nameFormatter(data.artist.name)}</Typography>
                </Grid>
                <Grid xs={1}>
                    <IconButton size='small'>
                        <FavoriteBorderIcon className='inButton-icon' />
                    </IconButton>
                </Grid>
                <Grid xs={1}>
                    <Typography variant='subtitle2'>{numberFormatter(data.duration)}</Typography>
                </Grid>
                <Grid xs={1}>
                    <IconButton size='small'
                        onClick={handleClick}
                    >
                        <MoreHorizIcon className='inButton-icon' />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}

                    >
                        <MenuItem>Share</MenuItem>
                        <MenuItem>Download</MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Song;