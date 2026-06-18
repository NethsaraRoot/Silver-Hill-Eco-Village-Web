<template>
  <nav :class="['navbar', { scrolled: isScrolled, hidden: isHidden }]">
    <div class="navbar__accent-line"></div>

    <div class="nav-container">
      <!-- Logo -->
      <a href="#home" class="nav-logo" @click.prevent="scrollTo('home')">
        <img :src="logoImg" alt="Silver Hill Eco Village" class="nav-logo-img" />
      </a>

      <!-- Desktop Nav Links -->
      <ul class="nav-links">
        <li v-for="(link, index) in navLinks" :key="link.id" :style="`--i: ${index}`">
          <a
            :href="`#${link.id}`"
            :class="['nav-link', { active: activeSection === link.id }]"
            @click.prevent="scrollTo(link.id)"
            >{{ link.label }}</a
          >
        </li>
      </ul>

      <!-- Reserve Button -->
      <a
        href="https://www.booking.com/hotel/lk/silver-hill-eco-lodges-and-camping-dodungaslanda.html?aid=356980&label=gog235jc-10CAsohQFCMHNpbHZlci1oaWxsLWVjby1sb2RnZXMtYW5kLWNhbXBpbmctZG9kdW5nYXNsYW5kYUgzWANohQGIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Asm79s8GwAIB0gIkNTFiNGYyZjUtZjg3Yi00NDA3LWEwZGQtZWI0ZWYzNzRjNjli2AIB4AIB&sid=be0a3b358d9d57e735523ceddd32cf68&all_sr_blocks=708174701_370260144_2_41_0&checkin=2026-05-23&checkout=2026-05-24&dest_id=-2225895&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=708174701_370260144_2_41_0&hpos=1&matching_block_id=708174701_370260144_2_41_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&show_room=708174701&sr_order=popularity&sr_pri_blocks=708174701_370260144_2_41_0__3400&srepoch=1778228687&srpvid=9fe23b257e250216&type=total&ucfs=1&#RD708174701"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-reserve"
      >
        <span>BOOK NOW</span>
        
      </a>

      <!-- Mobile Burger -->
      <button
        class="burger"
        @click="menuOpen = !menuOpen"
        :class="{ open: menuOpen }"
        aria-label="Toggle menu"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade-down">
      <div class="mobile-menu" v-if="menuOpen">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          :class="['mobile-link', { active: activeSection === link.id }]"
          @click.prevent="mobileNav(link.id)"
        >
          <span class="mobile-link__dot"></span>
          {{ link.label }}
        </a>
        <a href="#contact" class="mobile-reserve" @click.prevent="mobileNav('contact')">
          BOOK NOW
        </a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logoImg from '../assets/logo.jpeg'

const isScrolled = ref(false)
const isHidden = ref(false)
const activeSection = ref('home')
const menuOpen = ref(false)

let lastScrollY = 0
const SCROLL_THRESHOLD = 60
const HIDE_THRESHOLD = 120

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const mobileNav = (id) => {
  menuOpen.value = false
  scrollTo(id)
}

const handleScroll = () => {
  const currentY = window.scrollY

  // Scrolled state — glass effect
  isScrolled.value = currentY > SCROLL_THRESHOLD

  // Hide on scroll down, show on scroll up
  if (currentY > HIDE_THRESHOLD) {
    isHidden.value = currentY > lastScrollY
  } else {
    isHidden.value = false
  }

  // Mobile menu open ව ඇත්නම් hide කරන්න එපා
  if (menuOpen.value) isHidden.value = false

  lastScrollY = currentY

  // Active section detect
  const sections = navLinks.map((l) => l.id)
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    if (el && currentY >= el.offsetTop - 120) {
      activeSection.value = sections[i]
      break
    }
  }
}

onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Lora:wght@400;500;600&display=swap');

/* ══════════════════════════════
   VARIABLES
══════════════════════════════ */
.navbar {
  --green-1: #19bd2f;
  --green-2: #18c532;
  --green-3: #0eda30;
  --green-light: #2ee716;
  --green-pale: #e8f5e4;
  --text-dark: #1a2e1a;
}

/* ══════════════════════════════
   NAVBAR BASE
══════════════════════════════ */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;

  /* Hide/show + scroll transitions combined */
  transform: translateY(0);
  transition:
    transform 0.38s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.5s ease,
    box-shadow 0.5s ease,
    backdrop-filter 0.5s ease;
}

/* ── Hide — slide up out of view ── */
.navbar.hidden {
  transform: translateY(-100%);
}

/* ── Scrolled — premium frosted light green glass ── */
.navbar.scrolled {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.96) 0%,
    rgba(232, 248, 232, 0.94) 50%,
    rgba(255, 255, 255, 0.96) 100%
  );
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  box-shadow:
    0 1px 0 rgba(126, 184, 122, 0.2),
    0 4px 24px rgba(45, 106, 53, 0.08),
    0 12px 40px rgba(0, 0, 0, 0.05);
}

/* ══════════════════════════════
   ACCENT LINE (visible when scrolled)
══════════════════════════════ */
.navbar__accent-line {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--green-3) 25%,
    var(--green-light) 50%,
    var(--green-3) 75%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
}

.navbar.scrolled .navbar__accent-line {
  opacity: 1;
}

/* ══════════════════════════════
   CONTAINER
══════════════════════════════ */
.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 4vw;
  display: flex;
  align-items: center;
  transition: padding 0.4s ease;
}

.navbar.scrolled .nav-container {
  padding: 10px 4vw;
}

/* ══════════════════════════════
   LOGO
══════════════════════════════ */
.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
  animation: fadeInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.nav-logo-img {
  height: 92px;
  width: auto;
  object-fit: contain;
  display: block;
  transition:
    height 0.4s ease,
    filter 0.4s ease;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.18));
}

.navbar.scrolled .nav-logo-img {
  height: 40px;
  filter: drop-shadow(0 2px 6px rgba(45, 106, 53, 0.15));
}

.nav-logo:hover .nav-logo-img {
  filter: drop-shadow(0 4px 12px rgba(45, 106, 53, 0.3));
}

/* ══════════════════════════════
   NAV LINKS
══════════════════════════════ */
.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2px;
  flex: 1;
  justify-content: center;
}

.nav-links li {
  animation: fadeInDown 0.6s ease both;
  animation-delay: calc(0.1s + var(--i) * 0.07s);
}

.nav-link {
  text-decoration: none;
  font-family: 'Lora', serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.88);
  padding: 7px 16px;
  letter-spacing: 0.04em;
  position: relative;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 1.5px;
  background: linear-gradient(90deg, var(--green-3), var(--green-light));
  border-radius: 2px;
  transition: width 0.32s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover {
  color: #fff;
}
.nav-link:hover::after {
  width: 55%;
}
.nav-link.active {
  color: #b2ffb5;
  font-weight: 500;
}
.nav-link.active::after {
  width: 55%;
}

/* Scrolled — dark text */
.navbar.scrolled .nav-link {
  color: var(--text-dark);
}
.navbar.scrolled .nav-link:hover {
  color: var(--green-1);
}
.navbar.scrolled .nav-link.active {
  color: var(--green-2);
  font-weight: 600;
}

/* ══════════════════════════════
   RESERVE BUTTON
══════════════════════════════ */
.nav-reserve {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-family: 'Lora', serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: #ffffff;
  padding: 9px 22px;
  border: 1.5px solid rgba(255, 255, 255, 0.7);
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  transition: all 0.32s ease;
  white-space: nowrap;
  animation: fadeInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: 0.25s;
}

/* Shine sweep */
.nav-reserve::before {
  content: '';
  position: absolute;
  top: 0;
  left: -120%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgb(55, 231, 10), transparent);
  transition: left 0.5s ease;
}

.nav-reserve:hover::before {
  left: 160%;
}
.nav-reserve:hover {
  background: rgb(61, 156, 5);
  border-color: rgba(255, 255, 255, 0.95);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
}

.nav-reserve__arrow {
  transition: transform 0.25s ease;
}
.nav-reserve:hover .nav-reserve__arrow {
  transform: translateX(3px);
}

/* Scrolled — solid green gradient */
.navbar.scrolled .nav-reserve {
  background: linear-gradient(135deg, var(--green-1) 0%, var(--green-2) 100%);
  border-color: transparent;
  color: #fff;
  box-shadow:
    0 2px 12px rgba(45, 106, 53, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.navbar.scrolled .nav-reserve:hover {
  background: linear-gradient(135deg, #256030 0%, var(--green-1) 100%);
  box-shadow:
    0 6px 20px rgba(45, 106, 53, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

/* ══════════════════════════════
   BURGER
══════════════════════════════ */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-left: auto;
}

.burger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2px;
  transition: all 0.32s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.navbar.scrolled .burger span {
  background: var(--green-1);
}

.burger.open span:nth-child(1) {
  transform: rotate(45deg) translate(4.5px, 4.5px);
}
.burger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.burger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(4.5px, -4.5px);
}

/* ══════════════════════════════
   MOBILE MENU
══════════════════════════════ */
.mobile-menu {
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(228, 248, 228, 0.97) 60%,
    rgba(255, 255, 255, 0.98) 100%
  );
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: 8px 5vw 28px;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid rgba(126, 184, 122, 0.2);
  box-shadow: 0 12px 40px rgba(45, 106, 53, 0.12);
}

.mobile-link {
  text-decoration: none;
  color: var(--text-dark);
  font-family: 'Lora', serif;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.03em;
  padding: 14px 4px;
  border-bottom: 1px solid rgba(126, 184, 122, 0.12);
  display: flex;
  align-items: center;
  gap: 10px;
  transition:
    color 0.25s,
    padding-left 0.25s;
  border-radius: 4px;
}

.mobile-link__dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--green-3);
  opacity: 0;
  flex-shrink: 0;
  transition:
    opacity 0.25s,
    transform 0.25s;
}

.mobile-link:hover .mobile-link__dot,
.mobile-link.active .mobile-link__dot {
  opacity: 1;
  transform: scale(1.3);
}

.mobile-link:hover,
.mobile-link.active {
  color: var(--green-1);
  padding-left: 8px;
}

.mobile-reserve {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  font-family: 'Lora', serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: #fff;
  padding: 13px 24px;
  background: linear-gradient(135deg, var(--green-1) 0%, var(--green-2) 100%);
  border: none;
  border-radius: 6px;
  margin-top: 16px;
  box-shadow: 0 4px 16px rgba(45, 106, 53, 0.25);
  transition: all 0.28s;
}

.mobile-reserve:hover {
  background: linear-gradient(135deg, #256030 0%, var(--green-1) 100%);
  box-shadow: 0 6px 20px rgba(45, 106, 53, 0.35);
  transform: translateY(-1px);
}

/* ══════════════════════════════
   KEYFRAMES
══════════════════════════════ */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-22px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(22px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-down-enter-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-down-leave-active {
  transition: all 0.22s ease;
}
.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ══════════════════════════════
   RESPONSIVE
══════════════════════════════ */
@media (max-width: 1024px) {
  .nav-link {
    font-size: 13.5px;
    padding: 6px 13px;
  }
}

@media (max-width: 900px) {
  .nav-link {
    font-size: 13px;
    padding: 6px 10px;
  }
  .nav-reserve {
    font-size: 12.5px;
    padding: 8px 18px;
  }
  .nav-logo-img {
    height: 44px;
  }
  .navbar.scrolled .nav-logo-img {
    height: 34px;
  }
}

@media (max-width: 768px) {
  .nav-links,
  .nav-reserve {
    display: none;
  }
  .burger {
    display: flex;
  }
  .nav-container {
    padding: 14px 5vw;
  }
  .navbar.scrolled .nav-container {
    padding: 10px 5vw;
  }
}

@media (max-width: 480px) {
  .nav-logo-img {
    height: 40px;
  }
  .navbar.scrolled .nav-logo-img {
    height: 32px;
  }
  .nav-container {
    padding: 14px 20px;
  }
}
</style>
