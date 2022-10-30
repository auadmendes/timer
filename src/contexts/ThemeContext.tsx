import { createContext, ReactNode, useState } from 'react'

interface ThemeContextType {
  theme: string
  chooseTheme: (title: string) => void
}

interface ThemeContextProviderProps {
  children: ReactNode
}
export const ThemeContextUser = createContext({} as ThemeContextType)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState('')

  function chooseTheme(title: string) {
    // console.log('meu Deus ' + theme)
    setTheme(title)
  }

  return (
    <ThemeContextUser.Provider
      value={{
        theme,
        chooseTheme,
      }}
    >
      {children}
    </ThemeContextUser.Provider>
  )
}
