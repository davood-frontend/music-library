'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton, Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { TouchRippleActions } from '@mui/material/ButtonBase/TouchRipple';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
import { music_type } from '@/app/constants/musics';
import { useMainContext } from '@/app/context/mainContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import ResponsiveIcon from '../../common/ResponsiveIcon';
const Song = ({ counter, data }: { counter: number, data: music_type }) => {
    const theme = useTheme()
    const smallerThanLg = useMediaQuery(theme.breakpoints.down('lg'))
    const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm'))
    const { setCurrentSong } = useMainContext()
    const rippleRef = useRef<TouchRippleActions>()
    const [isFavorite, setIsFavorite] = useState(data.favorite)

    //checks to see if the click was on the song itself or on a button on the song
    const handleMouseDown = (event: any) => {

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

    const numberFormatter = (number: number) => {
        let minutes = Math.floor(number / 60)
        let seconds = number - (minutes * 60)
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }
    const singerNameFormatter = (data: String) => {
        let conditionalNumber: number;
        if (smallerThanLg) {
            conditionalNumber = 5
        } else {
            conditionalNumber = 8
        }
        let newString = data.slice(0, conditionalNumber)
        if (data.length > conditionalNumber) {
            newString += '...'
        }
        return newString
    }
    const songNameFormatter = (data: String) => {
        let conditionalNumber: number;
        if (smallerThanSm) {
            conditionalNumber = 10
        } else {
            conditionalNumber = 16
        }
        let newString = data.slice(0, conditionalNumber)
        if (data.length > conditionalNumber) {
            newString += '...'
        }
        return newString
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        console.log(data)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);


    return (
        <Box sx={{ width: 1, display: 'flex', justifyContent: 'start', alignItems: 'center', borderRadius: 0.8, p: 1, paddingLeft: 0, overflow: 'hidden', cursor: {sm:'pointer'}, position: 'relative', }} onMouseDown={handleMouseDown}>
            <TouchRipple ref={rippleRef} />
            <Grid container sx={{ alignItems: 'center', width: 1 }}>
                <Grid xs={1}>
                    <Typography sx={{ textAlign: counter < 99 ? 'center' : 'start' }} variant='subtitle2'>{counter + 1}</Typography>
                </Grid>
                <Grid xs={1}>
                    <Avatar variant='rounded'>
                        <Image src={data.cover_url} fill style={{ objectFit: 'cover' }} alt='album cover' />
                    </Avatar>
                </Grid>
                <Grid xs={4.5} >
                    <Box sx={{ marginLeft: { xs: 2.5, md: 1.5 } }}>
                        <Typography variant='subtitle2' sx={{ fontSize: 13 }}>{songNameFormatter(data.name)}</Typography>
                    </Box>
                </Grid>
                <Grid xs={2}>
                    <Typography variant='subtitle2'>{singerNameFormatter(data.artist.name)}</Typography>
                </Grid>
                <Grid xs={1}>
                    <IconButton size='small' onClick={() => setIsFavorite(!isFavorite)}>
                        {isFavorite ? <ResponsiveIcon Icon={FavoriteIcon} color='error' /> : <ResponsiveIcon Icon={FavoriteBorderIcon} />}
                    </IconButton>
                </Grid>
                <Grid xs={1.5} textAlign='center'>
                    <Typography variant='subtitle2'>{numberFormatter(data.duration)}</Typography>
                </Grid>
                <Grid xs={1}>
                    <IconButton size='small'
                        onClick={handleClick}
                    >
                        <ResponsiveIcon Icon={MoreHorizIcon} className='inButton-icon' />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}

                    >
                        <MenuItem onClick={handleClose}>Share</MenuItem>
                        <MenuItem onClick={handleClose}>Download</MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Song;