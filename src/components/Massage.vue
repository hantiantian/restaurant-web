<template>
  <div class="massage-section">
    <h2 class="section-title">按摩服务</h2>
    <div class="massage-grid">
      <div class="massage-card">
        <img src="../assets/massages/foot-massage.svg" alt="足部按摩" class="massage-image" />
        <h3>足部按摩</h3>
        <p>专业足部按摩服务，缓解疲劳，促进血液循环</p>
      </div>
      <div class="massage-card">
        <img src="../assets/massages/body-massage.svg" alt="全身按摩" class="massage-image" />
        <h3>全身按摩</h3>
        <p>全身放松按摩，消除疲劳，恢复活力</p>
      </div>
      <div class="massage-card">
        <img src="../assets/massages/head-massage.svg" alt="头部按摩" class="massage-image" />
        <h3>头部按摩</h3>
        <p>专业头部按摩，缓解头痛，改善睡眠</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.massage-section {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
}

.massage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.massage-card {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.massage-card:hover {
  transform: translateY(-5px);
}

.massage-image {
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
}

.massage-card h3 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.massage-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .massage-section {
    padding: 2rem 1rem;
  }

  .massage-grid {
    grid-template-columns: 1fr;
  }
}
</style>