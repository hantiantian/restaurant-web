<template>
  <div class="carousel">
    <div class="carousel-content" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="carousel-item">
        <img :src="slide.image" :alt="slide.title" />
      </div>
    </div>
    <div class="carousel-controls">
      <button class="prev" @click="prevSlide" aria-label="Previous slide">&lt;</button>
      <button class="next" @click="nextSlide" aria-label="Next slide">&gt;</button>
    </div>
    <div class="carousel-indicators">
      <button 
        v-for="(_, index) in slides" 
        :key="index"
        :class="['indicator', { active: currentIndex === index }]"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { carouselData } from '../assets/data/carouselData.js'

const slides = carouselData

const currentIndex = ref(0)
const autoPlayInterval = ref(null)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(nextSlide, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.carousel {
  width: 100%;
  height: auto;
  max-height: 300px;
  aspect-ratio: 16/9;
  position: relative;
  overflow: hidden;
  background: #000;
}

.carousel-content {
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.carousel-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.carousel-text h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeInDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.carousel-text p {
  font-size: clamp(1rem, 3vw, 1.5rem);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.3s;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.carousel-controls button {
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  width: clamp(30px, 5vw, 35px);
  height: clamp(30px, 5vw, 35px);
  border-radius: 50%;
  color: white;
  font-size: clamp(14px, 2.5vw, 16px);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(4px);
  opacity: 0.7;
  transform: scale(1);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  padding: 0;
}

.carousel-controls button:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  opacity: 1;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .carousel-controls {
    padding: 0 10px;
  }
  
  .carousel-indicators {
    bottom: 10px;
  }
  
  .indicator {
    width: 8px;
    height: 8px;
  }
}

.carousel-controls button:hover {
  background: rgba(255, 255, 255, 0.5);
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 0;
}

.indicator.active {
  background: white;
}

@keyframes fadeInDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>