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

        <!-- Contact Form -->
        <div class="contact-form-wrap reveal reveal-right reveal-delay-2">
          <form class="contact-form" @submit.prevent="submitForm">
            <h3>Send Us a Message</h3>
            <p class="form-sub">We'll get back to you within 24 hours</p>

            <div class="form-row">
              <div class="form-group">
                <label>Your Name</label>
                <input v-model="form.name" type="text" placeholder="John Doe" required />
              </div>
              <div class="form-group">
                <label>Your Email</label>
                <input v-model="form.email" type="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div class="form-group">
              <label>Subject</label>
              <select v-model="form.subject">
                <option value="">Select a topic</option>
                <option>Table Reservation</option>
                <option>Food Order</option>
                <option>Event Booking</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div class="form-group">
              <label>Your Message</label>
              <textarea v-model="form.message" placeholder="Tell us what you need..." rows="5" required></textarea>
            </div>

            <button type="submit" class="btn-primary submit-btn" :class="{ sending: isSending }">
              <span v-if="!sent">Send Message ✉️</span>
              <span v-else>Message Sent! ✅</span>
            </button>

            <transition name="fade-up">
              <div class="success-msg" v-if="sent">
                🎉 Thank you! We'll contact you soon.
              </div>
            </transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isSending = ref(false)
const sent = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const contactInfo = [
  {
    icon: '📍',
    title: 'Location',
    lines: ['No. 123, Main Street', 'Your City, Sri Lanka']
  },
  {
    icon: '📞',
    title: 'Phone',
    lines: ['077 123 4567', '071 234 5678']
  },
  {
    icon: '✉️',
    title: 'Email',
    lines: ['info@himamarestaurant.lk', 'himamarestaurant.lk']
  },
  {
    icon: '🕐',
    title: 'Open Hours',
    lines: ['Mon - Sun', '10:00 AM - 10:00 PM']
  }
]

const submitForm = async () => {
  isSending.value = true
  await new Promise(r => setTimeout(r, 1500))
  isSending.value = false
  sent.value = true
  setTimeout(() => {
    sent.value = false
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, 3000)
}
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
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  align-items: start;
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
  transition: transform 0.3s, box-shadow 0.3s;
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

.map-pin { font-size: 2.5rem; margin-bottom: 0.8rem; }

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

.map-link:hover { opacity: 0.7; }

/* Form */
.contact-form-wrap {
  background: var(--white);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
}

.contact-form h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--green-dark);
  margin-bottom: 0.3rem;
}

.form-sub {
  color: var(--text-light);
  font-size: 0.85rem;
  margin-bottom: 2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.2rem;
}

.form-group label {
  display: block;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--green-dark);
  margin-bottom: 0.4rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  font-family: 'Lato', sans-serif;
  font-size: 0.9rem;
  color: var(--text-dark);
  background: var(--cream);
  transition: border-color 0.3s, box-shadow 0.3s;
  outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--green-mid);
  box-shadow: 0 0 0 3px rgba(45,90,61,0.1);
  background: white;
}

.form-group textarea { resize: vertical; }

.submit-btn {
  width: 100%;
  justify-content: center;
  padding: 1rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  transition: background 0.3s, transform 0.2s, opacity 0.3s;
}

.submit-btn.sending {
  opacity: 0.7;
  cursor: wait;
}

/* Success */
.success-msg {
  text-align: center;
  margin-top: 1rem;
  padding: 0.8rem;
  background: #e8f5e9;
  border-radius: 8px;
  color: var(--green-dark);
  font-weight: 700;
  font-size: 0.9rem;
}

.fade-up-enter-active, .fade-up-leave-active {
  transition: all 0.4s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-up-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
