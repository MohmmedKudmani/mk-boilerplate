import {
  Header as MantineHeader,
  Text,
  ActionIcon,
  useMantineColorScheme,
  Burger,
  Container,
  Group,
} from '@mantine/core'
import useStyle from './headerStyle'
import { IconSun, IconMoon } from '@tabler/icons'
import Links from './Links'
import { useMediaQuery, useWindowScroll } from '@mantine/hooks'

function Header(props) {
  const { classes } = useStyle()
  const { modelOpened, setModelOpened } = props
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const matchXs = useMediaQuery('(min-width: 511px)')
  const dark = colorScheme === 'dark'
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <>
      <MantineHeader
        sx={(theme) => ({
          boxShadow: scroll.y > 50 && theme.shadows.sm,
          border: 'none',
        })}
        height={80}
      >
        <Container size='xl' className={classes.navbarContainer}>
          <Burger
            opened={modelOpened}
            onClick={() => setModelOpened.toggle()}
            className={classes.burger}
          />
          <Group>
            <Text>Logo</Text>
            {matchXs && <Links />}
          </Group>
          <LightDarkMode
            dark={dark}
            toggleColorScheme={toggleColorScheme}
            className={classes.toggleDarkMode}
            scroll={scroll}
          />
        </Container>
      </MantineHeader>
    </>
  )
}

function LightDarkMode({ className, toggleColorScheme, dark, scroll }) {
  return (
    <ActionIcon
      variant='filled'
      size='lg'
      radius='lg'
      onClick={() => toggleColorScheme()}
      title='Toggle Dark Mode'
      mr={scroll.y < 80 && '0.5rem'}
      className={className}
      color='orange'
    >
      {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
    </ActionIcon>
  )
}

export default Header
