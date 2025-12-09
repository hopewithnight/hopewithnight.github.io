// 主题切换
const themeToggle = document.getElementById("themeToggle")
const html = document.documentElement

// 从 localStorage 读取主题设置
const savedTheme = localStorage.getItem("theme") || "light"
html.setAttribute("data-theme", savedTheme)

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme")
  const newTheme = currentTheme === "light" ? "dark" : "light"

  html.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
})

// 语言切换
const translations = {
  zh: {
    "nav.features": "功能特性",
    "nav.download": "下载",
    "nav.docs": "文档",
    "nav.pricing": "价格",
    "nav.getStarted": "立即开始",
    "hero.badge": "全新 v2.0 已发布",
    "hero.title1": "让效率触手可及",
    "hero.title2": "一键直达你的工作流",
    "hero.description":
      "oftab 是一款强大的快捷工具软件，帮助你快速访问常用应用、文件和网站。通过智能快捷键和自定义工作流，让你的生产力提升 10 倍。",
    "hero.download": "免费下载",
    "hero.demo": "观看演示",
    "hero.users": "活跃用户",
    "hero.faster": "效率提升",
    "hero.rating": "用户评分",
    "hero.fast": "极速启动",
    "hero.custom": "自定义",
    "features.title": "强大功能，一应俱全",
    "features.description": "为现代工作流设计的完整解决方案",
    "features.spotlight.title": "智能聚焦",
    "features.spotlight.desc": "通过智能搜索快速找到任何应用、文件或网站，支持模糊搜索和拼音首字母",
    "features.shortcuts.title": "自定义快捷键",
    "features.shortcuts.desc": "为每个应用设置独特的快捷键，创建个性化的工作流程",
    "features.workspace.title": "工作空间",
    "features.workspace.desc": "为不同场景创建专属工作空间，一键切换工作环境",
    "features.clipboard.title": "剪贴板历史",
    "features.clipboard.desc": "自动保存剪贴板历史，快速访问之前复制的内容",
    "features.snippets.title": "文本片段",
    "features.snippets.desc": "保存常用文本片段，通过快捷键快速插入",
    "features.plugins.title": "插件生态",
    "features.plugins.desc": "丰富的插件市场，扩展无限可能",
    "showcase.label": "性能优先",
    "showcase.title": "极速响应，\n毫秒级启动",
    "showcase.description": "采用原生技术开发，占用内存极低，启动速度快如闪电。让你的工作流畅无阻。",
    "showcase.list1": "原生性能，流畅体验",
    "showcase.list2": "内存占用低于 50MB",
    "showcase.list3": "支持 Windows、macOS、Linux",
    "showcase.chart.title": "启动速度对比",
    "showcase.chart.oftab": "oftab",
    "showcase.chart.competitor1": "竞品 A",
    "showcase.chart.competitor2": "竞品 B",
    "download.title": "立即开始使用 oftab",
    "download.description": "完全免费，支持所有主流平台",
    "download.windows": "Windows",
    "download.windowsVersion": "Windows 10+",
    "download.mac": "macOS",
    "download.macVersion": "macOS 11+",
    "download.linux": "Linux",
    "download.linuxVersion": "Ubuntu 20.04+",
    "footer.tagline": "让效率触手可及",
    "footer.product": "产品",
    "footer.features": "功能特性",
    "footer.pricing": "价格",
    "footer.download": "下载",
    "footer.changelog": "更新日志",
    "footer.resources": "资源",
    "footer.docs": "文档",
    "footer.api": "API",
    "footer.plugins": "插件",
    "footer.community": "社区",
    "footer.company": "公司",
    "footer.about": "关于我们",
    "footer.blog": "博客",
    "footer.careers": "招聘",
    "footer.contact": "联系我们",
    "footer.rights": "保留所有权利。",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
  },
  en: {
    "nav.features": "Features",
    "nav.download": "Download",
    "nav.docs": "Docs",
    "nav.pricing": "Pricing",
    "nav.getStarted": "Get Started",
    "hero.badge": "New v2.0 Released",
    "hero.title1": "Efficiency at Your Fingertips",
    "hero.title2": "One Click to Your Workflow",
    "hero.description":
      "oftab is a powerful shortcut tool that helps you quickly access common apps, files, and websites. Boost your productivity 10x with smart shortcuts and custom workflows.",
    "hero.download": "Free Download",
    "hero.demo": "Watch Demo",
    "hero.users": "Active Users",
    "hero.faster": "Faster",
    "hero.rating": "User Rating",
    "hero.fast": "Lightning Fast",
    "hero.custom": "Customizable",
    "features.title": "Powerful Features, All-in-One",
    "features.description": "Complete solution designed for modern workflows",
    "features.spotlight.title": "Smart Spotlight",
    "features.spotlight.desc":
      "Quickly find any app, file, or website with intelligent search, supporting fuzzy search and pinyin initials",
    "features.shortcuts.title": "Custom Shortcuts",
    "features.shortcuts.desc": "Set unique shortcuts for each app and create personalized workflows",
    "features.workspace.title": "Workspaces",
    "features.workspace.desc": "Create dedicated workspaces for different scenarios and switch with one click",
    "features.clipboard.title": "Clipboard History",
    "features.clipboard.desc": "Automatically save clipboard history and quickly access previously copied content",
    "features.snippets.title": "Text Snippets",
    "features.snippets.desc": "Save frequently used text snippets and insert them quickly with shortcuts",
    "features.plugins.title": "Plugin Ecosystem",
    "features.plugins.desc": "Rich plugin marketplace with unlimited possibilities",
    "showcase.label": "Performance First",
    "showcase.title": "Lightning Fast,\nMillisecond Launch",
    "showcase.description":
      "Built with native technology, extremely low memory footprint, and lightning-fast startup. Keep your workflow smooth.",
    "showcase.list1": "Native performance, smooth experience",
    "showcase.list2": "Memory usage under 50MB",
    "showcase.list3": "Supports Windows, macOS, Linux",
    "showcase.chart.title": "Startup Speed Comparison",
    "showcase.chart.oftab": "oftab",
    "showcase.chart.competitor1": "Competitor A",
    "showcase.chart.competitor2": "Competitor B",
    "download.title": "Start Using oftab Now",
    "download.description": "Completely free, supports all major platforms",
    "download.windows": "Windows",
    "download.windowsVersion": "Windows 10+",
    "download.mac": "macOS",
    "download.macVersion": "macOS 11+",
    "download.linux": "Linux",
    "download.linuxVersion": "Ubuntu 20.04+",
    "footer.tagline": "Efficiency at Your Fingertips",
    "footer.product": "Product",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.download": "Download",
    "footer.changelog": "Changelog",
    "footer.resources": "Resources",
    "footer.docs": "Documentation",
    "footer.api": "API",
    "footer.plugins": "Plugins",
    "footer.community": "Community",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
}

let currentLang = localStorage.getItem("lang") || "zh"
document.documentElement.setAttribute("lang", currentLang)

const langToggle = document.getElementById("langToggle")

function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]")
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n")
    if (translations[lang][key]) {
      // 检查是否包含 HTML 标签或换行符
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[lang][key]
      } else {
        // 保留换行符
        const text = translations[lang][key]
        if (text.includes("\n")) {
          element.innerHTML = text.replace(/\n/g, "<br>")
        } else {
          element.textContent = text
        }
      }
    }
  })
}

updateLanguage(currentLang)

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh"
  document.documentElement.setAttribute("lang", currentLang)
  localStorage.setItem("lang", currentLang)
  updateLanguage(currentLang)
})

// 移动端菜单切换
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const navLinks = document.querySelector(".nav-links")

mobileMenuToggle.addEventListener("click", () => {
  mobileMenuToggle.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      // 关闭移动端菜单
      if (mobileMenuToggle.classList.contains("active")) {
        mobileMenuToggle.classList.remove("active")
        navLinks.classList.remove("active")
      }
    }
  })
})

// 导航栏滚动效果
let lastScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.transform = "translateY(-100%)"
  } else {
    navbar.style.transform = "translateY(0)"
  }

  lastScroll = currentScroll
})

// 添加观察者用于动画效果
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// 为所有需要动画的元素添加初始样式和观察者
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".feature-card, .showcase-content, .download-card")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})
