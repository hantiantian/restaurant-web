<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>联系我们</h3>
        <p>地址：北京市朝阳区xxx大厦</p>
        <p>电话：010-12345678</p>
        <p>邮箱：contact@restaurant.com</p>
      </div>
      <div class="footer-section">
        <h3>营业时间</h3>
        <p>周一至周五：10:00 - 22:00</p>
        <p>周六至周日：09:00 - 23:00</p>
      </div>
      <div class="footer-section qrcode">
        <h3>关注我们</h3>
        <div class="qrcode-container">
          <div class="qrcode-item">
            <img src="../assets/images/footer/qrcode_for_gh_1a040799b2b5_430.jpg" alt="微信二维码" />
            <p>微信公众号</p>
          </div>
          <div class="qrcode-item">
            <img src="../assets/images/footer/WechatIMG30_03.jpg" alt="抖音二维码" />
            <p>抖音号</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 餐饮品牌 版权所有</p>
    </div>
  </footer>
</template>

<script setup>
// Footer component logic
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 4rem 2rem 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fff;
}

.footer-section p {
  color: #ccc;
  margin: 0.5rem 0;
  line-height: 1.5;
}

.qrcode-container {
  display: flex;
  gap: 2rem;
}

.qrcode-item {
  text-align: center;
}

.qrcode-item img {
  width: 120px;
  height: 120px;
  margin-bottom: 0.5rem;
}

.qrcode-item p {
  font-size: 0.9rem;
}

.footer-bottom {
  text-align: center;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid #444;
}

.footer-bottom p {
  color: #888;
  font-size: 0.9rem;
}
</style>