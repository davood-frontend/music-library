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
        }
    },
    typography: {
        allVariants: {
            color: '#F5F5F5'
        }
    },

})

export const MainTheme = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={darkMode}>
            {children}
        </ThemeProvider>
    )
}