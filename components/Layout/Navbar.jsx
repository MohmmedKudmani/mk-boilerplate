import { Navbar as MantineNavbar } from '@mantine/core'
import Links from './Links'
import { useMediaQuery } from '@mantine/hooks'

function Navbar(props) {
  const { modelOpened, setModelOpened } = props
  const matchXs = useMediaQuery('(min-width: 600px)')
  return (
    <>
      {!matchXs && (
        <MantineNavbar
          hidden={!modelOpened}
          fixed
          width='100%'
          height='100%'
          p='xs'
        >
          <MantineNavbar.Section grow>
            <Links isNavbar={true} />
          </MantineNavbar.Section>
        </MantineNavbar>
      )}
    </>
  )
}

export default Navbar
