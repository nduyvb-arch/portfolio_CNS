/* ===========================
   JavaScript for Portfolio
   =========================== */

// ─── Week Modal Data ─────────────────────────────────────────────────────────
const weekData = {
  1: {
    icon: '📁',
    title: 'Quản lý Tệp & Thư mục',
    subtitle: 'Nhiệm vụ 1 – Tuần 1',
    desc: 'Thực hành toàn diện về tổ chức hệ thống file và thư mục trên Windows, bao gồm tạo cấu trúc thư mục khoa học, đặt tên file theo quy tắc nhất quán, và thực hành các thao tác cơ bản với tệp tin.',
    tasks: [
      'Mở File Explorer và truy cập ổ đĩa D:, tạo thư mục gốc ThucHanh_NguyenDucDuy',
      'Tạo file Ghichu.txt trong thư mục gốc, sau đó đổi tên thành GhiChuQuanTrong.txt',
      'Tạo thư mục con TaiLieu bên trong thư mục gốc',
      'Thực hành Sao chép (Copy): Copy GhiChuQuanTrong.txt vào TaiLieu',
      'Thực hành Di chuyển (Cut/Paste): Tạo DiChuyen.txt và di chuyển vào TaiLieu',
      'Thực hành Xóa thông thường (Delete): Xóa GhiChuQuanTrong.txt – file vào Recycle Bin',
      'Thực hành Xóa vĩnh viễn (Shift+Delete): Xóa DiChuyen.txt không qua Recycle Bin',
      'Thực hành Khôi phục: Restore GhiChuQuanTrong.txt từ Recycle Bin về vị trí ban đầu',
    ],
    insights: [
      'Cấu trúc thư mục logic giúp quản lý hàng nghìn file hiệu quả và tiết kiệm thời gian tìm kiếm',
      'Quy tắc đặt tên nhất quán (không dấu, dùng dấu gạch dưới/CamelCase) giúp tránh lỗi phần mềm',
      'Xóa vĩnh viễn (Shift+Delete) không thể phục hồi – luôn kiểm tra kỹ trước khi thực hiện',
    ],
    tags: ['File Explorer', 'Windows OS', 'Tổ chức dữ liệu', 'Quản lý file'],
    file: 'w1.pdf',
    fileType: 'PDF',
  },
  2: {
    icon: '🔍',
    title: 'Tìm kiếm & Đánh giá thông tin',
    subtitle: 'Nhiệm vụ 2 – Tuần 2',
    desc: 'Báo cáo nghiên cứu chuyên sâu về tối ưu hóa thuật toán Hồi quy Logistic (Logistic Regression) trong bối cảnh dữ liệu lớn, sử dụng các toán tử tìm kiếm nâng cao để khai thác học thuật khoa học.',
    tasks: [
      'Lựa chọn chủ đề: Tối ưu hóa Hồi quy Logistic xử lý dữ liệu lớn trong Machine Learning',
      'Sử dụng toán tử site: để tìm kiếm trên Google Scholar, arxiv.org, sciencedirect.com',
      'Sử dụng toán tử filetype:pdf để tìm các paper học thuật dạng PDF',
      'Sử dụng toán tử "" (ngoặc kép) để tìm kiếm cụm từ chính xác về SGD, L2 Regularization',
      'Đánh giá độ tin cậy: kiểm tra tác giả, số lượt trích dẫn, journal chỉ số IF',
      'Phân tích nội dung: cơ sở toán học SGD, Adam optimizer, L1/L2 Regularization, Learning Rate',
      'So sánh các phương pháp tối ưu và đưa ra nhận xét học thuật có căn cứ',
    ],
    insights: [
      'Sử dụng 4+ toán tử tìm kiếm nâng cao giúp giảm 80% nhiễu thông tin và tăng độ chính xác',
      'Đánh giá nguồn theo tiêu chí CRAAP (Currency, Relevance, Authority, Accuracy, Purpose)',
      'Tìm kiếm trên Google Scholar cho phép lọc theo năm, số trích dẫn để ưu tiên paper quan trọng',
    ],
    tags: ['Google Scholar', 'Machine Learning', 'Logistic Regression', 'Search Operators', 'CRAAP'],
    file: 'w2.pdf',
    fileType: 'PDF',
  },
  3: {
    icon: '✍️',
    title: 'Viết Prompt hiệu quả',
    subtitle: 'Nhiệm vụ 3 – Tuần 3',
    desc: 'Thực hành kỹ thuật Prompt Engineering qua 3 tác vụ học tập thực tế, từ prompt cơ bản đến prompt nâng cao, so sánh chất lượng kết quả AI trả về ở từng cấp độ.',
    tasks: [
      'Tác vụ 1 – Tóm tắt tài liệu học thuật (bài về định luật Entropy):',
      '  • Cơ bản: "Tóm tắt nội dung chính của tài liệu sau"',
      '  • Cải tiến: Yêu cầu 3 đoạn ngắn với mục tiêu, phương pháp, kết luận rõ ràng',
      '  • Nâng cao: Đóng vai giảng viên → tóm tắt 150 từ + 2 câu hỏi phản tư',
      'Tác vụ 2 – Giải thích khái niệm Entropy trong Vật lý:',
      '  • Cơ bản: "Giải thích khái niệm entropy trong vật lý"',
      '  • Cải tiến: Thêm ví dụ minh họa thực tế, so sánh với "trật tự" đời sống',
      '  • Nâng cao: Đóng vai giảng viên vật lý → giải thích → ví dụ → định nghĩa chính xác → câu hỏi gợi mở',
      'Tác vụ 3 – Tạo bộ câu hỏi ôn tập Cách mạng Công nghiệp lần 1',
      '  • Kết quả: 2 câu trắc nghiệm + 2 câu tự luận + 1 câu mở (thảo luận)',
    ],
    insights: [
      'Prompt nâng cao (đóng vai + bối cảnh + cấu trúc) cho kết quả chất lượng gấp 3-4 lần prompt cơ bản',
      'Kỹ thuật "Vai trò + Nhiệm vụ + Định dạng + Ràng buộc" là công thức prompt hiệu quả nhất',
      'Prompt tốt tiết kiệm thời gian chỉnh sửa và cần ít vòng lặp hơn để đạt kết quả mong muốn',
    ],
    tags: ['Prompt Engineering', 'ChatGPT', 'Gemini', 'AI Tools', 'Kỹ năng số'],
    file: 'w3.pdf',
    fileType: 'PDF',
  },
  4: {
    icon: '🤝',
    title: 'Hợp tác trực tuyến',
    subtitle: 'Nhiệm vụ 4 – Tuần 4',
    desc: 'Ứng dụng bộ 4 công cụ hợp tác trực tuyến (Trello + Google Drive + Google Docs + Discord) để quản lý dự án nhóm "Nhập môn công nghệ số và AI" trong vòng 1 tuần.',
    tasks: [
      'Thiết lập Trello Board với 3 cột: To Do / In Progress / Done',
      'Tạo các thẻ công việc cụ thể: "Tìm tài liệu tham khảo", "Thiết kế slide", "Lập dàn ý báo cáo"',
      'Gắn Deadline và mô tả chi tiết cho từng thẻ Trello',
      'Cập nhật tiến độ thẻ ít nhất 3 lần/tuần (Thứ 2 → Thứ 4 → Thứ 6)',
      'Tổ chức Google Drive theo cấu trúc thư mục dự án, phân quyền truy cập nhóm',
      'Cùng soạn thảo báo cáo trên Google Docs với comment và suggestion thời gian thực',
      'Sử dụng Discord: tạo các kênh #general, #tài-liệu, #deadline để quản lý liên lạc',
      'Chủ động thảo luận, hỗ trợ thành viên và tổng hợp phản hồi trên Discord',
    ],
    insights: [
      'Trello giúp toàn nhóm minh bạch về tiến độ, tránh tình trạng "không biết ai đang làm gì"',
      'Google Docs co-editing giúp tiết kiệm thời gian hơn gấp đôi so với gửi file qua email',
      'Discord với các kênh riêng biệt giúp thông tin có tổ chức, dễ tìm lại khi cần',
    ],
    tags: ['Trello', 'Google Drive', 'Google Docs', 'Discord', 'Quản lý dự án'],
    file: 'w4.pdf',
    fileType: 'PDF',
  },
  5: {
    icon: '🎨',
    title: 'Sáng tạo nội dung với AI',
    subtitle: 'Nhiệm vụ 5 – Tuần 5',
    desc: 'Tạo Infographic hiện đại về "5 bước bảo vệ dữ liệu cá nhân trên không gian mạng" bằng cách tích hợp 3 công cụ AI: Google Gemini (văn bản), DALL-E 3 (hình ảnh), và Canva AI (thiết kế).',
    tasks: [
      'Bước 1 – Google Gemini: Đóng vai chuyên gia an ninh mạng, viết nội dung 5 bước ngắn gọn',
      'Tinh chỉnh output của Gemini: làm ngôn ngữ "bắt tai", phù hợp với định dạng infographic',
      'Bước 2 – Bing Image Creator (DALL-E 3): Tạo bộ icon 3D phong cách cyber cho 5 bước',
      'Prompt icon: "3D minimalist cyber icon representing [chủ đề], dark background, neon glow, 4K"',
      'Bước 3 – Canva AI (Magic Design): Đưa nội dung và icon vào, dùng Magic Design tạo layout',
      'Sử dụng Canva Magic Write để tạo tiêu đề phụ và caption hấp dẫn',
      'Tinh chỉnh màu sắc, typography và bố cục để đạt thiết kế chuyên nghiệp',
      'Xuất file infographic final dạng PNG 4K và PDF vector',
    ],
    insights: [
      'Kết hợp 3 AI tool cho kết quả vượt trội hơn dùng 1 tool duy nhất – mỗi tool có thế mạnh riêng',
      'Chất lượng output AI phụ thuộc 80% vào chất lượng prompt – cần nhiều vòng thử nghiệm',
      'AI là công cụ hỗ trợ sáng tạo, không thay thế khiếu thẩm mỹ và định hướng sáng tạo của người dùng',
    ],
    tags: ['Gemini', 'DALL-E 3', 'Canva AI', 'Infographic', 'Thiết kế số', 'An ninh mạng'],
    file: 'w5.pdf',
    fileType: 'PDF',
  },
  6: {
    icon: '⚖️',
    title: 'AI có trách nhiệm',
    subtitle: 'Nhiệm vụ 6 – Tuần 6',
    desc: 'Nghiên cứu chính sách sử dụng AI trong học tập của ĐHQGHN, phân tích các vấn đề đạo đức AI, mô tả quá trình dùng AI để hỗ trợ làm bài, và xây dựng bộ nguyên tắc cá nhân có trách nhiệm.',
    tasks: [
      'Nghiên cứu chính sách AI tại ĐHQGHN: được dùng AI hỗ trợ học tập nhưng phải minh bạch',
      'Nguyên tắc chung: không copy hoàn toàn AI output, phải trích dẫn khi dùng AI',
      'Ghi lại quá trình dùng AI hỗ trợ làm bài: prompt sử dụng, kết quả, cách chỉnh sửa',
      'Phân tích vấn đề đạo đức: nguy cơ mất tư duy độc lập khi lạm dụng AI',
      'Phân tích thiên kiến (bias) trong các mô hình AI ngôn ngữ lớn (LLM)',
      'Đánh giá tính trung thực học thuật: ranh giới giữa "hỗ trợ" và "gian lận"',
      'Xây dựng bộ 6 nguyên tắc cá nhân sử dụng AI có trách nhiệm trong học tập',
      'Đề xuất giải pháp cho các thách thức đạo đức AI trong môi trường đại học',
    ],
    insights: [
      'AI có thể tạo ra "ảo giác hiểu biết" – người dùng nghĩ họ hiểu vấn đề nhưng thực ra chỉ copy AI',
      'Trách nhiệm đạo đức của người dùng AI không thể ủy thác cho AI – con người luôn là người chịu trách nhiệm cuối cùng',
      'Sử dụng AI minh bạch và có trích dẫn là cách duy nhất để duy trì tính học thuật trung thực',
    ],
    tags: ['Đạo đức AI', 'Chính sách ĐHQGHN', 'Trung thực học thuật', 'AI Bias', 'Trách nhiệm'],
    file: 'w6.pdf',
    fileType: 'PDF',
  },
};

// ─── Modal ────────────────────────────────────────────────────────────────────
function openWeekModal(week) {
  const data = weekData[week];
  if (!data) return;

  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <div class="modal-header">
      <div class="modal-week-num">${data.subtitle}</div>
      <h2 class="modal-title">${data.icon} ${data.title}</h2>
      <p class="modal-desc">${data.desc}</p>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Các bước thực hiện</div>
      <ul class="modal-body-list">
        ${data.tasks.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Bài học rút ra</div>
      <ul class="modal-body-list">
        ${data.insights.map(i => `<li>💡 ${i}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Tags</div>
      <div class="modal-tags">
        ${data.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>

    <div class="modal-download">
      <a href="${data.file}" class="modal-dl-btn" target="_blank">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
        </svg>
        Tải bài nộp (${data.fileType})
      </a>
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── Navbar ───────────────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNav();
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity = navLinks.classList.contains('open') ? '0' : '1';
  spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

function updateActiveNav() {
  const sections = ['home', 'about', 'weeks', 'summary'];
  const scrollY = window.scrollY + 100;

  sections.forEach(id => {
    const section = document.getElementById(id);
    const navLink = document.getElementById(`nav-${id}`);
    if (!section || !navLink) return;

    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollY >= top && scrollY < bottom) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      navLink.classList.add('active');
    }
  });
}

// ─── Particles ────────────────────────────────────────────────────────────────
function createParticles() {
  const container = document.getElementById('particles-container');
  const colors = ['#7c3aed', '#a855f7', '#06b6d4', '#ec4899', '#10b981'];
  const count = 25;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 4 + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 15;

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${left}%;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      box-shadow: 0 0 ${size * 2}px ${color};
    `;

    container.appendChild(particle);
  }
}

// ─── Intersection Observer for Animations ────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.week-card, .about-card, .summary-block, .principle-item, .download-card').forEach(el => {
    observer.observe(el);
  });

  // Skill bars animation
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-fill').forEach((fill, i) => {
            setTimeout(() => {
              fill.style.width = fill.getAttribute('data-width') || fill.style.width;
            }, i * 150);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  const summarySkills = document.getElementById('summary-skills');
  if (summarySkills) {
    summarySkills.querySelectorAll('.skill-fill').forEach(fill => {
      fill.setAttribute('data-width', fill.style.width);
      fill.style.width = '0';
    });
    skillObserver.observe(summarySkills);
  }
}

// ─── Stagger animations for week cards ───────────────────────────────────────
function initWeekCardAnimations() {
  const cards = document.querySelectorAll('.week-card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, idx * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
}

// ─── Smooth hover glow on week cards ─────────────────────────────────────────
function initCardGlow() {
  document.querySelectorAll('.week-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });
}

// ─── Typing effect for hero title ────────────────────────────────────────────
function initCounters() {
  // Animate numbers if any visible counters
}

// ─── Initialize ───────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initScrollAnimations();
  initWeekCardAnimations();
  initCardGlow();
  updateActiveNav();

  // Add glow background to week section
  const weeksSection = document.getElementById('weeks');
  if (weeksSection) {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 600px;
      height: 600px;
      background: radial-gradient(ellipse, rgba(124, 58, 237, 0.06), transparent 70%);
      pointer-events: none;
    `;
    weeksSection.style.position = 'relative';
    weeksSection.insertBefore(glow, weeksSection.firstChild);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
