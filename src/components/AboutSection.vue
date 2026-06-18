<template>
  <section id="about" class="about-section">
    <!-- Decorative leaf backgrounds -->
    <div class="leaf-decor leaf-top-left"></div>
    <div class="leaf-decor leaf-bottom-right"></div>

    <div class="about-container" ref="aboutContainer">
      <!-- LEFT SIDE -->
      <div class="about-left animate-left" :class="{ visible: isVisible }">
        <!-- Logo -->
        <div class="logo-area">
          <img src="../assets/logo.jpeg" alt="Silver Hill Logo" class="logo-img" />
          <div class="logo-text">
            <span class="brand-name">SILVER HILL</span>
            <span class="brand-tagline">LIVE LIFE</span>
          </div>
        </div>

        <!-- About Heading -->
        <div class="section-label">
          <span class="divider-line"></span>
          <span class="label-text">ABOUT US</span>
          <span class="divider-line"></span>
        </div>

        <h2 class="about-heading">
          More Than<br />
          Just a Meal <span class="leaf-icon">🌿</span>
        </h2>

        <!-- Description -->
        <div class="about-description">
          <p>
            At Silver Hill, we create a peaceful escape where comfort, nature, and unforgettable
            moments come together.
          </p>
          <p>
            Nestled in a beautiful village surrounded by lush greenery, our hotel welcomes both
            foreign visitors and local travelers looking for a relaxing and memorable stay. Whether
            you're enjoying a peaceful getaway, exploring nature, or spending quality time with
            loved ones, every moment here is designed to feel warm, calm, and refreshing.
          </p>
          <p>
            With comfortable villa accommodations, delicious food, and heartfelt hospitality, Silver
            Hill is the perfect destination to relax, recharge, and experience the beauty of village
            life in serenity.
          </p>
        </div>

        <!-- Divider -->
        <div class="icon-divider">
          <span class="divider-line short"></span>
          <span class="leaf-small">🌿</span>
          <span class="divider-line short"></span>
        </div>

        <!-- Feature Icons -->
        <div class="features">
          <div
            v-for="(feature, index) in features"
            :key="feature.label"
            class="feature-item animate-feature"
            :class="{ visible: isVisible }"
            :style="{ transitionDelay: isVisible ? 0.6 + index * 0.12 + 's' : '0s' }"
          >
            <div class="feature-icon" v-html="feature.icon"></div>
            <span class="feature-label">{{ feature.label }}</span>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE - Image -->
      <div class="about-right animate-right" :class="{ visible: isVisible }">
        <div class="image-blob-wrapper">
          <img src="../assets/about.png" alt="Silver Hill Restaurant" class="restaurant-image" />
          <!-- Green bottom-right accent -->
          <div class="green-accent"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      isVisible: false,
      features: [
        {
          label: 'FRESH\nINGREDIENTS',
          icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <circle cx="20" cy="20" r="18" stroke="#2d5a27" stroke-width="1.5"/>
            <path d="M20 28 C14 22 12 16 16 12 C18 10 22 10 24 12 C28 16 26 22 20 28Z" stroke="#2d5a27" stroke-width="1.5" fill="none"/>
            <line x1="20" y1="28" x2="20" y2="14" stroke="#2d5a27" stroke-width="1.2"/>
          </svg>`,
        },
        {
          label: 'MADE\nWITH LOVE',
          icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <circle cx="20" cy="20" r="18" stroke="#2d5a27" stroke-width="1.5"/>
            <path d="M20 28 C20 28 10 21 10 15 C10 12 12.5 10 15.5 10 C17.5 10 19.2 11.2 20 13 C20.8 11.2 22.5 10 24.5 10 C27.5 10 30 12 30 15 C30 21 20 28 20 28Z" stroke="#2d5a27" stroke-width="1.5" fill="none"/>
          </svg>`,
        },
        {
          label: 'WARM\nHOSPITALITY',
          icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <circle cx="20" cy="20" r="18" stroke="#2d5a27" stroke-width="1.5"/>
            <circle cx="20" cy="15" r="4" stroke="#2d5a27" stroke-width="1.5"/>
            <path d="M12 30 C12 25 15 22 20 22 C25 22 28 25 28 30" stroke="#2d5a27" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8 26 C8 23 10 21 13 21" stroke="#2d5a27" stroke-width="1.2" stroke-linecap="round"/>
            <path d="M32 26 C32 23 30 21 27 21" stroke="#2d5a27" stroke-width="1.2" stroke-linecap="round"/>
          </svg>`,
        },
        {
          label: 'QUALITY YOU\nCAN TASTE',
          icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <circle cx="20" cy="20" r="18" stroke="#2d5a27" stroke-width="1.5"/>
            <path d="M20 28 C14 22 12 16 16 12 C18 10 22 10 24 12 C28 16 26 22 20 28Z" stroke="#2d5a27" stroke-width="1.5" fill="none"/>
            <circle cx="20" cy="19" r="2" fill="#2d5a27"/>
          </svg>`,
        },
      ],
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(this.$refs.aboutContainer)
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap');

/* ─── ROOT SECTION ─── */
.about-section {
  position: relative;
  background-color: #fdfcf8;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* ─── DECORATIVE LEAVES ─── */
.leaf-decor {
  position: absolute;
  width: 180px;
  height: 180px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M100 180 C50 140 20 80 60 30 C80 5 120 5 140 30 C180 80 150 140 100 180Z' fill='%232d5a27' opacity='0.07'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
  pointer-events: none;
}

.leaf-top-left {
  top: -30px;
  left: -40px;
  transform: rotate(-20deg);
  opacity: 0.5;
}

.leaf-bottom-right {
  bottom: -20px;
  right: 10px;
  transform: rotate(160deg);
  opacity: 0.4;
  width: 140px;
  height: 140px;
}

/* ─── LAYOUT CONTAINER ─── */
.about-container {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 60px 40px;
  gap: 170px;
}

/* ══════════════════════════════════
   ANIMATION BASE STATES
══════════════════════════════════ */

/* Left — slide from left */
.animate-left {
  opacity: 0;
  transform: translateX(-60px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}
.animate-left.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Right — slide from right, slight delay */
.animate-right {
  opacity: 0;
  transform: translateX(60px);
  transition:
    opacity 0.8s ease 0.25s,
    transform 0.8s ease 0.25s;
}
.animate-right.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Feature icons — fade up, staggered via inline transitionDelay */
.animate-feature {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}
.animate-feature.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── LEFT COLUMN ─── */
.about-left {
  flex: 0 0 45%;
  max-width: 45%;
  margin-left: -100px;
}

/* Logo */
.logo-area {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 36px;
  margin-top: -10px;
}

.logo-img {
  width: 126px;
  height: auto;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 0.25em;
  color: #2d5a27;
}

.brand-tagline {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  color: #7a9c72;
  margin-top: 2px;
}

/* Section Label */
.section-label {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.divider-line {
  flex: 1;
  height: 1px;
  background-color: #2d5a27;
  opacity: 0.4;
}

.label-text {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: #2d5a27;
  white-space: nowrap;
}

/* Heading */
.about-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 4rem;
  font-weight: 600;
  color: #1e3d1a;
  line-height: 1.15;
  margin: 0 0 28px 0;
}

.leaf-icon {
  font-size: 2rem;
  vertical-align: middle;
}

/* Description */
.about-description {
  color: #5a5a5a;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 28px;
}

.about-description p {
  margin-bottom: 14px;
}

/* Icon divider */
.icon-divider {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
}

.divider-line.short {
  flex: 1;
  max-width: 60px;
  height: 1px;
  background: #2d5a27;
  opacity: 0.3;
}

.leaf-small {
  font-size: 0.9rem;
  opacity: 0.7;
}

/* Features */
.features {
  display: flex;
  align-items: flex-start;
  gap: 0;
}

.feature-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 12px;
  border-right: 1px solid #d6e4d2;
  gap: 10px;
}

.feature-item:last-child {
  border-right: none;
}

.feature-icon svg {
  display: block;
}

.feature-label {
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: #2d5a27;
  white-space: pre-line;
  line-height: 1.5;
  text-transform: uppercase;
}

/* ─── RIGHT COLUMN ─── */
.about-right {
  flex: 0 0 55%;
  max-width: 55%;
  position: relative;
}

.image-blob-wrapper {
  position: relative;
  width: 150%;
  border-radius: 60% 40% 55% 45% / 50% 50% 50% 50%;
  overflow: hidden;
  aspect-ratio: 4/3;
  border: 2px solid #c8ddc4;
}

.restaurant-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.green-accent {
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 160px;
  height: 120px;
  background-color: #b5cca9;
  border-radius: 50% 20% 60% 30%;
  z-index: -1;
  opacity: 0.6;
}

/* ─── RESPONSIVE ─── */
@media (max-width: 900px) {
  .about-container {
    flex-direction: column;
    padding: 40px 24px;
  }

  .about-left,
  .about-right {
    flex: unset;
    max-width: 100%;
    width: 100%;
  }

  .about-heading {
    font-size: 2.2rem;
  }

  .about-right {
    order: -1;
  }
}

@media (max-width: 480px) {
  .about-container {
    flex-direction: column;
    padding: 40px 24px;
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 6px;
    margin-left: 100px;
  }
  .about-container {
    gap: 60px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 60px 40px;
  }

  .about-description p {
    padding-left: 30px;
  }

  .about-left,
  .about-right {
    flex: unset;
    max-width: 100%;
    width: 100%;
  }

  .about-heading {
    font-size: 3.2rem;
    padding-left: 40px;
  }

  .about-right {
    order: -1;
  }

  .image-blob-wrapper {
    position: relative;
    width: 100%;
  }
}
</style>
