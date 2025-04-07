<template>
  <div class="franchisee-style">
    <div class="title-container">
      <div class="title-decoration left"></div>
      <div class="title-content">
        <h2 class="title">加盟商风采</h2>
        <p class="subtitle">Our Partners</p>
      </div>
      <div class="title-decoration right"></div>
    </div>
    <div class="franchisee-grid">
      <div v-for="(item, index) in franchisees" :key="index" class="franchisee-item" @click="showPreview(index)">
        <div class="image-wrapper">
          <img :src="item.image" :alt="item.name" loading="lazy" />
        </div>
        <div class="franchisee-info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <button class="more-button">Read More</button>
        </div>
      </div>
    </div>

    <!-- 图片预览弹窗 -->
    <div v-if="showPreviewDialog" class="preview-dialog" @click="closePreview">
      <div class="preview-content">
        <img :src="franchisees[currentPreviewIndex].image" :alt="franchisees[currentPreviewIndex].name" />
      </div>
      <button class="close-button" @click="closePreview" aria-label="关闭预览">&times;</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { franchisees } from '../assets/data/franchiseeData.js'

const showPreviewDialog = ref(false)
const currentPreviewIndex = ref(0)

const showPreview = (index) => {
  currentPreviewIndex.value = index
  showPreviewDialog.value = true
}

const closePreview = () => {
  showPreviewDialog.value = false
}
</script>

<style scoped>
.franchisee-style {
  padding: 4rem 2rem;
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
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
}

.franchisee-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.franchisee-item {
  background: #fff;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #eee;
  margin-bottom: 50px;
}

.franchisee-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(231, 76, 60, 0.1);
  border-color: #e74c3c;
}

.image-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.image-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.03);
  transition: background 0.3s ease;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.franchisee-item:hover .image-wrapper img {
  transform: scale(1.08);
}

.franchisee-item:hover .image-wrapper::after {
  background: rgba(231, 76, 60, 0.05);
}

.franchisee-info {
  padding: 1rem;
  text-align: center;
  background: #fff;
}

.more-button {
  margin-top: 1rem;
  padding: 0;
  background: none;
  color: #e74c3c;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  width: 100%;
}

.more-button:hover {
  color: #c0392b;
}
.franchisee-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #e74c3c;
  font-weight: 600;
}

.franchisee-info p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.preview-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.preview-content {
  max-width: 90%;
  max-height: 90vh;
}

.preview-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
  line-height: 1;
}

@media (max-width: 768px) {
  .franchisee-style {
    padding: 2rem 1rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .franchisee-grid {
    grid-template-columns: 1fr;
  }

  .image-wrapper {
    height: 200px;
  }
}
</style>