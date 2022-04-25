import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === 'dark'

  return {
    header: { border: 0, backgroundColor: 'transparent' },

    headerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
    },

    linkClass: {
      fontWeight: 500,
      borderRadius: '7px',
      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[2],
      },
    },

    linkActiveClass: {
      '&, &:hover': {
        color: theme.colors.orange[dark ? 4 : 5],
        backgroundColor: dark
          ? theme.fn.rgba(theme.colors.orange[8], 0.25)
          : theme.colors.orange[1],
      },
    },

    // linkClassMenu: {
    //   padding: '1rem',
    //   width: '100%',
    //   borderRadius: '0.5rem',
    // },

    // linkActiveClassMenu: {
    //   backgroundColor:
    //     theme.colorScheme === 'dark'
    //       ? theme.fn.rgba(theme.colors.orange[8], 0.25)
    //       : theme.colors.orange[1],
    //   color: theme.colors.orange[dark ? 3 : 7],
    // },
  }
})

export default useStyles
