<template>
  <div class="dishes">
    <div class="title-container">
      <div class="title-decoration left"></div>
      <div class="title-content">
        <h2 class="title">特色菜品</h2>
        <p class="subtitle">Special Foods</p>
      </div>
      <div class="title-decoration right"></div>
    </div>
    <DishGrid />
  </div>
</template>

<script setup>
import DishGrid from '../components/DishGrid.vue'
</script>

<style scoped>
.dishes {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  gap: 20px;
}

.title-decoration {
  height: 2px;
  width: 100px;
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
  font-size: 2.2em;
  color: #e74c3c;
  font-weight: bold;
}

.subtitle {
  margin: 5px 0 0;
  font-size: 1.2em;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>