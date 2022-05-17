import { Navbar as MantineNavbar, Text } from '@mantine/core'
import useStyle from './navbarStyle'
import Links from './Links'
import { useMediaQuery } from '@mantine/hooks'

function Navbar(props) {
  const { modelOpened, setModelOpened } = props
  const { classes } = useStyle()
  const matchXs = useMediaQuery('(min-width: 510px)')

  return (
    <>
      {!matchXs && (
        <MantineNavbar
          p='md'
          // sx={(theme) => ({
          //   [theme.fn.smallerThan('sm')]: {
          //     top: '5rem',
          //   },
          //   padding: '0 0.8rem',
          // })}
          hidden={!modelOpened}
        >
          <MantineNavbar.Section grow>
            <Links isNavbar setModelOpened={setModelOpened} />
          </MantineNavbar.Section>

          <MantineNavbar.Section className={classes.footer}>
            <Text>Hello</Text>
          </MantineNavbar.Section>
        </MantineNavbar>
      )}
    </>
  )
}

export default Navbar
