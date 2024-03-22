import { useEffect, useState } from "react"

export function useIsMounted() {
  console.log('useIsMounted')

  const [isMounted, setMounted] = useState(false)
  
  useEffect(() => {
    console.log('useEffect')
    setMounted(true)
  }, [])

  return isMounted
}
