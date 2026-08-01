/* ═══════════════════════════════════════════════════
   app.js — Language Resource Hub 2.0
   Full Interactive Logic: Search, Filter, Audio, Quiz
   ═══════════════════════════════════════════════════ */

'use strict';

/* ─── AFFILIATE LINKS ─────────────────────────────── */
const LINKS = {
  preply:       'https://preply.sjv.io/c/7528742/1987575/24422',
  babbel:       'https://www.babbel.com',
  italki:       'https://www.italki.com',
  mondly:       'https://www.mondly.com',
  duolingo:     'https://www.duolingo.com',
  anki:         'https://apps.ankiweb.net',
  jpPod:        'https://www.japanesepod101.com',
  frPod:        'https://www.frenchpod101.com',
  krClass:      'https://www.koreanclass101.com',
  pimsleur:     'https://www.pimsleur.com',
  fluentu:      'https://www.fluentu.com',
  kitKrEs:      'https://saludfuturo.gumroad.com/l/pzbjtk',
  kitKrEn:      'https://saludfuturo.gumroad.com/l/bfnzx',
  kitJpEs:      'https://saludfuturo.gumroad.com/l/citnbf',
  kitJpEn:      'https://saludfuturo.gumroad.com/l/inxkm',
  kitFrEs:      'https://saludfuturo.gumroad.com/l/qekjnb',
  kitFrEn:      'https://saludfuturo.gumroad.com/l/wdzvgv',
  amznKr:       'https://www.amazon.com/s?k=korean+language+book',
  amznJp:       'https://www.amazon.com/s?k=japanese+language+book',
  amznFr:       'https://www.amazon.com/s?k=french+language+book',
};

/* ─── RESOURCE DATA (20 CARDS) ────────────────────── */
const RESOURCES = [
  {
    id: 1,
    name: 'Preply — Tutores Nativos 1-a-1',
    icon: '🎓',
    iconBg: 'linear-gradient(135deg,#F59E0B,#D97706)',
    tagline: 'Aprende 3x más rápido con un tutor certificado. Lección de prueba a precio especial. El método más efectivo del mercado.',
    category: 'tutors',
    langs: ['Coreano', 'Japonés', 'Francés', 'Inglés', '+50'],
    badges: [{ text: '👑 #1 RECOMENDADO', cls: 'badge-gold' }, { text: '🔥 TOP', cls: 'badge-rose' }],
    commission: '$20 por lección de prueba',
    cta: 'Reservar Lección Gratis →',
    ctaCls: 'cta-gold',
    url: LINKS.preply,
    hero: true,
    audio: null,
  },
  {
    id: 2,
    name: 'Kit Coreano Express (Español)',
    icon: '🇰🇷',
    iconBg: 'linear-gradient(135deg,#C0392B,#E74C3C)',
    tagline: 'Guía completa Hangul + 100 frases + planificador 30 días en PDF. 100% gratis.',
    category: 'kit',
    langs: ['Coreano'],
    badges: [{ text: '⭐ OFERTA $0', cls: 'badge-em' }, { text: '📥 PDF', cls: 'badge-violet' }],
    commission: '100% Ganancia directa',
    cta: '📥 Descargar Gratis',
    ctaCls: 'cta-em',
    url: LINKS.kitKrEs,
    hero: false,
    audio: { phrase: '안녕하세요', romaji: 'Annyeonghaseyo', trans: '¡Hola!', lang: 'ko-KR' },
  },
  {
    id: 3,
    name: 'Kit Coreano Express (English)',
    icon: '🇰🇷',
    iconBg: 'linear-gradient(135deg,#1A3A6B,#2563EB)',
    tagline: 'Complete Hangul guide + 100 phrases + 30-day planner PDF. 100% Free.',
    category: 'kit',
    langs: ['Korean'],
    badges: [{ text: '⭐ FREE', cls: 'badge-em' }, { text: '📥 PDF', cls: 'badge-violet' }],
    commission: '100% Direct profit',
    cta: '📥 Download Free',
    ctaCls: 'cta-em',
    url: LINKS.kitKrEn,
    hero: false,
    audio: { phrase: '감사합니다', romaji: 'Gamsahamnida', trans: 'Thank you!', lang: 'ko-KR' },
  },
  {
    id: 4,
    name: 'Kit Japonés Express (Español)',
    icon: '🇯🇵',
    iconBg: 'linear-gradient(135deg,#DC2626,#B91C1C)',
    tagline: 'Hiragana, Katakana + 50 frases de supervivencia + tutor nativo Preply incluido.',
    category: 'kit',
    langs: ['Japonés'],
    badges: [{ text: '⭐ OFERTA $0', cls: 'badge-em' }, { text: '📥 PDF', cls: 'badge-sky' }],
    commission: '100% Ganancia directa',
    cta: '📥 Descargar Gratis',
    ctaCls: 'cta-em',
    url: LINKS.kitJpEs,
    hero: false,
    audio: { phrase: 'こんにちは', romaji: 'Konnichiwa', trans: '¡Hola!', lang: 'ja-JP' },
  },
  {
    id: 5,
    name: 'Japanese Express Kit (English)',
    icon: '🇯🇵',
    iconBg: 'linear-gradient(135deg,#7C3AED,#6D28D9)',
    tagline: 'Hiragana & Katakana tables + 50 survival phrases + native tutor link.',
    category: 'kit',
    langs: ['Japanese'],
    badges: [{ text: '⭐ FREE', cls: 'badge-em' }, { text: '📥 PDF', cls: 'badge-sky' }],
    commission: '100% Direct profit',
    cta: '📥 Download Free',
    ctaCls: 'cta-em',
    url: LINKS.kitJpEn,
    hero: false,
    audio: { phrase: 'ありがとう', romaji: 'Arigatou', trans: 'Thank you!', lang: 'ja-JP' },
  },
  {
    id: 6,
    name: 'Kit Francés Express (Español)',
    icon: '🇫🇷',
    iconBg: 'linear-gradient(135deg,#1A3A6B,#1E3A8A)',
    tagline: 'Pronunciación + vocabulario clave + 50 frases de la vida real en PDF.',
    category: 'kit',
    langs: ['Francés'],
    badges: [{ text: '⭐ OFERTA $0', cls: 'badge-em' }, { text: '📥 PDF', cls: 'badge-rose' }],
    commission: '100% Ganancia directa',
    cta: '📥 Descargar Gratis',
    ctaCls: 'cta-em',
    url: LINKS.kitFrEs,
    hero: false,
    audio: { phrase: 'Bonjour!', romaji: 'Bon-zhour', trans: '¡Hola!', lang: 'fr-FR' },
  },
  {
    id: 7,
    name: 'French Express Kit (English)',
    icon: '🇫🇷',
    iconBg: 'linear-gradient(135deg,#0F766E,#0D9488)',
    tagline: 'Pronunciation guide + key vocabulary + 50 real-life phrases PDF.',
    category: 'kit',
    langs: ['French'],
    badges: [{ text: '⭐ FREE', cls: 'badge-em' }, { text: '📥 PDF', cls: 'badge-rose' }],
    commission: '100% Direct profit',
    cta: '📥 Download Free',
    ctaCls: 'cta-em',
    url: LINKS.kitFrEn,
    hero: false,
    audio: { phrase: 'Merci beaucoup!', romaji: 'Mer-si bo-koo', trans: 'Thank you very much!', lang: 'fr-FR' },
  },
  {
    id: 8,
    name: 'Babbel — App de Aprendizaje',
    icon: '🟢',
    iconBg: 'linear-gradient(135deg,#15803D,#16A34A)',
    tagline: 'Lecciones cortas diseñadas por lingüistas. Gramática + conversación. Ideal para el día a día.',
    category: 'app',
    langs: ['Francés', 'Japonés', '+13'],
    badges: [{ text: '🥈 #2 POPULAR', cls: 'badge-violet' }, { text: '50% DTO', cls: 'badge-gold' }],
    commission: '50% Comisión',
    cta: 'Probar Gratis 7 Días →',
    ctaCls: 'cta-violet',
    url: LINKS.babbel,
    hero: false,
    audio: null,
  },
  {
    id: 9,
    name: 'italki — Tutores & Intercambio',
    icon: '🌐',
    iconBg: 'linear-gradient(135deg,#0284C7,#0369A1)',
    tagline: 'Conecta con tutores profesionales o socios de intercambio. Desde $5/hora. Comunidad global.',
    category: 'tutors',
    langs: ['Coreano', 'Japonés', 'Francés', '+100'],
    badges: [{ text: '🥉 #3', cls: 'badge-sky' }],
    commission: '$10 por usuario',
    cta: 'Explorar Tutores →',
    ctaCls: 'cta-outline',
    url: LINKS.italki,
    hero: false,
    audio: null,
  },
  {
    id: 10,
    name: 'Mondly — Aprendizaje AR/VR',
    icon: '🔮',
    iconBg: 'linear-gradient(135deg,#7C3AED,#5B21B6)',
    tagline: 'App innovadora con realidad aumentada y lecciones conversacionales en IA. App del Año.',
    category: 'app',
    langs: ['Francés', 'Japonés', 'Coreano'],
    badges: [{ text: '🏅 APP DEL AÑO', cls: 'badge-gold' }, { text: '30% DTO', cls: 'badge-violet' }],
    commission: '30% Comisión',
    cta: 'Probar Mondly →',
    ctaCls: 'cta-violet',
    url: LINKS.mondly,
    hero: false,
    audio: null,
  },
  {
    id: 11,
    name: 'Duolingo — Gratis & Gamificado',
    icon: '🦉',
    iconBg: 'linear-gradient(135deg,#65A30D,#4D7C0F)',
    tagline: 'La app más descargada del mundo. Racha diaria, puntos XP y ligas. 100% gratuito.',
    category: 'app',
    langs: ['Francés', 'Japonés', 'Coreano'],
    badges: [{ text: '🆓 100% GRATIS', cls: 'badge-em' }],
    commission: 'Referido gratuito',
    cta: 'Empezar Gratis →',
    ctaCls: 'cta-em',
    url: LINKS.duolingo,
    hero: false,
    audio: null,
  },
  {
    id: 12,
    name: 'Anki — Flashcards Inteligentes',
    icon: '🃏',
    iconBg: 'linear-gradient(135deg,#EA580C,#C2410C)',
    tagline: 'Sistema de repetición espaciada. El método más eficiente para memorizar vocabulario.',
    category: 'tool',
    langs: ['Coreano', 'Japonés', 'Francés'],
    badges: [{ text: '🆓 GRATIS', cls: 'badge-em' }],
    commission: 'Gratuito',
    cta: 'Descargar Anki →',
    ctaCls: 'cta-outline',
    url: LINKS.anki,
    hero: false,
    audio: null,
  },
  {
    id: 13,
    name: 'JapanesePod101',
    icon: '🎙️',
    iconBg: 'linear-gradient(135deg,#DC2626,#991B1B)',
    tagline: 'Podcast + lecciones estructuradas de japonés desde nivel básico hasta avanzado.',
    category: 'course',
    langs: ['Japonés'],
    badges: [{ text: '🎧 PODCAST', cls: 'badge-sky' }],
    commission: 'Afiliado disponible',
    cta: 'Empezar Lección →',
    ctaCls: 'cta-outline',
    url: LINKS.jpPod,
    hero: false,
    audio: { phrase: 'よろしくお願いします', romaji: 'Yoroshiku onegaishimasu', trans: 'Encantado de conocerte', lang: 'ja-JP' },
  },
  {
    id: 14,
    name: 'FrenchPod101',
    icon: '🎙️',
    iconBg: 'linear-gradient(135deg,#1D4ED8,#1E40AF)',
    tagline: 'Aprende francés con podcasts nativos, lecciones PDF y vocabulario en contexto.',
    category: 'course',
    langs: ['Francés'],
    badges: [{ text: '🎧 PODCAST', cls: 'badge-sky' }],
    commission: 'Afiliado disponible',
    cta: 'Empezar Lección →',
    ctaCls: 'cta-outline',
    url: LINKS.frPod,
    hero: false,
    audio: { phrase: 'Comment vous appelez-vous?', romaji: 'Ko-maN vu za-pe-le vu?', trans: '¿Cómo se llama usted?', lang: 'fr-FR' },
  },
  {
    id: 15,
    name: 'KoreanClass101',
    icon: '🎙️',
    iconBg: 'linear-gradient(135deg,#B91C1C,#7F1D1D)',
    tagline: 'Aprende coreano con audio nativo, transcripciones y lecciones progresivas.',
    category: 'course',
    langs: ['Coreano'],
    badges: [{ text: '🎧 PODCAST', cls: 'badge-sky' }],
    commission: 'Afiliado disponible',
    cta: 'Empezar Lección →',
    ctaCls: 'cta-outline',
    url: LINKS.krClass,
    hero: false,
    audio: { phrase: '반갑습니다', romaji: 'Bangapseumnida', trans: 'Encantado de conocerte', lang: 'ko-KR' },
  },
  {
    id: 16,
    name: 'Pimsleur — Método de Audio',
    icon: '🔊',
    iconBg: 'linear-gradient(135deg,#0F766E,#0D9488)',
    tagline: 'Aprende mientras caminas. Método audio probado por 50+ años para conversación nativa.',
    category: 'course',
    langs: ['Francés', 'Japonés', 'Coreano'],
    badges: [{ text: '🎧 AUDIO PRO', cls: 'badge-violet' }],
    commission: 'Afiliado disponible',
    cta: 'Probar 7 Días →',
    ctaCls: 'cta-outline',
    url: LINKS.pimsleur,
    hero: false,
    audio: null,
  },
  {
    id: 17,
    name: 'FluentU — Videos Reales',
    icon: '📺',
    iconBg: 'linear-gradient(135deg,#0284C7,#0EA5E9)',
    tagline: 'Aprende con videos reales (noticias, trailers, vlogs) con subtítulos interactivos.',
    category: 'app',
    langs: ['Japonés', 'Francés', 'Coreano'],
    badges: [{ text: '📺 VIDEOS NATIVOS', cls: 'badge-sky' }],
    commission: 'Afiliado disponible',
    cta: 'Ver Demo →',
    ctaCls: 'cta-outline',
    url: LINKS.fluentu,
    hero: false,
    audio: null,
  },
  {
    id: 18,
    name: 'Libro: Coreano para Principiantes',
    icon: '📖',
    iconBg: 'linear-gradient(135deg,#92400E,#B45309)',
    tagline: 'El libro más completo de coreano para hispanohablantes. Ejercicios + audio online.',
    category: 'book',
    langs: ['Coreano'],
    badges: [{ text: '📚 AMAZON', cls: 'badge-gold' }, { text: '10% COMISIÓN', cls: 'badge-em' }],
    commission: '10% Amazon',
    cta: 'Ver en Amazon →',
    ctaCls: 'cta-gold',
    url: LINKS.amznKr,
    hero: false,
    audio: null,
  },
  {
    id: 19,
    name: 'Libro: Japonés Esencial',
    icon: '📖',
    iconBg: 'linear-gradient(135deg,#6D28D9,#7C3AED)',
    tagline: 'Gramática japonesa completa para hispanohablantes. El más vendido en Amazon.',
    category: 'book',
    langs: ['Japonés'],
    badges: [{ text: '📚 AMAZON', cls: 'badge-gold' }, { text: '10% COMISIÓN', cls: 'badge-em' }],
    commission: '10% Amazon',
    cta: 'Ver en Amazon →',
    ctaCls: 'cta-gold',
    url: LINKS.amznJp,
    hero: false,
    audio: null,
  },
  {
    id: 20,
    name: 'Libro: Francés sin Esfuerzo',
    icon: '📖',
    iconBg: 'linear-gradient(135deg,#1E40AF,#1D4ED8)',
    tagline: 'Pronunciación y gramática francesa paso a paso. Con CD de audio y ejercicios.',
    category: 'book',
    langs: ['Francés'],
    badges: [{ text: '📚 AMAZON', cls: 'badge-gold' }, { text: '10% COMISIÓN', cls: 'badge-em' }],
    commission: '10% Amazon',
    cta: 'Ver en Amazon →',
    ctaCls: 'cta-gold',
    url: LINKS.amznFr,
    hero: false,
    audio: null,
  },
];

/* ─── AUDIO PHRASES PER LANGUAGE ─────────────────── */
const AUDIO_PHRASES = {
  japones: [
    { native: 'こんにちは',           romaji: 'Konnichiwa',        trans: 'Hola / Buenos días',     lang: 'ja-JP' },
    { native: 'ありがとうございます', romaji: 'Arigatou gozaimasu', trans: 'Muchas gracias',          lang: 'ja-JP' },
    { native: 'すみません',           romaji: 'Sumimasen',         trans: 'Disculpe / Perdón',       lang: 'ja-JP' },
    { native: 'いくらですか',         romaji: 'Ikura desu ka?',    trans: '¿Cuánto cuesta?',         lang: 'ja-JP' },
    { native: 'トイレはどこですか',   romaji: 'Toire wa doko?',    trans: '¿Dónde está el baño?',    lang: 'ja-JP' },
    { native: 'わかりません',         romaji: 'Wakarimasen',       trans: 'No entiendo',             lang: 'ja-JP' },
  ],
  frances: [
    { native: 'Bonjour!',                   romaji: 'Bon-zhoor',             trans: '¡Buenos días!',          lang: 'fr-FR' },
    { native: 'Merci beaucoup!',            romaji: 'Mer-si bo-koo',         trans: '¡Muchas gracias!',       lang: 'fr-FR' },
    { native: 'Excusez-moi',               romaji: 'Eks-kyoo-zey mwah',     trans: 'Disculpe',               lang: 'fr-FR' },
    { native: 'Combien ça coûte?',         romaji: 'Kom-bYaN sa koot?',     trans: '¿Cuánto cuesta?',        lang: 'fr-FR' },
    { native: 'Où sont les toilettes?',    romaji: 'Oo soN le twa-let?',    trans: '¿Dónde están los baños?',lang: 'fr-FR' },
    { native: 'Je ne comprends pas.',      romaji: 'Zhe ne kom-praN pa',    trans: 'No entiendo',            lang: 'fr-FR' },
  ],
  coreano: [
    { native: '안녕하세요',   romaji: 'Annyeonghaseyo',  trans: '¡Hola! (formal)',    lang: 'ko-KR' },
    { native: '감사합니다',   romaji: 'Gamsahamnida',    trans: 'Gracias (formal)',   lang: 'ko-KR' },
    { native: '죄송합니다',   romaji: 'Joesonghabnida',  trans: 'Lo siento',          lang: 'ko-KR' },
    { native: '얼마예요?',    romaji: 'Eolmayeyo?',      trans: '¿Cuánto cuesta?',   lang: 'ko-KR' },
    { native: '화장실이 어디예요?', romaji: 'Hwajangsil?', trans: '¿Dónde está el baño?', lang: 'ko-KR' },
    { native: '모르겠어요',   romaji: 'Moreugeseoyo',    trans: 'No lo sé',           lang: 'ko-KR' },
  ],
};

/* ─── QUIZ DATA ───────────────────────────────────── */
const QUIZ_QUESTIONS = [
  {
    q: '¿Cuánto tiempo puedes dedicar al aprendizaje cada día?',
    opts: ['5-10 minutos', '15-30 minutos', '30-60 minutos', 'Más de 1 hora'],
    key: 'time',
  },
  {
    q: '¿Cuál es tu objetivo principal?',
    opts: ['Viajar a ese país', 'Hablar con nativos', 'Ver series/anime sin subtítulos', 'Trabajo o estudio'],
    key: 'goal',
  },
  {
    q: '¿Qué idioma te interesa aprender?',
    opts: ['🇰🇷 Coreano', '🇯🇵 Japonés', '🇫🇷 Francés', 'Aún no lo sé'],
    key: 'lang',
  },
  {
    q: '¿Cuál es tu nivel actual?',
    opts: ['Principiante total', 'Conozco lo básico', 'Nivel intermedio', 'Quiero reforzar'],
    key: 'level',
  },
  {
    q: '¿Prefieres aprender solo o con ayuda?',
    opts: ['Solo con apps', 'Con videos/podcasts', 'Con un tutor personal', 'Una mezcla de todo'],
    key: 'style',
  },
  {
    q: '¿Cuánto estás dispuesto a invertir al mes?',
    opts: ['$0 — solo recursos gratis', 'Hasta $20/mes', 'Hasta $50/mes', 'Más de $50/mes'],
    key: 'budget',
  },
  {
    q: '¿Cuándo necesitas usar el idioma?',
    opts: ['En menos de 3 meses', 'En 6 meses', 'En 1 año', 'Sin prisa, quiero bases sólidas'],
    key: 'urgency',
  },
  {
    q: '¿Qué te motiva más para aprender?',
    opts: ['K-Pop / J-Pop / Anime', 'Cultura y gastronomía', 'Oportunidades laborales', 'Amor por los idiomas'],
    key: 'motivation',
  },
  {
    q: '¿Cuál es tu mayor dificultad al aprender idiomas?',
    opts: ['La pronunciación', 'El vocabulario', 'La gramática', 'La constancia'],
    key: 'challenge',
  },
  {
    q: '¿Qué aspecto valoras más en una herramienta de aprendizaje?',
    opts: ['Que sea gratis', 'Que sea rápida y efectiva', 'Clases personalizadas 1-a-1', 'Gamificación y diversión'],
    key: 'value',
  },
];

/* ══════════════════════════════════════════════════
   STATE
   ══════════════════════════════════════════════════ */
let state = {
  search: '',
  filter: 'all',
  currentAudioLang: 'japones',
  quiz: {
    current: 0,
    answers: {},
    done: false,
  },
  speaking: false,
};

/* ══════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  renderAudioPhrases('japones');
  renderQuiz();
  setupSearch();
  setupFilters();
  setupAudioTabs();
  setupKeyboard();
  animateStats();
  startCountdown();
  typeHeroSubtitle();
});

/* ══════════════════════════════════════════════════
   COUNTDOWN & TYPING EFFECTS (Marketing & UI)
   ══════════════════════════════════════════════════ */
function startCountdown() {
  const el = document.getElementById('countdown-timer');
  if(!el) return;
  // Initialize a 2-hour countdown using localStorage to persist between reloads
  let targetTime = localStorage.getItem('preply_offer_end');
  if(!targetTime || targetTime < Date.now()) {
    targetTime = Date.now() + 2 * 60 * 60 * 1000; // 2 hours from now
    localStorage.setItem('preply_offer_end', targetTime);
  }
  
  setInterval(() => {
    const diff = targetTime - Date.now();
    if(diff <= 0) return;
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    el.textContent = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  }, 1000);
}

function typeHeroSubtitle() {
  const el = document.getElementById('hero-sub-typing');
  if(!el) return;
  const text = el.textContent.trim();
  el.textContent = '';
  let i = 0;
  function typeChar() {
    if(i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, 15 + Math.random() * 20);
    }
  }
  setTimeout(typeChar, 800);
}

/* ══════════════════════════════════════════════════
   CARD RENDERING
   ══════════════════════════════════════════════════ */
function getFilteredResources() {
  return RESOURCES.filter(r => {
    const q = state.search.toLowerCase();
    const matchSearch = !q ||
      r.name.toLowerCase().includes(q) ||
      r.tagline.toLowerCase().includes(q) ||
      r.langs.some(l => l.toLowerCase().includes(q)) ||
      r.category.toLowerCase().includes(q);

    const matchFilter = state.filter === 'all' ||
      r.langs.some(l => l.toLowerCase().includes(state.filter)) ||
      r.category === state.filter;

    return matchSearch && matchFilter;
  });
}

function renderCards() {
  const grid = document.getElementById('cards-grid');
  const noResults = document.getElementById('no-results');
  const countEl = document.getElementById('result-count');
  const filtered = getFilteredResources();

  countEl.textContent = `${filtered.length} recurso${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.classList.add('visible');
    return;
  }

  noResults.classList.remove('visible');

  grid.innerHTML = filtered.map((r, i) => `
    <article class="resource-card${r.hero ? ' hero-card' : ''}"
             style="animation-delay:${i * 0.06}s">
      <div class="card-header">
        <div class="card-icon" style="background:${r.iconBg}">${r.icon}</div>
        <div class="card-badges">
          ${r.badges.map(b => `<span class="badge ${b.cls}">${b.text}</span>`).join('')}
        </div>
      </div>

      <div>
        <div class="card-name">${r.name}</div>
        <div class="card-tagline">${r.tagline}</div>
      </div>

      <div class="card-langs">
        ${r.langs.map(l => `<span class="lang-tag">${l}</span>`).join('')}
      </div>

      ${r.audio ? `
      <div class="audio-player">
        <button class="audio-btn" id="audio-card-${r.id}"
                onclick="speakPhrase('${r.audio.phrase}','${r.audio.lang}','audio-card-${r.id}')">
          🔊 Escuchar: "${r.audio.romaji}"
        </button>
      </div>` : ''}

      <div class="card-meta">
        <span class="card-commission">💰 ${r.commission}</span>
      </div>

      <a href="${r.url}" target="_blank" rel="noopener" class="card-cta ${r.ctaCls}">
        ${r.cta}
      </a>
    </article>
  `).join('');
}

/* ══════════════════════════════════════════════════
   SEARCH & FILTER
   ══════════════════════════════════════════════════ */
function setupSearch() {
  const input = document.getElementById('search-input');
  input.addEventListener('input', e => {
    state.search = e.target.value;
    renderCards();
  });
}

function setupFilters() {
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.filter = pill.dataset.filter;
      renderCards();
    });
  });
}

/* ══════════════════════════════════════════════════
   AUDIO ENGINE — Web Speech API
   ══════════════════════════════════════════════════ */
function speakPhrase(text, lang, btnId) {
  if (!window.speechSynthesis) {
    alert('Tu navegador no soporta síntesis de voz. Prueba con Chrome.');
    return;
  }

  window.speechSynthesis.cancel();

  const btn = document.getElementById(btnId);
  if (btn) btn.classList.add('playing');

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = 0.85;
  utter.pitch = 1;
  utter.volume = 1;

  utter.onend = () => {
    if (btn) btn.classList.remove('playing');
  };
  utter.onerror = () => {
    if (btn) btn.classList.remove('playing');
  };

  window.speechSynthesis.speak(utter);
}

function speakSlow(text, lang, btnId) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const btn = document.getElementById(btnId);
  if (btn) btn.classList.add('playing');

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = 0.5;
  utter.pitch = 1;
  utter.volume = 1;

  utter.onend = () => { if (btn) btn.classList.remove('playing'); };
  utter.onerror = () => { if (btn) btn.classList.remove('playing'); };

  window.speechSynthesis.speak(utter);
}

/* ── Audio Section Tabs ─────────────────────────── */
function setupAudioTabs() {
  document.querySelectorAll('.audio-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.audio-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.currentAudioLang = tab.dataset.lang;
      renderAudioPhrases(tab.dataset.lang);
    });
  });
}

function renderAudioPhrases(lang) {
  const container = document.getElementById('phrases-grid');
  const phrases = AUDIO_PHRASES[lang];

  container.innerHTML = phrases.map((p, i) => `
    <div class="phrase-card">
      <div class="phrase-text">
        <div class="phrase-native">${p.native}</div>
        <div class="phrase-romaji">${p.romaji}</div>
        <div class="phrase-trans">${p.trans}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:center">
        <button class="play-btn" id="play-${lang}-${i}"
                onclick="speakPhrase('${p.native.replace(/'/g,"\\'")}','${p.lang}','play-${lang}-${i}')"
                title="Velocidad normal">▶</button>
        <button class="play-btn" id="slow-${lang}-${i}"
                onclick="speakSlow('${p.native.replace(/'/g,"\\'")}','${p.lang}','slow-${lang}-${i}')"
                title="Velocidad lenta" style="font-size:11px;width:32px;height:32px">🐢</button>
      </div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════════
   QUIZ ENGINE
   ══════════════════════════════════════════════════ */
function renderQuiz() {
  updateQuizProgress();
  renderQuestion();
}

function updateQuizProgress() {
  const total = QUIZ_QUESTIONS.length;
  const current = state.quiz.current;
  const pct = Math.round((current / total) * 100);

  const fill = document.getElementById('quiz-progress-fill');
  const label = document.getElementById('quiz-progress-label');
  const num   = document.getElementById('quiz-question-num');

  if (fill) fill.style.width = pct + '%';
  if (label) label.textContent = `Pregunta ${Math.min(current + 1, total)} de ${total}`;
  if (num) num.textContent = `Pregunta ${Math.min(current + 1, total)} de ${total}`;
}

function renderQuestion() {
  const wrap  = document.getElementById('quiz-question-wrap');
  const result= document.getElementById('quiz-result');
  const nav   = document.getElementById('quiz-nav');

  if (state.quiz.done) {
    wrap.style.display = 'none';
    nav.style.display = 'none';
    showQuizResult();
    return;
  }

  wrap.style.display = 'block';
  result.classList.remove('visible');
  nav.style.display = 'flex';

  const q = QUIZ_QUESTIONS[state.quiz.current];
  const savedAnswer = state.quiz.answers[state.quiz.current];

  document.getElementById('quiz-question-text').textContent = q.q;

  const optsHtml = q.opts.map((opt, i) => `
    <button class="quiz-option${savedAnswer === i ? ' selected' : ''}"
            onclick="selectOption(${i})" id="opt-${i}">
      <span class="option-key">${String.fromCharCode(65 + i)}</span>
      ${opt}
    </button>
  `).join('');

  document.getElementById('quiz-options').innerHTML = optsHtml;

  const nextBtn = document.getElementById('btn-next');
  nextBtn.textContent = state.quiz.current === QUIZ_QUESTIONS.length - 1
    ? 'Ver Mi Resultado 🎯'
    : 'Siguiente →';
}

function selectOption(idx) {
  state.quiz.answers[state.quiz.current] = idx;

  document.querySelectorAll('.quiz-option').forEach((btn, i) => {
    btn.classList.toggle('selected', i === idx);
  });
}

function nextQuestion() {
  if (state.quiz.answers[state.quiz.current] === undefined) {
    // Select first option auto
    selectOption(0);
  }

  if (state.quiz.current < QUIZ_QUESTIONS.length - 1) {
    state.quiz.current++;
    updateQuizProgress();
    renderQuestion();
  } else {
    state.quiz.done = true;
    updateQuizProgress();
    renderQuestion();
  }
}

function showQuizResult() {
  const result = document.getElementById('quiz-result');
  result.classList.add('visible');

  // Calculate score & recommendation
  const langAns = state.quiz.answers[2]; // Language question
  const budgetAns = state.quiz.answers[5];
  const styleAns = state.quiz.answers[4];

  let langName = '¡Coreano, Japonés o Francés!';
  let kitUrl = LINKS.kitKrEs;
  let recommendation = 'Preply';

  if (langAns === 0) { langName = 'Coreano'; kitUrl = LINKS.kitKrEs; }
  if (langAns === 1) { langName = 'Japonés'; kitUrl = LINKS.kitJpEs; }
  if (langAns === 2) { langName = 'Francés'; kitUrl = LINKS.kitFrEs; }

  // Score based on answers
  const score = Math.round(
    ((Object.keys(state.quiz.answers).length / QUIZ_QUESTIONS.length) * 100)
  );

  const prefersTutor = styleAns === 2 || budgetAns >= 1;

  const mainUrl = prefersTutor ? LINKS.preply : kitUrl;
  const mainCta = prefersTutor
    ? '🎓 Reservar Lección Gratis en Preply →'
    : `📥 Descargar Kit de ${langName} Gratis →`;

  document.getElementById('result-score').textContent = score + '%';
  document.getElementById('result-title').textContent =
    `Tu idioma ideal: ${langName}`;
  document.getElementById('result-desc').textContent =
    prefersTutor
      ? `Con tu perfil, las clases personalizadas 1-a-1 con un tutor nativo en Preply son tu mejor camino. Aprenderás hasta 3x más rápido que con apps.`
      : `Empieza con tu Kit Express gratuito de ${langName}. Es el paso perfecto para tu nivel y tus objetivos actuales.`;

  document.getElementById('result-cta').href = mainUrl;
  document.getElementById('result-cta').textContent = mainCta;

  // FIRE CONFETTI!
  if(typeof confetti !== 'undefined') {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#10B981', '#8B5CF6']
    });
  }
}

function restartQuiz() {
  state.quiz = { current: 0, answers: {}, done: false };
  document.getElementById('quiz-result').classList.remove('visible');
  renderQuiz();
}

// Expose to HTML onclick
window.selectOption = selectOption;
window.nextQuestion = nextQuestion;
window.restartQuiz  = restartQuiz;
window.speakPhrase  = speakPhrase;
window.speakSlow    = speakSlow;

/* ══════════════════════════════════════════════════
   KEYBOARD SHORTCUT (Cmd/Ctrl + K)
   ══════════════════════════════════════════════════ */
function setupKeyboard() {
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      const input = document.getElementById('search-input');
      input.focus();
      input.select();
    }
    if (e.key === 'Escape') {
      const input = document.getElementById('search-input');
      input.value = '';
      state.search = '';
      renderCards();
      input.blur();
    }
  });
}

/* ══════════════════════════════════════════════════
   ANIMATED STATS COUNTER
   ══════════════════════════════════════════════════ */
function animateStats() {
  const stats = [
    { id: 'stat-students', target: 1420, suffix: '+' },
    { id: 'stat-resources', target: 20, suffix: '' },
    { id: 'stat-languages', target: 3, suffix: '' },
    { id: 'stat-commission', target: 20, suffix: '$' },
  ];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stats.forEach(s => {
          const el = document.getElementById(s.id);
          if (!el) return;
          let current = 0;
          const step = Math.ceil(s.target / 50);
          const timer = setInterval(() => {
            current = Math.min(current + step, s.target);
            el.textContent = s.id === 'stat-commission'
              ? '$' + current
              : current.toLocaleString() + s.suffix;
            if (current >= s.target) clearInterval(timer);
          }, 30);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) observer.observe(statsBar);
}
