<template>
  <section id="home" class="hero">
    <div class="hero__bg">
      <img :src="heroImage" alt="Silver Hill Eco Village" class="hero__bg-img" />
      <div class="hero__overlay"></div>
    </div>

    <div class="hero__inner">
      <div class="hero__brand">
        <span class="hero__brand-name"></span>
        <span class="hero__brand-sub"></span>
      </div>

      <div class="hero__body">
        <h1 class="hero__title">
          <span class="hero__title--white">Silver Hill</span>
          <span class="hero__title--green">Eco Village</span>
        </h1>

        <p class="hero__description">
          A unique eco retreat experience<br />
          surrounded by nature's beauty.
        </p>

        <a
          href="https://www.booking.com/hotel/lk/silver-hill-eco-lodges-and-camping-dodungaslanda.html?aid=356980&label=gog235jc-10CAsohQFCMHNpbHZlci1oaWxsLWVjby1sb2RnZXMtYW5kLWNhbXBpbmctZG9kdW5nYXNsYW5kYUgzWANohQGIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Asm79s8GwAIB0gIkNTFiNGYyZjUtZjg3Yi00NDA3LWEwZGQtZWI0ZWYzNzRjNjli2AIB4AIB&sid=be0a3b358d9d57e735523ceddd32cf68&all_sr_blocks=708174701_370260144_2_41_0&checkin=2026-05-23&checkout=2026-05-24&dest_id=-2225895&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=708174701_370260144_2_41_0&hpos=1&matching_block_id=708174701_370260144_2_41_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&show_room=708174701&sr_order=popularity&sr_pri_blocks=708174701_370260144_2_41_0__3400&srepoch=1778228687&srpvid=9fe23b257e250216&type=total&ucfs=1&#RD708174701"
          target="_blank"
          rel="noopener noreferrer"
          class="hero__cta"
        >
          BOOK NOW
          >
        </a>
      </div>

      <div class="hero__features">
        <div class="hero__feature">
          <div class="hero__feature-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
              <path d="M12 2C6 2 2 8 2 14c0 4 2 7 6 8 1-4 2-8 4-10-1 3-1 7 0 10 4-1 6-4 6-8 0-6-4-12-6-12z"></path>
            </svg>
          </div>
          <span class="hero__feature-title">Eco Friendly</span>
          <span class="hero__feature-sub">Pure & Natural</span>
        </div>

        <div class="hero__feature-divider"></div>

        <div class="hero__feature">
          <div class="hero__feature-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
              <path d="M1 6l5 5 4-4 4 4 4-4 5 5"></path>
              <path d="M1 12l5 5 4-4 4 4 4-4 5 5" opacity="0.5"></path>
            </svg>
          </div>
          <span class="hero__feature-title">Scenic Views</span>
          <span class="hero__feature-sub">Breathtaking Surroundings</span>
        </div>

        <div class="hero__feature-divider"></div>

        <div class="hero__feature">
          <div class="hero__feature-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
          </div>
          <span class="hero__feature-title">Unforgettable</span>
          <span class="hero__feature-sub">Stay Experience</span>
        </div>
      </div>
    </div>

    <!-- Status Pill -->
    <div class="hero__status-wrap">
      <div class="hero__status">
        <div class="hero__status-item">
          <svg class="hero__status-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
            <circle cx="12" cy="9" r="2.5"></circle>
          </svg>
          <span>Silver Hill Estate, Kurunegala </span>
        </div>
        <div class="hero__status-divider"></div>
        <div class="hero__status-item">
          <svg class="hero__status-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.89 10.8 19.79 19.79 0 01.82 2.18 2 2 0 012.82 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path>
          </svg>
          <span>+44 7496 861847 / +94 76 796 1765</span>

        </div>
        <div class="hero__status-divider"></div>
        <div class="hero__status-item">
          <svg class="hero__status-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>Silver Hill Eco Village</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import heroImage from '../assets/12.png'

export default {
  name: 'HeroSection',
  data() {
    return { heroImage }
  },
  mounted() {
    this.$nextTick(() => {
      requestAnimationFrame(() => {
        this.$el.classList.add('is-loaded')
      })
    })
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  max-height: 960px;
  overflow: hidden;
  font-family: 'Lora', serif;
  box-sizing: border-box;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(5, 16, 5, 0.82) 0%,
    rgba(5, 16, 5, 0.65) 35%,
    rgba(5, 16, 5, 0.3) 60%,
    rgba(5, 16, 5, 0.1) 80%,
    transparent 100%
  );
}

.hero__inner {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px 6vw 110px;
  box-sizing: border-box;
}

/* BRAND */
.hero__brand {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.hero__brand-name {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.14em;
}

.hero__brand-sub {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-top: 2px;
}

/* BODY */
.hero__body {
  max-width: 560px;
  padding-bottom: 20px;
}

.hero__title {
  font-family: 'Playfair Display', serif;
  display: flex;
  flex-direction: column;
  line-height: 1;
  margin: 0 0 20px;
}

.hero__title--white {
  font-size: clamp(48px, 7vw, 96px);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.hero__title--green {
  font-size: clamp(48px, 7vw, 96px);
  font-weight: 700;
  font-style: italic;
  background: linear-gradient(135deg, #6ee87a 0%, #22c55e 35%, #4ade80 70%, #86efac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.hero__description {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.75;
  margin: 0 0 32px;
}

/* CTA */
.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, rgba(34, 100, 44, 0.85) 0%, rgba(22, 163, 74, 0.75) 100%);
  border: 1.5px solid rgba(134, 239, 172, 0.4);
  color: #fff;
  font-family: 'Lora', serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.06em;
  padding: 14px 32px;
  border-radius: 6px;
  cursor: pointer;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  text-decoration: none;
  transition:
    background 0.28s ease,
    border-color 0.28s ease,
    transform 0.28s ease,
    box-shadow 0.28s ease;
  outline: none;
}

.hero__cta:hover {
  background: linear-gradient(135deg, rgba(34, 100, 44, 0.98) 0%, rgba(22, 163, 74, 0.95) 100%);
  border-color: rgba(134, 239, 172, 0.7);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(22, 163, 74, 0.35);
}

.hero__cta-arrow {
  font-size: 16px;
  transition: transform 0.22s;
}

.hero__cta:hover .hero__cta-arrow {
  transform: translateX(4px);
}

/* FEATURES */
.hero__features {
  display: flex;
  align-items: flex-start;
}

.hero__feature {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-right: 40px;
}

.hero__feature-divider {
  width: 1px;
  height: 48px;
  background: rgba(134, 239, 172, 0.25);
  margin: 4px 40px 0 0;
  flex-shrink: 0;
}

.hero__feature-icon {
  color: rgba(134, 239, 172, 0.85);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
}

.hero__feature-title {
  font-size: 13.5px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.02em;
}

.hero__feature-sub {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.4;
}

/* STATUS PILL */
.hero__status-wrap {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: max-content;
  max-width: 92vw;
}

.hero__status {
  display: inline-flex;
  align-items: center;
  background: rgba(8, 25, 8, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(134, 239, 172, 0.2);
  border-radius: 50px;
  padding: 12px 28px;
}

.hero__status-item {
  display: flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
}

.hero__status-icon {
  color: rgba(134, 239, 172, 0.85);
  flex-shrink: 0;
}

.hero__status-item span {
  font-family: 'Lora', serif;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.78);
  letter-spacing: 0.03em;
}

.hero__status-divider {
  width: 1px;
  height: 16px;
  background: rgba(134, 239, 172, 0.22);
  flex-shrink: 0;
  margin: 0 20px;
}

/* ANIMATIONS */
.hero__brand {
  opacity: 0;
  transform: translateY(-20px);
}

.hero__title--white {
  display: block;
  opacity: 0;
  transform: translateX(-40px);
}

.hero__title--green {
  display: block;
  opacity: 0;
  transform: translateX(-40px);
}

.hero__description {
  opacity: 0;
  transform: translateY(16px);
}

.hero__cta {
  opacity: 0;
  transform: translateY(16px);
}

.hero__features {
  opacity: 0;
  transform: translateY(20px);
}

.hero__status-wrap {
  opacity: 0;
  transform: translateX(-50%) translateY(16px);
}

.is-loaded .hero__brand {
  animation: hero-fade-down 0.65s ease 0.1s forwards;
}

.is-loaded .hero__title--white {
  animation: hero-slide-in 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
}

.is-loaded .hero__title--green {
  animation: hero-slide-in 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.45s forwards;
}

.is-loaded .hero__description {
  animation: hero-fade-up 0.65s ease 0.65s forwards;
}

.is-loaded .hero__cta {
  animation: hero-fade-up 0.65s ease 0.8s forwards;
}

.is-loaded .hero__features {
  animation: hero-fade-up 0.65s ease 1s forwards;
}

.is-loaded .hero__status-wrap {
  animation: status-fade-up 0.65s ease 1.15s forwards;
}

@keyframes hero-fade-down {
  to { opacity: 1; transform: translateY(0); }
}
@keyframes hero-slide-in {
  to { opacity: 1; transform: translateX(0); }
}
@keyframes hero-fade-up {
  to { opacity: 1; transform: translateY(0); }
}
@keyframes status-fade-up {
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

/* =====================
   RESPONSIVE
   ===================== */

/* Tablet landscape */
@media (max-width: 1024px) {
  .hero__feature {
    padding-right: 32px;
  }
  .hero__feature-divider {
    margin: 4px 32px 0 0;
  }
}

/* Tablet */
@media (max-width: 900px) {
  .hero {
    max-height: unset;
    height: 100svh;
  }
  .hero__inner {
    padding: 30px 5vw 110px;
  }
  .hero__title--white,
  .hero__title--green {
    font-size: clamp(42px, 9vw, 72px);
  }
  .hero__feature-divider {
    margin: 4px 24px 0 0;
  }
  .hero__feature {
    padding-right: 24px;
  }
  .hero__status {
    padding: 11px 22px;
  }
  .hero__status-divider {
    margin: 0 16px;
  }
}

/* Mobile landscape + small tablet */
@media (max-width: 768px) {
  .hero {
    height: 100svh;
    max-height: unset;
  }
  .hero__overlay {
    background: linear-gradient(
      160deg,
      rgba(5, 16, 5, 0.9) 0%,
      rgba(5, 16, 5, 0.75) 45%,
      rgba(5, 16, 5, 0.45) 75%,
      rgba(5, 16, 5, 0.2) 100%
    );
  }
  .hero__inner {
    padding: 28px 24px 110px;
  }
  .hero__brand-name {
    font-size: 17px;
  }
  .hero__title--white,
  .hero__title--green {
    font-size: clamp(38px, 10vw, 60px);
  }
  .hero__description {
    font-size: 14.5px;
    margin-bottom: 24px;
  }
  .hero__features {
    overflow-x: auto;
    padding-bottom: 4px;
    scrollbar-width: none;
  }
  .hero__features::-webkit-scrollbar {
    display: none;
  }
  .hero__feature {
    padding-right: 20px;
    min-width: max-content;
  }
  .hero__feature-divider {
    margin: 4px 20px 0 0;
  }

  /* Status pill — stack vertically on mobile */
  .hero__status-wrap {
    bottom: 24px;
    width: 88vw;
    max-width: 88vw;
  }
  .hero__status {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 14px 20px;
    border-radius: 20px;
  }
  .hero__status-divider {
    display: none;
  }
  .hero__status-item {
    white-space: normal;
  }
  .hero__status-item span {
    font-size: 12px;
  }
}

/* Mobile portrait */
@media (max-width: 480px) {
  .hero__inner {
    padding: 24px 20px 130px;
  }
  .hero__brand-name {
    font-size: 15px;
    letter-spacing: 0.1em;
  }
  .hero__brand-sub {
    font-size: 10px;
  }
  .hero__title--white,
  .hero__title--green {
    font-size: clamp(34px, 11vw, 52px);
  }
  .hero__description {
    font-size: 13.5px;
    margin-bottom: 20px;
  }
  .hero__cta {
    font-size: 13px;
    padding: 12px 24px;
  }
  .hero__feature-title {
    font-size: 12px;
  }
  .hero__feature-sub {
    font-size: 11px;
  }
  .hero__feature-icon svg {
    width: 18px;
    height: 18px;
  }
  .hero__status-wrap {
    bottom: 20px;
    width: 90vw;
  }
  .hero__status {
    padding: 12px 16px;
    gap: 8px;
    border-radius: 16px;
  }
  .hero__status-item span {
    font-size: 11.5px;
  }
}

/* Small mobile */
@media (max-width: 360px) {
  .hero__inner {
    padding: 20px 16px 130px;
  }
  .hero__title--white,
  .hero__title--green {
    font-size: 32px;
  }
  .hero__description {
    font-size: 13px;
  }
  .hero__cta {
    padding: 11px 20px;
    font-size: 12.5px;
  }
  .hero__status-wrap {
    width: 92vw;
  }
  .hero__status-item span {
    font-size: 11px;
  }
}
</style>
