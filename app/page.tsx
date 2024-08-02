import React from 'react';
import { Box, Avatar, Typography, IconButton ,Chip} from '@mui/material';
import mainBG from '@/app/assets/main-bg.jpg'
import pfp from '@/app/assets/pfp.jpg'
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2'
import DarkBlurBg from './components/common/DarkBlurBg';
import AlbumIcon from '@mui/icons-material/Album';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { grey } from '@mui/material/colors';

const page = () => {
  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100dvh' }}>
      <Avatar variant='rounded' sx={{ height: 1, width: 1, borderRadius: 0, position: 'absolute', top: 0, zIndex: -1 }}>
        <Image src={mainBG} alt='background picture' style={{ objectFit: 'cover', filter: 'brightness(90%) blur(2px)' }} fill />
      </Avatar>
      <Box sx={{ height: 600, width: 1200, borderRadius: 10, p: 3 }} className='blur-layer'>
        <Grid container sx={{ height: 1 }} rowSpacing={1} columnSpacing={2}>
          <Grid xs={3}>
            <DarkBlurBg>
              <Box sx={{ display: 'flex', alignItems: 'center', }}>
                <Avatar sx={{ height: 50, width: 50, marginRight: 2 }}>
                  <Image src={pfp} alt='background picture' style={{ objectFit: 'cover' }} fill />
                </Avatar>
                <Box>
                  <Typography variant='subtitle2' color='textPrimary'>John doe</Typography>
                  <Typography variant='caption' color='textPrimary'>Front-end dev</Typography>
                </Box>
              </Box>
            </DarkBlurBg>

            <DarkBlurBg sx={{ marginTop: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,pt:1}}>
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
              <Box>
                <Chip label='Playlist' sx={{backgroundColor:'#8f8f8f',px:0.5 ,marginRight:1, opacity:'0.6'}} size='small'/>
                <Chip label='Listening' sx={{backgroundColor:'#8f8f8f',px:0.5 , opacity:'0.6'}} size='small'/>
              </Box>

            </DarkBlurBg>


          </Grid>
          <Grid xs={6}>
            <Box sx={{ height: 1 }} className='black-blur'>

            </Box>
          </Grid>
          <Grid xs={3}>
            <Box sx={{ height: 1 }} className='black-blur'>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default page;