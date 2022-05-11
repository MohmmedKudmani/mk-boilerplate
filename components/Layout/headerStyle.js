import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === 'dark'

  return {
    navbarContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
    },

    linkClass: {
      '&:hover': {
        opacity: '0.9',
      },
      fontWeight: 500,
      color: dark ? theme.white : theme.black,
    },

    linkActiveClass: {
      '&, &:hover': {
        color: theme.colors.orange[dark ? 3 : 6],
      },
    },

    linkActiveClassNavbar: {
      '&, &:hover': {
        backgroundColor: dark
          ? theme.fn.rgba(theme.colors.orange[9], 0.25)
          : theme.colors.orange[1],
        color: theme.colors.orange[dark ? 3 : 6],
        borderRadius: '7px',
      },
    },

    toggleDarkMode: {
      backgroundColor: theme.colors.orange[dark ? 5 : 6],
    },

    menuToggleDarkMode: {
      position: 'absolute',
      right: '10px',
      top: '10px',
    },

    burger: {
      [theme.fn.largerThan('xs')]: {
        display: 'none',
      },
      zIndex: 999,
    },

    menuModal: {
      '.mantine-Modal-modal': {
        top: 20,
        padding: '1rem',
      },
    },
  }
})

export default useStyles
