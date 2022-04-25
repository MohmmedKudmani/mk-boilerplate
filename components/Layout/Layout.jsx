import Header from './Header'
import Theme from '../Theme'
import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Navbar from './Navbar'
import GlobalStyles from '../GlobalStyles'

function Layout(props) {
  const { children } = props

  const [modelOpened, setModelOpened] = useDisclosure(false)

  return (
    <Theme>
      <AppShell
        sx={{
          '.mantine-AppShell-main': {
            padding: '0',
          },
        }}
        header={
          <Header modelOpened={modelOpened} setModelOpened={setModelOpened} />
        }
        navbar={
          <Navbar modelOpened={modelOpened} setModelOpened={setModelOpened} />
        }
      >
        {children}
        <GlobalStyles modelOpened={modelOpened} />
      </AppShell>
    </Theme>
  )
}

export default Layout
