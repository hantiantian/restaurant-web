import qrcode from '@/assets/images/footer/qrcode_for_gh_1a040799b2b5_430.jpg'
import WechatIMG30_03 from '@/assets/images/footer/WechatIMG30_03.jpg'
export const footerData = {
  contact: {
    title: '联系我们',
    address: '北京市朝阳区xxx大厦',
    phone: '010-12345678',
    email: 'contact@restaurant.com'
  },
  businessHours: {
    title: '营业时间',
    weekday: '周一至周五：10:00 - 22:00',
    weekend: '周六至周日：09:00 - 23:00'
  },
  followUs: {
    title: '关注我们',
    qrcodes: [
      {
        image: qrcode,
        alt: '微信二维码',
        text: '微信公众号'
      },
      {
        image: WechatIMG30_03,
        alt: '抖音二维码',
        text: '抖音号'
      }
    ]
  },
  copyright: '© 2024 餐饮品牌 版权所有'
}