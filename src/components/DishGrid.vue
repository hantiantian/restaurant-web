<template>
  <section class="dish-section">
    <div class="title-container">
      <div class="title-decoration left"></div>
      <div class="title-content">
        <h2 class="title">特色菜品</h2>
        <p class="subtitle">Special Foods</p>
      </div>
      <div class="title-decoration right"></div>
    </div>
    <div class="category-tabs">
      <button 
        v-for="category in categories" 
        :key="category.id"
        :class="['category-tab', { active: currentCategory === category.id }]"
        @click="currentCategory = category.id"
      >
        {{ category.name }}
      </button>
    </div>
    <div class="dish-grid">
      <div 
        class="dish-item" 
        v-for="dish in filteredDishes" 
        :key="dish.id"
        @click="showDishDetail(dish)"
      >
        <div class="dish-image">
          <img :src="dish.image" :alt="dish.name" />
          <div class="dish-tags" v-if="dish.tags && dish.tags.length">
            <span v-for="tag in dish.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
        <div class="dish-info">
          <h3>{{ dish.name }}</h3>
          <p class="description">{{ dish.description }}</p>
          <div class="price-row">
            <p class="price">¥{{ dish.price }}</p>
            <button class="order-btn" @click.stop="addToOrder(dish)">点餐</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { categories, dishes } from '../assets/data/dishes.js'
import { showToast } from 'vant'

const currentCategory = ref('all')

const filteredDishes = computed(() => {
  if (currentCategory.value === 'all') {
    return dishes
  }
  return dishes.filter(dish => dish.category === currentCategory.value)
})

const showDishDetail = (dish) => {
  // 实现菜品详情展示逻辑
  console.log('Show dish detail:', dish)
}

const addToOrder = (dish) => {
  showToast('功能正在开发中')
}
</script>

<style scoped>
.dish-section {
  padding: clamp(2rem, 4vw, 4rem) clamp(1rem, 4vw, 2rem);
  background-color: #f9f9f9;
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

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  flex-wrap: wrap;
  padding: 0 1rem;
}

.category-tab {
  padding: clamp(0.5rem, 2vw, 0.8rem) clamp(1rem, 3vw, 1.5rem);
  border: none;
  border-radius: 25px;
  background: #fff;
  color: #666;
  font-size: clamp(0.875rem, 2vw, 1rem);
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0.25rem;
}

.category-tab.active {
  background: #e74c3c;
  color: #fff;
}

.dish-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(0.5rem, 2vw, 1rem);
}

.dish-item {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  cursor: pointer;
}

.dish-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.dish-image {
  width: 100%;
  height: clamp(180px, 30vw, 220px);
  position: relative;
  overflow: hidden;
}

.dish-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.dish-item:hover .dish-image img {
  transform: scale(1.05);
}

.dish-tags {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 0.5rem;
}

.tag {
  padding: 0.3rem 0.8rem;
  background: rgba(231, 76, 60, 0.9);
  color: white;
  border-radius: 15px;
  font-size: 0.8rem;
}

.dish-info {
  padding: 1.5rem;
}

.dish-info h3 {
  margin: 0;
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  color: #333;
  font-weight: bold;
}

.description {
  color: #666;
  font-size: 0.9rem;
  margin: 0.5rem 0;
  height: 2.4em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.price {
  color: #e74c3c;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
}

.order-btn {
  padding: 0.5rem 1.2rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.order-btn:hover {
  background: #c0392b;
}
</style>