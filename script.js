/* =========================================================
   DATA — ganti / tambah sesuai kebutuhan
========================================================= */
const SKILLS = [
  { name:"Python", cat:"Bahasa Pemrograman", mono:"Py", color:"#2dd4c4" },
  { name:"TensorFlow", cat:"Deep Learning", mono:"TF", color:"#f97316" },
  { name:"PyTorch", cat:"Deep Learning", mono:"Pt", color:"#f87171" },
  { name:"Scikit-learn", cat:"Machine Learning", mono:"Sk", color:"#38bdf8" },
  { name:"Pandas & NumPy", cat:"Pengolahan Data", mono:"Pd", color:"#a78bfa" },
  { name:"OpenCV", cat:"Computer Vision", mono:"Cv", color:"#34d399" },
  { name:"LangChain", cat:"LLM Framework", mono:"Lc", color:"#facc15" },
  { name:"OpenAI API", cat:"Generative AI", mono:"Ai", color:"#8b5cf6" },
  { name:"SQL", cat:"Database", mono:"Sq", color:"#60a5fa" },
  { name:"Docker", cat:"Deployment", mono:"Dk", color:"#22d3ee" },
  { name:"Git & GitHub", cat:"Version Control", mono:"Gh", color:"#e5e7eb" },
  { name:"Jupyter / Colab", cat:"Eksperimen", mono:"Jp", color:"#fb923c" },
];

const PROJECTS = [
  { title:"Chatbot Layanan Pelanggan AI", desc:"Asisten virtual yang menjawab pertanyaan pelanggan otomatis dengan pemahaman konteks percakapan.", tags:["Python","LangChain","OpenAI API"] },
  { title:"Deteksi Objek Real-Time", desc:"Sistem deteksi objek dari kamera langsung untuk kebutuhan monitoring dan keamanan.", tags:["Python","OpenCV","YOLOv8"] },
  { title:"Sistem Rekomendasi Produk", desc:"Model rekomendasi berbasis perilaku pengguna untuk meningkatkan konversi belanja online.", tags:["Python","Scikit-learn","Pandas"] },
  { title:"Analisis Sentimen Media Sosial", desc:"Mengklasifikasikan opini publik dari ribuan komentar menjadi insight yang mudah dibaca.", tags:["Python","NLP","TensorFlow"] },
  { title:"Prediksi Penjualan dengan ML", desc:"Model prediktif untuk membantu perencanaan stok dan strategi penjualan.", tags:["Python","Regresi","Streamlit"] },
  { title:"Asisten AI Berbasis LLM", desc:"Chat assistant yang menjawab dari dokumen internal perusahaan secara akurat.", tags:["Python","LangChain","Vector DB"] },
];

const CONTACTS = [
  { name:"WhatsApp", handle:"+62 831-4020-9281", url:"https://wa.me/6283140209281", icon:"whatsapp" },
  { name:"Instagram", handle:"@calmessence__", url:"https://www.instagram.com/calmessence__/", icon:"instagram" },
  { name:"TikTok", handle:"@usrnotfound32", url:"https://www.tiktok.com/@usrnotfound32", icon:"tiktok" },
  { name:"Facebook", handle:"Muhammad Risky", url:"https://www.facebook.com/share/1DgK4XQaC2/?mibextid=wwXIfr", icon:"facebook" },
];

const ICONS = {
  whatsapp:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M4 20l1.4-4.2A8 8 0 1112 20a8 8 0 01-4.2-1.2L4 20z" stroke="currentColor" stroke-width="1.6"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.4" stroke="currentColor" stroke-width="1.6"/><circle cx="16.6" cy="7.4" r="1" fill="currentColor"/></svg>',
  tiktok:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M14 4v9.5a3.5 3.5 0 11-3-3.46" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M14 4c.4 2 2 3.4 4 3.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  facebook:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M14 21v-7h2.4l.4-3H14V9c0-.9.3-1.5 1.7-1.5H17V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V11H8v3h2.6v7h3.4z" stroke="currentColor" stroke-width="1.3" fill="currentColor"/></svg>',
};

/* =========================================================
   RENDER DINAMIS
========================================================= */
function renderSkills(){
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(s => `
    <div class="skill-card">
      <div class="skill-mono" style="background:${s.color}">${s.mono}</div>
      <div>
        <span class="skill-name">${s.name}</span>
        <span class="skill-cat">${s.cat}</span>
      </div>
    </div>`).join("");
}

function renderProjects(){
  const grid = document.getElementById("projectsGrid");
  const gradients = [
    "linear-gradient(135deg,#2dd4c4,#0d1120)",
    "linear-gradient(135deg,#8b5cf6,#0d1120)",
    "linear-gradient(135deg,#2dd4c4,#8b5cf6)",
  ];
  grid.innerHTML = PROJECTS.map((p,i) => `
    <div class="project-card">
      <div class="project-visual" style="background:${gradients[i % gradients.length]}"></div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tag-row">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </div>`).join("");
}

function renderContacts(){
  const grid = document.getElementById("contactGrid");
  grid.innerHTML = CONTACTS.map(c => `
    <a class="contact-card" href="${c.url}" target="_blank" rel="noopener">
      <div class="contact-ico">${ICONS[c.icon]}</div>
      <span>${c.name}</span>
      <small>${c.handle}</small>
    </a>`).join("");
}

/* =========================================================
   PRELOADER
========================================================= */
function startLoader(){
  const pctEl = document.getElementById("loaderPercent");
  const barEl = document.getElementById("loaderBarFill");
  const enterBtn = document.getElementById("enterBtn");
  let pct = 0;
  const timer = setInterval(() => {
    pct += Math.floor(Math.random()*9)+4;
    if (pct >= 100){
      pct = 100;
      clearInterval(timer);
      enterBtn.classList.add("show");
    }
    pctEl.textContent = pct;
    barEl.style.width = pct + "%";
  }, 110);

  enterBtn.addEventListener("click", () => {
    initAudio();
    playCinematicBoom();
    if (audioEnabled) setTimeout(startAmbient, 350);
    document.getElementById("loader").classList.add("hide");
  });
}

/* =========================================================
   NAVBAR — toggle mobile + active link on scroll
========================================================= */
function initNav(){
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = links.querySelectorAll("a");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#"+entry.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => spy.observe(s));
}

/* =========================================================
   SCROLL REVEAL
========================================================= */
function initReveal(){
  const items = document.querySelectorAll(".skill-card, .project-card");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting){
        setTimeout(() => entry.target.classList.add("in-view"), i * 40);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => obs.observe(el));
}

/* =========================================================
   CANVAS — jaringan node ala "AI", pengganti foto profil
========================================================= */
function initNeuralCanvas(canvas, count){
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth, h = canvas.clientHeight;
  canvas.width = w * dpr; canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const points = Array.from({length: count}, () => ({
    x: Math.random()*w, y: Math.random()*h,
    vx: (Math.random()-0.5) * 0.3, vy: (Math.random()-0.5) * 0.3,
  }));

  function frame(){
    ctx.clearRect(0,0,w,h);
    points.forEach(p => {
      if (!reduceMotion){
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
    });
    for (let i=0;i<points.length;i++){
      for (let j=i+1;j<points.length;j++){
        const dx = points[i].x-points[j].x, dy = points[i].y-points[j].y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        const maxDist = w*0.55;
        if (dist < maxDist){
          ctx.strokeStyle = `rgba(139,92,246,${(1-dist/maxDist)*0.55})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
    }
    points.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.2, 0, Math.PI*2);
      ctx.fillStyle = "#2dd4c4";
      ctx.fill();
    });
    requestAnimationFrame(frame);
  }
  frame();
}

/* =========================================================
   FLOATING BADGE — drag & swing (ganti foto, ala kartu ID)
========================================================= */
function initBadgeDrag(){
  const badge = document.getElementById("floatingBadge");
  if (!badge) return;
  let dragging = false, startX = 0, rotation = 0;

  const onDown = (e) => {
    dragging = true;
    badge.style.animation = "none";
    startX = (e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onMove = (e) => {
    if (!dragging) return;
    const x = (e.touches ? e.touches[0].clientX : e.clientX);
    rotation = Math.max(-40, Math.min(40, (x - startX)/3));
    badge.style.transform = `rotate(${rotation}deg)`;
  };
  const onUp = () => {
    if (!dragging) return;
    dragging = false;
    const spring = () => {
      rotation *= 0.85;
      badge.style.transform = `rotate(${rotation}deg)`;
      if (Math.abs(rotation) > 0.4){
        requestAnimationFrame(spring);
      } else {
        badge.style.transform = "";
        badge.style.animation = "sway 4.2s ease-in-out infinite";
      }
    };
    requestAnimationFrame(spring);
  };

  badge.addEventListener("pointerdown", onDown);
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);
  badge.addEventListener("touchstart", onDown, {passive:true});
  window.addEventListener("touchmove", onMove, {passive:true});
  window.addEventListener("touchend", onUp);
}

/* =========================================================
   AUDIO — sinematik & ngebass, sintesis murni (tanpa file luar)
========================================================= */
let audioCtx = null;
let ambientNodes = null;
let audioEnabled = true;

function initAudio(){
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function createImpulse(ctx, duration, decay){
  const rate = ctx.sampleRate;
  const length = Math.floor(rate * duration);
  const impulse = ctx.createBuffer(2, length, rate);
  for (let ch=0; ch<2; ch++){
    const data = impulse.getChannelData(ch);
    for (let i=0;i<length;i++){
      data[i] = (Math.random()*2-1) * Math.pow(1 - i/length, decay);
    }
  }
  return impulse;
}

function playCinematicBoom(){
  if (!audioCtx) return;
  const now = audioCtx.currentTime;

  const master = audioCtx.createGain();
  master.gain.value = 0.9;
  master.connect(audioCtx.destination);

  const convolver = audioCtx.createConvolver();
  convolver.buffer = createImpulse(audioCtx, 3.2, 2.8);
  convolver.connect(master);

  const dry = audioCtx.createGain(); dry.gain.value = 0.85; dry.connect(master);
  const wet = audioCtx.createGain(); wet.gain.value = 0.45; wet.connect(convolver);

  // sub boom
  const sub = audioCtx.createOscillator();
  sub.type = "sine";
  sub.frequency.setValueAtTime(130, now);
  sub.frequency.exponentialRampToValueAtTime(34, now + 1.3);
  const subGain = audioCtx.createGain();
  subGain.gain.setValueAtTime(0.0001, now);
  subGain.gain.exponentialRampToValueAtTime(1, now + 0.06);
  subGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.6);
  sub.connect(subGain); subGain.connect(dry); subGain.connect(wet);

  // braam layer
  const braam = audioCtx.createOscillator();
  braam.type = "sawtooth";
  braam.frequency.setValueAtTime(92, now);
  braam.frequency.exponentialRampToValueAtTime(58, now + 2.1);
  const braamFilter = audioCtx.createBiquadFilter();
  braamFilter.type = "lowpass";
  braamFilter.frequency.setValueAtTime(350, now);
  braamFilter.frequency.exponentialRampToValueAtTime(1100, now + 0.3);
  braamFilter.frequency.exponentialRampToValueAtTime(280, now + 2.1);
  const braamGain = audioCtx.createGain();
  braamGain.gain.setValueAtTime(0.0001, now);
  braamGain.gain.exponentialRampToValueAtTime(0.45, now + 0.18);
  braamGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);
  braam.connect(braamFilter); braamFilter.connect(braamGain);
  braamGain.connect(dry); braamGain.connect(wet);

  sub.start(now); sub.stop(now + 3);
  braam.start(now); braam.stop(now + 3);
}

function startAmbient(){
  if (!audioCtx || ambientNodes) return;
  const now = audioCtx.currentTime;
  const osc1 = audioCtx.createOscillator(); osc1.type = "sine"; osc1.frequency.value = 55;
  const osc2 = audioCtx.createOscillator(); osc2.type = "sine"; osc2.frequency.value = 55*1.5;
  const filter = audioCtx.createBiquadFilter(); filter.type = "lowpass"; filter.frequency.value = 180;
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.045, now + 2.5);
  osc1.connect(filter); osc2.connect(filter); filter.connect(gain); gain.connect(audioCtx.destination);
  osc1.start(); osc2.start();
  ambientNodes = { osc1, osc2, gain };
}

function stopAmbient(){
  if (!ambientNodes || !audioCtx) return;
  const now = audioCtx.currentTime;
  const { osc1, osc2, gain } = ambientNodes;
  gain.gain.linearRampToValueAtTime(0, now + 0.5);
  osc1.stop(now + 0.6); osc2.stop(now + 0.6);
  ambientNodes = null;
}

function initAudioToggle(){
  const btn = document.getElementById("audioToggle");
  const onIcon = document.getElementById("iconSoundOn");
  const offIcon = document.getElementById("iconSoundOff");
  btn.addEventListener("click", () => {
    audioEnabled = !audioEnabled;
    onIcon.style.display = audioEnabled ? "block" : "none";
    offIcon.style.display = audioEnabled ? "none" : "block";
    if (!audioCtx) return;
    if (audioEnabled) startAmbient(); else stopAmbient();
  });
}

/* =========================================================
   INIT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderSkills();
  renderProjects();
  renderContacts();
  startLoader();
  initNav();
  initReveal();
  initBadgeDrag();
  initAudioToggle();
  initNeuralCanvas(document.getElementById("heroAvatar"), 16);
  initNeuralCanvas(document.getElementById("badgeAvatar"), 8);
});
