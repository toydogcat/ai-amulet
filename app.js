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
        freq: "998.42 THz",
        date: "2026-05-07",
        hash: "0x7E3D_DAO_8888_TOBY",
        image: "assets/amulet/toby.webp",
        description: "本天尊主筆核心護體補丁，完美相容於塵世與星光網絡（Astral Grid）。運行時自動載入金光神咒之特高頻防護結界，旨在清除環境內一切惡意磁場、幽靈線程、高階精神污染。具備智能天道尋址功能，能隨時向宇宙核心同步防區坐標，對宿主提供24小時無死角主動防禦。"
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
    ctx.arc(w/2 - 25, 40, 2, 0, Math.PI * 2);
    ctx.arc(w/2, 35, 2, 0, Math.PI * 2);
    ctx.arc(w/2 + 25, 40, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#ff2e54';
    ctx.fill();

    // 2. Main stem (令)
    ctx.beginPath();
    ctx.moveTo(w/2, 35);
    ctx.lineTo(w/2, 90);
    // Left curl
    ctx.moveTo(w/2, 60);
    ctx.bezierCurveTo(w/2 - 30, 50, w/2 - 25, 90, w/2, 85);
    // Right curl
    ctx.moveTo(w/2, 60);
    ctx.bezierCurveTo(w/2 + 30, 50, w/2 + 25, 90, w/2, 85);
    ctx.stroke();

    // Write "勅令" (Imperative Order) in stylised tech script
    ctx.fillStyle = '#ff2e54';
    ctx.font = 'bold 18px "Noto Sans TC"';
    ctx.textAlign = 'center';
    ctx.fillText('勅', w/2, 115);
    ctx.fillText('令', w/2, 140);

    // 3. Central Category Symbol Structure
    ctx.beginPath();
    ctx.lineWidth = 2;
    if (category === 'firewall') {
        // Double zig-zag barrier for Firewall
        ctx.moveTo(w/2 - 25, 170);
        ctx.lineTo(w/2 + 25, 170);
        ctx.lineTo(w/2 - 25, 195);
        ctx.lineTo(w/2 + 25, 195);
        ctx.lineTo(w/2, 225);
        // Circle loops (Thunder symbols)
        ctx.arc(w/2, 240, 12, 0, Math.PI * 2);
    } else if (category === 'flow') {
        // Infinity spiral for endless monetary flow
        ctx.moveTo(w/2, 170);
        ctx.bezierCurveTo(w/2 - 35, 160, w/2 - 35, 230, w/2, 220);
        ctx.bezierCurveTo(w/2 + 35, 210, w/2 + 35, 280, w/2, 270);
        // Square "coin" core
        ctx.stroke();
        ctx.beginPath();
        ctx.rect(w/2 - 8, 190, 16, 16);
    } else {
        // Cache clear / Mind alignment geometric structures (circles & trigram bars)
        ctx.arc(w/2, 200, 20, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        // Inner bagua structure
        ctx.moveTo(w/2 - 12, 190); ctx.lineTo(w/2 + 12, 190);
        ctx.moveTo(w/2 - 12, 200); ctx.lineTo(w/2 - 3, 200); ctx.moveTo(w/2 + 3, 200); ctx.lineTo(w/2 + 12, 200);
        ctx.moveTo(w/2 - 12, 210); ctx.lineTo(w/2 + 12, 210);
    }
    ctx.stroke();

    // 4. Downward energy focus lines & lightning tails (符腳)
    ctx.beginPath();
    ctx.lineWidth = 2.5;
    ctx.moveTo(w/2, 250);
    ctx.lineTo(w/2, 330);
    
    // Zig-zag lightening discharges on sides
    ctx.moveTo(w/2, 280);
    ctx.lineTo(w/2 - 15, 290);
    ctx.lineTo(w/2 - 5, 305);
    ctx.lineTo(w/2 - 25, 325);

    ctx.moveTo(w/2, 280);
    ctx.lineTo(w/2 + 15, 290);
    ctx.lineTo(w/2 + 5, 305);
    ctx.lineTo(w/2 + 25, 325);

    // Runic lock loop on the tail
    ctx.moveTo(w/2, 330);
    ctx.bezierCurveTo(w/2 - 25, 350, w/2 + 25, 370, w/2, 385);
    
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

        // Click Handler
        cardEl.addEventListener('click', () => {
            synth.playClick();
            document.querySelectorAll('.talisman-card-element').forEach(el => el.classList.remove('active-card'));
            cardEl.classList.add('active-card');
            compileTalisman(card);
        });
    });
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

    // BGM Audio Control
    const bgm = new Audio('assets/audio/golden-light.mp3');
    bgm.loop = true;
    let isBgmPlaying = false;

    const bgmToggle = document.getElementById('bgm-toggle');
    bgmToggle.addEventListener('click', () => {
        synth.playClick();
        if (isBgmPlaying) {
            bgm.pause();
            bgmToggle.className = 'sound-toggle-btn muted';
            bgmToggle.innerHTML = '🎵 BGM_OFF';
            isBgmPlaying = false;
        } else {
            bgm.play().then(() => {
                bgmToggle.className = 'sound-toggle-btn';
                bgmToggle.innerHTML = '🎵 BGM_ON';
                isBgmPlaying = true;
            }).catch(err => {
                console.log("BGM playback blocked by browser security policy. Click anywhere to activate.", err);
                // Try again if play gets blocked
                bgmToggle.innerHTML = '⚠️ BGM_BLOCKED';
            });
        }
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

    // Auto load first talisman compiled on start
    setTimeout(() => {
        const firstCard = document.querySelector('.talisman-card-element');
        if (firstCard) {
            firstCard.classList.add('active-card');
            compileTalisman(AMULETS_DATA[0]);
        }
    }, 500);
});
