import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { Container, Content } from './styles'

type Props = {
  onChangeTheme: () => void
}

export function SwitchButton({ onChangeTheme }: Props) {
  const { title } = useContext(ThemeContext)
  return (
    <Container>
      <Content>
        <Switch
          onChange={onChangeTheme}
          checked={title === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={30}
          handleDiameter={24}
          offColor="#E1E1E6"
          onColor="#29292E"
          offHandleColor="#ccc"
          onHandleColor="#00875F"
        />
      </Content>
    </Container>
  )
}
