export type music_type = {
    id: number,
    name: string,
    artist: {
        id: number,
        name: string
    },
    album: {
        id: string,
        name: string,
        release_date: string,
        cover_image: string
    },
    duration: number,
    song_url: string,
    cover_url: string,
    favorite: boolean,
}
export type musics_type = music_type[]
export const musics = [
    {
        id: 1,
        name: "After Dark",
        artist: {
            id: 1,
            name: "Mr Kitty",
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
        favorite: false,
    },
    {
        id: 2,
        name: "Beat It",
        artist: {
            id: "1",
            name: "Michael Jackson"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 258,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/05_beat_it.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/beat-it.jpg',
        favorite: false,
    },
    {
        id: 3,
        name: "Portegal man",
        artist: {
            id: "1",
            name: "Marjan Farsad"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 208,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/08%20Porteghale%20Man.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/my-orange.jpg',
        favorite: false,
    },
    {
        id: 4,
        name: "Somebody that I used to know",
        artist: {
            id: "1",
            name: "Gotye"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 245,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/129.gotye_kimbra_-_somebody_that_i_used_to_know.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/siutk.jpg',
        favorite: false,
    },
    {
        id: 5,
        name: "Cupid",
        artist: {
            id: "1",
            name: "Fifty Fifty"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 174,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/12_-_cupid_twin_version_-_fifty_fifty_320.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/cupid.jpg',
        favorite: false,
    },
    {
        id: 6,
        name: "Teeth",
        artist: {
            id: "1",
            name: "5 Seconds of Summer"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 218,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/5_seconds_of_summer_-_teeth_official_video.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/5sos.jpg',
        favorite: false,
    },
    {
        id: 7,
        name: "AOT op",
        artist: {
            id: "1",
            name: "unknown"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 240,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/Attack%20on%20Titan%20S3%20Season%203%20%28ED%20_%20Ending%20FULL%29%20-%20%5BAkatsuki%20no%20Requiem%20_%20Linked%20Horizon%5D.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/aot.jpg',
        favorite: false,
    },
    {
        id: 8,
        name: "Rasputin",
        artist: {
            id: "1",
            name: "Boney m."
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 265,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/Boney-M-Rasputin-remix.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/rasputin.jpg',
        favorite: false,
    },
    {
        id: 9,
        name: "Buid a bitch",
        artist: {
            id: "1",
            name: "Bella Poarch"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 122,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/Build-a-Bi.tch-BELLA-POARCH.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/bab.jpg',
        favorite: false,
    },
    {
        id: 10,
        name: "Hymn for the weekend",
        artist: {
            id: "1",
            name: "Coldplay"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 258,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/Coldplay%20-%20Hymn%20For%20The%20Weekend.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/hymn.jpg',
        favorite: false,
    },
    {
        id: 11,
        name: "Sugar Crash",
        artist: {
            id: "1",
            name: "ElyOtto"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 80,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/Eletto%20-%20Sugar%20Crash.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/sugar-crash.jpg',
        favorite: false,
    },
    {
        id: 12,
        name: "Fairytales",
        artist: {
            id: "1",
            name: "Gabby Sophia"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 169,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/Fairytales%20Gabby%20Sophia.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/bad-guy.jpg',
        favorite: false,
    },
    {
        id: 13,
        name: "Mask Off",
        artist: {
            id: "1",
            name: "Future"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 203,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/Future-Mask-Off-128.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/mask-off.jpg',
        favorite: false,
    },
    {
        id: 14,
        name: "Idea 22",
        artist: {
            id: "1",
            name: "Gibran Alcocer"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 149,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/Gibran%20Alcocer%20-%20Idea%2022%20%28Anya%20Nami%20Remix%29%20%281%29.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/idea-22.jpg',
        favorite: false,
    },
    {
        id: 15,
        name: "Metamorphosis",
        artist: {
            id: "1",
            name: "Interworld"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 143,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/INTERWORL-METAMORPHOSIS.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/metamorphosis.jpg',
        favorite: false,
    },
    {
        id: 16,
        name: "Enemy",
        artist: {
            id: "1",
            name: "Imagine Dragons"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 173,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/Imagine%20Dragons%2C%20JID%20%26%20League%20of%20Legends%20-%20Enemy.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/enemy.jpg',
        favorite: false,
    },
    {
        id: 17,
        name: "Believer",
        artist: {
            id: "1",
            name: "Imagine Dragons"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 204,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/Imagine_Dragons_Believer_320.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/believer.jpg',
        favorite: false,
    },
    {
        id: 18,
        name: "Little Dark Age",
        artist: {
            id: "1",
            name: "MGMT"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 299,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/MGMT%20-%20Little%20Dark%20Age%20%28%20GandomMusic.ir%20%29.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/lda.jpg',
        favorite: false,
    },
    {
        id: 19,
        name: "Little Dark Age (latin)",
        artist: {
            id: "1",
            name: "MGMT"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 337,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/MGMT%20-%20Little%20Dark%20Age%20Cover%20In%20Classical%20Latin%20BARDCORE.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/lda-old.jpg',
        favorite: false,
    },
    {
        id: 20,
        name: "Buttercup",
        artist: {
            id: "1",
            name: "Jack Satubar"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 208,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/MV%20Jack%20Stauber%20-%20Buttercup%20320%20%5BWWW.VIPREMIX.IR%5D.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/butterCup.jpg',
        favorite: false,
    },
    {
        id: 21,
        name: "Play Date",
        artist: {
            id: "1",
            name: "Melanie Martinez"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 179,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/Melanie%20Martinez%20-%20Play%20Date.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/play-date.jpg',
        favorite: false,
    },
    {
        id: 22,
        name: "Everyday Normal Guy 2",
        artist: {
            id: "1",
            name: "Jon Lajoie"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 195,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/Regular%20Everyday%20Normal%20Motherfucker.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/enm.jpg',
        favorite: false,
    },
    {
        id: 23,
        name: "Seniorita",
        artist: {
            id: "1",
            name: "Camila Cabello"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 191,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/Se%C3%B1orita.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/seniorita.jpg',
        favorite: false,
    },
    {
        id: 24,
        name: "Montero",
        artist: {
            id: "1",
            name: "Lil Nas X"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 137,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/lil_nas%20x_montero_%28call%20me%20by%20your%20name%29.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-covers/montero.jpg',
        favorite: false,
    },


] as musics_type

export const suggestions = [
    {
        id: 1,
        name: "Yeah Right",
        artist: {
            id: 1,
            name: "Joji",
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 174,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/yeah-right.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-suggestions/joji.jpg',
        favorite: false,
    },
    {
        id: 2,
        name: "Feel Good",
        artist: {
            id: "1",
            name: "Gorllaz"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 222,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/feel-good.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-suggestions/gorillaz.jpg',
        favorite: false,
    },
    {
        id: 3,
        name: "Solitary Man",
        artist: {
            id: "1",
            name: "Johny Cash"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 143,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/solitary-man.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-suggestions/johny-cash.jpg',
        favorite: false,
    },
    {
        id: 4,
        name: "Lonely",
        artist: {
            id: "1",
            name: "Palaye Royale"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 183,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/lonely.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-suggestions/palaye-royale.jpg',
        favorite: false,
    },
    {
        id: 5,
        name: "High",
        artist: {
            id: "1",
            name: "Stephen Sanchez"
        },
        album: {
            id: "7890ijkl",
            name: "Album Title",
            release_date: "2023-01-01",
            cover_image: "https://example.com/album_cover.jpg"
        },
        duration: 161,
        song_url: 'https://gaming-project.storage.iran.liara.space/songs/High.mp3',
        cover_url: 'https://gaming-project.storage.iran.liara.space/song-suggestions/stephen.jpg',
        favorite: false,
    },

] as musics_type