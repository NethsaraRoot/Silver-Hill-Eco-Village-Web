// src/composables/useScrollReveal.js
import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  const initReveal = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Once revealed, stop observing
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
      }
    )

    // Observe all elements with .reveal class
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })
  }

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(initReveal, 100)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { initReveal }
}
