<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <span class="footer-logo">Silver Hill Eco Village</span>
        <span class="footer-tagline">RESTAURANT</span>
        <p>Delicious meals made with love.<br />Taste the best, feel like home.</p>
      </div>

      <div class="footer-links">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          @click.prevent="scrollTo(link.id)"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="footer-social">
        <a href="#" class="social-icon" title="Facebook">📘</a>
        <a href="#" class="social-icon" title="Instagram">📸</a>
        <a href="#" class="social-icon" title="WhatsApp">💬</a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2024 Hi Mama Restaurant. All Rights Reserved. Made with ❤️ in Sri Lanka</p>
    </div>
  </footer>
</template>

<script setup>
const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'menu', label: 'Menu & Packages' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact Us' },
]

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.footer {
  background: var(--green-dark);
  color: rgba(255, 255, 255, 0.85);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.footer-logo {
  font-family: 'Dancing Script', cursive;
  font-size: 1.8rem;
  color: var(--white);
  font-weight: 700;
}

.footer-tagline {
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  color: var(--gold-light);
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.footer-brand p {
  font-size: 0.88rem;
  line-height: 1.7;
  opacity: 0.7;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 700;
  transition:
    color 0.2s,
    transform 0.2s;
  display: inline-block;
}

.footer-links a:hover {
  color: var(--gold-light);
  transform: translateX(4px);
}

.footer-social {
  display: flex;
  gap: 0.8rem;
}

.social-icon {
  font-size: 1.5rem;
  text-decoration: none;
  transition: transform 0.2s;
  display: inline-block;
}

.social-icon:hover {
  transform: scale(1.2) rotate(-10deg);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.2rem 2rem;
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.5;
}

@media (max-width: 700px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
}
</style>
