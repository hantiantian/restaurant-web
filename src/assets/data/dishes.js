import food_02 from '@/assets/dishgrid/food_02.jpg'
import food_01 from '@/assets/dishgrid/food_01.jpg'
import food_03 from '@/assets/dishgrid/food_03.jpg'
import food_04 from '@/assets/dishgrid/food_04.jpg'
import food_05 from '@/assets/dishgrid/food_05.jpg'
import food_06 from '@/assets/dishgrid/food_06.jpg'

// 菜品分类数据
export const categories = [
  { id: 'all', name: '全部' },
  { id: 'popular', name: '热门推荐' },
  { id: 'specialty', name: '店铺特色' },
  { id: 'seasonal', name: '时令菜品' }
]

// 菜品数据
export const dishes = [
  {
    id: 1,
    name: '红烧牛肉面',
    description: '浓酱软肉，汤醇面韧',
    price: 38,
    image: food_02,
    category: 'popular',
    tags: ['招牌', '热销']
  },
  {
    id: 2,
    name: '番茄鸡蛋盖饭',
    description: '新鲜应季，营养美味',
    price: 32,
    image: food_01,
    category: 'specialty',
    tags: ['特色']
  },
  {
    id: 3,
    name: '回锅肉',
    description: '肉片卷边，麻辣燎原',
    price: 26,
    image: food_03,
    category: 'seasonal',
    tags: ['时令']
  },
  {
    id: 4,
    name: '海鲜面',
    description: '现捞海货，一碗浪鲜',
    price: 32,
    image: food_04,
    category: 'specialty',
    tags: ['特色']
  },
  {
    id: 5,
    name: '回锅肉盖饭',
    description: '肥瘦回锅，辣酱扒饭',
    price: 26,
    image: food_05,
    category: 'seasonal',
    tags: ['时令']
  },
  {
    id: 6,
    name: '羊肉烩面',
    description: '一碗羊脂，烩尽北寒',
    price: 26,
    image: food_06,
    category: 'seasonal',
    tags: ['热销']
  }
]