<template>
  <div class="home">
    <Carousel />
    <DishGrid />
    <FranchiseeStyle/>
    <JoinInvestment />
    <News />
  </div>
</template>

<script setup>
import Carousel from '../components/Carousel.vue'
import DishGrid from '../components/DishGrid.vue'
import News from '../components/News.vue'
import FranchiseeStyle from '../components/FranchiseeStyle.vue'
import JoinInvestment from '../components/JoinInvestment.vue'
</script>

<style scoped>
.home {
  width: 100%;
}
</style>