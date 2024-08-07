import React from 'react';
import DarkBlurBg from '../../common/DarkBlurBg';
import Banner from './Banner';
import Songs from './Songs';

const CurrentAlbum = () => {
    return (
        <DarkBlurBg disabledPX={true} sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
            <Banner />
            <Songs />
        </DarkBlurBg>
    );
};

export default CurrentAlbum;