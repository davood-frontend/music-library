import React from 'react';
import { Box, Avatar} from '@mui/material';
import mainBG from '@/app/assets/mainBg.jpg'
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';
import Profile from '@/app/components/main/sideBar/Profile';
import Albums from '@/app/components/main/sideBar/Albums';
import CurrentAlbum from './components/main/currentAlbum/CurrentAlbum';
import Mix from './components/main/mix/Mix';
import Action from './components/main/action/Action';
import CostumDrawer from './components/main/sideBar/CostumDrawer';
const page = () => {
  return (
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100dvh' }}>
      <Avatar variant='rounded' sx={{ height: 1, width: 1, borderRadius: 0, position: 'absolute', top: 0, zIndex: -1 }}>
        <Image src={mainBG} alt='background picture' style={{ objectFit: 'cover', filter: 'brightness(90%) blur(2px)' }} fill />
      </Avatar>
      <Box sx={{ height: { xs: 9 / 11, sm: 600 }, width: { xs: '100vw', sm: '90vw', lg: '80vw' }, borderTopRightRadius: { xs: 0, sm: 20, lg: 40 }, borderTopLeftRadius: { xs: 0, sm: 20, lg: 40 }, overflow: 'hidden' }} className='blur-layer'>

        <CostumDrawer />
        <Grid container height={1} columnSpacing={{ xs: 1, lg: 2 }} sx={{ px: { xs: 0, sm: 1, lg: 3 }, pt: { xs: 0, sm: 1, lg: 3 } }}>
          <Grid xs={0} sm={0} md={3} sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}>

            <Profile />
            <Albums />

          </Grid>

          <Grid xs={12} sm={8} md={6} sx={{}}>
            <CurrentAlbum />
          </Grid>

          <Grid xs={0} sm={4} md={3} sx={{ overflow: 'auto', height: 1, display: { xs: 'none', sm: 'block' } }}>
            <Mix />
          </Grid>
        </Grid>

      </Box>
      <Box sx={{ height: { xs: 2 / 11, sm: 70 }, width: { xs: '100vw', sm: '90vw', lg: '80vw' }, borderBottomRightRadius: { xs: 0, sm: 20, lg: 40 }, borderBottomLeftRadius: { xs: 0, sm: 20, lg: 40 } }} className='blur-layer-action'>
        <Action />
      </Box>
    </Box >
  );
};

export default page;