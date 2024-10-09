'use client'
import React, { useRef, useState } from 'react';
import { Box, IconButton, Typography, Avatar, Menu, MenuItem, SvgIconTypeMap } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from 'next/image';
import { music_type } from '@/app/constants/musics';
import { TouchRippleActions } from '@mui/material/ButtonBase/TouchRipple';
import { useMainContext } from '@/app/context/mainContext';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ResponsiveIcon from '../../common/ResponsiveIcon';
const Song = ({ data }: { data: music_type }) => {
    const [isFavorite, setIsFavorite] = useState(data.favorite)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: MouseEvent) => {
        event.stopPropagation()
        setAnchorEl(null);
    };
    const handleMouseUp = () => {
        if (rippleRef.current) {
            rippleRef.current.stop();
        }
    };
    window.addEventListener('mouseup', handleMouseUp)

    const { setCurrentSong } = useMainContext()
    const rippleRef = useRef<TouchRippleActions>()
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
    return (
        <Box sx={{ cursor: 'pointer', position: 'relative', borderRadius: 1, py: 1.5 }} onMouseDown={handleMouseDown}>
            <TouchRipple ref={rippleRef} />
            <Avatar variant='rounded' sx={{ height: { xs: 150, lg: 250 }, width: 1, borderRadius: { xs: 2, lg: 4 }, zIndex: -1 }}>
                <Image src={data.cover_url} alt='song cover' fill style={{ objectFit: 'cover' }} />
            </Avatar>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ mt: 0.7, paddingLeft: 1, display: 'flex', flexDirection: "column", alignContent: 'start' }}>
                    <Typography variant='subtitle2' gutterBottom>{data.name}</Typography>
                    <Typography variant='caption'>{data.artist.name}</Typography>
                </Box>
                <Box>
                    <IconButton size='small' onClick={() => setIsFavorite(!isFavorite)}>
                        {isFavorite ? <ResponsiveIcon color='error' Icon={FavoriteIcon} /> : <ResponsiveIcon Icon={FavoriteBorderIcon} />}
                    </IconButton>
                    <IconButton size='small' onClick={handleClick} sx={{ fontSize: { xs: 20, lg: 24 } }}>
                        <ResponsiveIcon Icon={MoreHorizIcon} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem>Share</MenuItem>
                        <MenuItem>Download</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
};

export default Song;