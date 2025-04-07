<template>
  <div class="home" id="home">
    <Carousel />
    <div id="dishes">
      <DishGrid />
    </div>
    <div id="franchisee">
      <FranchiseeStyle/>
    </div>
    <div id="join">
      <JoinInvestment />
    </div>
    <div id="news">
      <News />
    </div>
    <BackToTop />
  </div>
</template>

<script setup>
import Carousel from '../components/Carousel.vue'
import DishGrid from '../components/DishGrid.vue'
import FranchiseeStyle from '../components/FranchiseeStyle.vue'
import JoinInvestment from '../components/JoinInvestment.vue'
import News from '../components/News.vue'
import BackToTop from '../components/BackToTop.vue'
</script>

<style scoped>
.home {
  width: 100%;
}
</style>