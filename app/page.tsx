import React from 'react';
import { Box, Avatar } from '@mui/material';
import mainBG from '@/app/assets/main-bg.jpg'
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2'
const page = () => {
  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100dvh' }}>
      <Avatar variant='rounded' sx={{ height: 1, width: 1, borderRadius: 0, position: 'absolute', top: 0, zIndex: -1 }}>
        <Image src={mainBG} alt='background picture' style={{ objectFit: 'cover', filter: 'brightness(90%) blur(2px)' }} fill />
      </Avatar>
      <Box sx={{ height: 600, width: 1200, borderRadius: 10, p: 3 }} className='blur-layer'>
        <Grid container sx={{ height: 1 }} rowSpacing={1} columnSpacing={2}>
          <Grid xs={3}>
            <Box sx={{ p:1.5}} className='black-blur'>
             Distinctio reiciendis, libero beatae voluptatem earum corrupti?
            </Box>
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