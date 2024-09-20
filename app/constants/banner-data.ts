import imagineDragons from '@/app/assets/banners/imagine-dragons.png'
import billie from '@/app/assets/banners/billie.png'
import bruno from '@/app/assets/banners/bruno-mars.png'
import tailor from '@/app/assets/banners/tailor-swift.png'
import justin from '@/app/assets/banners/justin-beiber.png'
import { StaticImageData } from 'next/image'
export type bannerType = {
    img: StaticImageData,
    monthlyListeners: number,
    backgroundColor: string,
    backgroundShadow: string,
    title: string,
    isFollowing: boolean
}
type bannersType = bannerType[]
export const bannerData = [
    {
        img: billie,
        monthlyListeners: 71478075,
        backgroundColor: '#8bc34a',
        backgroundShadow: '#7cb342',
        title: 'Billie Eilish',
        isFollowing: false,
    },
    {
        img: tailor,
        monthlyListeners: 121358421,
        backgroundColor: '#ffc107',
        backgroundShadow: '#ffb300',
        title: 'Tailor Swift',
        isFollowing: false,
    },
    {
        img: justin,
        monthlyListeners: 55638238,
        backgroundColor: '#3f51b5',
        backgroundShadow: '#3949ab',
        title: 'Justin Beiber',
        isFollowing: false,
    },
    {
        img: bruno,
        monthlyListeners: 33278536,
        backgroundColor: '#795548',
        backgroundShadow: '#6d4c41',
        title: 'Bruno Mars',
        isFollowing: false,
    },
    {
        img: imagineDragons,
        monthlyListeners: 60528359,
        backgroundColor: '#ff7043',
        backgroundShadow: '#f4511e',
        title: 'Imagine Dragons',
        isFollowing: false,
    },
] as bannersType