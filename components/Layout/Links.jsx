import Link from 'next/link'
import { Text, Group } from '@mantine/core'
import useStyle from './headerStyle'
import store from '../../lib/store'
import { useSnapshot } from 'valtio'

function Links(props) {
  const { isNavbar, setModelOpened } = props
  const { classes, cx } = useStyle()
  const snap = useSnapshot(store)

  const links = [
    { id: 0, label: 'Home', href: '/' },
    { id: 1, label: 'World', href: '/world' },
  ]

  return (
    <Group align='left' spacing='5px' direction={isNavbar ? 'column' : 'row'}>
      {links.map((link) => (
        <Link passHref key={link.id} href={link.href}>
          <Text
            className={cx(classes.linkClass, {
              [isNavbar
                ? classes.linkActiveClassNavbar
                : classes.linkActiveClass]: snap.currentTab() === link.id,
            })}
            px={isNavbar ? 'sm' : 'sm'}
            py={isNavbar ? 'sm' : '7px'}
            onClick={() => {
              store.currentTab(link.id)
              isNavbar && setModelOpened.close()
            }}
            component='a'
          >
            {link.label}
          </Text>
        </Link>
      ))}
    </Group>
  )
}

export default Links
