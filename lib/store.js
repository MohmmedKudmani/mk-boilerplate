import { proxy } from 'valtio'

const store = proxy({
  currentTab() {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/') return 0
      else if (window.location.pathname === '/world') return 1
      else if (window.location.pathname === '/world') return 2
    }
  },
})

export default store
