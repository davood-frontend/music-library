
import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';

import Song from './Song';
const sampleArray = [] as string[]
const first = ['my', 'your', 'his', 'her', 'thir', 'our']
const second = ['happy', 'sad', 'emotional', 'nice', 'fucked up', 'disgusting', 'best', 'worst', 'sweet']
const third = ['night', 'days', 'winter', 'moments', 'seconds', 'times', 'smiles', 'emotions', 'words', 'summer', 'sunsets']
const randomIndex = (words: string[]) => {
    const Random = Math.floor(Math.random() * words.length)
    return Random
}
for (let i = 0; i <= 120; i++) {
    const firstRandomWord = first[randomIndex(first)]
    const secondRandomWord = second[randomIndex(second)]
    const thirdRandomWord = third[randomIndex(third)]
    const finalWord = firstRandomWord + ' ' + secondRandomWord + ' ' + thirdRandomWord
    sampleArray.push(finalWord)
}
const Songs = () => {

    return (
        <Box sx={{ px: 2, pt: 2, flexGrow: 1, flexBasis: 0, display: 'flex', flexDirection: 'column' }}>
            <Typography>
                Your Songs
            </Typography>
            <Box sx={{ overflow: 'auto', flexGrow: 1, flexBasis: 0, mt: 1, pb: 1 }}>
                {sampleArray?.map((item, index) => <Song key={index} counter={index} data={item} />)}
            </Box>
        </Box>
    );
};

export default Songs;