<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <!-- Header -->
      <div class="contact-header reveal">
        <span class="section-label">Get In Touch 🌿</span>
        <h2 class="section-title">Contact Us</h2>
        <p class="contact-sub">We'd love to hear from you — reach out or visit us today!</p>
      </div>

      <div class="contact-grid">
        <!-- Info Cards -->
        <div class="contact-info">
          <div
            v-for="(info, i) in contactInfo"
            :key="info.title"
            :class="['info-card', `reveal reveal-left reveal-delay-${i + 1}`]"
          >
            <div class="info-icon">{{ info.icon }}</div>
            <div class="info-content">
              <strong>{{ info.title }}</strong>
              <p v-for="line in info.lines" :key="line">{{ line }}</p>
            </div>
          </div>

          <!-- Map placeholder -->
          <div class="map-placeholder reveal reveal-left reveal-delay-5">
            <div class="map-inner">
              <div class="map-pin">📍</div>
              <p>No. 123, Main Street</p>
              <p>Your City, Sri Lanka</p>
              <a href="https://maps.google.com" target="_blank" class="map-link">Open in Maps →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const contactInfo = [
  {
    icon: '📍',
    title: 'Location',
    lines: ['No. 123, Main Street', 'Your City, Sri Lanka'],
  },
  {
    icon: '📞',
    title: 'Phone',
    lines: ['077 123 4567', '071 234 5678'],
  },
  {
    icon: '✉️',
    title: 'Email',
    lines: ['info@himamarestaurant.lk', 'himamarestaurant.lk'],
  },
  {
    icon: '🕐',
    title: 'Open Hours',
    lines: ['Mon - Sun', '10:00 AM - 10:00 PM'],
  },
]
</script>

<style scoped>
.contact-section {
  padding: 7rem 0;
  background: var(--cream);
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--green-dark), var(--gold), var(--green-dark));
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-header {
  margin-bottom: 3rem;
}

.contact-sub {
  color: var(--text-light);
  margin-top: 1rem;
}

/* Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 480px;
  margin: 0 auto;
}

/* Info Cards */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--white);
  padding: 1.2rem 1.4rem;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.info-card:hover {
  transform: translateX(6px);
  box-shadow: var(--shadow-md);
}

.info-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: var(--cream);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-content strong {
  display: block;
  color: var(--green-dark);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
}

.info-content p {
  color: var(--text-mid);
  font-size: 0.88rem;
  line-height: 1.5;
}

/* Map */
.map-placeholder {
  background: linear-gradient(135deg, var(--green-dark), var(--green-mid));
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  color: white;
}

.map-pin {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
}

.map-placeholder p {
  opacity: 0.9;
  font-size: 0.9rem;
  line-height: 1.6;
}

.map-link {
  display: inline-block;
  margin-top: 1rem;
  color: var(--gold-light);
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
  border-bottom: 1px solid var(--gold-light);
  transition: opacity 0.2s;
}

.map-link:hover {
  opacity: 0.7;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
