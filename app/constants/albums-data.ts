import { musics, suggestions } from "./musics";
import cloud from '@/app/assets/albums/cloud.jpg'
import chinees from '@/app/assets/albums/chinees.jpg'
import bridge from '@/app/assets/albums/bridge.jpg'
import airport from '@/app/assets/albums/airport.jpg'
import lightning from '@/app/assets/albums/lightning.jpg'
import blackHole from '@/app/assets/albums/blackHole.png'
import { StaticImageData } from "next/image";
import { musics_type } from "./musics";
export type albumType = {
    cover: StaticImageData,
    title: string,
    genre: string,
    musics: musics_type
}
export type albumsType = albumType[]
export const albums = [
    {
        cover: bridge,
        title: 'awesome melody',
        genre: 'classical',
        musics: musics.slice(10, 15)
    },
    {
        cover: chinees,
        title: 'Lighter club',
        genre: 'pop',
        musics: musics.slice(7, 10)
    },
    {
        cover: cloud,
        title: 'Ultimate time',
        genre: 'blues',
        musics: musics.slice(0, 7)
    },
    {
        cover: airport,
        title: 'The Golden Ocean',
        genre: 'Alternative',
        musics: musics.slice(15, 16)
    },
    {
        cover: blackHole,
        title: 'Your screams',
        genre: 'Funk',
        musics: musics.slice(16, 19)
    },
    {
        cover: lightning,
        title: 'so long era',
        genre: 'Gospel',
        musics: musics.slice(19, 24)
    },

] as albumsType
export const allSongs = {
    title: 'All songs',
    musics: musics,
    cover: lightning,
    genre: ''
} as albumType
export const SuggestedSongs = {
    title: 'Suggested songs',
    musics: suggestions,
    cover: lightning,
    genre: ''
} as albumType