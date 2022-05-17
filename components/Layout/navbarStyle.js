import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === 'dark'

  return {
    footer: {
      borderTop: `1px solid ${
        dark ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
      paddingTop: '0.5rem',
      display: 'flex',
      alignItems: 'center',
    },
  }
})

export default useStyles
