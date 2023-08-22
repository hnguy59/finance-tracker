import { NavigateFunction, To } from 'react-router-dom'

export function navigateTo(path: string | To, navigate: NavigateFunction) {
  setTimeout(() => {
    navigate(path)
  }, 0)
}
