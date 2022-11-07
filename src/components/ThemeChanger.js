import React from 'react'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './Global';

export default function ThemeChanger() {

    const [theme, setTheme] = useState('light');
    const toggleTheme =() => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }
    

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
        <GlobalStyles />
        <button id="theme-btn" onClick={toggleTheme}><span><svg id="theme-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
        </svg></span></button>
        </>
    </ThemeProvider>
  )
}
