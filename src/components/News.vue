<template>
  <section class="news-section">
    <div class="title-container">
      <div class="title-decoration left"></div>
      <div class="title-content">
        <h2 class="title">新闻资讯</h2>
        <p class="subtitle">News Information</p>
      </div>
      <div class="title-decoration right"></div>
    </div>
    <div class="news-container">
      <div class="news-column industry">
        <div class="column-header">
          <h2>行业动态</h2>
          <a href="#" class="more-link">MORE +</a>
        </div>
        <!-- 上部分：大型新闻展示 -->
        <div class="featured-news">
          <div class="featured-news-image">
            <img :src="industryNews.featured.image" :alt="industryNews.featured.title" />
          </div>
          <div class="featured-news-content">
            <h3 class="featured-news-title">{{ industryNews.featured.title }}</h3>
            <p class="featured-news-excerpt">{{ industryNews.featured.excerpt }}</p>
            <div class="featured-news-meta">
              <span class="news-date">{{ industryNews.featured.date }}</span>
              <a :href="industryNews.featured.link" class="read-more">[查看详情]</a>
            </div>
          </div>
        </div>
        <!-- 下部分：新闻列表 -->
        <div class="news-list">
          <div class="news-columns">
            <div class="news-column-left">
              <div class="news-item" v-for="news in industryNews.leftList" :key="'industry-list-left-'+news.id">
                <span class="news-title" :title="news.title">{{ news.title }}</span>
              </div>
            </div>
            <div class="news-column-right">
              <div class="news-item" v-for="news in industryNews.rightList" :key="'industry-list-right-'+news.id">
                <span class="news-title">{{ news.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="news-divider"></div>
      <div class="news-column company">
        <div class="column-header">
          <h2>公司新闻</h2>
          <a href="#" class="more-link">MORE +</a>
        </div>
        <div class="news-list">
          <div class="news-item" v-for="news in companyNews" :key="news.id">
            <div class="news-image">
              <img :src="news.image" :alt="news.title" />
            </div>
            <div class="news-content">
              <span class="news-title">{{ news.title }}</span>
              <div class="news-meta">
                <span class="news-date">{{ news.content }} <a :href="news.link" class="read-more">[查看详情]</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { companyNews } from '../assets/data/companyNews.js';
import { industryNews } from '../assets/data/industryNews.js';
</script>

<style scoped>
.news-section {
  padding: clamp(2rem, 4vw, 4rem) clamp(1rem, 4vw, 2rem);
  background-color: #fff;
  --primary-color: #e74c3c;
  --text-primary: #333;
  --text-secondary: #666;
  --text-light: #888;
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
  background: linear-gradient(90deg, rgba(231, 76, 60, 0), var(--primary-color));
}

.title-decoration.left {
  background: linear-gradient(90deg, rgba(231, 76, 60, 0), var(--primary-color));
}

.title-decoration.right {
  background: linear-gradient(90deg, var(--primary-color), rgba(231, 76, 60, 0));
}

.title {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: var(--primary-color);
  font-weight: bold;
}

.featured-news {
  margin-bottom: 2rem;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.featured-news:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
}

.news-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 15px;
  position: relative;
  padding-left: 1.5rem;
  transition: transform 0.2s ease;
}

.news-item:hover {
  transform: translateX(4px);
}

.news-item::before {
  content: '';
  position: absolute;
  left: 0;
  width: 4px;
  height: 4px;
  background-color: var(--primary-color);
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  transition: width 0.2s ease, height 0.2s ease;
}

.news-item:hover::before {
  width: 6px;
  height: 6px;
}

@media (max-width: 768px) {
  .news-container {
    flex-direction: column;
    gap: 2rem;
  }

  .featured-news {
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  .featured-news-image {
    width: 100%;
    height: 200px;
  }

  .featured-news-content {
    padding: 1.5rem;
  }

  .news-columns {
    flex-direction: column;
    gap: 1rem;
  }

  .news-item {
    padding: 0.8rem 0;
    padding-left: 1rem;
  }
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

.news-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
}

.news-column {
  min-width: 0;
}

.news-column.industry {
  flex: 0.6;
}

.news-column.company {
  flex: 0.4;
}

.column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
}

.column-header h2 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

.more-link {
  color: #999;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.more-link:hover {
  color: #e74c3c;
}

.news-divider {
  width: 1px;
  background-color: #f0f0f0;
  margin: 0 1rem;
}

.featured-news {
  margin-bottom: 2rem;
  background: #fff;
  /* border-radius: 8px; */
  overflow: hidden;
  /* box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1); */
  display: flex;
  border-bottom: 1px solid #ccc;  /* 粗细1px、实线、浅灰色 */
  
}

.featured-news-image {
  width: 50%;
  min-height: 100px;
  overflow: hidden;
  flex-shrink: 0;
}

.featured-news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.featured-news:hover .featured-news-image img {
  transform: scale(1.05);
}

.featured-news-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-news-title { 
  font-size: 1rem;
  margin: 0 0 1rem;
  color: #333;
}
.featured-news-meta { 
  display: flex;          /* 启用 Flex 布局 */
  justify-content: space-between;  /* 左右两侧分散对齐 */
  align-items: center;  

}

.featured-news-excerpt {
  color: #666;
  margin: 0 0 1rem;
  line-height: 1.6;
}

.news-list {
  width: 100%;
}

.news-columns {
  display: flex;
  gap: 2rem;
}

.news-column-left,
.news-column-right {
  width: 50%;
  flex: 1;
}

.news-item {
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  position: relative;
  padding-left: 1rem;
}

.news-image {
  width: 120px;
  height: 90px;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: 1rem;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  
.news-content {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}
.news-item::before {
  content: '';
  position: absolute;
  left: 0;
  width: 6px;
  height: 6px;
  background-color: var(--primary-color);
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.news-title {
  margin: 0;
  font-size: 0.85rem;
  color: #888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 1rem;
  flex: 1;
  max-width: 100%;
  display: inline-block;
}

@media (max-width: 768px) {
  .news-title {
    max-width: calc(100% - 20px);
    font-size: 0.8rem;
  }
}
.news-date {
  font-size: 0.75rem;
  color: #999;
  word-wrap: break-word;
  word-break: break-all;
  max-width: 70%;
}

.news-content { 
  display: flex;          
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.news-meta {
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

@media (max-width: 768px) {
  .news-columns {
    flex-direction: column;
    gap: 1rem;
  }

  .news-item {
    padding: 0.6rem 15px;
  }

  .news-title {
    font-size: 0.8rem;
  }
  .news-content { 
  display: flex;          /* 启用 Flex 布局 */
  justify-content: space-between;  /* 左右两侧分散对齐 */
  align-items: center;  
  width: 100%;            
  }
  a {
    font-size: 0.75rem;
  }
}

@media (max-width: 768px) {
  .news-container {
    flex-direction: column;
  }

  .news-column.industry,
  .news-column.company {
    flex: 1;
  }

  .news-divider {
    width: 100%;
    height: 1px;
    margin: 2rem 0;
  }

  .featured-news {
    flex-direction: column;
  }

  .featured-news-image {
    width: 100%;
    min-height: 200px;
  }

  .featured-news-content {
    padding: 1.5rem;
  }

  .news-image {
    width: 120px;
    height: 90px;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 1rem;
  }
  
  .news-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>