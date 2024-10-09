'use client'
import React from 'react';
import DarkBlurBg from '../../common/DarkBlurBg';
import { Box, Typography, IconButton, Chip, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { SuggestedSongs, albums, allSongs } from '@/app/constants/albums-data';
import AppsIcon from '@mui/icons-material/Apps';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import Album from './Album';
import { useMainContext } from '@/app/context/mainContext';
import Header from './Header';
import DrawerHeader from './DrawerHeader';
const Albums = ({ inDrawer }: { inDrawer?: boolean }) => {
    const { setCurrentAlbum } = useMainContext()
    return (
        <DarkBlurBg sx={{ my: inDrawer ? 0 : 2, flexGrow: 1, flexBasis: 0, display: { xs: inDrawer ? 'flex' : 'none', md: 'flex' }, flexDirection: 'column', paddingRight: { xs: 0.5, lg: 1.5 }, paddingLeft: { xs: 1.5, md: 1, lg: 1.5 } }}>
            {!inDrawer ? <Header /> : <DrawerHeader />}
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
                {albums.map((item, index) => (
                    <Album data={item} key={index} />
                ))}
                <Box sx={{ display: 'flex', mt: 2, cursor: 'pointer' }} onClick={() => setCurrentAlbum(allSongs)}>
                    <Box sx={{ width: 40, textAlign: 'center' }}>
                        <AppsIcon sx={{ color: 'whiteSmoke', fontSize: 35 }} />
                    </Box>
                    <Box sx={{ marginLeft: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='subtitle2' sx={{ fontSize: 13 }}>All songs</Typography>
                        <Typography variant='caption'></Typography>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'flex', sm: 'none' }, mt: 2, cursor: 'pointer' }} onClick={() => setCurrentAlbum(SuggestedSongs)}>
                    <Box sx={{ width: 40, textAlign: 'center' }}>
                        <GraphicEqIcon sx={{ color: 'whiteSmoke', fontSize: 35 }} />
                    </Box>
                    <Box sx={{ marginLeft: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='subtitle2' sx={{ fontSize: 13 }}>Suggested songs</Typography>
                        <Typography variant='caption'></Typography>
                    </Box>
                </Box>

            </Box>

        </DarkBlurBg>

    );
};

export default Albums;