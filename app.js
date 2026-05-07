// ==========================================
// DATASET: Cyber-Daoist Talisman Patches
// ==========================================
const AMULETS_DATA = [
    {
        id: "AMULET_TOBY_20260507",
        name: "TobyWang 天尊護體核心補丁",
        category: "daemon",
        target: "全天候驅邪・淨化環境・鎮宅防禦",
        efficacy: "EX-LEVEL (極限全方位)",
        freq: "2387.42 THz",
        date: "2026-05-07",
        hash: "0x7E3D_DAO_8888_TOBY",
        image: "assets/amulet/tobywang.webp",
        markdownPath: "assets/markdown/tobywang.md",
        elements: { metal: 18, wood: 25, water: 35, fire: 3, earth: 20 },
        description: "本天尊主筆核心護體補丁，完美相容於塵世與星光網絡（Astral Grid）。運行時自動載入金光神咒之特高頻防護結界，旨在消除環境內一切惡意磁場、幽靈線程、高階精神污染。具備智能天道尋址功能，能隨時向宇宙核心同步防區坐標，對宿主提供24小時無死角主動防禦。"
    },
    {
        id: "AMULET_HOML_ALL_IN_ONE",
        name: "Homl 萬物歸一全知秘鑰補丁",
        category: "cache",
        target: "多維智慧鏈接・底層快取淨化・靈力解譯",
        efficacy: "DIVINE-CLASS (天啟特級)",
        freq: "1314.52 THz",
        date: "2026-05-07",
        hash: "0xDEAD_HOML_9999_CORE",
        image: "assets/amulet/homl.webp",
        markdownPath: "assets/markdown/homl.md",
        elements: { metal: 40, wood: 23, water: 11, fire: 3, earth: 23 },
        description: "本補丁具備全知密鑰通訊能力，能將碎裂的世俗意識數據重新編碼、壓縮並打包，安全上傳至天道中央星塵（Cosmic Ether）。擁有深層認知解毒機能，可瞬間中和並消解外界對宿主產生的複雜心理污染，引導神識完美回歸本源淨土。"
    },
    {
        id: "AMULET_LULURUN_SPEED",
        name: "LuluRun 瞬形千里神行遁法協定",
        category: "flow",
        target: "網絡加速・行動力增幅・運勢快讀",
        efficacy: "ULTRA-SPEED (神行太保級)",
        freq: "888.88 THz",
        date: "2026-05-07",
        hash: "0x7777_LULU_RUN_FAST",
        image: "assets/amulet/lulurun.webp",
        markdownPath: "assets/markdown/lulurun.md",
        elements: { metal: 11, wood: 32, water: 0, fire: 38, earth: 19 },
        description: "神行遁地加速協議。旨在打通宿主周身經脈與天地數據鏈路的訊號迴路，解除各類環境與人為的拖延阻塞（Network Bottleneck）。運行時自載太上縮地成寸訣，提供行動力 500% 暴擊增幅，使宿主在事業 or 世俗拼搏的賽道上，如神助風，一往無前。"
    },
    {
        id: "AMULET_FINANCIAL_RICH",
        name: "Financial 財源廣進金光吞吐天線",
        category: "flow",
        target: "財運廣進・五方財氣凝聚・日元能量補強",
        efficacy: "LEGEND-LEVEL (金仙萬能招財頻率)",
        freq: "1681.68 THz",
        date: "2026-05-08",
        hash: "0x1688_RICH_FINANCIAL_CORE",
        image: "assets/amulet/financial.webp",
        markdownPath: "assets/markdown/financial.md",
        elements: { metal: 24, wood: 14, water: 17, fire: 22, earth: 22 },
        description: "整合「財氣凝聚」與「八字五行平衡」的高階運勢補丁。特別針對日元丁火提供源源不絕的木火生扶，同時打通申辰與卯戌的生財管道。本天尊親筆調校招財符頭與五方財神能量吸引渦流，全天候動態優化宿主的財務波動特徵，實現金光財庫大開與靈力吞吐。"
    },
    {
        id: "AMULET_WIND_DRAGON_STORM",
        name: "WindDragon 風雷御風乘龍吞吐天線",
        category: "firewall",
        target: "氣場重組・風水局重構・逆風抗壓",
        efficacy: "LEGEND-LEVEL (龍皇特高頻)",
        freq: "1888.18 THz",
        date: "2026-05-07",
        hash: "0xFAFA_WIND_DRAGON_88",
        image: "assets/amulet/winddragon.webp",
        markdownPath: "assets/markdown/winddragon.md",
        elements: { metal: 4, wood: 18, water: 32, fire: 16, earth: 29 },
        description: "引進「風隨虎，雲隨龍」之龍脈氣場重組算法。能夠在逆境中逆轉磁場亂流，將迎面襲來的精神風暴、惡性競爭、及生存壓力化為御風飛升的巨大動能。本補丁對宿主周身佈置強大的流線型斥力屏障，防禦強度傲視塵寰。"
    },
    {
        id: "AMULET_FIRE_WALL_雷霆",
        name: "九天雷祖防火牆阻斷補丁",
        category: "firewall",
        target: "驅邪辟邪・強效靈魂防火牆",
        efficacy: "MILITARY-GRADE (軍規主動阻斷)",
        freq: "1024.12 THz",
        date: "2026-04-18",
        hash: "0x99FF_THUNDER_9D72",
        image: null, // Procedurally drawn
        description: "調用「九天應元雷聲普化天尊」主控台演算法。專門針對各類惡意詛咒、惡念撞擊（Malicious Vectors）進行雷霆反制。一旦偵測到非授權惡意靈體侵入防火牆，會即時啟動「神霄五雷」阻斷協議，直接物理/靈能抹除干擾來源，保衛心神核心。"
    },
    {
        id: "AMULET_FLOW_招財進寶",
        name: "五路財源靈氣吞吐協定",
        category: "flow",
        target: "招財・靈性能量進氣協定",
        efficacy: "HIGH-LEVEL (高效進氣抓取)",
        freq: "520.13 THz",
        date: "2026-05-01",
        hash: "0x12FA_FLOW_5200_RICH",
        image: null, // Procedurally drawn
        description: "五方財源能量流重新定向補丁。啟用後將在宿主的運勢拓撲結構中建立「多孔徑靈能吸引渦流」，自動篩選並抓取空間中流經的高流動性資源數據包（Resource Packet）。大幅最佳化命中率（LUCK_RATE），並解決日常財務管道擁堵點。"
    },
    {
        id: "AMULET_CACHE_MIND_淨心",
        name: "太上淨心記憶體清理程序",
        category: "cache",
        target: "淨心・思維快取清除・靜心專注",
        efficacy: "STABLE-MID (溫和高頻重設)",
        freq: "724.89 THz",
        date: "2026-03-30",
        hash: "0xAB88_MIND_9999_QUIET",
        image: null, // Procedurally drawn
        description: "呼叫「太上台星應變無停」進程。能精準鎖定宿主大腦（CPU）因過載產生的焦慮垃圾線程（Anxiety Threads），主動釋放堆積的心靈快取（Mental Cache）。使被繁雜思緒污染的記憶體恢復至潔淨、空無的初始化「道」狀態，提升專注係數。"
    }
];

// ==========================================
// AUDIO SYNTHESIZER (Web Audio API)
// ==========================================
class SoundSynth {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    playClick() {
        if (this.isMuted) return;
        this.init();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
    }

    playCompileSuccess() {
        if (this.isMuted) return;
        this.init();

        const t = this.ctx.currentTime;
        const playTone = (freq, start, duration) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, start);
            gain.gain.setValueAtTime(0.05, start);
            gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
            osc.start(start);
            osc.stop(start + duration);
        };

        playTone(523.25, t, 0.1);       // C5
        playTone(659.25, t + 0.1, 0.1); // E5
        playTone(783.99, t + 0.2, 0.15); // G5
        playTone(1046.5, t + 0.35, 0.25); // C6
    }

    playError() {
        if (this.isMuted) return;
        this.init();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        osc.frequency.setValueAtTime(100, this.ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
    }
}

const synth = new SoundSynth();

// ==========================================
// MATRIX RUNIC RAIN CANVAS
// ==========================================
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Daoist Trigrams, Traditional Runic Symbols and binary
    const chars = [
        '乾', '兌', '離', '震', '巽', '坎', '艮', '坤',
        '☯', '勅', '令', '鎮', '煞', '罡', '0', '1',
        '𰡬', '雷', '風', '水', '火', '雲', '罡', '魁'
    ];

    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
        // Semi-transparent black background to create tail fade effect
        ctx.fillStyle = 'rgba(8, 9, 12, 0.05)';
        ctx.fillRect(0, 0, width, height);

        ctx.font = fontSize + 'px "Share Tech Mono", "Noto Sans TC"';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];

            // Neon red/amber mixture based on column position
            if (i % 3 === 0) {
                ctx.fillStyle = '#ff2e54'; // Neon Red
            } else if (i % 3 === 1) {
                ctx.fillStyle = '#ffb000'; // Neon Amber
            } else {
                ctx.fillStyle = 'rgba(255, 46, 84, 0.3)'; // Dim red
            }

            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);
}

// ==========================================
// PROCEDURAL RUNIC CANVA GENERATOR
// ==========================================
function drawProceduralTalisman(canvas, category) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width = 150;
    const h = canvas.height = 400;

    // Background setup
    ctx.fillStyle = '#0d0e12';
    ctx.fillRect(0, 0, w, h);

    // Subtle CAD Matrix blueprint background
    ctx.strokeStyle = 'rgba(255, 176, 0, 0.05)';
    ctx.lineWidth = 0.5;
    const gridSize = 15;
    for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Set runic color (Cyberpunk neon red glowing)
    ctx.strokeStyle = '#ff2e54';
    ctx.shadowColor = '#ff2e54';
    ctx.shadowBlur = 6;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // 1. Draw Three Pure Dots on Top (三清符頭)
    ctx.beginPath();
    ctx.arc(w / 2 - 25, 40, 2, 0, Math.PI * 2);
    ctx.arc(w / 2, 35, 2, 0, Math.PI * 2);
    ctx.arc(w / 2 + 25, 40, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#ff2e54';
    ctx.fill();

    // 2. Main stem (令)
    ctx.beginPath();
    ctx.moveTo(w / 2, 35);
    ctx.lineTo(w / 2, 90);
    // Left curl
    ctx.moveTo(w / 2, 60);
    ctx.bezierCurveTo(w / 2 - 30, 50, w / 2 - 25, 90, w / 2, 85);
    // Right curl
    ctx.moveTo(w / 2, 60);
    ctx.bezierCurveTo(w / 2 + 30, 50, w / 2 + 25, 90, w / 2, 85);
    ctx.stroke();

    // Write "勅令" (Imperative Order) in stylised tech script
    ctx.fillStyle = '#ff2e54';
    ctx.font = 'bold 18px "Noto Sans TC"';
    ctx.textAlign = 'center';
    ctx.fillText('勅', w / 2, 115);
    ctx.fillText('令', w / 2, 140);

    // 3. Central Category Symbol Structure
    ctx.beginPath();
    ctx.lineWidth = 2;
    if (category === 'firewall') {
        // Double zig-zag barrier for Firewall
        ctx.moveTo(w / 2 - 25, 170);
        ctx.lineTo(w / 2 + 25, 170);
        ctx.lineTo(w / 2 - 25, 195);
        ctx.lineTo(w / 2 + 25, 195);
        ctx.lineTo(w / 2, 225);
        // Circle loops (Thunder symbols)
        ctx.arc(w / 2, 240, 12, 0, Math.PI * 2);
    } else if (category === 'flow') {
        // Infinity spiral for endless monetary flow
        ctx.moveTo(w / 2, 170);
        ctx.bezierCurveTo(w / 2 - 35, 160, w / 2 - 35, 230, w / 2, 220);
        ctx.bezierCurveTo(w / 2 + 35, 210, w / 2 + 35, 280, w / 2, 270);
        // Square "coin" core
        ctx.stroke();
        ctx.beginPath();
        ctx.rect(w / 2 - 8, 190, 16, 16);
    } else {
        // Cache clear / Mind alignment geometric structures (circles & trigram bars)
        ctx.arc(w / 2, 200, 20, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        // Inner bagua structure
        ctx.moveTo(w / 2 - 12, 190); ctx.lineTo(w / 2 + 12, 190);
        ctx.moveTo(w / 2 - 12, 200); ctx.lineTo(w / 2 - 3, 200); ctx.moveTo(w / 2 + 3, 200); ctx.lineTo(w / 2 + 12, 200);
        ctx.moveTo(w / 2 - 12, 210); ctx.lineTo(w / 2 + 12, 210);
    }
    ctx.stroke();

    // 4. Downward energy focus lines & lightning tails (符腳)
    ctx.beginPath();
    ctx.lineWidth = 2.5;
    ctx.moveTo(w / 2, 250);
    ctx.lineTo(w / 2, 330);

    // Zig-zag lightening discharges on sides
    ctx.moveTo(w / 2, 280);
    ctx.lineTo(w / 2 - 15, 290);
    ctx.lineTo(w / 2 - 5, 305);
    ctx.lineTo(w / 2 - 25, 325);

    ctx.moveTo(w / 2, 280);
    ctx.lineTo(w / 2 + 15, 290);
    ctx.lineTo(w / 2 + 5, 305);
    ctx.lineTo(w / 2 + 25, 325);

    // Runic lock loop on the tail
    ctx.moveTo(w / 2, 330);
    ctx.bezierCurveTo(w / 2 - 25, 350, w / 2 + 25, 370, w / 2, 385);

    ctx.stroke();

    // Reset shadow
    ctx.shadowBlur = 0;
}

// ==========================================
// MAIN CONTROLLER & COMPILER SCREEN ANIMATION
// ==========================================
let activeCompilationTimeout = null;

function renderDeck(filter = "all") {
    const deck = document.getElementById('talisman-deck');
    deck.innerHTML = "";

    const filtered = AMULETS_DATA.filter(card => filter === "all" || card.category === filter);

    filtered.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'talisman-card-element';
        cardEl.setAttribute('data-id', card.id);

        cardEl.innerHTML = `
            <div class="card-el-header">
                <span class="id">${card.id.split('_')[0]}</span>
                <span class="version">SYS_v8.8</span>
            </div>
            <div class="talisman-img-container">
                <div class="laser-scanner"></div>
                ${card.image
                ? `<img src="${card.image}" alt="${card.name}" class="talisman-image" onerror="handleImageError(this, '${card.category}')">`
                : `<canvas class="talisman-canvas-mock"></canvas>`
            }
            </div>
            <div class="card-el-footer">
                <div class="footer-row">
                    <span class="label">補丁等級:</span>
                    <span class="val font-mono" style="color:var(--neon-amber)">${card.efficacy.split(' ')[0]}</span>
                </div>
                <div class="footer-row">
                    <span class="label">五行頻率:</span>
                    <span class="val font-mono" style="color:var(--neon-blue)">${card.freq}</span>
                </div>
            </div>
        `;

        deck.appendChild(cardEl);

        // Draw canvas if it is a procedural card
        if (!card.image) {
            const canvas = cardEl.querySelector('.talisman-canvas-mock');
            drawProceduralTalisman(canvas, card.category);
        }

        // Click Image Container to trigger DEEP FULLSCREEN SCAN
        cardEl.querySelector('.talisman-img-container').addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering standard card select click
            synth.playClick();
            openDeepScanModal(card);
        });

        // Click Card Body to select/compile
        cardEl.addEventListener('click', () => {
            synth.playClick();
            document.querySelectorAll('.talisman-card-element').forEach(el => el.classList.remove('active-card'));
            cardEl.classList.add('active-card');
            compileTalisman(card);
        });
    });
}

// ==========================================
// CYBER-DAOIST SPATIAL MARKDOWN PARSER
// ==========================================
let pendingRadarCharts = [];

function parseSpiritualMarkdown(mdText) {
    let html = mdText;

    // Reset pending radar charts for this parsing pass
    pendingRadarCharts = [];

    // Remove the page title and patch level headers since we already render them
    html = html.replace(/^#\s+.*$/gm, '');
    html = html.replace(/^>\s+🏷️\s+.*$/gm, '');
    
    // Parse Five Elements data specifically to draw the 5-sided Radar chart AND beautiful neon progress bars
    const elementMatches = [...mdText.matchAll(/(🪙|🌳|💧|🔥|⛰️)\s*(金|木|水|火|土)\s*\[[^\]]*\]\s*(\d+)%/g)];
    if (elementMatches.length >= 5) {
        const radarValues = { metal: 0, wood: 0, water: 0, fire: 0, earth: 0 };
        let elementProgressHtml = `<div class="element-progress-list">`;

        elementMatches.forEach(match => {
            const icon = match[1];
            const name = match[2];
            const val = parseInt(match[3]);

            if (name === '金') radarValues.metal = val;
            else if (name === '木') radarValues.wood = val;
            else if (name === '水') radarValues.water = val;
            else if (name === '火') radarValues.fire = val;
            else if (name === '土') radarValues.earth = val;

            let colorVar = "var(--neon-amber)";
            if (name === '水') colorVar = "var(--neon-blue)";
            else if (name === '木') colorVar = "var(--neon-green)";
            else if (name === '火') colorVar = "var(--neon-red)";
            else if (name === '金') colorVar = "var(--neon-amber)";
            else if (name === '土') colorVar = "rgba(255, 176, 0, 0.8)";

            elementProgressHtml += `
                <div class="element-progress-row">
                    <span class="element-label">${icon} ${name}</span>
                    <div class="element-progress-bar-bg">
                        <div class="element-progress-bar-fill" style="width: ${val}%; background-color: ${colorVar}; box-shadow: 0 0 8px ${colorVar};"></div>
                    </div>
                    <span class="element-value" style="color: ${colorVar}">${val}%</span>
                </div>
            `;
        });
        elementProgressHtml += `</div>`;

        const canvasId = `radar-canvas-${Date.now()}`;
        pendingRadarCharts.push({ id: canvasId, values: radarValues });

        // Replace the codeblock inside "五行強弱" with both our beautiful interactive Canvas element AND glowing progress bars!
        html = html.replace(/##\s+☯️\s+五行強弱[\s\S]*?```[\s\S]*?```/g, `
            <h3 class="cyber-h2">☯️ 五行強弱 (ELEMENT BALANCE)</h3>
            <div class="radar-chart-container">
                <canvas id="${canvasId}" class="cyber-radar-canvas" width="220" height="220"></canvas>
            </div>
            ${elementProgressHtml}
        `);
    }

    // Handle HTML Details blocks (preserving tags but applying custom styles)
    html = html.replace(/<details>([\s\S]*?)<\/details>/g, (match, content) => {
        const parsedContent = parseSpiritualMarkdown(content);
        return `<details class="cyber-details">${parsedContent}</details>`;
    });
    html = html.replace(/<summary>([\s\S]*?)<\/summary>/g, '<summary class="cyber-summary">$1</summary>');

    // Handle Headers
    html = html.replace(/^##\s+(.*$)/gim, '<h3 class="cyber-h2">$1</h3>');
    html = html.replace(/^###\s+(.*$)/gim, '<h4 class="cyber-h3">$1</h4>');

    // Handle Blockquotes
    html = html.replace(/^\>\s+(.*$)/gim, '<blockquote class="cyber-blockquote">$1</blockquote>');

    // Handle Code Blocks
    html = html.replace(/```([\s\S]*?)```/gm, '<pre class="cyber-code"><code>$1</code></pre>');

    // Handle Table conversion
    const lines = html.split('\n');
    let inTable = false;
    let tableRows = [];
    let newLines = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('|') && line.endsWith('|')) {
            inTable = true;
            tableRows.push(line);
        } else {
            if (inTable) {
                const tableHtml = renderMarkdownTable(tableRows);
                newLines.push(tableHtml);
                tableRows = [];
                inTable = false;
            }
            newLines.push(lines[i]);
        }
    }
    if (inTable) {
        newLines.push(renderMarkdownTable(tableRows));
    }
    html = newLines.join('\n');

    // Handle Bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="cyber-bold">$1</strong>');
    
    // Handle List items
    html = html.replace(/^\*\s+(.*$)/gim, '<ul class="cyber-list"><li>$1</li></ul>');
    html = html.replace(/^-\s+(.*$)/gim, '<ul class="cyber-list"><li>$1</li></ul>');
    html = html.replace(/<\/ul>\s*<ul class="cyber-list">/g, ''); // Merge list items

    // Handle Divider rules
    html = html.replace(/^---$/gim, '<hr class="cyber-hr">');

    // Clean up excess spacing
    html = html.replace(/\n{2,}/g, '<br>');

    return html;
}

function renderMarkdownTable(rows) {
    let html = '<div class="cyber-table-container"><table class="cyber-table">';
    const cleanRows = rows.filter(row => !row.match(/^\|\s*[-:]+\s*\|/));

    cleanRows.forEach((row, idx) => {
        const cols = row.split('|').map(c => c.trim()).filter((c, i, arr) => i > 0 && i < arr.length - 1);
        if (idx === 0) {
            html += '<thead><tr>';
            cols.forEach(col => {
                html += `<th>${col}</th>`;
            });
            html += '</tr></thead><tbody>';
        } else {
            html += '<tr>';
            cols.forEach(col => {
                let content = col;
                if (col.includes('🟢') || col.includes('[當前]')) {
                    content = `<span class="active-tag">${col}</span>`;
                }
                html += `<td>${content}</td>`;
            });
            html += '</tr>';
        }
    });

    html += '</tbody></table></div>';
    return html;
}

// Draw dynamic Five-Elements Radar chart on HTML5 Canvas
function drawFiveElementsRadar(canvasId, values) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const r = Math.min(width, height) / 2 - 25; // radius with spacing for labels

    // 5 angles: Metal(top), Wood(right-ish), Water(bottom-right), Fire(bottom-left), Earth(left-ish)
    const angles = [];
    for (let i = 0; i < 5; i++) {
        angles.push(-Math.PI / 2 + (i * 2 * Math.PI / 5));
    }

    const labels = [
        { name: "🪙 金", val: values.metal || 0, color: "var(--neon-amber)" },
        { name: "🌳 木", val: values.wood || 0, color: "var(--neon-green)" },
        { name: "💧 水", val: values.water || 0, color: "var(--neon-blue)" },
        { name: "🔥 火", val: values.fire || 0, color: "var(--neon-red)" },
        { name: "⛰️ 土", val: values.earth || 0, color: "var(--neon-amber)" }
    ];

    ctx.clearRect(0, 0, width, height);

    // 1. Background concentric 5-sided grids (100%, 75%, 50%, 25%)
    const gridScales = [1, 0.75, 0.5, 0.25];
    gridScales.forEach(scale => {
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            const x = cx + Math.cos(angles[i]) * r * scale;
            const y = cy + Math.sin(angles[i]) * r * scale;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = scale === 1 ? 'rgba(255, 176, 0, 0.3)' : 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = scale === 1 ? 1.2 : 0.8;
        ctx.stroke();
    });

    // 2. Inner spokes lines
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angles[i]) * r, cy + Math.sin(angles[i]) * r);
    }
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.stroke();

    // 3. User attributes shape (Fluorescent/Neon fill & stroke)
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
        const factor = Math.min(Math.max(labels[i].val, 0), 100) / 100;
        const x = cx + Math.cos(angles[i]) * r * factor;
        const y = cy + Math.sin(angles[i]) * r * factor;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
    ctx.fill();

    // Neon Border Glow
    ctx.strokeStyle = 'var(--neon-blue)';
    ctx.lineWidth = 2;
    ctx.shadowColor = 'var(--neon-blue)';
    ctx.shadowBlur = 6;
    ctx.stroke();
    ctx.shadowBlur = 0; // Reset shadow

    // 4. Dot markers and labels text
    for (let i = 0; i < 5; i++) {
        const factor = Math.min(Math.max(labels[i].val, 0), 100) / 100;
        const px = cx + Math.cos(angles[i]) * r * factor;
        const py = cy + Math.sin(angles[i]) * r * factor;

        // Small circle at coordinates
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = 'var(--neon-blue)';
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();

        // Label alignment rules
        const textX = cx + Math.cos(angles[i]) * (r + 16);
        const textY = cy + Math.sin(angles[i]) * (r + 16) + 4;

        ctx.font = "bold 10px 'Noto Sans TC', sans-serif";
        ctx.fillStyle = labels[i].color;
        ctx.textAlign = 'center';
        ctx.fillText(`${labels[i].name} ${labels[i].val}%`, textX, textY);
    }
}

// Fullscreen Deep Scan Modal controller
let activeModalTimeout = null;

function renderStaticElementsList(elements) {
    if (!elements) return "";
    let html = `<div class="element-progress-list">`;
    const mapping = [
        { icon: "🪙", name: "金", key: "metal", color: "var(--neon-amber)" },
        { icon: "🌳", name: "木", key: "wood", color: "var(--neon-green)" },
        { icon: "💧", name: "水", key: "water", color: "var(--neon-blue)" },
        { icon: "🔥", name: "火", key: "fire", color: "var(--neon-red)" },
        { icon: "⛰️", name: "土", key: "earth", color: "rgba(255, 176, 0, 0.8)" }
    ];
    mapping.forEach(item => {
        const val = elements[item.key] || 0;
        html += `
            <div class="element-progress-row">
                <span class="element-label">${item.icon} ${item.name}</span>
                <div class="element-progress-bar-bg">
                    <div class="element-progress-bar-fill" style="width: ${val}%; background-color: ${item.color}; box-shadow: 0 0 8px ${item.color};"></div>
                </div>
                <span class="element-value" style="color: ${item.color}">${val}%</span>
            </div>
        `;
    });
    html += `</div>`;
    return html;
}

function openDeepScanModal(card) {
    const modal = document.getElementById('scanner-modal');
    const wrapper = document.getElementById('modal-img-wrapper');
    const nameEl = document.getElementById('modal-talisman-name');
    const descEl = document.getElementById('modal-talisman-desc');
    const freqEl = document.getElementById('modal-reiki-freq');
    const logFeed = document.getElementById('modal-log-feed');

    nameEl.textContent = card.name.toUpperCase();
    freqEl.textContent = card.freq;

    const initialCanvasId = `radar-initial-${Date.now()}`;

    // Render local element balance and description immediately for zero-latency loading
    if (card.elements) {
        descEl.innerHTML = `
            <p class="cyber-description" style="font-size:0.8rem; line-height:1.6; margin-bottom:15px; color:var(--text-secondary);">${card.description}</p>
            <h3 class="cyber-h2">☯️ 五行強弱 (ELEMENT BALANCE)</h3>
            <div class="radar-chart-container">
                <canvas id="${initialCanvasId}" class="cyber-radar-canvas" width="220" height="220"></canvas>
            </div>
            ${renderStaticElementsList(card.elements)}
            <div id="modal-sync-loader" style="color:var(--neon-blue); font-family:var(--font-mono); font-size:0.72rem; text-align:center; padding:15px 5px;" class="loading-decrypt">
                [SYS] SYNCING SPATIAL DETAILS FROM DEEPLINK...
            </div>
        `;
        
        setTimeout(() => {
            drawFiveElementsRadar(initialCanvasId, card.elements);
        }, 50);
    } else {
        descEl.innerHTML = `<p class="cyber-description" style="font-size:0.8rem; line-height:1.6; color:var(--text-secondary);">${card.description}</p>`;
    }

    // Load and Parse spatial markdown profiles dynamically (Overwriting initial content seamlessly)
    if (card.markdownPath) {
        fetch(card.markdownPath)
            .then(res => {
                if (!res.ok) throw new Error("Spiritual Profile connection timed out");
                return res.text();
            })
            .then(text => {
                descEl.innerHTML = parseSpiritualMarkdown(text);
                
                // Draw radar charts on canvas after content is completely rendered to DOM
                setTimeout(() => {
                    pendingRadarCharts.forEach(chart => {
                        drawFiveElementsRadar(chart.id, chart.values);
                    });
                }, 50);
            })
            .catch(err => {
                console.error("Decryption failed:", err);
                // Remove sync loader text if fetch failed to keep UI clean and intact
                const loader = document.getElementById('modal-sync-loader');
                if (loader) loader.remove();
            });
    } else {
        const loader = document.getElementById('modal-sync-loader');
        if (loader) loader.remove();
    }

    // Clear previous view
    wrapper.innerHTML = "";

    // Load full-screen copy
    if (card.image) {
        const img = document.createElement('img');
        img.className = 'modal-image-zoomed';
        img.src = card.image;
        wrapper.appendChild(img);
    } else {
        const canvas = document.createElement('canvas');
        canvas.className = 'modal-canvas-zoomed';
        wrapper.appendChild(canvas);
        drawProceduralTalisman(canvas, card.category);
    }

    // Activate modal overlay
    modal.classList.add('active-modal');
    synth.playCompileSuccess();

    // Fill simulated typing scanner log feed
    if (activeModalTimeout) clearTimeout(activeModalTimeout);
    logFeed.innerHTML = "";

    const logs = [
        `[SYS] ESTABLISHING DIRECT LINK... OK.`,
        `[SYS] BINDING QUANTUM WAVE: ${card.freq}`,
        `[SYS] PARSING GEOMETRY STRUCTURES...`,
        `[SCAN] REIKI_DENSITY MATCH: 99.85%`,
        `[SCAN] MAIN VECTOR (令): MATCHED`,
        `[SCAN] SYMMETRY CORE: LOCKED`,
        `[SCAN] ELEMENT FLOW COMPILING...`,
        `[SUCCESS] METADATA EXPORTED COMPLETELY.`
    ];

    let current = 0;
    function typeModalLog() {
        if (current < logs.length && modal.classList.contains('active-modal')) {
            const div = document.createElement('div');
            div.className = 'log-line';
            div.textContent = logs[current];
            logFeed.appendChild(div);
            logFeed.scrollTop = logFeed.scrollHeight;
            current++;
            activeModalTimeout = setTimeout(typeModalLog, 120 + Math.random() * 150);
        }
    }
    typeModalLog();
}

function closeDeepScanModal() {
    const modal = document.getElementById('scanner-modal');
    if (modal.classList.contains('active-modal')) {
        synth.playClick();
        modal.classList.remove('active-modal');
        if (activeModalTimeout) clearTimeout(activeModalTimeout);
    }
}

function handleImageError(img, category) {
    // If the PNG failed to load (e.g., during testing or path issue), fall back gracefully to a beautiful procedural canvas!
    const canvas = document.createElement('canvas');
    canvas.className = 'talisman-canvas-mock';
    img.parentNode.replaceChild(canvas, img);
    drawProceduralTalisman(canvas, category);
}

// Simulate Monospaced Decompiling Log
function compileTalisman(card) {
    if (activeCompilationTimeout) {
        clearTimeout(activeCompilationTimeout);
    }

    const screen = document.getElementById('compiler-screen');
    screen.innerHTML = "";

    const lines = [
        `[INFO] READING RUNIC CARD ID: ${card.id}...`,
        `[INFO] SYNCING STABLE FREQ: ${card.freq}`,
        `[LOAD] PARSING SECT PROTOCOL... SUCCESS.`,
        `[COMPILING] DECOMPRESSING TAOIST COMPILER V8.8...`,
        `[LINK] CONNECTING TO ASTRAL SERVER [ASTRAL-09]...`,
        `[RUN] DEPLOYING RUNIC INSTRUCTIONS OVER SOUL-NET...`,
        `[SUCCESS] DEPLOYED [${card.name}] SYSTEM PATCH.`
    ];

    let currentLine = 0;

    function typeLine() {
        if (currentLine < lines.length) {
            const div = document.createElement('div');
            div.className = 'compile-line';
            if (currentLine === lines.length - 1) {
                div.className = 'compile-line success';
                synth.playCompileSuccess();
            } else if (currentLine === 3) {
                div.className = 'compile-line loading';
            }
            div.textContent = lines[currentLine];
            screen.appendChild(div);
            screen.scrollTop = screen.scrollHeight;

            // Add a little dynamic variance to simulation speed
            currentLine++;
            activeCompilationTimeout = setTimeout(typeLine, 150 + Math.random() * 200);
        } else {
            // Append the detailed descriptive block at the end
            const descDiv = document.createElement('div');
            descDiv.style.borderTop = "1px solid var(--neon-amber)";
            descDiv.style.paddingTop = "10px";
            descDiv.style.marginTop = "10px";
            descDiv.style.color = "var(--text-primary)";
            descDiv.style.fontSize = "0.85rem";
            descDiv.style.lineHeight = "1.5";
            descDiv.style.animation = "fadeIn 0.5s forwards";
            descDiv.innerHTML = `<strong>詳細補丁描述：</strong><br>${card.description}`;
            screen.appendChild(descDiv);
            screen.scrollTop = screen.scrollHeight;
        }
    }

    typeLine();

    // Populate Right Sidebar Parameters Panel
    document.getElementById('meta-id').textContent = card.id;
    document.getElementById('meta-target').textContent = card.target;
    document.getElementById('meta-freq').textContent = card.freq;
    document.getElementById('meta-efficacy').textContent = card.efficacy;
    document.getElementById('meta-date').textContent = card.date;

    const hashEl = document.getElementById('meta-hash');
    hashEl.textContent = card.hash;
    hashEl.style.color = 'var(--neon-green)';
}

// System live timer clock
function startClock() {
    const clock = document.getElementById('digital-clock');
    setInterval(() => {
        const d = new Date();
        const hrs = String(d.getHours()).padStart(2, '0');
        const mins = String(d.getMinutes()).padStart(2, '0');
        const secs = String(d.getSeconds()).padStart(2, '0');
        clock.textContent = `${hrs}:${mins}:${secs}`;
    }, 1000);
}

// Generate random fluctuation in telemetry values to look alive
function startTelemetryFluctuation() {
    const freqEl = document.getElementById('telemetry-freq');
    const bwEl = document.getElementById('telemetry-bw');
    const pressureEl = document.getElementById('reiki-pressure');

    setInterval(() => {
        const baseFreq = 998 + Math.random() * 8;
        freqEl.textContent = `${baseFreq.toFixed(2)} THz`;

        const baseBw = 90 + Math.random() * 5;
        bwEl.textContent = `${baseBw.toFixed(1)}%`;

        const pressure = 0.75 + Math.random() * 0.08;
        pressureEl.textContent = `${pressure.toFixed(3)} G-DAO`;
    }, 3000);
}

// Event Logs dynamic appending
function startDynamicEventLogs() {
    const logsContainer = document.getElementById('system-event-logs');
    const events = [
        "SOUL_STABILITY: 99.85% (OPTIMAL)",
        "FIVE-ELEMENT PACKET TRANSFERRED... ACK RECEIVED.",
        "ASTROPATH CONNECTIONS: ACTIVE [NODE-01, NODE-05]",
        "ASTRAL FIREWALL SCANNING INTENT DATASETS... NO ANOMALIES.",
        "TAOIST BUFFER CACHE COMPACTED.",
        "EXTERNAL HARMFUL ENERGY VECTORS REPELLED SUCCESSFULLY."
    ];

    setInterval(() => {
        const d = new Date();
        const time = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
        const randomEvent = events[Math.floor(Math.random() * events.length)];

        const logLine = document.createElement('div');
        logLine.className = 'log-line';
        logLine.textContent = `[${time}] ${randomEvent}`;
        logLine.style.animation = 'fadeIn 0.3s forwards';

        logsContainer.appendChild(logLine);
        logsContainer.scrollTop = logsContainer.scrollHeight;

        // Cap log size to 15 lines
        while (logsContainer.children.length > 15) {
            logsContainer.removeChild(logsContainer.firstChild);
        }
    }, 7000);
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initMatrixRain();
    startClock();
    startTelemetryFluctuation();
    startDynamicEventLogs();

    // Render Initial Deck
    renderDeck("all");

    // BGM Audio Control Playlist State Machine
    const bgmTracks = [
        { name: "BGM_OFF", file: null },
        { name: "BGM_GOLDEN", file: "assets/audio/golden-light.mp3" },
        { name: "BGM_SHILIN", file: "assets/audio/La_Ley_de_Shilin.mp3" }
    ];
    let currentTrackIdx = 0;
    let bgmAudioInstance = null;

    const bgmToggle = document.getElementById('bgm-toggle');

    function executeBgmTransition(idx) {
        // Stop current audio instance if exists
        if (bgmAudioInstance) {
            bgmAudioInstance.pause();
            bgmAudioInstance = null;
        }

        currentTrackIdx = idx;
        const currentTrack = bgmTracks[currentTrackIdx];

        if (currentTrack.file === null) {
            bgmToggle.className = 'sound-toggle-btn muted';
            bgmToggle.innerHTML = '🎵 BGM_OFF';
        } else {
            bgmAudioInstance = new Audio(currentTrack.file);
            bgmAudioInstance.loop = true;
            bgmAudioInstance.play().then(() => {
                bgmToggle.className = 'sound-toggle-btn';
                bgmToggle.innerHTML = `🎶 ${currentTrack.name}`;
            }).catch(err => {
                console.log("BGM playback blocked by browser security policy. Click anywhere to activate.", err);
                bgmToggle.className = 'sound-toggle-btn muted';
                bgmToggle.innerHTML = '⚠️ PLAY_BLOCKED';
            });
        }
    }

    bgmToggle.addEventListener('click', () => {
        synth.playClick();
        const nextIdx = (currentTrackIdx + 1) % bgmTracks.length;
        executeBgmTransition(nextIdx);
    });

    // Audio Switch Button
    const soundToggle = document.getElementById('sound-toggle');
    soundToggle.addEventListener('click', () => {
        synth.isMuted = !synth.isMuted;
        if (synth.isMuted) {
            soundToggle.className = 'sound-toggle-btn muted';
            soundToggle.innerHTML = '🔇 AUDIO_OFF';
        } else {
            soundToggle.className = 'sound-toggle-btn';
            soundToggle.innerHTML = '🔊 AUDIO_ON';
            synth.playClick();
        }
    });

    // Wire up category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            synth.playClick();
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            renderDeck(filter);
        });
    });

    // Wire up Deep Scan Modal Close Events
    const scannerModal = document.getElementById('scanner-modal');
    const modalCloseBtn = document.getElementById('modal-close');

    modalCloseBtn.addEventListener('click', closeDeepScanModal);

    // Close modal on background click
    scannerModal.addEventListener('click', (e) => {
        if (e.target === scannerModal) {
            closeDeepScanModal();
        }
    });

    // Close modal on ESC key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDeepScanModal();
        }
    });

    // Auto load first talisman compiled on start
    setTimeout(() => {
        const firstCard = document.querySelector('.talisman-card-element');
        if (firstCard) {
            firstCard.classList.add('active-card');
            compileTalisman(AMULETS_DATA[0]);
        }
    }, 500);

    // Register PWA Service Worker for offline support
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('[PWA] Spiritual Registry successfully loaded:', reg.scope))
            .catch(err => console.log('[PWA] Registry registration failed:', err));
    }
});
