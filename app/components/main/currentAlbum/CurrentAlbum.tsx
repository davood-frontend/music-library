import React from 'react';
import DarkBlurBg from '../../common/DarkBlurBg';
import Banners from './Banners';
import Songs from './Songs';

const CurrentAlbum = () => {
    return (
        <DarkBlurBg disabledPX={true} disabledRadius={true} sx={{ display: 'flex', flexDirection: 'column', height: 1, borderRadius: { xs: 0, sm: '1rem 1rem 0 0' }, pb: 0 }} >
            <Banners />
            <Songs />
        </DarkBlurBg>
    );
};

export default CurrentAlbum;