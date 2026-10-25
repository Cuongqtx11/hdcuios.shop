'use strict';
(function () {
  const lessons = [
    {
      id: 'mo-safari', short: 'Mở Safari', nav: 'Bắt đầu với Safari', category: 'BẮT ĐẦU', icon: 'compass', duration: '0:10',
      title: 'Mở website bằng Safari',
      description: 'Bắt đầu tại cuios.shop trên trình duyệt Safari của iPhone hoặc iPad.',
      source: 'https://t.me/huongdancaiipa/6',
      steps: [
        ['Mở trình duyệt Safari', 'Thực hiện trên iPhone hoặc iPad mà bạn muốn cài ứng dụng.'],
        ['Truy cập cuios.shop', 'Nhập cuios.shop vào thanh địa chỉ và mở website.'],
        ['Tiếp tục bước bạn cần', 'Nếu chưa có chứng chỉ, chuyển sang hướng dẫn mua chứng chỉ.']
      ],
      note: 'Kênh hướng dẫn CUIOS lưu ý mở trực tiếp website bằng Safari. Clip ngắn bên cạnh là phần giới thiệu CUIOS từ kênh Telegram.'
    },
    {
      id: 'mua-chung-chi', short: 'Mua chứng chỉ', nav: 'Mua chứng chỉ', category: 'CHỨNG CHỈ', icon: 'shield', duration: '1:46',
      title: 'Mua chứng chỉ cho thiết bị',
      description: 'Xem các thao tác mua chứng chỉ được minh họa trên website trong video.',
      source: 'https://t.me/huongdancaiipa/10',
      steps: [
        ['Chọn gói chứng chỉ', 'Mở cuios.shop bằng Safari, xem Bảng Giá và chọn gói bạn muốn mua.'],
        ['Lấy UDID của thiết bị', 'Bấm Lấy UDID, cho phép tải cấu hình rồi mở Cài đặt để hoàn tất cài cấu hình lấy UDID như video.'],
        ['Quay lại Safari để thanh toán', 'Khi UDID đã xuất hiện trong ô nhập, bấm Thanh Toán và hoàn tất theo thông tin của đơn hàng.'],
        ['Kiểm tra tại mục Nhận Hàng', 'Mở Nhận Hàng, nhập UDID thiết bị hoặc mã đơn hàng rồi bấm Kiểm Tra.'],
        ['Tải và lưu chứng chỉ', 'Khi đơn sẵn sàng, bấm Tải Chứng Chỉ. Lưu tệp và xem mật khẩu ở phần thông tin chứng chỉ để dùng trong ESign.']
      ],
      note: 'Video minh họa cả bước lấy UDID và nhận chứng chỉ. Thông tin thanh toán, trạng thái và mật khẩu cần lấy từ đơn hàng của chính bạn; giao diện hiện tại có thể khác đôi chút.'
    },
    {
      id: 'cai-csign', short: 'Cài CSign', nav: 'CSign · Dễ bắt đầu', category: 'CSIGN', icon: 'app', app: 'csign', duration: 'Bài viết & ảnh',
      mediaType: 'image', image: 'assets/guides/csign-overview.jpg',
      title: 'CSign — ưu tiên cho người mới',
      description: 'CSign có sẵn chứng chỉ và nguồn IPA, giúp bạn bắt đầu thuận tiện hơn. Hỗ trợ iOS 16 trở lên theo bài hướng dẫn.',
      source: 'https://t.me/huongdancaiipa/27',
      steps: [
        ['Mở đơn tại trang Nhận Hàng', 'Sau khi đơn có chứng chỉ, nhập UDID hoặc mã đơn của bạn rồi bấm Kiểm Tra trên cuios.shop.'],
        ['Chọn đúng nút Cài đặt CSign', 'Tìm biểu tượng CS màu xanh hồng trên nền tối, như ảnh minh họa. Bấm nút CSign và hoàn tất yêu cầu cài đặt của iOS.'],
        ['Mở CSign để bắt đầu', 'Theo thông báo trên kênh, bản CSign này đã có chứng chỉ sẵn; bạn không cần nhập thủ công như khi dùng ESign.'],
        ['Sử dụng nguồn IPA có sẵn', 'Bạn có thể tải xuống và ký ứng dụng từ nguồn IPA trong CSign. Theo dõi hướng dẫn bên trong app cho từng thao tác.'],
        ['Xem hướng dẫn ngay trong app', 'Mở Cài đặt → HDSD trong CSign. Bạn cũng có thể cài cả ESign nếu muốn; không bắt buộc phải dùng cả hai.']
      ],
      note: 'Nội dung và ảnh từ bài Telegram số 27. CSign là lựa chọn được ưu tiên cho người mới; nếu đã quen ESign, bạn có thể tiếp tục dùng ESign. Thông tin chứng chỉ và mật khẩu cần lấy từ đơn hàng của chính bạn.'
    },
    {
      id: 'cai-esign', short: 'Cài ESign', nav: 'ESign & chứng chỉ', category: 'ESIGN', icon: 'pen', app: 'esign', portrait: true, duration: '2:45',
      title: 'Cài ESign & nhập chứng chỉ',
      description: 'Chuẩn bị ESign và nhập chứng chỉ của bạn để sẵn sàng cài ứng dụng.',
      source: 'https://t.me/huongdancaiipa/15',
      steps: [
        ['Cài ESign từ trang Nhận Hàng', 'Bấm nút cài ESign trên trang nhận chứng chỉ và xác nhận yêu cầu cài ứng dụng của iOS như video.'],
        ['Tải tệp chứng chỉ về máy', 'Bấm Tải Chứng Chỉ và xác nhận Tải về. Video lưu tệp certificate.zip trong mục Tải về của ứng dụng Tệp.'],
        ['Đưa tệp ZIP vào ESign', 'Mở ESign → File, dùng nút ba chấm để mở trình chọn tệp rồi chọn certificate.zip trong Tải về.'],
        ['Giải nén và mở thư mục chứng chỉ', 'Chạm tệp ZIP trong ESign để giải nén, rồi mở thư mục certificate chứa tệp .p12 và .mobileprovision.'],
        ['Nhập vào kho chứng chỉ', 'Chọn tệp .p12 → Nhập kho chứng chỉ, nhập mật khẩu hiển thị ở trang Nhận Hàng của đơn rồi xác nhận OK.']
      ],
      note: 'Phải tải và nhập chứng chỉ thủ công trước khi cài IPA. Video cũng kiểm tra mục Cài đặt → Quyền riêng tư & Bảo mật → Chế độ nhà phát triển; theo dõi phần này nếu iOS yêu cầu.'
    },
    {
      id: 'cai-ipa', short: 'IPA bằng ESign', nav: 'Cài IPA bằng ESign', category: 'CÀI ỨNG DỤNG', icon: 'app', app: 'esign', portrait: true, duration: '3:56',
      title: 'Cài ứng dụng IPA bằng ESign',
      description: 'Làm theo video để thao tác với tệp IPA và cài ứng dụng về máy bằng ESign.',
      source: 'https://t.me/huongdancaiipa/21',
      steps: [
        ['Tải tệp IPA cần cài', 'Lưu tệp IPA vào Tải về trên thiết bị. Video dùng tệp AvatarDK để minh họa các thao tác.'],
        ['Nhập tệp IPA vào ESign', 'Trong ESign, mở trình chọn tệp và chọn tệp IPA từ mục Tải về của ứng dụng Tệp.'],
        ['Mở ứng dụng ở mục Chưa ký', 'Vào Apps → Chưa ký, chọn ứng dụng vừa nhập và mở phần ký ứng dụng như video.'],
        ['Chọn chứng chỉ và ký ứng dụng', 'Kiểm tra mục Chọn chứng chỉ, chọn chứng chỉ đã nhập rồi bấm Chữ ký. Chờ quá trình ký và đóng gói hoàn tất.'],
        ['Cài đặt và mở ứng dụng', 'Bấm Cài đặt ở màn hình kết quả ký, xác nhận khi iOS hỏi và chờ biểu tượng ứng dụng xuất hiện trên màn hình chính.']
      ],
      note: 'ESign cần được nhập chứng chỉ trước bước ký. Theo bài Telegram, ESign mod cài tương tự ví dụ; bạn có thể tạm dừng video để thực hiện từng thao tác.'
    },
    {
      id: 'nhan-ban-ipa', short: 'Nhân bản IPA', nav: 'Nhân bản bằng ESign', category: 'NHÂN BẢN', icon: 'copy', app: 'esign', portrait: true, duration: '3:52',
      title: 'Nhân bản ứng dụng IPA',
      description: 'Tạo một bản ứng dụng với mã định danh riêng, khác với ứng dụng đang có.',
      source: 'https://t.me/huongdancaiipa/24',
      steps: [
        ['Chọn ứng dụng gốc trong ESign', 'Nhập tệp IPA nếu chưa có, vào Apps → Chưa ký rồi chọn ứng dụng cần tạo thêm một bản.'],
        ['Đặt tên cho bản sao', 'Trong màn hình ký, mở Tên App và đặt tên dễ nhận biết để phân biệt với bản đang cài.'],
        ['Đổi Bundle Định danh', 'Sửa mã định danh thành một giá trị khác bản gốc và các bản sao trước đó. Đây là bước cần thiết để cài nhiều bản riêng.'],
        ['Ký bằng chứng chỉ đã nhập', 'Kiểm tra mục Chọn chứng chỉ, bấm Chữ ký và chờ ESign hoàn tất ký, đóng gói ứng dụng.'],
        ['Cài và kiểm tra bản mới', 'Bấm Cài đặt, xác nhận trên iOS rồi trở về màn hình chính để kiểm tra biểu tượng của bản ứng dụng mới.']
      ],
      note: 'Đổi tên giúp bạn phân biệt các bản; mã Bundle Định danh phải khác nhau để nhân bản. Video minh họa nhiều ứng dụng và bài Telegram lưu ý các ứng dụng khác làm tương tự.'
    }
  ];
  const $ = id => document.getElementById(id);
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const appNames = {csign: 'CSign', esign: 'ESign'};
  const appImages = {csign: 'assets/icons/csign.jpeg', esign: 'assets/icons/esign.png'};
  const lessonIcon = lesson => lesson.id === 'cai-csign' || lesson.id === 'cai-esign'
    ? `<img src="${appImages[lesson.app]}" alt="" width="34" height="34">` : icon(lesson.icon);
  const number = index => String(index + 1).padStart(2, '0');
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
  let currentIndex = 0;
  let videoGeneration = 0;
  let toastTimer;
  const nav = $('lessonNav');
  const journey = $('journeyNav');
  const video = $('tutorialVideo');
  const cover = $('playVideo');
  const status = $('videoStatus');

  lessons.forEach((lesson, index) => {
    const a = document.createElement('a');
    a.href = '#' + lesson.id;
    a.dataset.lesson = lesson.id;
    a.innerHTML = `<span class="nav-icon">${lessonIcon(lesson)}</span><span><strong>${lesson.nav}</strong><small>Mục ${number(index)} · ${lesson.duration}</small></span>${icon('chevron').replace('class="icon"', 'class="icon nav-chevron"')}`;
    nav.append(a);
    const quick = document.createElement('a');
    quick.href = '#' + lesson.id;
    quick.dataset.lesson = lesson.id;
    quick.className = 'journey-item';
    quick.innerHTML = `<span class="journey-number">${number(index)}</span><strong>${lesson.short}</strong>`;
    journey.append(quick);
  });

  function selectLesson(index, options = {}) {
    if (index < 0 || index >= lessons.length) return;
    currentIndex = index;
    videoGeneration++;
    const lesson = lessons[index];
    video.pause();
    video.removeAttribute('src');
    video.load();
    const isImage = lesson.mediaType === 'image';
    video.closest('.video-frame').hidden = isImage;
    $('videoHelp').hidden = isImage;
    $('imageGuide').hidden = !isImage;
    if (isImage) {
      video.removeAttribute('poster');
      $('guideImage').src = lesson.image;
      $('guideImageLink').href = lesson.image;
    } else {
      video.poster = `assets/posters/${lesson.id}.jpg`;
    }
    video.closest('.video-frame').classList.toggle('video-frame--portrait', !!lesson.portrait);
    video.setAttribute('aria-label', 'Video hướng dẫn: ' + lesson.title);
    cover.hidden = false;
    cover.setAttribute('aria-label', 'Phát video: ' + lesson.title);
    status.hidden = true;
    status.textContent = '';
    $('lessonNumber').textContent = `MỤC ${number(index)} / ${number(lessons.length - 1)}`;
    $('lessonCategory').textContent = lesson.category;
    $('lessonTitle').textContent = lesson.title;
    $('lessonDescription').textContent = lesson.description;
    $('videoDuration').textContent = lesson.duration;
    $('videoSource').href = lesson.source;
    $('lessonPosition').textContent = `${number(index)} / ${number(lessons.length - 1)}`;
    $('lessonAppBadge').hidden = !lesson.app;
    if (lesson.app) {
      $('lessonAppIcon').src = appImages[lesson.app];
      $('lessonAppIcon').alt = 'Icon ' + appNames[lesson.app];
      $('lessonAppName').textContent = lesson.app === 'csign' ? 'CSign · Chứng chỉ có sẵn' : 'ESign · Nhập chứng chỉ thủ công';
    }
    $('previousLesson').disabled = index === 0;
    $('nextLesson').disabled = index === lessons.length - 1;
    $('nextLesson').firstChild.textContent = index === lessons.length - 1 ? 'Đã đến bước cuối' : 'Mục tiếp theo';
    const stepList = $('lessonSteps');
    stepList.replaceChildren();
    lesson.steps.forEach(([title, text]) => {
      const li = document.createElement('li');
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      h3.textContent = title;
      p.textContent = text;
      li.append(h3, p);
      stepList.append(li);
    });
    $('lessonNote').querySelector('p').textContent = lesson.note;
    document.querySelectorAll('[data-lesson]').forEach(a => {
      if (a.dataset.lesson === lesson.id) a.setAttribute('aria-current', 'step');
      else a.removeAttribute('aria-current');
    });
    if (options.hash && location.hash !== '#' + lesson.id) history.pushState(null, '', '#' + lesson.id);
    if (options.scroll) $('huong-dan').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start'});
    document.title = lesson.title + ' · Hướng Dẫn Cài Đặt';
  }

  document.addEventListener('click', event => {
    const link = event.target.closest('a[data-lesson], a.hero-start');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const id = link.getAttribute('href').slice(1);
    const index = lessons.findIndex(lesson => lesson.id === id);
    if (index < 0) return;
    event.preventDefault();
    selectLesson(index, {hash: true, scroll: true});
  });
  $('previousLesson').addEventListener('click', () => selectLesson(currentIndex - 1, {hash: true, scroll: true}));
  $('nextLesson').addEventListener('click', () => selectLesson(currentIndex + 1, {hash: true, scroll: true}));
  window.addEventListener('hashchange', () => {
    const index = lessons.findIndex(lesson => lesson.id === location.hash.slice(1));
    if (index >= 0) selectLesson(index, {scroll: true});
  });
  window.addEventListener('popstate', () => {
    const index = lessons.findIndex(lesson => lesson.id === location.hash.slice(1));
    if (index >= 0 && index !== currentIndex) selectLesson(index, {scroll: true});
    else if (!location.hash && currentIndex !== 0) selectLesson(0);
  });

  cover.addEventListener('click', async () => {
    if (lessons[currentIndex].mediaType === 'image') return;
    const generation = videoGeneration;
    status.hidden = true;
    if (!video.getAttribute('src')) video.src = `assets/videos/${lessons[currentIndex].id}.mp4`;
    cover.hidden = true;
    try { await video.play(); }
    catch (_) {
      if (generation !== videoGeneration) return;
      status.textContent = 'Video chưa phát được. Bạn có thể bấm phát lại hoặc mở bài hướng dẫn gốc trên Telegram bên dưới.';
      status.hidden = false;
      cover.hidden = false;
    }
  });
  video.addEventListener('error', () => {
    if (!video.getAttribute('src')) return;
    status.textContent = 'Chưa tải được video. Kiểm tra kết nối mạng hoặc bấm “Xem bài Telegram” để xem bài gốc.';
    status.hidden = false;
    cover.hidden = false;
  });
  video.addEventListener('play', () => { cover.hidden = true; status.hidden = true; });

  $('guideSearch').addEventListener('input', event => {
    const term = normalize(event.target.value.trim());
    let found = 0;
    lessons.forEach(lesson => {
      const match = !term || normalize([lesson.title, lesson.nav, lesson.category, lesson.description, lesson.note].join(' ')).includes(term);
      nav.querySelector(`[data-lesson="${lesson.id}"]`).hidden = !match;
      if (match) found++;
    });
    const feedback = $('searchFeedback');
    feedback.hidden = !term;
    feedback.textContent = found ? `Tìm thấy ${found} hướng dẫn phù hợp.` : 'Chưa có hướng dẫn phù hợp. Thử “chứng chỉ”, “ESign” hoặc “IPA”.';
  });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      event.preventDefault(); $('guideSearch').focus();
    }
    if (event.key === 'Escape' && document.activeElement === $('guideSearch')) {
      $('guideSearch').value = ''; $('guideSearch').dispatchEvent(new Event('input')); $('guideSearch').blur();
    }
  });
  function showToast(text) {
    clearTimeout(toastTimer);
    $('toast').textContent = text;
    $('toast').classList.add('is-visible');
    toastTimer = setTimeout(() => $('toast').classList.remove('is-visible'), 3000);
  }
  $('copyLink').addEventListener('click', async () => {
    const url = new URL(location.href);
    url.hash = lessons[currentIndex].id;
    try {
      await navigator.clipboard.writeText(url.href);
      showToast('Đã sao chép liên kết hướng dẫn.');
    } catch (_) {
      const input = document.createElement('textarea');
      input.value = url.href; input.style.position = 'fixed'; input.style.opacity = '0';
      document.body.append(input); input.select();
      const copied = document.execCommand('copy'); input.remove();
      showToast(copied ? 'Đã sao chép liên kết hướng dẫn.' : 'Bạn có thể sao chép liên kết trên thanh địa chỉ.');
    }
  });
  const initial = lessons.findIndex(lesson => lesson.id === location.hash.slice(1));
  selectLesson(initial >= 0 ? initial : 0);
  if (initial >= 0) requestAnimationFrame(() => $('huong-dan').scrollIntoView({block:'start'}));
})();
