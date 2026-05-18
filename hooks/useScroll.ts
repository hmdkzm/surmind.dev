import { useEffect, useState } from 'react'

export default function useScroll() {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    function onScroll() {
      setSticky(!!(window.scrollY > 5))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })
  return sticky
}
