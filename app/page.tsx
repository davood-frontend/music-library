import React from 'react';
import { Box, Avatar } from '@mui/material';
import mainBG from '@/app/assets/main-bg.jpg'
import Image from 'next/image';
const page = () => {
  return (
    <Box>
      <Avatar variant='rounded' sx={{ height: '100dvh', width: '100dvw', borderRadius: 0}}>
        <Image src={mainBG} alt='background picture' style={{ objectFit: 'cover' ,filter:'brightness(90%) blur(2px)'}} fill />
      </Avatar>
    </Box>
  );
};

export default page;