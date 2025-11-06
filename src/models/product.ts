// src/product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const products: Product[] = [
  {
    id: 13,
    title: "Samsung Galaxy S24+",
    price: 999.99,
    description:
      "Màn hình Dynamic AMOLED 2X rực rỡ, chip Exynos/Snapdragon mạnh mẽ, và bộ ba camera chuyên nghiệp với tính năng AI Zoom.",
    category: "Điện thoại",
    image: "https://cdn.example.com/images/samsung_s24plus_grey.jpg",
    rating: {
      rate: 4.7,
      count: 9200,
    },
  },
  {
    id: 14,
    title: "Xiaomi Redmi Note 13",
    price: 179.5,
    description:
      "Điện thoại phổ thông với màn hình AMOLED 120Hz, pin 5000mAh và camera 108MP, mang lại giá trị tuyệt vời trong phân khúc.",
    category: "Điện thoại",
    image: "https://cdn.example.com/images/xiaomi_note13_black.jpg",
    rating: {
      rate: 4.6,
      count: 35000,
    },
  },
  {
    id: 15,
    title: "iPhone 14 Pro",
    price: 899.0,
    description:
      "Trang bị Dynamic Island đột phá, chip A16 Bionic và camera chính 48MP, vẫn là lựa chọn flagship hàng đầu.",
    category: "Điện thoại",
    image: "https://cdn.example.com/images/apple_14pro_deep_purple.jpg",
    rating: {
      rate: 4.8,
      count: 14500,
    },
  },
  {
    id: 16,
    title: "OPPO Reno12 Pro 5G",
    price: 499.0,
    description:
      "Thiết kế cong 3D sang trọng, camera chân dung hàng đầu và công nghệ sạc siêu nhanh SuperVOOC.",
    category: "Điện thoại",
    image: "https://cdn.example.com/images/oppo_reno12pro_blue.jpg",
    rating: {
      rate: 4.5,
      count: 7800,
    },
  },
  {
    id: 17,
    title: "Google Pixel 7a",
    price: 449.0,
    description:
      "Chip Google Tensor G2 và camera được hỗ trợ AI xuất sắc, mang lại trải nghiệm Android thuần và thông minh.",
    category: "Điện thoại",
    image: "https://cdn.example.com/images/google_pixel7a_charcoal.jpg",
    rating: {
      rate: 4.4,
      count: 11200,
    },
  },
  {
    id: 18,
    title: "OnePlus 11 5G",
    price: 699.0,
    description:
      "Sự kết hợp giữa hiệu năng Snapdragon 8 Gen 2 và hệ thống camera Hasselblad, tối ưu cho tốc độ và nhiếp ảnh.",
    category: "Điện thoại",
    image: "https://cdn.example.com/images/oneplus_11_green.jpg",
    rating: {
      rate: 4.7,
      count: 6100,
    },
  },
  {
    id: 19,
    title: "Samsung Galaxy A15",
    price: 149.0,
    description:
      "Điện thoại giá rẻ với màn hình lớn, pin 5000mAh và hỗ trợ mạng 4G, phù hợp cho người dùng cơ bản.",
    category: "Điện thoại",
    image: "https://cdn.example.com/images/samsung_a15_blue.jpg",
    rating: {
      rate: 4.3,
      count: 45000,
    },
  },
  {
    id: 20,
    title: "Xiaomi Poco F6 Pro",
    price: 549.0,
    description:
      "Quái vật hiệu năng trong phân khúc giá tầm trung, tối ưu hóa cho game thủ với chip Snapdragon mới.",
    category: "Điện thoại",
    image: "https://cdn.example.com/images/xiaomi_pocof6pro_white.jpg",
    rating: {
      rate: 4.8,
      count: 5500,
    },
  },
  {
    id: 21,
    title: "iPhone 15",
    price: 799.0,
    description:
      "Thiết kế Dynamic Island và nâng cấp camera chính lên 48MP, là phiên bản tiêu chuẩn được cải tiến lớn.",
    category: "Điện thoại",
    image: "https://cdn.example.com/images/apple_15_yellow.jpg",
    rating: {
      rate: 4.7,
      count: 10500,
    },
  },
  {
    id: 22,
    title: "Motorola Edge 50 Pro",
    price: 699.0,
    description:
      "Màn hình cong pOLED 144Hz, sạc nhanh không dây và thiết kế sang trọng với chất liệu da thuần chay.",
    category: "Điện thoại",
    image: "https://cdn.example.com/images/moto_edge50pro_black.jpg",
    rating: {
      rate: 4.6,
      count: 4100,
    },
  },
];
