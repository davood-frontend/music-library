'use client'
import React, { createContext, useState, useContext } from "react";
type contextType = {
    currentSong: music_type,
    setCurrentSong: React.Dispatch<React.SetStateAction<music_type>>

}
export const MainContext = createContext<contextType | null>(null)
import { music_type } from "../constants/musics";
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentSong, setCurrentSong] = useState<music_type>(
        {
            id: 1,
            name: "After Dark",
            artist: {
                id: 1,
                name: "mr kitty",
            },
            album: {
                id: "7890ijkl",
                name: "Album Title",
                release_date: "2023-01-01",
                cover_image: "https://example.com/album_cover.jpg"
            },
            duration: 257,
            song_url: 'https://gaming-project.storage.iran.liara.space/songs/Mr%20Kitty%20-%20After%20Dark%20%28%20GandomMusic.ir%20%29.mp3',
            cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/after-dark.jpg',
        },
    )
    return (
        <MainContext.Provider value={{ currentSong, setCurrentSong }}>
            {children}
        </MainContext.Provider>
    )
}
export const useMainContext = () => {
    const context = useContext(MainContext)
    if (!context) {
        throw new Error("can't find the context")
    }
    return context
}