document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("topnav-mount");
  if (!mount) return;

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const decodedPath = decodeURIComponent(currentPath);

  const navItems = [
    { title: "功能索引", href: "index.html" },
    { title: "即時監看", href: "即時影像.html" },
    { title: "危險區域警報", href: "危險區域入侵越界警報.html" },
    { title: "跌倒與異常姿態偵測", href: "跌倒與異常姿態偵測.html" },
    { title: "長時間靜止警報", href: "長時間靜止偵測.html" },
    { title: "隱私開關設定", href: "隱私模式開關.html" },
    { title: "離床與夜間活動監測", href: "離床與夜間活動監測.html" },
    { title: "三階段警報", href: "三階段警報.html" },
    { title: "緊急聯繫", href: "緊急聯繫與雙向語音.html" },
    { title: "照顧者通知中心", href: "照顧者App與通知.html" },
    { title: "高齡友善介面", href: "高齡友善介面.html" }
  ];

  mount.innerHTML = `
    <header class="navbar-header">
      <a class="nav-brand" href="index.html">
        <span class="brand-title">Edge-Vision</span>
      </a>

      <div class="hamburger-menu-wrapper" id="hamburgerMenuWrapper">
        <button class="hamburger-btn" id="hamburgerBtn" type="button" aria-label="選單">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="hamburger-dropdown" id="hamburgerDropdown">
          ${navItems.map(item => `
            <a class="dropdown-item ${decodedPath === item.href ? 'active' : ''}" href="${item.href}">
              <span>${item.title}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </header>
  `;

  const wrapper = document.getElementById("hamburgerMenuWrapper");
  const btn = document.getElementById("hamburgerBtn");

  if (btn && wrapper) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      wrapper.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove("open");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("backToTopStyles")) {
    const style = document.createElement("style");
    style.id = "backToTopStyles";
    style.textContent = `
      .btn-back-to-top {
        position: fixed !important;
        bottom: 28px !important;
        right: 28px !important;
        width: 44px !important;
        height: 44px !important;
        background-color: #14161d !important;
        border: 1.5px solid #d4af37 !important;
        color: #f1c40f !important;
        border-radius: 0px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        cursor: pointer !important;
        z-index: 9999 !important;
        box-shadow: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        transform: translateY(12px) !important;
        transition: opacity 0.25s ease, transform 0.25s ease, background-color 0.2s ease, border-color 0.2s ease !important;
        outline: none !important;
      }
      .btn-back-to-top.is-visible {
        opacity: 1 !important;
        visibility: visible !important;
        transform: translateY(0) !important;
      }
      .btn-back-to-top:hover {
        background-color: #252834 !important;
        border-color: #f39c12 !important;
        color: #ffffff !important;
      }
      .btn-back-to-top:active {
        transform: scale(0.94) !important;
      }
    `;
    document.head.appendChild(style);
  }

  const backBtn = document.createElement("button");
  backBtn.id = "backToTopBtn";
  backBtn.className = "btn-back-to-top";
  backBtn.title = "回到最頂部";
  backBtn.setAttribute("aria-label", "回到最頂部");
  backBtn.innerHTML = `
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `;
  document.body.appendChild(backBtn);

  const checkScroll = () => {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPos > 50) {
      backBtn.classList.add("is-visible");
    } else {
      backBtn.classList.remove("is-visible");
    }
  };

  window.addEventListener("scroll", checkScroll, { passive: true });
  document.addEventListener("scroll", checkScroll, { passive: true });

  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  });
});