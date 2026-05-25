// i18n.js - Globale Übersetzungs- und Theme-Logik

const translations = {
    en: {
        // Navbar
        "nav.home": "Home",
        "nav.projects": "Projects",
        
        // Tabs
        "tab.bu8": "Beat Up 8",
        "tab.bu4": "Beat Up 4",
        "tab.otp4": "OTP 4",
        "tab.otp8": "OTP 8",
        "tab.revert": "Revert Logic",

        // Index
        "index.accent": "Software & Tools",
        "index.h1": "Building custom solutions & logic converters.",
        "index.desc": "Welcome to my portfolio. I specialize in C#, UI/UX customization, and developing specialized tools like the SanConverter for rhythm game charting logic.",
        "index.btn.sanconverter": "SanConverter",
        "index.btn.projects": "Explore Projects",

        // Tools
        "tools.title": "Projects",
        "tools.subtitle": "A collection of software, scripts, and utilities.",
        "tools.section.active": "Active Main Projects",
        "tools.sanconverter.desc": "The ultimate tool to convert .SM and .SSC files to .SLK format. Built with .NET 4.8. This platform is actively maintained, stable, and continuously updated with new charting logic.",
        "tools.sanconverter.btn": "Read Documentation & Download",
        "tools.av.desc": "Native C++ workflow extensions integrated directly into Arrow Vortex. Features on-the-fly WAV to OGG silencing with LUFS normalization and direct SLK measure exporting.",
        "tools.av.btn": "Read Documentation",
        "tools.section.legacy": "Completed & Legacy Projects",
        "tools.analyzer.desc": "Utility to check the original .SLK Header to verify if the file is valid or corrupted. Project completed and archived.",
        "tools.silencer.desc": "Open Source Audio processing tool to silence .ogg files. Optimal workflow: FLAC → WAV → OGG. Final stable build. <br>Download latest release here.",
        "tools.btn.download": "Download .exe",
        "tools.footer": "&copy; 2026 Sanya. All rights reserved.",

        // SanConverter
        "san.subtitle": "Official documentation and logic structure for the BeatUp Converter.",
        "san.pdf": "📄 PDF Guide",
        "san.tutorial": "🎥 Tutorial",
        "san.download": "Download SanInstaller",
        "san.windows64": "Windows 64-bit Setup",
        "san.install.desc": "To get started, download the SanInstaller to your preferred directory and execute it. The installer will automatically retrieve and safely unpack the latest SanConverter deployment directly from GitHub.",
        "san.overview.title": "Overview",
        "san.overview.li1": "Modern, standalone UI (No installation required)",
        "san.overview.li2": "Supports conversion of <code>.SM</code> and <code>.SSC</code> files to <code>.SLK</code>",
        "san.overview.li3": "Full logic support for Beat Up and One-Two Party modes",
        "san.charting.title": "✨ Charting Logic",
        "san.bu8.title": "Beat Up 8 Structure",
        "san.hold.title": "Hold & Roll Logic (Lane 7)",
        "san.bu8.note1": "Lane 7 (index 6) acts as a state marker. If a hold/roll is active here, standard key assignments are overridden.",
        "san.bu4.title": "Beat Up 4 Structure",
        "san.otp4.title": "One Two Party 4 Logic",
        "san.otp4.desc": "One-Two Party is a very sensitive gamemode, this converter supports all rules from charting lvl 1 to lvl 9.",
        "san.otp8.title": "One Two Party 8 Logic",
        "san.otp8.desc": "Fully supports all rules from charting lvl 1 to lvl 9.",
        "san.revert.title": "Revert Logic",
        "san.revert.desc": "The Converter features a powerful revert function. It accurately reverts all Audition BeatUp <code>.slk</code> and all Audition One-Two Party <code>.slk</code> files back into a clean Stepmania <code>.SSC</code> file, preserving patterns and BPM data.",
        "san.disclaimer.title": "Disclaimer",
        "san.disclaimer.text": "This tool is free to download and use. Reverse engineering, decompiling, or redistributing modified versions of the executable is strictly prohibited.",

        // Arrow Vortex Plugins
        "av.subtitle": "Official documentation for native C++ workflow plugins.",
        "av.silencer.title": "🔇 AV Silencer Plugin",
        "av.silencer.desc": "A native audio processing extension for Arrow Vortex. It allows you to silence <code>.wav</code> files directly within the editor environment and exports them smoothly into <code>.ogg</code> format while automatically applying precise LUFS adjustments.",
        "av.silencer.li1": "Direct Arrow Vortex Integration",
        "av.silencer.li2": "On-the-fly WAV to OGG conversion",
        "av.silencer.li3": "Automated LUFS normalization for perfect audio levels",
        "av.converter.title": "⚙️ AV Converter Plugin (SLK Export)",
        "av.converter.desc": "A fully ported C++ version of the SanConverter logic, built directly into Arrow Vortex. It reads measure data on-the-fly and exports ready-to-use <code>.slk</code> files without needing an external executable.",
        "av.cpp.title": "C++ Charting Logic (AV Native)",
        "av.bu8.note1": "* <b>Smart Random Key (Lane 7 = '1'):</b> If Lane 1 is also pressed, it picks a random Left key. If Lane 2 is pressed, a Right key. If none, it picks from all keys.",
        "av.bu8.note2": "<b>Hold (2):</b> Restricts notes inside the hold to max 2 jacks in a row.",
        "av.bu8.note3": "<b>Roll (4):</b> Restricts notes inside the roll to NO consecutive jacks.",
        "av.bu4.note1": "If both Left and Right modifiers are active simultaneously, the plugin generates alternating patterns or global no-repeat keys based on the hold/roll state.",

        // Tables General
        "col.av": "Arrow Vortex Key",
        "col.av_col": "AV Column",
        "col.function": "Function",
        "col.result": "Result",
        "col.slk_res": "SLK Key / Result",
        "col.slk": "Beat Up .SLK Key",
        "col.otp": "OTP .SLK Key",
        "col.comment": "Comment",
        "col.state": "State",
        "col.active_lane": "Active Lane",
        "col.key_pool": "Key Pool",
        "col.constraint": "Constraint",

        // Table Content: SanConverter / BU8
        "bu8.spec_note": "Specific Note assignment",
        "bu8.rem_v1": "removed in v1.0.2",
        "bu8.key_arr_l": "Key Array {1,4,7}* (Left)",
        "bu8.key_arr_r": "Key Array {3,6,9}* (Right)",
        "bu8.space": "Space",
        "bu8.fm": "Finish Move",
        "bu8.shift8": "Shift + 8 (Mine on 8th Lane)",
        "bu8.fm_no_space": "Finish Move without Space",
        "bu8.note_fm": "Note + Finish",
        "bu8.note_arr": "Note Array {1,3,4,6,7,9}",
        "bu8.double_h": "Double Note (hidden)",
        "bu8.m_lane7": "M on lane 7",
        "bu8.triple_h": "Triple Note (hidden)",
        "bu8.m_lane78": "M on lane 7 & 8",
        
        "bu8.lane1_l": "Lane 1 (Left)",
        "bu8.lane2_r": "Lane 2 (Right)",
        "bu8.lane1_2": "Lane 1 + 2",
        "bu8.max2_jacks": "Max 2 jacks in a row",
        "bu8.no_repeat": "No direct repeat (no Jacks)",
        "bu8.reset_bu8": "Resets to BU8",
        
        "san.bu8.n_rand": "* <b>Random Key:</b> A note stated as <code>n</code> in the .slk which Audition can read, randomly generated using a no Jack-Logic.",
        "san.bu8.n_m": "* <b>M:</b> Mine.",

        // Table Content: BU4
        "bu4.rand_note": "Random Generated Note",
        "bu4.rand_l": "Random Left",
        "bu4.hold_star": "Hold*",
        "bu4.rand_l_noj": "Random Left no Jacks",
        "bu4.roll_star": "Roll*",
        "bu4.rand_r": "Random Right",
        "bu4.hold": "Hold",
        "bu4.rand_r_noj": "Random Right no Jacks",
        "bu4.roll": "Roll",
        "bu4.rand_lr": "Random Left-Right",
        "bu4.hold_34": "Hold 3+4 (Random Left-Right Pattern)",
        "bu4.rand_nr": "Random No Repeat",
        "bu4.roll_34": "Roll 3+4 (Random no repeat Pattern)",
        "san.bu4.n_hold": "* <b>Hold:</b> Holding the key for the amount of arrows you want on a specific side.",
        "san.bu4.n_roll": "* <b>Roll:</b> A rolled Hold.",

        // Table Content: AV Specific
        "av.std_l": "Standard Left Notes",
        "av.std_r": "Standard Right Notes",
        "av.state_marker": "State Marker",
        "av.state_res": "2 = Hold, 4 = Roll, 3 = End",
        "av.smart_rand": "Smart Random Key",
        "av.smart_res": "Generates Random Key based on pressed lanes*",
        "av.space_mod": "Space Modifier",
        "av.space_res": "If 1 = Space (s)",
        "av.hidden_note": "Hidden Note",
        "av.hidden_res": "Mine on 7 = Double, Mine on 7+8 = Triple",
        "av.s_f": "s,f",
        "av.note_fin": "Note finish",
        "av.n_f": "n,f",
        "av.fin": "Finish",
        "av.f": "f",
        "av.note_gen": "Note Generator",
        "av.note_gen_res": "Random Generated Note (n)",
        "av.space_mod2": "Space Modifier",
        "av.space_mod2_res": "1 = Space (s) | M = Space+Finish (s,f)",
        "av.left_mod": "Left Modifier",
        "av.left_mod_res": "2 = Hold Left | 4 = Roll Left | 3 = End",
        "av.right_mod": "Right Modifier",
        "av.right_mod_res": "2 = Hold Right | 4 = Roll Right | 3 = End",

        // Table Content: OTP
        "otp.note": "Note",
        "otp.change": "Change",
        "otp.dance": "Dance",
        "otp.space": "Space",
        "otp.rotation": "Rotation",
        "otp.rotate": "Rotate"
    },
    zh: {
        // Navbar
        "nav.home": "主页",
        "nav.projects": "项目",
        
        // Tabs
        "tab.bu8": "Beat Up 8",
        "tab.bu4": "Beat Up 4",
        "tab.otp4": "OTP 4",
        "tab.otp8": "OTP 8",
        "tab.revert": "还原逻辑",

        // Index
        "index.accent": "软件与工具",
        "index.h1": "构建定制解决方案与逻辑转换器。",
        "index.desc": "欢迎来到我的作品集。我专注于 C# 开发、UI/UX 定制，以及开发像 SanConverter 这样用于音乐游戏制谱逻辑的专业工具。",
        "index.btn.sanconverter": "SanConverter",
        "index.btn.projects": "探索项目",

        // Tools
        "tools.title": "项目",
        "tools.subtitle": "软件、脚本和实用工具的集合。",
        "tools.section.active": "活跃的主项目",
        "tools.sanconverter.desc": "将 .SM 和 .SSC 文件转换为 .SLK 格式的终极工具。基于 .NET 4.8 构建。该平台受到积极维护，稳定并不断更新新的制谱逻辑。",
        "tools.sanconverter.btn": "阅读文档与下载",
        "tools.av.desc": "直接集成到 Arrow Vortex 中的原生 C++ 工作流扩展。具有实时 WAV 到 OGG 的静音功能（带 LUFS 标准化）和直接导出 SLK 小节数据的功能。",
        "tools.av.btn": "阅读文档",
        "tools.section.legacy": "已完成与旧项目",
        "tools.analyzer.desc": "检查原始 .SLK 头部以验证文件是否有效或损坏的实用工具。项目已完成并归档。",
        "tools.silencer.desc": "用于将 .ogg 文件静音的开源音频处理工具。最佳工作流程：FLAC → WAV → OGG。<br>最终稳定版本。在此下载最新版本。",
        "tools.btn.download": "下载 .exe",
        "tools.footer": "&copy; 2026 Sanya. 保留所有权利。",

        // SanConverter
        "san.subtitle": "BeatUp 转换器的官方文档和逻辑结构。",
        "san.pdf": "📄 PDF 指南",
        "san.tutorial": "🎥 视频教程",
        "san.download": "下载 SanInstaller",
        "san.windows64": "Windows 64位 安装程序",
        "san.install.desc": "首先，将 SanInstaller 下载到您首选的目录并运行它。安装程序将自动从 GitHub 获取并安全解压最新的 SanConverter 部署文件。",
        "san.overview.title": "概览",
        "san.overview.li1": "现代且独立的 UI（无需安装）",
        "san.overview.li2": "支持将 <code>.SM</code> 和 <code>.SSC</code> 文件转换为 <code>.SLK</code>",
        "san.overview.li3": "全面支持 Beat Up 和 One-Two Party 模式逻辑",
        "san.charting.title": "✨ 制谱逻辑",
        "san.bu8.title": "Beat Up 8 结构",
        "san.hold.title": "长按与连打逻辑 (第 7 轨)",
        "san.bu8.note1": "第 7 轨（索引 6）作为状态标记。如果在此处激活长按/连打，将覆盖标准按键分配。",
        "san.bu4.title": "Beat Up 4 结构",
        "san.otp4.title": "One Two Party 4 逻辑",
        "san.otp4.desc": "One-Two Party 是一个非常敏感的游戏模式，本转换器支持 1 到 9 级制谱的所有规则。",
        "san.otp8.title": "One Two Party 8 逻辑",
        "san.otp8.desc": "全面支持 1 到 9 级制谱的所有规则。",
        "san.revert.title": "还原逻辑",
        "san.revert.desc": "转换器具有强大的还原功能。它能准确地将所有 Audition BeatUp <code>.slk</code> 和 One-Two Party <code>.slk</code> 文件还原为干净的 Stepmania <code>.SSC</code> 文件，同时保留图案和 BPM 数据。",
        "san.disclaimer.title": "免责声明",
        "san.disclaimer.text": "此工具免费下载和使用。严禁逆向工程、反编译或重新分发修改后的可执行文件版本。",

        // Arrow Vortex Plugins
        "av.subtitle": "原生 C++ 工作流插件的官方文档。",
        "av.silencer.title": "🔇 AV 静音插件",
        "av.silencer.desc": "Arrow Vortex 的原生音频处理扩展。它允许您直接在编辑器环境中将 <code>.wav</code> 文件静音，并平滑导出为 <code>.ogg</code> 格式，同时自动应用精确的 LUFS 调整。",
        "av.silencer.li1": "直接集成 Arrow Vortex",
        "av.silencer.li2": "实时 WAV 到 OGG 转换",
        "av.silencer.li3": "自动 LUFS 标准化以获得完美的音频电平",
        "av.converter.title": "⚙️ AV 转换器插件 (SLK 导出)",
        "av.converter.desc": "SanConverter 逻辑的完整 C++ 移植版本，直接内置于 Arrow Vortex 中。它实时读取小节数据并导出可直接使用的 <code>.slk</code> 文件，无需外部可执行文件。",
        "av.cpp.title": "C++ 制谱逻辑 (AV 原生)",
        "av.bu8.note1": "* <b>智能随机按键 (第 7 轨 = '1'):</b> 如果同时按下第 1 轨，则选择左侧随机按键。如果按下第 2 轨，则选择右侧。如果没有，则从所有按键中选择。",
        "av.bu8.note2": "<b>长按 (2):</b> 限制长按内的音符最多连续 2 次同键。",
        "av.bu8.note3": "<b>连打 (4):</b> 限制连打内的音符禁止连续同键。",
        "av.bu4.note1": "如果同时激活左右修饰符，插件会根据长按/连打状态生成交替图案或全局无重复按键。",

        // Tables General
        "col.av": "Arrow Vortex 按键",
        "col.av_col": "AV 列",
        "col.function": "功能",
        "col.result": "结果",
        "col.slk_res": "SLK 按键 / 结果",
        "col.slk": "Beat Up .SLK 按键",
        "col.otp": "OTP .SLK 按键",
        "col.comment": "备注",
        "col.state": "状态",
        "col.active_lane": "激活轨道",
        "col.key_pool": "按键池",
        "col.constraint": "约束条件",

        // Table Content: SanConverter / BU8
        "bu8.spec_note": "特定音符分配",
        "bu8.rem_v1": "在 v1.0.2 中移除",
        "bu8.key_arr_l": "按键数组 {1,4,7}* (左)",
        "bu8.key_arr_r": "按键数组 {3,6,9}* (右)",
        "bu8.space": "空格",
        "bu8.fm": "终结技",
        "bu8.shift8": "Shift + 8 (第8轨地雷)",
        "bu8.fm_no_space": "无空格终结技",
        "bu8.note_fm": "音符 + 终结技",
        "bu8.note_arr": "音符数组 {1,3,4,6,7,9}",
        "bu8.double_h": "双重音符 (隐藏)",
        "bu8.m_lane7": "第 7 轨地雷 (M)",
        "bu8.triple_h": "三重音符 (隐藏)",
        "bu8.m_lane78": "第 7 和 8 轨地雷 (M)",
        
        "bu8.lane1_l": "第 1 轨 (左)",
        "bu8.lane2_r": "第 2 轨 (右)",
        "bu8.lane1_2": "第 1 + 2 轨",
        "bu8.max2_jacks": "最多连续 2 次同键",
        "bu8.no_repeat": "无直接重复 (禁止同键)",
        "bu8.reset_bu8": "重置为 BU8 默认",
        
        "san.bu8.n_rand": "* <b>随机按键:</b> .slk 中 Audition 可读的音符 <code>n</code>，使用无连击逻辑随机生成。",
        "san.bu8.n_m": "* <b>M:</b> 地雷 (Mine)。",

        // Table Content: BU4
        "bu4.rand_note": "随机生成音符",
        "bu4.rand_l": "随机(左)",
        "bu4.hold_star": "长按 (Hold)*",
        "bu4.rand_l_noj": "随机(左)无连击",
        "bu4.roll_star": "连打 (Roll)*",
        "bu4.rand_r": "随机(右)",
        "bu4.hold": "长按 (Hold)",
        "bu4.rand_r_noj": "随机(右)无连击",
        "bu4.roll": "连打 (Roll)",
        "bu4.rand_lr": "随机左右交替",
        "bu4.hold_34": "长按 3+4 (随机左右交替图案)",
        "bu4.rand_nr": "随机无重复",
        "bu4.roll_34": "连打 3+4 (随机无重复图案)",
        "san.bu4.n_hold": "* <b>长按 (Hold):</b> 按住所需单侧箭头数量对应的按键。",
        "san.bu4.n_roll": "* <b>连打 (Roll):</b> 连打型长按。",

        // Table Content: AV Specific
        "av.std_l": "标准左侧音符",
        "av.std_r": "标准右侧音符",
        "av.state_marker": "状态标记",
        "av.state_res": "2 = 长按, 4 = 连打, 3 = 结束",
        "av.smart_rand": "智能随机按键",
        "av.smart_res": "基于按下的轨道生成随机按键*",
        "av.space_mod": "空格修饰符",
        "av.space_res": "如果 1 = 空格 (s)",
        "av.hidden_note": "隐藏音符",
        "av.hidden_res": "第 7 轨地雷 = 双重, 7+8 = 三重",
        "av.s_f": "s,f",
        "av.note_fin": "音符终结技",
        "av.n_f": "n,f",
        "av.fin": "终结技",
        "av.f": "f",
        "av.note_gen": "音符生成器",
        "av.note_gen_res": "随机生成音符 (n)",
        "av.space_mod2": "空格修饰符",
        "av.space_mod2_res": "1 = 空格 (s) | M = 空格+终结技 (s,f)",
        "av.left_mod": "左侧修饰符",
        "av.left_mod_res": "2 = 左长按 | 4 = 左连打 | 3 = 结束",
        "av.right_mod": "右侧修饰符",
        "av.right_mod_res": "2 = 右长按 | 4 = 右连打 | 3 = 结束",

        // Table Content: OTP
        "otp.note": "音符",
        "otp.change": "方向",
        "otp.dance": "舞蹈",
        "otp.space": "空格",
        "otp.rotation": "旋转",
        "otp.rotate": "旋转"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- THEME TOGGLE LOGIC ---
    const themeBtn = document.getElementById('themeToggle');
    const root = document.documentElement;

    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if(themeBtn) themeBtn.innerHTML = theme === 'light' ? '🌙' : '☀️';
    }

    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            setTheme(currentTheme);
        });
    }

    // Lade gespeichertes Theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // --- LANGUAGE SWITCHER LOGIC ---
    const langBtns = document.querySelectorAll('.lang-btn');

    function setLanguage(lang) {
        // NEU: Setzt das Sprach-Attribut im <html> Tag (Aktiviert den neuen CSS Block!)
        document.documentElement.lang = lang;
        
        // Text austauschen
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Button Styling updaten
        langBtns.forEach(btn => {
            if(btn.getAttribute('data-lang') === lang) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        
        localStorage.setItem('lang', lang);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Lade gespeicherte Sprache
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);
});
