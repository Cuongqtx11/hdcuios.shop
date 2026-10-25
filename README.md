# CUIOS — Hướng dẫn cài đặt

Website hướng dẫn công khai theo nội dung của https://t.me/huongdancaiipa.

Giao diện tĩnh trong `dist/`. Video hướng dẫn được cung cấp từ chính kênh Telegram của chủ website. Không chứa session Telegram hoặc khóa truy cập.

Xem cục bộ: `python3 -m http.server 8080 --bind 127.0.0.1 --directory dist`.

Xuất bản: GitHub Pages từ workflow `.github/workflows/pages.yml`.

## Nội dung

- Mở website bằng Safari.
- Mua chứng chỉ và lấy UDID.
- Chọn CSign (chứng chỉ có sẵn) hoặc ESign (nhập kho chứng chỉ thủ công).
- Ký và cài IPA.
- Nhân bản ứng dụng bằng mã định danh riêng.

Video được tối ưu H.264/AAC, MP4 faststart; tổng khoảng 27 MB. Chỉ tải video khi người xem bấm phát. Các bước chữ được đối chiếu với video gốc trên kênh; mỗi bài có liên kết về nguồn Telegram.

## Chỉnh sửa

Nội dung bài nằm trong `dist/app.js`, giao diện trong `dist/styles.css` và `dist/index.html`. Không thêm token, cookie hoặc session đăng nhập vào repository.

## Trang đã xuất bản

https://cuongqtx11.github.io/hdcuios.shop/

Bài Telegram số 27 bổ sung hướng dẫn và ảnh CSign; header liên kết kênh thông báo https://t.me/chungchifree11.
