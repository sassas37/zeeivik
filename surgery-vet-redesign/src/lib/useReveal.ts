import { useEffect, useRef, useState } from 'react'

// Adds `is-visible` when the element scrolls into view (one-shot).
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let done = false
    const reveal = () => {
      if (done) return
      done = true
      setVisible(true)
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal()
            observer.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    // Safety fallback: never leave content hidden. Covers static/full-page
    // renders, very fast scrolls, and any environment where the observer
    // does not fire for below-the-fold elements.
    const timer = window.setTimeout(reveal, 1600)
    return () => {
      observer.disconnect()
      window.clearTimeout(timer)
    }
  }, [])

  return { ref, visible }
}
