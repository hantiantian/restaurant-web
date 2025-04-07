<template>
  <div class="join-investment">
    <div class="title-container">
      <div class="title-decoration left"></div>
      <div class="title-content">
        <h2 class="title">招商加盟</h2>
        <p class="subtitle">Join Us</p>
      </div>
      <div class="title-decoration right"></div>
    </div>
    <div class="join-content">
      <!-- 店面展示 -->
      <div class="store-display">
        <h3>店面展示</h3>
        <div class="store-grid">
          <div class="store-item" v-for="(image, index) in storeImages" :key="index">
            <img :src="image" :alt="'店面展示' + (index + 1)" loading="lazy" />
          </div>
        </div>
      </div>

      <!-- 加盟优势 -->
      <div class="advantages">
        <h3>加盟优势</h3>
        <div class="advantages-grid">
          <div class="advantage-item" v-for="(advantage, index) in advantages" :key="index">
            <div class="icon">
              <component :is="advantage.icon" />
            </div>
            <h4>{{ advantage.title }}</h4>
            <p>{{ advantage.description }}</p>
          </div>
        </div>
      </div>

      <!-- 投资分析 -->
      <div class="investment-analysis">
        <h3>投资分析</h3>
        <div class="analysis-grid">
          <div class="analysis-item" v-for="(item, index) in investmentAnalysis" :key="index">
            <div class="analysis-title">{{ item.title }}</div>
            <div class="analysis-value">{{ item.value }}</div>
            <div class="analysis-description">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeImages, advantages, investmentAnalysis } from '../assets/data/joinData.js'
</script>

<style scoped>
.join-investment {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  gap: clamp(1rem, 2vw, 1.5rem);
}

.title-decoration {
  height: 2px;
  width: clamp(60px, 8vw, 100px);
  background: linear-gradient(90deg, transparent, #e74c3c);
}

.title-decoration.left {
  background: linear-gradient(90deg, transparent, #e74c3c);
}

.title-decoration.right {
  background: linear-gradient(90deg, #e74c3c, transparent);
}

.title-content {
  text-align: center;
}

.title {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: #e74c3c;
  font-weight: bold;
}

.subtitle {
  margin: 5px 0 0;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.store-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.store-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.store-item img:hover {
  transform: scale(1.05);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.advantage-item {
  text-align: center;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 2.5em;
  color: #e74c3c;
  margin-bottom: 15px;
}

.advantage-item h4 {
  color: #333;
  margin-bottom: 10px;
}

.advantage-item p {
  color: #666;
  line-height: 1.6;
}

.analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.analysis-item {
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.analysis-title {
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
}

.analysis-value {
  font-size: 1.8em;
  color: #e74c3c;
  font-weight: bold;
  margin-bottom: 10px;
}

.analysis-description {
  color: #666;
  font-size: 0.9em;
}

@media (max-width: 768px) {
  .advantages-grid,
  .analysis-grid {
    grid-template-columns: 1fr;
  }
}
</style>