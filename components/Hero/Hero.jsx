import { Button, Container } from '@mantine/core'
import { showNotification } from '@mantine/notifications'

function Hero() {
  return (
    <Container size='xl'>
      <Button
        onClick={() =>
          showNotification({
            message: 'wtf',
          })
        }
        mt='sm'
      >
        wtf
      </Button>
    </Container>
  )
}

export default Hero
