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
        sx={(theme) => ({
          '.mantine-AppShell-main': {
            padding: '0',
          },
          '.mantine-AppShell-body': {
            paddingTop: '80px', // header height value
          },
        })}
        header={
          <Header modelOpened={modelOpened} setModelOpened={setModelOpened} />
        }
        fixed
        footer={<Footer />}
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
