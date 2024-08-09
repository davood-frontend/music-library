import React from 'react';
import DarkBlurBg from '../../common/DarkBlurBg';
import Banners from './Banners';
import Songs from './Songs';

const CurrentAlbum = () => {
    return (
        <DarkBlurBg disabledPX={true} sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
            <Banners />
            <Songs />
        </DarkBlurBg>
    );
};

export default CurrentAlbum;