import { Text } from '@mantine/core'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <Text
        sx={(theme) => ({
          borderTop: `1px ${
            theme.colors.gray[theme.colorScheme === 'dark' ? 8 : 3]
          } solid`,
        })}
        py='lg'
        align='center'
      >
        © {year} Mohammed Kudmani
      </Text>
    </footer>
  )
}

export default Footer
