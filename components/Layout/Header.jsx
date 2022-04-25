import {
  Header as MantineHeader,
  Text,
  useMantineColorScheme,
  Container,
  Burger,
  Box,
} from '@mantine/core'
import useStyle from './headerStyle'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import LightDarkMode from './LightDarkMode'
import Links from './Links'

function Header(props) {
  const { classes } = useStyle()
  const { modelOpened, setModelOpened } = props

  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const dark = colorScheme === 'dark'

  const matchXs = useMediaQuery('(min-width: 600px)')

  return (
    <>
      <MantineHeader fixed classes={classes.header} height={85}>
        <Container padding='lg' size='xl' className={classes.headerContainer}>
          {!matchXs && (
            <Burger
              opened={modelOpened}
              onClick={() => setModelOpened.toggle()}
            />
          )}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Text mr='lg'>Logo</Text>
            {matchXs && <Links />}
          </Box>
          <LightDarkMode dark={dark} toggleColorScheme={toggleColorScheme} />
        </Container>
      </MantineHeader>
    </>
  )
}

export default Header
