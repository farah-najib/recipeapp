import React, { useContext,useMemo } from 'react'
import Meals from './components/Meals'
import { GlobalStyles } from './components/styles/Global'
import { StyledContainer } from './components/styles/Container.styled'
import { lightTheme, darkTheme } from './components/theme'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './ThemeContext'
import { SwitchButton } from './components/styles/SwitchButton'

function App() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const themememo = useMemo(() => (theme === 'light' ? lightTheme : darkTheme),[theme]);
    return (
        <ThemeProvider theme={themememo}>
            <>
                <GlobalStyles />

                <SwitchButton>
                    <input
                        type="checkbox"
                        checked={theme === 'light'}
                        onChange={toggleTheme}
                    />
                    <span className="slider round" />
                </SwitchButton>
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
