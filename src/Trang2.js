import React from "react";

const Trang2 = () => {
  // Dữ liệu sản phẩm (đã đổi tên biến cho phù hợp hơn)
  const products = [
    {
      id: 23,
      title: "Tai nghe không dây Apple AirPods Pro (thế hệ 2)",
      price: 249.0,
      description:
        "Tai nghe chống ồn chủ động (ANC) hàng đầu, tích hợp chip H2, âm thanh không gian cá nhân hóa và thời lượng pin cải thiện.",
      category: "Phụ kiện",
      image:
        "https://cdn.tgdd.vn/Products/Images/54/289781/tai-nghe-bluetooth-airpods-pro-2-thumb-600x600.jpg",
      rating: {
        rate: 4.9,
        count: 9500,
      },
    },
    {
      id: 24,
      title: "Sạc dự phòng Anker PowerCore III 20000mAh",
      price: 59.99,
      description:
        "Dung lượng lớn 20000mAh, hỗ trợ sạc nhanh PowerIQ 3.0, thiết kế mỏng nhẹ, có thể sạc được nhiều lần cho điện thoại.",
      category: "Phụ kiện",
      image:
        "https://cdn.tgdd.vn/Products/Images/57/233010/sac-du-phong-anker-powercore-iii-20000-mah-a1286-den-thumb-1-600x600.jpeg",
      rating: {
        rate: 4.7,
        count: 15000,
      },
    },
    {
      id: 25,
      title: "Ốp lưng Silicone cho iPhone 15 (Màu Midnight)",
      price: 49.0,
      description:
        "Ốp lưng silicone chính hãng Apple, bảo vệ máy khỏi trầy xước và va đập nhẹ, lớp lót sợi nhỏ mềm mại bên trong.",
      category: "Phụ kiện",
      image: "https://cdn.example.com/images/apple_case_15_midnight.jpg",
      rating: {
        rate: 4.5,
        count: 7200,
      },
    },
    {
      id: 26,
      title: "Củ sạc nhanh Samsung 45W Power Adapter Trio",
      price: 39.99,
      description:
        "Củ sạc 3 cổng (1 cổng 45W, 2 cổng 15W) hỗ trợ công nghệ sạc siêu nhanh Super Fast Charging cho các thiết bị Galaxy.",
      category: "Phụ kiện",
      image: "https://cdn.example.com/images/samsung_charger_45w.jpg",
      rating: {
        rate: 4.8,
        count: 6300,
      },
    },
    {
      id: 27,
      title: "Tai nghe chụp tai Sony WH-1000XM5",
      price: 399.0,
      description:
        "Tai nghe chống ồn đỉnh cao, chất lượng âm thanh Hi-Res Audio Wireless, thiết kế nhẹ và thoải mái khi đeo lâu.",
      category: "Phụ kiện",
      image:
        "https://cdn.tgdd.vn/Products/Images/54/265088/tai-nghe-chup-tai-sony-wh1000xm5-trang-thumb-600x600.jpg",
      rating: {
        rate: 4.7,
        count: 4800,
      },
    },
    {
      id: 28,
      title: "Giá đỡ điện thoại kiêm sạc không dây 3-in-1",
      price: 34.5,
      description:
        "Giá đỡ có thể sạc đồng thời điện thoại, tai nghe và đồng hồ thông minh (chuẩn Qi) một cách gọn gàng.",
      category: "Phụ kiện",
      image: "https://cdn.example.com/images/wireless_charger_stand.jpg",
      rating: {
        rate: 4.4,
        count: 3100,
      },
    },
    {
      id: 29,
      title: "Cáp sạc USB-C to USB-C 100W Ugreen",
      price: 9.99,
      description:
        "Cáp sạc bền bỉ hỗ trợ công suất sạc lên đến 100W, tương thích với hầu hết điện thoại, máy tính bảng và laptop USB-C.",
      category: "Phụ kiện",
      image: "https://cdn.example.com/images/ugreen_cable_100w.jpg",
      rating: {
        rate: 4.9,
        count: 21000,
      },
    },
    {
      id: 30,
      title: "Gậy tự sướng tripod Bluetooth Xiaomi",
      price: 19.99,
      description:
        "Gậy chụp ảnh kiêm chân đế 3 chân, điều khiển bằng remote Bluetooth, thiết kế gọn nhẹ, dễ dàng mang theo.",
      category: "Phụ kiện",
      image:
        "https://cdn.tgdd.vn/Products/Images/6022/227599/gay-chup-anh-xiaomi-xmzpg01ym-thumb-600x600.jpeg",
      rating: {
        rate: 4.6,
        count: 5500,
      },
    },
    {
      id: 31,
      title: "Kính cường lực Spigen cho Samsung S24 Ultra",
      price: 25.0,
      description:
        "Kính cường lực chất lượng cao, chống trầy xước, chống bám vân tay, độ trong suốt cao không ảnh hưởng đến cảm ứng.",
      category: "Phụ kiện",
      image: "https://cdn.example.com/images/spigen_s24ultra_glass.jpg",
      rating: {
        rate: 4.8,
        count: 8900,
      },
    },
    {
      id: 32,
      title: "Bộ chuyển đổi Audio USB-C sang 3.5mm",
      price: 12.0,
      description:
        "Adapter chuyển đổi cổng USB-C sang cổng tai nghe 3.5mm, chất lượng âm thanh lossless.",
      category: "Phụ kiện",
      image: "https://cdn.example.com/images/usbc_35mm_adapter.jpg",
      rating: {
        rate: 4.2,
        count: 12000,
      },
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh", // Chiếm toàn bộ chiều cao màn hình
        display: "flex",
        justifyContent: "center", // Căn giữa ngang
        backgroundColor: "#f9f9f9", // Tuỳ chọn
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          maxWidth: "1000px", // Giới hạn chiều rộng
          width: "100%",
        }}
      >
        {/* Đổi tên biến lặp từ 'dssv' sang 'products' và 'motsinhvien' sang 'product' */}
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              // Bỏ height cố định 300px để nội dung có thể co giãn
              minHeight: "350px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Căn chỉnh nội dung
            }}
          >
            <img
              // Sửa: Dùng thuộc tính 'image' thay vì 'anh'
              src={product.image}
              // Sửa: Dùng thuộc tính 'title' thay vì 'hoten'
              alt={product.title}
              style={{
                height: "140px",
                width: "auto", // Đảm bảo hình ảnh không bị kéo dãn ngang
                maxWidth: "100%",
                objectFit: "contain", // Dùng 'contain' để hình ảnh không bị cắt và giữ tỷ lệ
                borderRadius: "6px",
                margin: "0 auto", // Căn giữa hình ảnh
              }}
            />
            <div style={{ flexGrow: 1, textAlign: "left" }}>
              {/* Sửa: Dùng thuộc tính 'title' thay vì 'hoten' */}
              <h4
                style={{
                  margin: "10px 0 5px",
                  fontSize: "1em",
                  height: "3em",
                  overflow: "hidden",
                }}
              >
                {product.title}
              </h4>
              {/* Sửa: Hiển thị giá và rating thay vì lop và email */}
              <p
                style={{
                  fontWeight: "bold",
                  color: "#e44d26",
                  margin: "5px 0",
                }}
              >
                ${product.price.toFixed(2)}
              </p>
              <p style={{ fontSize: "0.8em", color: "#666" }}>
                ⭐ {product.rating.rate} ({product.rating.count})
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trang2;
