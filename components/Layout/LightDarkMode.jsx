import { ActionIcon } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons'

function LightDarkMode({ toggleColorScheme, dark, isMenu }) {
  return (
    <ActionIcon
      variant='filled'
      size='lg'
      radius='lg'
      mb={isMenu ? 'lg' : '0'}
      ml={isMenu ? 'auto' : '0'}
      onClick={() => toggleColorScheme()}
      title='Toggle Dark Mode'
    >
      {dark ? (
        <IconSun style={{ width: 18, height: 18 }} />
      ) : (
        <IconMoon style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  )
}

export default LightDarkMode
