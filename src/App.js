import React, { useContext, useMemo } from 'react'
import Meals from './components/Meals'
import { GlobalStyles } from './components/styles/Global'
import { StyledContainer } from './components/styles/Container.styled'
import { lightTheme, darkTheme } from './components/theme'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './ThemeContext'
import { SwitchButton } from './components/styles/SwitchButton'
import Navbar from './components/Navbar'

function App() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const themeMemo = useMemo(
        () => (theme === 'light' ? lightTheme : darkTheme),
        [theme]
    )
    return (
        <ThemeProvider theme={themeMemo}>
            <>
                <GlobalStyles />
                <Navbar checked={theme === 'light'} onChange={toggleTheme} />

                <StyledContainer>
                    <Meals />
                </StyledContainer>
                <p
                    style={{
                        fontSize: '10px',
                        fontWeight: '500',
                        textAlign: 'center'
                    }}
                >
                    Lab2 ITHogskolan. Coded by Farah Najib.
                </p>
            </>
        </ThemeProvider>
    )
}

export default App
