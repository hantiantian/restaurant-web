<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>{{ footerData.contact.title }}</h3>
        <p>地址：{{ footerData.contact.address }}</p>
        <p>电话：{{ footerData.contact.phone }}</p>
        <p>邮箱：{{ footerData.contact.email }}</p>
      </div>
      <div class="footer-section">
        <h3>{{ footerData.businessHours.title }}</h3>
        <p>{{ footerData.businessHours.weekday }}</p>
        <p>{{ footerData.businessHours.weekend }}</p>
      </div>
      <div class="footer-section qrcode">
        <h3>{{ footerData.followUs.title }}</h3>
        <div class="qrcode-container">
          <div v-for="(qrcode, index) in footerData.followUs.qrcodes" :key="index" class="qrcode-item">
            <img :src="qrcode.image" :alt="qrcode.alt" />
            <p>{{ qrcode.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>{{ footerData.copyright }}</p>
    </div>
  </footer>
</template>

<script setup>
import { footerData } from '../assets/data/footerData.js'
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 4rem 2rem 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fff;
}

.footer-section p {
  color: #ccc;
  margin: 0.5rem 0;
  line-height: 1.5;
}

.qrcode-container {
  display: flex;
  gap: 2rem;
}

.qrcode-item {
  text-align: center;
}

.qrcode-item img {
  width: 120px;
  height: 120px;
  margin-bottom: 0.5rem;
}

.qrcode-item p {
  font-size: 0.9rem;
}

.footer-bottom {
  text-align: center;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid #444;
}

.footer-bottom p {
  color: #888;
  font-size: 0.9rem;
}
</style>