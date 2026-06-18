<template>
  <section class="packages-section" id="packages">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <!-- <span class="section-badge">
          <span class="badge-dot"></span>
          Accommodation Packages
        </span> -->
        <h2 class="section-title">
          Stay in Pure
          <span class="title-green">Nature</span>
        </h2>
        <p class="section-subtitle">
          Handpicked villa packages with garden, mountain & pool views. Breakfast included in every
          stay — free cancellation guaranteed.
        </p>
      </div>

      <!-- <div class="billing-toggle">
        <span :class="{ active: !isLongStay }" @click="isLongStay = false">Per night</span>
        <div class="toggle-track" @click="isLongStay = !isLongStay">
          <div class="toggle-thumb" :class="{ shifted: isLongStay }"></div>
        </div>
        <span :class="{ active: isLongStay }" @click="isLongStay = true">
          Long stay <em class="save-label">Save up to 10%</em>
        </span>
      </div> -->

      <!-- Package Cards -->
      <div class="cards-grid">
        <div
          v-for="(pkg, idx) in packages"
          :key="pkg.id"
          class="pkg-card"
          :class="{ 'card-featured': pkg.featured, 'card-visible': mounted }"
          :style="{ transitionDelay: idx * 0.1 + 's' }"
        >
          <div v-if="pkg.popular" class="popular-tag">Most Popular</div>
          <div v-if="pkg.urgent" class="urgency-tag">
            <span class="urgency-dot"></span> Only 1 left!
          </div>

          <div class="card-icon" v-html="pkg.iconSvg"></div>

          <h3 class="pkg-name">{{ pkg.name }}</h3>
          <p class="pkg-tagline">{{ pkg.tagline }}</p>

          <div class="specs-row">
            <span class="spec-pill">👥 {{ pkg.guests }} guests</span>
            <span class="spec-pill">📐 {{ pkg.area }}m²</span>
            <span v-for="s in pkg.specs.slice(0, 3)" :key="s" class="spec-pill">{{ s }}</span>
          </div>

          <div class="price-block">
            <div class="price-row">
              <span class="price-currency">LKR</span>
              <span class="price-amount">{{ isLongStay ? pkg.stayPrice : pkg.nightPrice }}</span>
              <span class="price-per">/ {{ isLongStay ? 'stay' : 'night' }}</span>
            </div>
            <p class="price-note">Includes taxes and fees · {{ pkg.beds }}</p>
          </div>

          <div class="card-divider"></div>

          <ul class="feat-list">
            <li
              v-for="feat in pkg.features"
              :key="feat.text"
              class="feat-item"
              :class="{ 'feat-no': !feat.yes }"
            >
              <span class="feat-icon" :class="feat.yes ? 'icon-yes' : 'icon-no'">
                {{ feat.yes ? '✓' : '✗' }}
              </span>
              {{ feat.text }}
            </li>
          </ul>

          <button
            class="cta-btn"
            :class="pkg.featured ? 'btn-green' : 'btn-outline'"
            @click="$emit('package-selected', pkg)"
          >
            {{ pkg.cta }}
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <p class="guar-note">✦ Free cancellation · No prepayment needed</p>
        </div>
      </div>

      <!-- Info strip -->
      <div class="info-strip">
        <div class="info-item">☕ Breakfast included in all packages</div>
        <div class="info-item">🗓 Free cancellation before May 20, 2026</div>
        <div class="info-item">💳 No credit card or prepayment needed</div>
        <div class="info-item">🏷 Genius discount may be available</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PackagesSection',
  emits: ['package-selected'],
  data() {
    return {
      isLongStay: false,
      mounted: false,
      packages: [
        {
          id: 1,
          name: 'Bungalow with Patio',
          tagline: 'Garden & mountain views · 27m²',
          guests: 2,
          beds: '1 twin + 1 king bed',
          area: 27,
          nightPrice: '10,281',
          stayPrice: '9,253',
          featured: false,
          popular: false,
          urgent: true,
          specs: ['Balcony', 'Pool view', 'Patio'],
          features: [
            { text: 'Private patio & garden access', yes: true },
            { text: 'Attached bathroom', yes: true },
            { text: 'Outdoor furniture & drying rack', yes: true },
            { text: 'Free toiletries & towels', yes: true },
            { text: 'Private entrance', yes: true },
            { text: 'Private pool', yes: false },
          ],
          cta: 'Book This Bungalow',
          iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2d9a4e" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        },
        {
          id: 2,
          name: 'Deluxe Bungalow — Garden View',
          tagline: 'Spacious deluxe with balcony · 31m²',
          guests: 2,
          beds: '1 twin + 1 king bed',
          area: 31,
          nightPrice: '15,421',
          stayPrice: '13,879',
          featured: true,
          popular: true,
          urgent: true,
          specs: ['Balcony', 'Garden view', 'Mountain view'],
          features: [
            { text: 'Entire bungalow exclusive', yes: true },
            { text: 'Garden & mountain view', yes: true },
            { text: 'Attached private bathroom', yes: true },
            { text: 'Daily housekeeping', yes: true },
            { text: 'BBQ & terrace access', yes: true },
            { text: 'Genius discount eligible', yes: true },
          ],
          cta: 'Reserve Now',
          iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2d9a4e" stroke-width="1.8"><path d="M12 22V12M12 12C12 7 17 4 17 4s0 5-5 8zM12 12C12 7 7 4 7 4s0 5 5 8z"/><path d="M5 22h14"/></svg>`,
        },
        {
          id: 3,
          name: 'Bungalow — Garden View',
          tagline: 'Extra beds for 3 guests · 31m²',
          guests: 3,
          beds: '2 twin beds + 1 king bed',
          area: 31,
          nightPrice: '20,562',
          stayPrice: '18,506',
          featured: false,
          popular: false,
          urgent: true,
          specs: ['Balcony', 'Garden view', 'Mountain view'],
          features: [
            { text: '3-bed configuration', yes: true },
            { text: 'Garden & mountain views', yes: true },
            { text: 'Balcony & patio', yes: true },
            { text: 'Attached bathroom', yes: true },
            { text: 'BBQ & terrace', yes: true },
            { text: 'Private pool', yes: false },
          ],
          cta: 'Book Garden Bungalow',
          iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2d9a4e" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>`,
        },
        {
          id: 4,
          name: 'Two-Bedroom Bungalow',
          tagline: 'Perfect for families · 60m²',
          guests: 4,
          beds: 'Bedroom 1 & 2: twin + king',
          area: 60,
          nightPrice: '22,553',
          stayPrice: '20,298',
          featured: false,
          popular: false,
          urgent: true,
          specs: ['Balcony', 'Garden view', 'Mountain view'],
          features: [
            { text: 'Two separate bedrooms', yes: true },
            { text: '60m² — most spacious', yes: true },
            { text: 'Garden & mountain views', yes: true },
            { text: 'BBQ & terrace', yes: true },
            { text: 'Attached bathroom', yes: true },
            { text: 'Genius discount eligible', yes: true },
          ],
          cta: 'Book Family Suite',
          iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2d9a4e" stroke-width="1.8"><path d="M3 21v-4a4 4 0 014-4h10a4 4 0 014 4v4"/><circle cx="12" cy="7" r="4"/></svg>`,
        },
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      this.mounted = true
    }, 80)
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600&display=swap');

.packages-section {
  background: #ffffff;
  padding: 88px 0 72px;
  font-family: 'Inter', sans-serif;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}
.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: #f0faf4;
  border: 1px solid #b7e4c7;
  color: #1b5e20;
  padding: 5px 18px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #2d9a4e;
  animation: blink 2s ease-in-out infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 5.5vw, 56px);
  font-weight: 700;
  color: #111;
  line-height: 1.15;
  margin: 0 0 14px;
  letter-spacing: -0.02em;
}
.title-green {
  background: linear-gradient(135deg, #2d9a4e, #1b5e20);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.section-subtitle {
  font-size: 15px;
  color: #666;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.68;
}

.billing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
  font-size: 13px;
  font-weight: 500;
  color: #aaa;
  cursor: pointer;
  user-select: none;
}
.billing-toggle span {
  transition: color 0.2s;
}
.billing-toggle span.active {
  color: #111;
  font-weight: 600;
}
.toggle-track {
  width: 44px;
  height: 24px;
  background: #e8f5ec;
  border-radius: 100px;
  border: 1.5px solid #b7e4c7;
  position: relative;
}
.toggle-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #2d9a4e;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-thumb.shifted {
  transform: translateX(20px);
}
.save-label {
  font-style: normal;
  background: #f0faf4;
  color: #1b5e20;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 100px;
  margin-left: 4px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
  margin-bottom: 32px;
}

.pkg-card {
  background: #fff;
  border-radius: 20px;
  border: 1.5px solid #ebebeb;
  padding: 28px 22px 22px;
  position: relative;
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.45s ease,
    transform 0.45s ease,
    border-color 0.2s,
    box-shadow 0.2s;
  overflow: hidden;
}
.pkg-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #2d9a4e, #52c77e);
  opacity: 0;
  transition: opacity 0.2s;
}
.pkg-card:hover {
  border-color: #b7e4c7;
  box-shadow: 0 8px 32px rgba(45, 154, 78, 0.08);
}
.pkg-card:hover::before {
  opacity: 1;
}
.card-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.card-featured {
  border: 2px solid #2d9a4e;
  box-shadow: 0 0 0 4px rgba(45, 154, 78, 0.06);
}
.card-featured::before {
  opacity: 1;
}

.popular-tag {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #2d9a4e;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 100px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.urgency-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #fff5f5;
  border: 1px solid #fecaca;
  color: #b91c1c;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 6px;
  margin-bottom: 12px;
}
.urgency-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #ef4444;
  animation: blink 1.5s ease-in-out infinite;
}

.card-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #f0faf4;
  border: 1px solid #dcfce7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.pkg-name {
  font-family: 'Playfair Display', serif;
  font-size: 19px;
  font-weight: 700;
  color: #111;
  margin: 0 0 4px;
  line-height: 1.25;
}
.pkg-tagline {
  font-size: 12px;
  color: #999;
  margin-bottom: 16px;
}

.specs-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
}
.spec-pill {
  background: #f8f8f8;
  border: 1px solid #ebebeb;
  color: #555;
  font-size: 11px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 100px;
}

.price-block {
  margin-bottom: 16px;
}
.price-row {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 4px;
}
.price-currency {
  font-size: 13px;
  font-weight: 600;
  color: #2d9a4e;
}
.price-amount {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 700;
  color: #111;
  line-height: 1;
  letter-spacing: -0.02em;
}
.price-per {
  font-size: 12px;
  color: #bbb;
  margin-left: 2px;
}
.price-note {
  font-size: 11px;
  color: #bbb;
  margin: 0;
}

.card-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #ebebeb, transparent);
  margin-bottom: 16px;
}

.feat-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.feat-item {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 13px;
  color: #333;
}
.feat-item.feat-no {
  color: #ccc;
}
.feat-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 11px;
  font-weight: 700;
}
.icon-yes {
  background: #f0faf4;
  color: #2d9a4e;
}
.icon-no {
  background: #f5f5f5;
  color: #ccc;
}

.cta-btn {
  width: 100%;
  padding: 13px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  transition: all 0.22s;
  margin-bottom: 10px;
}
.btn-green {
  background: linear-gradient(135deg, #2d9a4e, #1b5e20);
  color: #fff;
  border: none;
  box-shadow: 0 4px 14px rgba(45, 154, 78, 0.28);
}
.btn-green:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 22px rgba(45, 154, 78, 0.38);
}
.btn-outline {
  background: #fff;
  color: #2d9a4e;
  border: 1.5px solid #b7e4c7;
}
.btn-outline:hover {
  background: #f0faf4;
  border-color: #2d9a4e;
}
.cta-btn svg {
  transition: transform 0.2s;
}
.cta-btn:hover svg {
  transform: translateX(3px);
}

.guar-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 11px;
  color: #bbb;
  margin: 0;
}

.info-strip {
  background: #f8fdf9;
  border: 1.5px solid #dcfce7;
  border-radius: 16px;
  padding: 20px 28px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #555;
}

@media (max-width: 640px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
  .packages-section {
    padding: 60px 0 52px;
  }
  .info-strip {
    grid-template-columns: 1fr;
  }
}
</style>
