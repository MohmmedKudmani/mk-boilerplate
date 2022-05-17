import { Global } from '@mantine/core'

function GlobalStyles({ modelOpened }) {
  return (
    <Global
      styles={(theme) => ({
        body: {
          overflow: modelOpened ? 'hidden' : 'overlay',
        },

        '::-webkit-scrollbar': {
          width: '16px',
        },

        '::-webkit-scrollbar-thumb': {
          borderRadius: '8px',
          border: '4px solid transparent',
          backgroundClip: 'content-box',
          backgroundColor: '#888',
        },

        '::-webkit-scrollbar-track': {
          backgroundColor: theme.colorScheme === 'dark' ? '#1A1B1E' : '#fff',
        },

        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555',
        },
      })}
    />
  )
}

export default GlobalStyles
