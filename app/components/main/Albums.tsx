import React from 'react';
import DarkBlurBg from '../common/DarkBlurBg';
import { Box, Typography, IconButton, Chip, Button, Avatar } from '@mui/material';
import Image from 'next/image';
import AlbumIcon from '@mui/icons-material/Album';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import cover from '@/app/assets/albums/song-cover.jpg'
const Albums = () => {
    return (
        <DarkBlurBg sx={{ mt: 2, flexGrow: 1, flexBasis: 0, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1 }}>
                <Box sx={{ display: 'flex' }}>
                    <AlbumIcon sx={{ marginRight: 1 }} />
                    <Typography>Your album</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <IconButton size='small'>
                        <AddIcon />
                    </IconButton>

                    <IconButton size='small'>
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ mt: 1.5 }}>
                <Chip label='Playlist' sx={{ backgroundColor: 'rgba(143, 143, 143,0.6)', px: 0.5, marginRight: 1 }} size='small' />
                <Chip label='Listening' sx={{ backgroundColor: 'rgba(143, 143, 143,0.6)', px: 0.5, marginRight: 1 }} size='small' />
            </Box>
            <Box sx={{ mt: 1.7, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <IconButton size='small'>
                    <SearchIcon />
                </IconButton>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button endIcon={<ArrowDropDownIcon />} variant='text' size='small' sx={{ color: 'common.white', fontSize: 12 }}>Recent</Button>
                </Box>
            </Box>
            <Box sx={{ mt: 1, mb: 1, flexGrow: 1, flexBasis: 0, overflow: 'auto' }}>
                <Box sx={{ display: 'flex', mt: 2 }}>
                    <Avatar variant='rounded'>
                        <Image src={cover} fill style={{ objectFit: 'cover' }} alt='album cover' />
                    </Avatar>
                    <Box sx={{ marginLeft: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='subtitle2' sx={{ fontSize: 13 }}>My happy melodies</Typography>
                        <Typography variant='caption'>morning</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 2 }}>
                    <Avatar variant='rounded'>
                        <Image src={cover} fill style={{ objectFit: 'cover' }} alt='album cover' />
                    </Avatar>
                    <Box sx={{ marginLeft: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='subtitle2' sx={{ fontSize: 13 }}>My happy melodies</Typography>
                        <Typography variant='caption'>morning</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 2 }}>
                    <Avatar variant='rounded'>
                        <Image src={cover} fill style={{ objectFit: 'cover' }} alt='album cover' />
                    </Avatar>
                    <Box sx={{ marginLeft: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='subtitle2' sx={{ fontSize: 13 }}>My happy melodies</Typography>
                        <Typography variant='caption'>morning</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 2 }}>
                    <Avatar variant='rounded'>
                        <Image src={cover} fill style={{ objectFit: 'cover' }} alt='album cover' />
                    </Avatar>
                    <Box sx={{ marginLeft: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='subtitle2' sx={{ fontSize: 13 }}>My happy melodies</Typography>
                        <Typography variant='caption'>morning</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 2 }}>
                    <Avatar variant='rounded'>
                        <Image src={cover} fill style={{ objectFit: 'cover' }} alt='album cover' />
                    </Avatar>
                    <Box sx={{ marginLeft: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='subtitle2' sx={{ fontSize: 13 }}>My happy melodies</Typography>
                        <Typography variant='caption'>morning</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 2 }}>
                    <Avatar variant='rounded'>
                        <Image src={cover} fill style={{ objectFit: 'cover' }} alt='album cover' />
                    </Avatar>
                    <Box sx={{ marginLeft: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='subtitle2' sx={{ fontSize: 13 }}>My happy melodies</Typography>
                        <Typography variant='caption'>morning</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 2 }}>
                    <Avatar variant='rounded'>
                        <Image src={cover} fill style={{ objectFit: 'cover' }} alt='album cover' />
                    </Avatar>
                    <Box sx={{ marginLeft: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='subtitle2' sx={{ fontSize: 13 }}>My happy melodies</Typography>
                        <Typography variant='caption'>morning</Typography>
                    </Box>
                </Box>

            </Box>

        </DarkBlurBg>

    );
};

export default Albums;