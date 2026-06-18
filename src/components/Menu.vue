<template>
  <section class="restaurant-menu" id="menu">
    <!-- AMBIENT BACKGROUND ORBS -->
    <div class="ambient">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <!-- HEADER -->
    <div class="menu-header">
      <div class="eyebrow-wrap">
        <span class="eyebrow-line"></span>
        <p class="menu-subtitle">Silver Hill Eco Village</p>
        <span class="eyebrow-line"></span>
      </div>
      <h2 class="menu-main-title">
        Traditional Sri Lankan<br />
        <em>Dining Experience</em>
      </h2>
      <p class="menu-description">
        Enjoy authentic village-inspired cuisine prepared with fresh local ingredients, traditional
        recipes, and the warm hospitality of Silver Hill Eco Village.
      </p>
      <div class="leaf-divider">
        <svg viewBox="0 0 240 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 12 Q60 0 120 12 Q180 24 240 12"
            stroke="url(#g1)"
            stroke-width="1.5"
            fill="none"
          />
          <circle cx="120" cy="12" r="4" fill="#57c084" />
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="240" y2="0">
              <stop offset="0%" stop-color="#57c084" stop-opacity="0" />
              <stop offset="50%" stop-color="#57c084" />
              <stop offset="100%" stop-color="#57c084" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <!-- CATEGORY TABS -->
    <div class="tab-row">
      <button
        v-for="cat in categories"
        :key="cat.key"
        :class="['tab-btn', { active: activeTab === cat.key }]"
        @click="activeTab = cat.key"
      >
        <span class="tab-icon">{{ cat.icon }}</span>
        <span class="tab-label">{{ cat.label }}</span>
      </button>
    </div>

    <!-- MENU CARDS -->
    <transition name="fade-slide" mode="out-in">
      <div :key="activeTab" class="cards-wrap">
        <div v-for="card in filteredCards" :key="card.id" class="menu-card">
          <div class="card-glow"></div>

          <div class="card-title-area">
            <div class="card-badge">
              <span class="badge-icon">{{ card.icon }}</span>
              <span class="menu-type">{{ card.type }}</span>
            </div>
            <h2 class="card-heading">{{ card.heading }}</h2>
            <div class="card-underline"></div>
          </div>

          <div class="menu-items">
            <div
              v-for="(item, idx) in card.items"
              :key="item.name"
              class="menu-item"
              :style="{ '--delay': idx * 0.06 + 's' }"
              @click="openModal(item, card.type)"
            >
              <div class="item-number">
                <span>{{ String(idx + 1).padStart(2, '0') }}</span>
              </div>
              <div class="item-content">
                <h3 class="item-title">{{ item.name }}</h3>
              </div>
              <div class="item-arrow">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 9h12M10 5l5 4-5 4"
                    stroke="#57c084"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- MODAL POPUP -->
    <transition name="modal-fade">
      <div v-if="selectedItem" class="modal-overlay" @click.self="closeModal">
        <transition name="modal-slide">
          <div v-if="selectedItem" class="modal-box">
            <!-- Modal Image -->
            <div class="modal-img-wrap">
              <img :src="selectedItem.img" :alt="selectedItem.name" class="modal-img" />
              <div class="modal-img-overlay"></div>
              <div class="modal-badge-float">
                <span>{{ selectedBadge }}</span>
              </div>
              <button class="modal-close" @click="closeModal">&#x2715;</button>
            </div>

            <!-- Modal Body — name + description + details -->
            <div class="modal-body">
              <h3 class="modal-title">{{ selectedItem.name }}</h3>

              <p class="modal-description">{{ selectedItem.description }}</p>

              <div class="modal-divider"></div>

              <div class="modal-details-grid">
                <div v-for="(val, key) in selectedItem.detail" :key="key" class="modal-detail-item">
                  <div class="modal-detail-label">{{ formatKey(key) }}</div>
                  <div class="modal-detail-val">{{ val }}</div>
                </div>
              </div>

              <div class="modal-note">
                <p v-html="selectedItem.note"></p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'RestaurantMenu',

  data() {
    return {
      activeTab: 'all',
      selectedItem: null,
      selectedBadge: '',

      categories: [
        { key: 'all', icon: '🌿', label: 'All Items' },
        { key: 'morning', icon: '🌅', label: 'Breakfast' },
        { key: 'main', icon: '🍛', label: 'Lunch & Dinner' },
      ],

      cards: [
        {
          id: 'breakfast',
          category: 'morning',
          icon: '🌅',
          type: 'Morning Special',
          heading: 'Breakfast Menu',
          items: [
            {
              name: 'String Hoppers Sri Lankan Style Plate',
              description:
                'Handmade string hoppers served with traditional Sri Lankan curry, fresh coconut sambal, and village-style side dishes.',
              tags: ['Traditional', 'Village Style', 'Fresh Coconut Sambal'],
              img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&q=80',
              detail: {
                servingTime: '7:00 AM – 10:30 AM',
                style: 'Village Style',
                spiceLevel: 'Medium',
                allergens: 'Gluten-free',
              },
              note: "<strong>Chef's Tip:</strong> Best enjoyed with a cup of Ceylon tea. Ask our team for the traditional serving style with banana leaf.",
            },
            {
              name: 'Coconut Roti with Sambal',
              description:
                'Homemade coconut roti served with curry leaves sambal, butter spread, and tropical fruit jam.',
              tags: ['Homemade', 'Butter & Jam', 'Authentic Recipe'],
              img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80',
              detail: {
                servingTime: '7:00 AM – 10:30 AM',
                style: 'Homemade',
                spiceLevel: 'Mild – Medium',
                allergens: 'Contains Coconut',
              },
              note: '<strong>Note:</strong> Our coconut roti is stone-ground daily. Pairs perfectly with fresh kithul treacle.',
            },
            {
              name: 'Milk Rice with Lunu Miris',
              description:
                'Traditional creamy milk rice served with spicy homemade lunu miris prepared in authentic Sri Lankan style.',
              tags: ['Traditional', 'Spicy', 'Village Flavor'],
              img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
              detail: {
                servingTime: '7:00 AM – 10:00 AM',
                style: 'Ceremonial',
                spiceLevel: 'Spicy',
                allergens: 'Contains Dairy',
              },
              note: '<strong>Heritage Dish:</strong> Milk rice (Kiribath) is prepared on auspicious occasions. Available on weekends and special days.',
            },
            {
              name: 'Roasted Bread Breakfast Plate',
              description:
                'Freshly roasted bread served with butter, sweet fruit jam, and a fluffy omelette made from farm fresh eggs.',
              tags: ['Fresh Eggs', 'Light Breakfast', 'Farm Fresh'],
              img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
              detail: {
                servingTime: '7:00 AM – 11:00 AM',
                style: 'Continental',
                spiceLevel: 'Mild',
                allergens: 'Contains Egg, Gluten',
              },
              note: '<strong>Farm to Table:</strong> Our eggs come from free-range hens on the eco village grounds, harvested fresh each morning.',
            },
          ],
        },

        {
          id: 'lunch-dinner',
          category: 'main',
          icon: '🍛',
          type: 'Village Cuisine',
          heading: 'Lunch & Dinner Menu',
          items: [
            {
              name: 'Steamed Sri Lankan Rice',
              description:
                'Freshly prepared traditional Sri Lankan rice cooked daily with aromatic pandan leaves and a touch of coconut oil.',
              tags: ['Fresh Daily', 'Traditional'],
              img: 'https://images.unsplash.com/photo-1596097559816-1c7a7d31b3df?w=800&q=80',
              detail: {
                servingTime: '12:00 PM – 9:00 PM',
                style: 'Traditional',
                spiceLevel: 'None',
                allergens: 'Gluten-free, Vegan',
              },
              note: '<strong>Daily Fresh:</strong> Our rice is cooked in batches throughout the day. We use locally grown red raw rice for authentic flavour.',
            },
            {
              name: 'Three Village Vegetable Curries',
              description:
                'Authentic village-style vegetable curries prepared with local herbs and spices, served with coconut milk gravy.',
              tags: ['Healthy', 'Village Vegetables'],
              img: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&q=80',
              detail: {
                servingTime: '12:00 PM – 9:00 PM',
                style: 'Village Style',
                spiceLevel: 'Medium',
                allergens: 'Vegan, Gluten-free',
              },
              note: '<strong>Seasonal Harvest:</strong> Our vegetable selection changes with the season to bring you the freshest village produce available.',
            },
            {
              name: 'Traditional Meat Curry',
              description:
                'Rich and flavorful Sri Lankan meat curry with homemade spices, slow-cooked to perfection with roasted coconut.',
              tags: ['Spicy', 'Homemade Recipe'],
              img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
              detail: {
                servingTime: '12:00 PM – 9:00 PM',
                style: 'Slow Cooked',
                spiceLevel: 'Hot',
                allergens: 'Gluten-free',
              },
              note: "<strong>Chef's Signature:</strong> Slow-cooked for 3+ hours using a blend of 14 hand-ground spices. A true village heirloom recipe.",
            },
            {
              name: 'Grilled Chicken',
              description:
                'Juicy grilled chicken marinated with authentic Sri Lankan herbs and spices, charcoal-grilled over open flame.',
              tags: ['Chef Special', 'Authentic Spices'],
              img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=800&q=80',
              detail: {
                servingTime: '12:00 PM – 9:00 PM',
                style: 'Charcoal Grilled',
                spiceLevel: 'Medium – Hot',
                allergens: 'Gluten-free',
              },
              note: '<strong>Preparation:</strong> Marinated for a minimum of 12 hours in fresh herbs. Grilled to order — please allow 20 minutes.',
            },
          ],
        },
      ],
    }
  },

  computed: {
    filteredCards() {
      if (this.activeTab === 'all') return this.cards
      return this.cards.filter((c) => c.category === this.activeTab)
    },
  },

  methods: {
    openModal(item, badge) {
      this.selectedItem = item
      this.selectedBadge = badge
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.selectedItem = null
      this.selectedBadge = ''
      document.body.style.overflow = ''
    },
    formatKey(key) {
      return key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())
    },
  },

  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal()
    })
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,700;1,500;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

/* ── Tokens ── */
:root {
  --green: #57c084;
  --green-light: #8ce2b1;
  --green-glow: rgba(87, 192, 132, 0.18);
  --green-border: rgba(87, 192, 132, 0.22);
  --gold: #c9a86c;
  --bg: #060e09;
  --card: rgba(8, 18, 12, 0.94);
  --text: #f2ede5;
  --muted: rgba(242, 237, 229, 0.58);
  --radius-card: 32px;
  --radius-item: 20px;
}

/* ── Section ── */
.restaurant-menu {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 120px 7% 100px;
  background: var(--bg);
  font-family: 'DM Sans', sans-serif;
  color: var(--text);
  overflow: hidden;
}

/* ── Ambient Orbs ── */
.ambient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.35;
  animation: drift 14s ease-in-out infinite alternate;
}
.orb-1 {
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, #1a5c38, transparent 70%);
  top: -160px;
  left: -180px;
  animation-duration: 16s;
}
.orb-2 {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, #0a3d22, transparent 70%);
  bottom: 80px;
  right: -120px;
  animation-duration: 20s;
  animation-delay: -6s;
}
.orb-3 {
  width: 260px;
  height: 260px;
  background: radial-gradient(circle, #57c084, transparent 70%);
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  animation-duration: 10s;
  animation-delay: -3s;
}
@keyframes drift {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(30px, 20px) scale(1.08);
  }
}

.menu-header,
.tab-row,
.cards-wrap {
  position: relative;
  z-index: 1;
}

/* ── Header ── */
.menu-header {
  text-align: center;
  margin-bottom: 60px;
}
.eyebrow-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 22px;
}
.eyebrow-line {
  display: block;
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--green), transparent);
}
.menu-subtitle {
  color: var(--green);
  font-size: 11px;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 500;
}
.menu-main-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 700;
  line-height: 1.15;
  color: var(--text);
  margin-bottom: 24px;
}
.menu-main-title em {
  font-style: italic;
  color: var(--green);
  background: linear-gradient(135deg, var(--green), #a8f0c8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.menu-description {
  max-width: 620px;
  margin: 0 auto 36px;
  font-size: 15px;
  line-height: 1.9;
  color: var(--muted);
  font-weight: 300;
}
.leaf-divider {
  display: flex;
  justify-content: center;
}
.leaf-divider svg {
  width: 200px;
}

/* ── Tabs ── */
.tab-row {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}
.tab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 26px;
  border-radius: 50px;
  border: 1px solid var(--green-border);
  background: transparent;
  color: var(--muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.tab-btn:hover {
  border-color: var(--green);
  color: var(--green);
  background: var(--green-glow);
}
.tab-btn.active {
  background: linear-gradient(135deg, #57c084, #1f6b43);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 8px 28px rgba(87, 192, 132, 0.35);
}
.tab-icon {
  font-size: 16px;
}
.tab-label {
  white-space: nowrap;
}

/* ── Cards ── */
.cards-wrap {
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.menu-card {
  position: relative;
  background: var(--card);
  border: 1px solid var(--green-border);
  border-radius: var(--radius-card);
  padding: 56px 52px;
  overflow: hidden;
  backdrop-filter: blur(12px);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.03);
  transition:
    border-color 0.4s ease,
    box-shadow 0.4s ease;
}
.menu-card:hover {
  border-color: rgba(87, 192, 132, 0.45);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.6),
    0 0 50px rgba(87, 192, 132, 0.12);
}
.card-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(87, 192, 132, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  top: -200px;
  right: -150px;
  pointer-events: none;
}
.card-title-area {
  margin-bottom: 44px;
  position: relative;
  z-index: 1;
}
.card-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px;
  border-radius: 50px;
  background: rgba(87, 192, 132, 0.1);
  border: 1px solid var(--green-border);
  margin-bottom: 16px;
}
.badge-icon {
  font-size: 14px;
}
.menu-type {
  color: var(--green-light);
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 500;
}
.card-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
  margin-bottom: 18px;
}
.card-underline {
  width: 56px;
  height: 2px;
  background: linear-gradient(90deg, var(--green), transparent);
  border-radius: 2px;
}

/* ── Menu Items Grid ── */
.menu-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  position: relative;
  z-index: 1;
}
.menu-item {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 22px;
  border-radius: var(--radius-item);
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: itemReveal 0.5s ease both;
  animation-delay: var(--delay, 0s);
  position: relative;
  overflow: hidden;
}
@keyframes itemReveal {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.menu-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(87, 192, 132, 0.06) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.35s ease;
  border-radius: inherit;
}
.menu-item:hover {
  transform: translateY(-6px);
  border-color: rgba(87, 192, 132, 0.32);
  box-shadow:
    0 14px 36px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(87, 192, 132, 0.08);
}
.menu-item:hover::before {
  opacity: 1;
}

.item-number {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(145deg, #3da96c, #1a5c38);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 8px 22px rgba(87, 192, 132, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.5px;
}
.item-content {
  flex: 1;
  min-width: 0;
}
.item-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0;
  line-height: 1.3;
}
.item-arrow {
  flex-shrink: 0;
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s ease;
}
.menu-item:hover .item-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ══════════════════════════════
   MODAL
══════════════════════════════ */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  backdrop-filter: blur(6px);
}
.modal-box {
  background: #0b1a10;
  border: 1px solid rgba(87, 192, 132, 0.3);
  border-radius: 28px;
  max-width: 580px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow:
    0 40px 100px rgba(0, 0, 0, 0.8),
    0 0 60px rgba(87, 192, 132, 0.1);
}

/* Image */
.modal-img-wrap {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 26px 26px 0 0;
}
.modal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.modal-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(6, 14, 9, 0.95) 100%);
}
.modal-badge-float {
  position: absolute;
  top: 20px;
  left: 20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 50px;
  background: rgba(6, 14, 9, 0.7);
  border: 1px solid rgba(87, 192, 132, 0.35);
  backdrop-filter: blur(8px);
}
.modal-badge-float span {
  color: var(--green-light);
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
}
.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(6, 14, 9, 0.7);
  border: 1px solid rgba(87, 192, 132, 0.25);
  color: var(--muted);
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  backdrop-filter: blur(8px);
  line-height: 1;
}
.modal-close:hover {
  background: rgba(87, 192, 132, 0.15);
  color: #fff;
  border-color: var(--green);
}

/* Body — name + description + details */
.modal-body {
  padding: 28px 32px 36px;
}
.modal-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 700;
  color: white;
  line-height: 1.25;
  margin-bottom: 14px;
}
.modal-description {
  font-size: 14.5px;
  line-height: 1.85;
  color: white;
  font-weight: 300;
  margin-bottom: 24px;
}
.modal-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--green-border), transparent);
  margin-bottom: 24px;
}
.modal-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 0;
}
.modal-detail-item {
  background: rgba(87, 192, 132, 0.05);
  border: 1px solid rgba(87, 192, 132, 0.12);
  border-radius: 16px;
  padding: 18px 20px;
}
.modal-detail-label {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  margin-bottom: 8px;
}
.modal-detail-val {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: white;
  font-weight: 600;
}
.modal-note {
  margin-top: 20px;
  padding: 18px 20px;
  background: rgba(87, 192, 132, 0.06);
  border: 1px solid rgba(87, 192, 132, 0.15);
  border-radius: 16px;
  border-left: 3px solid var(--green);
}
.modal-note p {
  font-size: 13.5px;
  line-height: 1.8;
  color: white;
  font-weight: 300;
}
.modal-note p :deep(strong) {
  color: var(--green-light);
  font-weight: 500;
}

/* ── Modal Transitions ── */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-slide-enter-active {
  transition: all 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.modal-slide-leave-active {
  transition: all 0.25s ease;
}
.modal-slide-enter-from {
  opacity: 0;
  transform: translateY(32px) scale(0.97);
}
.modal-slide-leave-to {
  opacity: 0;
  transform: translateY(-16px) scale(0.98);
}

/* ── Card Transitions ── */
.fade-slide-enter-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.fade-slide-leave-active {
  transition: all 0.25s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(24px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* ══ Tablet ══ */
@media (max-width: 991px) {
  .restaurant-menu {
    padding: 90px 5% 80px;
  }
  .menu-card {
    padding: 40px 36px;
  }
  .menu-items {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 16px;
  }
}

/* ══ Mobile ══ */
@media (max-width: 768px) {
  .restaurant-menu {
    padding: 70px 20px 70px;
  }
  .menu-card {
    padding: 32px 24px;
    border-radius: 24px;
  }
  .menu-items {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .card-glow {
    display: none;
  }
  .menu-item {
    padding: 20px 18px;
    gap: 14px;
  }
  .item-number {
    width: 44px;
    height: 44px;
    border-radius: 13px;
    font-size: 13px;
  }
  .item-title {
    font-size: 18px;
  }
  .item-arrow {
    display: none;
  }
  .tab-row {
    gap: 8px;
  }
  .tab-btn {
    padding: 10px 18px;
    font-size: 12px;
  }
  .modal-box {
    border-radius: 22px;
  }
  .modal-img-wrap {
    height: 220px;
    border-radius: 20px 20px 0 0;
  }
  .modal-body {
    padding: 22px 20px 28px;
  }
  .modal-details-grid {
    grid-template-columns: 1fr;
  }
}

/* ══ Small Mobile ══ */
@media (max-width: 420px) {
  .restaurant-menu {
    padding: 60px 16px 60px;
  }
  .menu-card {
    padding: 24px 18px;
    border-radius: 20px;
  }
  .tab-row {
    gap: 6px;
  }
  .tab-btn {
    padding: 9px 14px;
    font-size: 11px;
  }
  .tab-icon {
    font-size: 14px;
  }
  .eyebrow-line {
    width: 36px;
  }
  .card-heading {
    font-size: 26px;
  }
  .item-title {
    font-size: 16px;
  }
  .tag {
    font-size: 10px;
    padding: 4px 10px;
  }
}
</style>
