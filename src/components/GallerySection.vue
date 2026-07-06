<template>
  <section id="gallery" class="gallery-section">
    <div class="gallery-container">
      <div class="gallery-header reveal">
        <span class="section-label">Our Moments 🌿</span>
        <h2 class="section-title center-title">Photo Gallery</h2>
        <p class="gallery-sub">A visual feast — moments captured with love</p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="filter-tabs reveal">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          :class="['filter-btn', { active: activeTab === tab.key }]"
          @click="setTab(tab.key)"
        >
          {{ tab.icon }} {{ tab.label }}
          <span class="tab-count">{{ getCount(tab.key) }}</span>
        </button>
      </div>

      <!-- Gallery Grid -->
      <transition-group name="grid-anim" tag="div" class="gallery-grid">
        <div
          v-for="(photo, i) in filteredPhotos"
          :key="photo.id"
          :class="['gallery-item', photo.size]"
          @click="openLightbox(photo.id)"
        >
          <div class="photo-bg">
            <img
              :src="photo.src"
              :alt="photo.label"
              class="photo-img"
              loading="lazy"
              @error="onImgError($event, photo)"
            />
            <div
              v-if="photo.fallback"
              class="photo-fallback"
              :style="{ background: photo.gradient }"
            >
              <div class="photo-emoji">{{ photo.emoji }}</div>
            </div>
          </div>

          <div class="photo-overlay">
            <div class="overlay-content">
              <span class="overlay-icon">🔍</span>
              <p class="overlay-label">{{ photo.label }}</p>
            </div>
          </div>

          <span class="photo-badge">{{ photo.categoryIcon }} {{ photo.categoryLabel }}</span>
        </div>
      </transition-group>

      <!-- Empty state -->
      <div v-if="filteredPhotos.length === 0" class="empty-state">
        <p>No photos yet in this category.</p>
      </div>

      <div class="gallery-cta reveal reveal-delay-3">
        <button class="btn-outline" @click="showMore = !showMore">
          {{ showMore ? 'Show Less 📷' : 'View More Photos 📷' }}
        </button>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <transition name="lb-fade">
        <div class="lightbox" v-if="lightboxOpen" @click="closeLightbox">
          <div class="lightbox-content" @click.stop>
            <button class="lb-close" @click="closeLightbox">✕</button>
            <button class="lb-arrow lb-arrow-left" @click="prevPhoto">&#8592;</button>
            <button class="lb-arrow lb-arrow-right" @click="nextPhoto">&#8594;</button>

            <transition :name="slideDir" mode="out-in">
              <div class="lb-photo" :key="lightboxIndex">
                <img
                  :src="currentPhoto.src"
                  :alt="currentPhoto.label"
                  class="lb-img"
                  @error="onImgError($event, currentPhoto)"
                />
                <div
                  v-if="currentPhoto.fallback"
                  class="lb-fallback"
                  :style="{ background: currentPhoto.gradient }"
                >
                  <div class="lb-emoji">{{ currentPhoto.emoji }}</div>
                </div>
                <span class="lb-category-tag">
                  {{ currentPhoto.categoryIcon }} {{ currentPhoto.categoryLabel }}
                </span>
              </div>
            </transition>

            <div class="lb-nav">
              <button @click="prevPhoto">← Prev</button>
              <div class="lb-info">
                <p class="lb-label">{{ currentPhoto.label }}</p>
                <span class="lb-counter"
                  >{{ lightboxIndex + 1 }} / {{ lightboxPhotos.length }}</span
                >
              </div>
              <button @click="nextPhoto">Next →</button>
            </div>

            <div class="lb-thumbs">
              <div
                v-for="(photo, i) in lightboxPhotos"
                :key="photo.id"
                :class="['lb-thumb', { active: i === lightboxIndex }]"
                @click="goToPhoto(i)"
              >
                <img :src="photo.src" :alt="photo.label" @error="onImgError($event, photo)" />
                <div
                  v-if="photo.fallback"
                  class="thumb-fallback"
                  :style="{ background: photo.gradient }"
                >
                  {{ photo.emoji }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

// ─── Events Images ───────────────────────────────────
import event1 from '../assets/Events/1.png'
import event2 from '../assets/Events/2.jpeg'
import event3 from '../assets/Events/3.jpeg'
import event4 from '../assets/Events/4.jpeg'

// ─── Nature & Birds Images ───────────────────────────
// Oyage real photo files "src/assets/nature/" folder ekata dala,
// filenames witharak wenas karanna
import nature1 from '../assets/Events/2.jpeg'
import nature2 from '../assets/Events/2.jpeg'
import nature3 from '../assets/Events/2.jpeg'
import nature4 from '../assets/Events/2.jpeg'

// ─── Tabs ─────────────────────────────────────────────
const tabs = [
  { key: 'all', icon: '🖼', label: 'All' },
  { key: 'events', icon: '🎉', label: 'Events' },
  { key: 'nature', icon: '🐦', label: 'Nature & Birds' },
]

const activeTab = ref('all')
const showMore = ref(false)
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const slideDir = ref('slide-left')

const setTab = (key) => {
  activeTab.value = key
  showMore.value = false
}

// ─── Photos ───────────────────────────────────────────
const photos = reactive([
  // ── Events (4) ─────────────────────────────────────
  {
    id: 1,
    src: event1,
    emoji: '🎉',
    label: 'Birthday Night',
    gradient: 'linear-gradient(135deg,#c9a84c,#8b6914)',
    category: 'events',
    categoryIcon: '🎉',
    categoryLabel: 'Events',
    size: 'wide',
    fallback: false,
  },
  {
    id: 2,
    src: event2,
    emoji: '🥂',
    label: 'Anniversary Dinner',
    gradient: 'linear-gradient(135deg,#8e44ad,#c39bd3)',
    category: 'events',
    categoryIcon: '🎉',
    categoryLabel: 'Events',
    size: '',
    fallback: false,
  },
  {
    id: 3,
    src: event3,
    emoji: '🎊',
    label: 'Corporate Lunch',
    gradient: 'linear-gradient(135deg,#2d5a3d,#1a3a2a)',
    category: 'events',
    categoryIcon: '🎉',
    categoryLabel: 'Events',
    size: '',
    fallback: false,
  },
  {
    id: 4,
    src: event4,
    emoji: '🎈',
    label: 'Special Celebration',
    gradient: 'linear-gradient(135deg,#c9a84c,#8b6914)',
    category: 'events',
    categoryIcon: '🎉',
    categoryLabel: 'Events',
    size: '',
    fallback: false,
  },

  // ── Nature & Birds (4) ─────────────────────────────
  {
    id: 5,
    src: nature1,
    emoji: '🐦',
    label: 'Morning Birdsong',
    gradient: 'linear-gradient(135deg,#2d5a3d,#4a8c5c)',
    category: 'nature',
    categoryIcon: '🐦',
    categoryLabel: 'Nature & Birds',
    size: 'wide',
    fallback: false,
  },
  {
    id: 6,
    src: nature2,
    emoji: '🌿',
    label: 'Garden Trails',
    gradient: 'linear-gradient(135deg,#3d6b4f,#5a9970)',
    category: 'nature',
    categoryIcon: '🐦',
    categoryLabel: 'Nature & Birds',
    size: '',
    fallback: false,
  },
  {
    id: 7,
    src: nature3,
    emoji: '🦜',
    label: 'Colourful Visitors',
    gradient: 'linear-gradient(135deg,#c9a84c,#e8c97a)',
    category: 'nature',
    categoryIcon: '🐦',
    categoryLabel: 'Nature & Birds',
    size: 'tall',
    fallback: false,
  },
  {
    id: 8,
    src: nature4,
    emoji: '🌳',
    label: 'Eco Village Grounds',
    gradient: 'linear-gradient(135deg,#2d5a3d,#1a3a2a)',
    category: 'nature',
    categoryIcon: '🐦',
    categoryLabel: 'Nature & Birds',
    size: '',
    fallback: false,
  },
])

// ─── Computed ─────────────────────────────────────────
const INITIAL = 8

const filteredPhotos = computed(() => {
  const base =
    activeTab.value === 'all' ? photos : photos.filter((p) => p.category === activeTab.value)
  return showMore.value ? base : base.slice(0, INITIAL)
})

const lightboxPhotos = computed(() =>
  activeTab.value === 'all' ? photos : photos.filter((p) => p.category === activeTab.value),
)

const currentPhoto = computed(() => lightboxPhotos.value[lightboxIndex.value])

const getCount = (key) =>
  key === 'all' ? photos.length : photos.filter((p) => p.category === key).length

// ─── Lightbox ─────────────────────────────────────────
const openLightbox = (id) => {
  const idx = lightboxPhotos.value.findIndex((p) => p.id === id)
  lightboxIndex.value = idx >= 0 ? idx : 0
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const prevPhoto = () => {
  slideDir.value = 'slide-right'
  lightboxIndex.value =
    (lightboxIndex.value - 1 + lightboxPhotos.value.length) % lightboxPhotos.value.length
}

const nextPhoto = () => {
  slideDir.value = 'slide-left'
  lightboxIndex.value = (lightboxIndex.value + 1) % lightboxPhotos.value.length
}

const goToPhoto = (i) => {
  slideDir.value = i > lightboxIndex.value ? 'slide-left' : 'slide-right'
  lightboxIndex.value = i
}

const onImgError = (event, photo) => {
  photo.fallback = true
  event.target.style.display = 'none'
}
</script>

<style scoped>
/* ─── Section ─────────────────────────── */
.gallery-section {
  padding: 7rem 0;
  background: var(--white);
  overflow: hidden;
}
.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.gallery-header {
  text-align: center;
  margin-bottom: 1rem;
}
.center-title::after {
  left: 50%;
  transform: translateX(-50%);
}
.gallery-sub {
  color: var(--text-light);
  margin-top: 1.2rem;
  font-style: italic;
}

/* ─── Filter Tabs ─────────────────────── */
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin: 2rem 0 0.5rem;
  flex-wrap: wrap;
}
.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.3rem;
  border: 2px solid var(--green-dark, #2d5a3d);
  background: transparent;
  color: var(--green-dark, #2d5a3d);
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
}
.filter-btn:hover {
  background: var(--green-dark, #2d5a3d);
  color: white;
  transform: translateY(-2px);
}
.filter-btn.active {
  background: var(--green-dark, #2d5a3d);
  color: white;
  box-shadow: 0 4px 14px rgba(45, 90, 61, 0.35);
}
.tab-count {
  background: rgba(255, 255, 255, 0.25);
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.1rem 0.45rem;
  border-radius: 999px;
  min-width: 20px;
  text-align: center;
}
.filter-btn:not(.active) .tab-count {
  background: rgba(45, 90, 61, 0.12);
  color: var(--green-dark, #2d5a3d);
}

/* ─── Grid ────────────────────────────── */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 1rem;
  margin: 2rem 0 2rem;
}
.gallery-item {
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.4s ease;
}
.gallery-item:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
}
.gallery-item.wide {
  grid-column: span 2;
}
.gallery-item.tall {
  grid-row: span 2;
}

/* ─── Photo image ─────────────────────── */
.photo-bg {
  width: 100%;
  height: 100%;
  position: relative;
}
.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.gallery-item:hover .photo-img {
  transform: scale(1.08);
}
.photo-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.photo-emoji {
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s;
}
.gallery-item:hover .photo-emoji {
  transform: scale(1.2);
}

/* ─── Hover overlay ───────────────────── */
.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26, 58, 42, 0.85) 0%, rgba(26, 58, 42, 0) 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  align-items: flex-end;
  padding: 1.2rem;
}
.gallery-item:hover .photo-overlay {
  opacity: 1;
}
.overlay-content {
  color: white;
}
.overlay-icon {
  font-size: 1.6rem;
  display: block;
  margin-bottom: 0.3rem;
}
.overlay-label {
  font-size: 0.85rem;
  font-weight: 700;
  margin: 0;
}

/* ─── Badge ───────────────────────────── */
.photo-badge {
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  opacity: 0;
  transform: translateY(-4px);
  transition: all 0.3s ease;
}
.gallery-item:hover .photo-badge {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Empty state ─────────────────────── */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-light);
  font-style: italic;
}

/* ─── CTA ─────────────────────────────── */
.gallery-cta {
  text-align: center;
}

/* ─── Grid animation ──────────────────── */
.grid-anim-enter-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.grid-anim-leave-active {
  transition: all 0.25s ease;
  position: absolute;
}
.grid-anim-enter-from {
  opacity: 0;
  transform: scale(0.85) translateY(20px);
}
.grid-anim-leave-to {
  opacity: 0;
  transform: scale(0.85);
}
.grid-anim-move {
  transition: transform 0.4s ease;
}

/* ─── Lightbox ────────────────────────── */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.lightbox-content {
  background: #111;
  border-radius: 20px;
  overflow: hidden;
  max-width: 680px;
  width: 100%;
  position: relative;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
}
.lb-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  color: white;
  border: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  z-index: 10;
  transition:
    background 0.2s,
    transform 0.2s;
}
.lb-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}
.lb-arrow {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(4px);
  color: white;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.3rem;
  z-index: 10;
  transition:
    background 0.2s,
    transform 0.2s;
}
.lb-arrow:hover {
  background: var(--green-dark, #2d5a3d);
  transform: translateY(-50%) scale(1.1);
}
.lb-arrow-left {
  left: 1rem;
}
.lb-arrow-right {
  right: 1rem;
}
.lb-photo {
  height: 360px;
  position: relative;
  overflow: hidden;
}
.lb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.lb-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.lb-emoji {
  font-size: 6rem;
}
.lb-category-tag {
  position: absolute;
  bottom: 0.8rem;
  left: 0.8rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.lb-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.5rem;
  background: #1a1a1a;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.lb-nav button {
  background: var(--green-dark, #2d5a3d);
  color: white;
  border: none;
  padding: 0.5rem 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.85rem;
  transition:
    background 0.2s,
    transform 0.2s;
}
.lb-nav button:hover {
  background: var(--gold, #c9a84c);
  transform: scale(1.05);
}
.lb-info {
  text-align: center;
}
.lb-label {
  color: white;
  font-weight: 700;
  font-size: 0.95rem;
  margin: 0;
}
.lb-counter {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
}
.lb-thumbs {
  display: flex;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  background: #111;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--green-dark, #2d5a3d) transparent;
}
.lb-thumb {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  transition:
    border-color 0.2s,
    transform 0.2s;
}
.lb-thumb.active {
  border-color: var(--gold, #c9a84c);
  transform: scale(1.1);
}
.lb-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.thumb-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

/* ─── Transitions ─────────────────────── */
.lb-fade-enter-active,
.lb-fade-leave-active {
  transition: opacity 0.3s ease;
}
.lb-fade-enter-from,
.lb-fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
}
.slide-left-enter-from {
  transform: translateX(60px);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-60px);
  opacity: 0;
}
.slide-right-enter-from {
  transform: translateX(-60px);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(60px);
  opacity: 0;
}

/* ─── Responsive ──────────────────────── */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .gallery-item.wide {
    grid-column: span 1;
  }
  .gallery-item.tall {
    grid-row: span 1;
  }
  .lb-arrow {
    display: none;
  }
}
</style>
