'use client'
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles'
import React from "react";
const darkMode = createTheme({
    palette: {
        mode: 'dark',
        info: {
            main: '#F5F5F5'
        },
        secondary: {
            main: '#141a33'
        },
        error: {
            main: '#ec644b'
        }
    },
    typography: {
        allVariants: {
            color: '#F5F5F5'
        }
    },

})
darkMode.typography.body1 = {
    fontSize: '16px',
    color: 'whitesmoke',
    fontWeight: '400',
    '@media (max-width:1200px)': {
        fontSize: '14px',
    },

}
darkMode.typography.subtitle2 = {
    fontSize: '15px',
    color: 'whitesmoke',
    fontWeight: '300',
    '@media (max-width:1200px)': {
        fontSize: '13px',
    },

}
darkMode.typography.caption = {
    fontSize: 12,
    color: 'whitesmoke',
    fontWeight: '300',
    '@media (max-width:1200px)': {
        fontSize: '11px',
    },

}
darkMode.typography.h4 = {
    fontSize: 34,
    color: 'whitesmoke',
    fontWeight: '300',
    '@media (max-width:1200px)': {
        fontSize: 30,
    },

}

export const MainTheme = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={darkMode}>
            {children}
        </ThemeProvider>
    )
}