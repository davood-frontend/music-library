import React from 'react';
import DarkBlurBg from '../../common/DarkBlurBg';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import Image from 'next/image';
import cover from '@/app/assets/albums/mix.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Mix = () => {
    return (
        <DarkBlurBg>
            <Typography variant='subtitle2' >Billie Eilish Mix</Typography>
            <Box sx={{ mt: 1.5 }}>
                <Avatar variant='rounded' sx={{ height: 250, width: 1, borderRadius: 4 }}>
                    <Image src={cover} alt='song cover' fill style={{ objectFit: 'cover' }} />
                </Avatar>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ mt: 1, paddingLeft: 1 }}>
                        <Typography variant='subtitle2'>No time to die</Typography>
                        <Typography variant='caption'>Billie Eilish</Typography>
                    </Box>
                    <Box>
                        <IconButton size='small'>
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton size='small'>
                            <MoreHorizIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ mt: 1.5 }}>
                <Avatar variant='rounded' sx={{ height: 250, width: 1, borderRadius: 4 }}>
                    <Image src={cover} alt='song cover' fill style={{ objectFit: 'cover' }} />
                </Avatar>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ mt: 1, paddingLeft: 1 }}>
                        <Typography variant='subtitle2'>No time to die</Typography>
                        <Typography variant='caption'>Billie Eilish</Typography>
                    </Box>
                    <Box>
                        <IconButton size='small'>
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton size='small'>
                            <MoreHorizIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ mt: 1.5 }}>
                <Avatar variant='rounded' sx={{ height: 250, width: 1, borderRadius: 4 }}>
                    <Image src={cover} alt='song cover' fill style={{ objectFit: 'cover' }} />
                </Avatar>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ mt: 1, paddingLeft: 1 }}>
                        <Typography variant='subtitle2'>No time to die</Typography>
                        <Typography variant='caption'>Billie Eilish</Typography>
                    </Box>
                    <Box>
                        <IconButton size='small'>
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton size='small'>
                            <MoreHorizIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </DarkBlurBg>
    );
};

export default Mix;