// ============================================================
//  i18n.js  —  BeatUp Engine Portfolio
//  Languages: EN · 简体中文 (ZH)
//  Also handles: Theme Toggle (dark/light)
// ============================================================

const translations = {
  en: {
    // Nav
    "nav.home":      "Home",
    "nav.projects":  "Projects",

    // Index
    "index.accent":       "Software & Tools",
    "index.h1":           "Building custom solutions & rhythm game tools.",
    "index.desc":         "Welcome to my portfolio. I specialize in C++ and C#, UI/UX customization, and developing specialized tools for rhythm game charting — including the BeatUp Engine and SanConverter.",
    "index.btn.patcher":  "BeatUp Engine",
    "index.btn.projects": "Explore Projects",

    // Patcher Page
    "patcher.badge.status": "Active Development",
    "patcher.title":        "BeatUp Engine",
    "patcher.subtitle":     "A high-fidelity, open-source BeatUp rhythm game engine built from scratch in C++ with SDL2. Designed to replicate authentic Audition Online / CDIU gameplay mechanics with sub-millisecond timing precision.",
    "patcher.btn.download": "Download Release",

    "patcher.features.title": "Features",
    "patcher.feat.timing.title": "1:1 Timing Engine",
    "patcher.feat.timing.desc":  "Beat detection ported from VB6 cma6.bas. Judgment windows (Perfect ±0.3, Great ±0.4, Cool ±0.5) match Audition Online at offset 0.700.",
    "patcher.feat.input.title":  "6-Key + Space Layout",
    "patcher.feat.input.desc":   "Authentic numpad input: Numpad 9/6/3 (right) · 7/4/1 (left) · Space / 0 / Insert · Numpad 5 (Finish). Mirror mode & AutoPlay.",
    "patcher.feat.editor.title": "Chart Editor",
    "patcher.feat.editor.desc":  "Built-in top-down timeline canvas with 1/4, 1/8, 1/16 snapping, minimap, and live split-view for real-time AutoPlay review.",
    "patcher.feat.audio.title":  "miniaudio Engine",
    "patcher.feat.audio.desc":   "Powered by miniaudio for .ogg and .wav. Precise seekMs, adjustable playback speed (Ctrl+Left/Right), per-SFX volume control.",
    "patcher.feat.formats.title":"SLK Format Support",
    "patcher.feat.formats.desc": "Import and export .slk (SYLK) chart files. Full 16th-note resolution with per-note speed data (SData).",
    "patcher.feat.render.title": "SDL2 Rendering",
    "patcher.feat.render.desc":  "Hardware-accelerated SDL2 at 1024×768. Inter Italic score, animated combo sprites (Tier 0–3), hot-swap asset folders.",

    "patcher.dl.title":  "Download",
    "patcher.dl.desc":   "Portable ZIP. Extract and run BeatUpEngine.exe. Keep the assets/ folder in the same directory.",
    "patcher.dl.stable": "Stable",
    "patcher.dl.btn":    "⬇ Download .zip",

    "patcher.install.title": "Installation",
    "patcher.install.1": "Download the ZIP archive and extract it to a folder of your choice.",
    "patcher.install.2": "Ensure the <code>assets/</code> folder is in the same directory as <code>BeatUpEngine.exe</code>.",
    "patcher.install.3": "Place your <code>.ogg</code> or <code>.wav</code> music file and <code>.slk</code> chart anywhere accessible.",
    "patcher.install.4": "Launch <code>BeatUpEngine.exe</code>. Use <strong>File → Import .ogg</strong> to load music, then <strong>File → Import .slk</strong> for the chart.",
    "patcher.install.5": "Press <kbd>F5</kbd> to play. Press <kbd>F6</kbd> to toggle AutoPlay. Adjust offset with the <code>[ − ]</code> <code>[ + ]</code> toolbar buttons.",

    "patcher.keys.title":    "Controls & Keybinds",
    "patcher.keys.global":   "Global Transport",
    "patcher.keys.gameplay": "Gameplay (Numpad)",
    "patcher.keys.key":      "Key",
    "patcher.keys.action":   "Action",
    "patcher.keys.lane":     "Lane",

    "patcher.key.f5":     "Play / Pause",
    "patcher.key.f6":     "Toggle AutoPlay",
    "patcher.key.f7":     "Stop & Rewind",
    "patcher.key.f1":     "Game Mode",
    "patcher.key.f2":     "Chart Editor Mode",
    "patcher.key.f3":     "Split View",
    "patcher.key.f4":     "Metronome Toggle",
    "patcher.key.slower": "Speed −5%",
    "patcher.key.faster": "Speed +5%",
    "patcher.key.reset":  "Reset Speed to 100%",

    "patcher.lane.r1":     "Right — Top",
    "patcher.lane.r2":     "Right — Middle",
    "patcher.lane.r3":     "Right — Bottom",
    "patcher.lane.l1":     "Left — Top",
    "patcher.lane.l2":     "Left — Middle",
    "patcher.lane.l3":     "Left — Bottom",
    "patcher.lane.space":  "Space Note",
    "patcher.lane.finish": "Finish Move",

    "patcher.struct.title":    "Asset Structure",
    "patcher.struct.desc":     "The engine loads all textures from the assets/ folder at startup. Replace any asset by dropping a new file with the same name into the corresponding subfolder.",
    "patcher.struct.folder":   "Folder",
    "patcher.struct.contents": "Contents",
    "patcher.struct.arrows":   "Arrow sprites, receptor flashes, laser textures",
    "patcher.struct.bars":     "Left/right bar backgrounds",
    "patcher.struct.space":    "spacebar.png, SPACE.png, SLINE.png, spacepress.png, fn.png",
    "patcher.struct.score":    "score_0.png … score_9.png, comma.png",
    "patcher.struct.combo":    "combo_0_0.png … combo_3_9.png (Tier × Digit)",
    "patcher.struct.game":     "Judgment sprites (perfect, great, miss…), READY, combo gauge",
    "patcher.struct.sounds":   "beat.wav, miss.ogg, ready.ogg, start.ogg, space_bar.wav, tick.wav",
    "patcher.struct.font":     "Inter_18pt-Italic.ttf (score & combo display)",
    "patcher.struct.bg":       "Custom background images (any name)",

    "tools.beatup.desc": "A high-fidelity C++ / SDL2 BeatUp engine with 1:1 VB6 timing, chart editor, and authentic numpad input.",
    "tools.beatup.btn":  "View Project →",
    "tools.footer": "© 2026 Sanya. All rights reserved.",
  },

  zh: {
    // Nav
    "nav.home":      "主页",
    "nav.projects":  "项目",

    // Index
    "index.accent":       "软件与工具",
    "index.h1":           "构建自定义解决方案与节奏游戏工具。",
    "index.desc":         "欢迎来到我的作品集。我专注于 C++ 和 C#、UI/UX 定制，以及为节奏游戏图表制作开发专业工具——包括 BeatUp Engine 和 SanConverter。",
    "index.btn.patcher":  "BeatUp Engine",
    "index.btn.projects": "浏览项目",

    // Patcher Page
    "patcher.badge.status": "积极开发中",
    "patcher.title":        "BeatUp Engine",
    "patcher.subtitle":     "一款基于 C++ 与 SDL2 从零构建的高保真开源 BeatUp 节奏游戏引擎，旨在以亚毫秒级时序精度复现 Audition Online / CDIU 的真实游戏机制。",
    "patcher.btn.download": "下载发行版",

    "patcher.features.title": "功能特性",
    "patcher.feat.timing.title": "1:1 时序引擎",
    "patcher.feat.timing.desc":  "Beat 检测直接移植自 VB6 原版 cma6.bas。判定窗口（Perfect ±0.3、Great ±0.4、Cool ±0.5）在 offset 0.700 下与 Audition Online 完全一致。",
    "patcher.feat.input.title":  "六键 + 空格布局",
    "patcher.feat.input.desc":   "原版小键盘输入：9/6/3（右）· 7/4/1（左）· Space / 0 / Insert · 5（Finish）。支持镜像模式与自动游玩。",
    "patcher.feat.editor.title": "谱面编辑器",
    "patcher.feat.editor.desc":  "内置从上至下的时间轴画布，支持 1/4、1/8、1/16 吸附、小地图导航，以及实时分屏自动游玩预览。",
    "patcher.feat.audio.title":  "miniaudio 音频引擎",
    "patcher.feat.audio.desc":   "由 miniaudio 驱动，支持 .ogg 与 .wav 格式。精确 seekMs、可调播放速度（Ctrl+左/右），以及每个音效独立音量控制。",
    "patcher.feat.formats.title":"SLK 格式支持",
    "patcher.feat.formats.desc": "导入与导出 .slk（SYLK）谱面文件，完整支持 16 分音符精度与每音符速度数据（SData）。",
    "patcher.feat.render.title": "SDL2 渲染",
    "patcher.feat.render.desc":  "硬件加速 SDL2 渲染，分辨率 1024×768。Inter 斜体分数显示、连击动画精灵（第 0–3 级），支持资源文件夹热替换。",

    "patcher.dl.title":  "下载",
    "patcher.dl.desc":   "便携 ZIP 包。解压后运行 BeatUpEngine.exe，请将 assets/ 文件夹置于同一目录。",
    "patcher.dl.stable": "稳定版",
    "patcher.dl.btn":    "⬇ 下载 .zip",

    "patcher.install.title": "安装说明",
    "patcher.install.1": "下载 ZIP 压缩包并解压至您选择的文件夹。",
    "patcher.install.2": "确保 <code>assets/</code> 文件夹与 <code>BeatUpEngine.exe</code> 位于同一目录。",
    "patcher.install.3": "将您的 <code>.ogg</code> 或 <code>.wav</code> 音乐文件及 <code>.slk</code> 谱面文件放置于任意可访问位置。",
    "patcher.install.4": "启动 <code>BeatUpEngine.exe</code>，通过 <strong>文件 → 导入 .ogg</strong> 加载音乐，再通过 <strong>文件 → 导入 .slk</strong> 加载谱面。",
    "patcher.install.5": "按 <kbd>F5</kbd> 开始游玩，按 <kbd>F6</kbd> 切换自动游玩，使用工具栏 <code>[ − ]</code> <code>[ + ]</code> 按钮调整 Offset。",

    "patcher.keys.title":    "操作与快捷键",
    "patcher.keys.global":   "全局传输控制",
    "patcher.keys.gameplay": "游戏操作（小键盘）",
    "patcher.keys.key":      "按键",
    "patcher.keys.action":   "操作",
    "patcher.keys.lane":     "轨道",

    "patcher.key.f5":     "播放 / 暂停",
    "patcher.key.f6":     "切换自动游玩",
    "patcher.key.f7":     "停止并倒回",
    "patcher.key.f1":     "游戏模式",
    "patcher.key.f2":     "谱面编辑器模式",
    "patcher.key.f3":     "分屏视图",
    "patcher.key.f4":     "节拍器开关",
    "patcher.key.slower": "速度 −5%",
    "patcher.key.faster": "速度 +5%",
    "patcher.key.reset":  "重置速度至 100%",

    "patcher.lane.r1":     "右侧 — 上",
    "patcher.lane.r2":     "右侧 — 中",
    "patcher.lane.r3":     "右侧 — 下",
    "patcher.lane.l1":     "左侧 — 上",
    "patcher.lane.l2":     "左侧 — 中",
    "patcher.lane.l3":     "左侧 — 下",
    "patcher.lane.space":  "空格音符",
    "patcher.lane.finish": "Finish 动作",

    "patcher.struct.title":    "资源目录结构",
    "patcher.struct.desc":     "引擎在启动时从 assets/ 文件夹加载所有纹理。将同名文件放入对应子文件夹即可替换任意资源。",
    "patcher.struct.folder":   "文件夹",
    "patcher.struct.contents": "内容",
    "patcher.struct.arrows":   "箭头精灵、感应闪光、激光纹理",
    "patcher.struct.bars":     "左右轨道背景",
    "patcher.struct.space":    "spacebar.png、SPACE.png、SLINE.png、spacepress.png、fn.png",
    "patcher.struct.score":    "score_0.png … score_9.png、comma.png",
    "patcher.struct.combo":    "combo_0_0.png … combo_3_9.png（级别 × 数字）",
    "patcher.struct.game":     "判定精灵（perfect、great、miss…）、READY、连击仪表",
    "patcher.struct.sounds":   "beat.wav、miss.ogg、ready.ogg、start.ogg、space_bar.wav、tick.wav",
    "patcher.struct.font":     "Inter_18pt-Italic.ttf（分数与连击显示）",
    "patcher.struct.bg":       "自定义背景图片（任意文件名）",

    "tools.beatup.desc": "基于 C++ / SDL2 的高保真 BeatUp 引擎，搭载 VB6 1:1 时序、谱面编辑器与原版小键盘输入。",
    "tools.beatup.btn":  "查看项目 →",
    "tools.footer": "© 2026 Sanya。保留所有权利。",
  }
};

// ── Apply translations ─────────────────────────────────────────────────────
function applyLang(lang) {
    const t = translations[lang] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

// ── Apply theme ────────────────────────────────────────────────────────────
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'light' ? '🌙' : '☀️';
    localStorage.setItem('theme', theme);
}

// ── Init ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    document.getElementById('themeToggle')?.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'light' ? 'dark' : 'light');
    });

    // Language
    const savedLang = localStorage.getItem('lang') || 'en';
    applyLang(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });

    // Nav active state
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-center a').forEach(a => {
        const href = a.getAttribute('href');
        a.classList.toggle('active', href === page || (page === '' && href === 'index.html'));
    });

    // Fade-in on scroll
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.animationDelay = '0.05s';
                e.target.classList.add('fade-in');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.card, .feature-card, .download-card, .panel, .step-list li').forEach(el => {
        if (!el.classList.contains('fade-in')) obs.observe(el);
    });
});
