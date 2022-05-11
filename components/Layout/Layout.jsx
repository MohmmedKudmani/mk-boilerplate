import Header from './Header'
import Theme from '../Theme'
import { AppShell } from '@mantine/core'
import Navbar from './Navbar'
import { useDisclosure } from '@mantine/hooks'
import GlobalStyles from '../GlobalStyles'
import Footer from './Footer'

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
        fixed
        footer={<Footer />}
        navbar={<Navbar modelOpened={modelOpened} />}
      >
        {children}
        <GlobalStyles modelOpened={modelOpened} />
      </AppShell>
    </Theme>
  )
}

export default Layout
