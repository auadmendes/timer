import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { lightTheme } from './styles/theme/light'

import { CyclesContextProvider } from './contexts/CycleContext'
import { useState } from 'react'

import { SwitchButton } from './components/SwitchButton'

export function App() {
  const [theme, setTheme] = useState(lightTheme)

  function onChangeTheme() {
    setTheme(theme.title === 'dark' ? lightTheme : defaultTheme)
    // alert('Theme ' + theme.title)
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <SwitchButton onChangeTheme={onChangeTheme} />
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
