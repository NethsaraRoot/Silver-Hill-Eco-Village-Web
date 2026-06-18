<template>
  <div id="app-root">
    <!-- Navigation -->
    <NavBar />

    <!-- Page Content -->
    <main>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <Menu />
      <GallerySection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <FooterBar />

    <!-- Scroll To Top -->
    <transition name="fade">
      <button class="scroll-top" v-if="showScrollTop" @click="scrollToTop">↑</button>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import MenuSection from './components/MenuSection.vue'
import GallerySection from './components/GallerySection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterBar from './components/FooterBar.vue'
import { useScrollReveal } from './composables/useScrollReveal.js'
import Menu from './components/Menu.vue'

// Initialize scroll reveal animations
useScrollReveal()

const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
#app-root {
  min-height: 100vh;
}

/* Scroll to top button */
.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--green-dark);
  color: white;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(26, 58, 42, 0.4);
  z-index: 999;
  transition:
    background 0.3s,
    transform 0.3s;
}

.scroll-top:hover {
  background: var(--gold);
  transform: translateY(-4px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
