<template>
  <div class="nav-container">
    <div class="top-bar">
      <div class="welcome">欢迎光临餐饮品牌！</div>
      <div class="contact">客服热线：400-123-4567</div>
      <div class="login">
        <van-button icon="wechat" type="primary" size="small" class="wechat-login">微信登录</van-button>
      </div>
    </div>
    <nav class="nav-bar" :class="{ 'fixed': isFixed }">
      <div class="logo">
        <img src="../assets/logo.svg" alt="Logo" />
        <span class="brand-name">餐饮品牌</span>
      </div>
    <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <div class="nav-links" :class="{ 'active': isMenuOpen }">
      <a href="#home" class="nav-link" @click="scrollToSection('home')">首页</a>
      <a href="#dishes" class="nav-link" @click="scrollToSection('dishes')">特色菜品</a>
      <a href="#franchisee" class="nav-link" @click="scrollToSection('franchisee')">加盟商风采</a>
      <a href="#join" class="nav-link" @click="scrollToSection('join')">招商加盟</a>
      <a href="#news" class="nav-link" @click="scrollToSection('news')">新闻资讯</a>
      <a href="#footer" class="nav-link" @click="scrollToSection('footer')">联系我们</a>
    </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Button as VanButton } from 'vant'
const isMenuOpen = ref(false)
const isFixed = ref(false)

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const navBar = document.querySelector('.nav-bar')
  if (navBar) {
    const navBarTop = navBar.offsetTop
    isFixed.value = scrollTop > navBarTop
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMenuOpen.value = false
  }
}
</script>

<style scoped>
.nav-container {
  background-color: #fff;
  box-shadow: none;
}

.top-bar {
  padding: 0px 120px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  font-size: 0.9rem;
  border-bottom: 1px solid #eee;
  margin: 0;
}

.welcome {
  color: #666;
  margin-right: auto;
}

.contact {
  color: #e74c3c;
  margin-right: 1rem;
}

.wechat-login {
  background-color: #07c160;
  border: none;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  position: relative;
  margin: 0 auto;
  padding: 50px 130px;
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-bar.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo img {
  height: 40px;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.menu-toggle .bar {
  width: 100%;
  height: 3px;
  background-color: #333;
  transition: all 0.3s;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  transition: color 0.3s;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: #D62222;
  transition: width 0.3s ease;

}

.nav-link:hover::after {
  width: 30px;
}

.nav-link.active::after {
  width: 30px;
}

@media (max-width: 768px) {
  .top-bar {
    padding: 0.5rem 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .welcome, .contact {
    font-size: 0.8rem;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #fff;
    padding: 1rem;
    box-shadow: none;
    z-index: 1;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-link {
    padding: 0.5rem 0;
    text-align: center;
  }

  .nav-bar {
    padding: 0.8rem 1rem;
  }

  .logo img {
    height: 32px;
  }

  .brand-name {
    font-size: 1.2rem;
  }
}
</style>