/* ═══════════════════════════════════════════════════════════════
   app.js — Language Resource Hub 2.0 · i18n ES/EN
   Zero Traffic Leakage — Solo recursos que monetizan
   ═══════════════════════════════════════════════════════════════ */
'use strict';

/* ─── AFFILIATE LINKS ─────────────────────────────── */
const LINKS = {
  preply:   'https://preply.sjv.io/c/7528742/1987575/24422',
  babbel:   'https://www.babbel.com',
  italki:   'https://www.italki.com',
  mondly:   'https://www.mondly.com',
  pimsleur: 'https://www.pimsleur.com',
  fluentu:  'https://www.fluentu.com',
  kitKrEs:  'https://saludfuturo.gumroad.com/l/pzbjtk',
  kitKrEn:  'https://saludfuturo.gumroad.com/l/bfnzx',
  kitJpEs:  'https://saludfuturo.gumroad.com/l/citnbf',
  kitJpEn:  'https://saludfuturo.gumroad.com/l/inxkm',
  kitFrEs:  'https://saludfuturo.gumroad.com/l/qekjnb',
  kitFrEn:  'https://saludfuturo.gumroad.com/l/wdzvgv',
  amznKr:   'https://www.amazon.com/s?k=korean+language+book',
  amznJp:   'https://www.amazon.com/s?k=japanese+language+book',
  amznFr:   'https://www.amazon.com/s?k=french+language+book',
};

/* ═══════════════════════════════════════════════════
   i18n TRANSLATIONS
   ═══════════════════════════════════════════════════ */
const T = {
  es: {
    nav_resources: 'Recursos', nav_audio: 'Audio Nativo',
    nav_quiz: 'Quiz', nav_cta: '🎓 Tutor Gratis',
    hero_badge: '15 Recursos Verificados · Audio Nativo · Quiz IA',
    hero_h1: 'El Hub Definitivo para<br><span class="grad-gold">Coreano</span>, <span class="grad-em">Japonés</span><br>y Francés',
    hero_sub: 'Kits PDF gratis, tutores nativos 1-a-1 y audio de pronunciación en vivo. Todo curado. Cero relleno.',
    search_ph: 'Buscar recursos, idiomas, apps...',
    f_all: '🌐 Todos', f_kr: '🇰🇷 Coreano', f_jp: '🇯🇵 Japonés',
    f_fr: '🇫🇷 Francés', f_tutors: '🎓 Tutores',
    f_kits: '📥 Kits Gratis', f_apps: '📱 Apps', f_books: '📚 Libros',
    stat_students: 'Estudiantes este mes', stat_resources: 'Recursos curados',
    stat_languages: 'Idiomas disponibles', stat_commission: 'Tutores nativos disponibles',
    preply_eyebrow: '👑 Recomendado #1 por Estudiantes',
    preply_title: 'Aprende 3× más rápido con un <span>Tutor Nativo en Preply</span>',
    preply_desc: 'Clases 1-a-1 personalizadas con tutores certificados de Coreano, Japonés y Francés. Más de 32,000 tutores disponibles. Tu primera lección a precio especial.',
    preply_f1: 'Más de 32,000 tutores certificados nativos',
    preply_f2: 'Horarios flexibles — desde 5 min al día',
    preply_f3: 'Garantía de devolución si no te satisface',
    preply_f4: 'Resultados medibles desde la primera clase',
    preply_cta: '🎓 Reservar Mi Primera Lección →',
    preply_comm_label: 'Clase de Prueba',
    preply_comm_note: 'Empieza hoy sin compromiso',
    preply_comm_badge: '🔥 OFERTA LIMITADA',
    section_all: 'Todos los', section_span: 'Recursos',
    audio_title: '🔊 Audio Companion —',
    audio_title_span: 'Pronunciación Nativa',
    audio_sub: 'Escucha frases reales pronunciadas por síntesis de voz nativa del navegador. Sin costo, sin límites. Haz clic en ▶ para velocidad normal o 🐢 para despacio.',
    audio_jp: '🇯🇵 Japonés', audio_fr: '🇫🇷 Francés', audio_kr: '🇰🇷 Coreano',
    audio_preply_cta: '🎓 Practica con un Tutor Nativo en Preply →',
    quiz_h2_main: '🧠 Language', quiz_h2_span: 'Matchmaker 2.0',
    quiz_sub: 'Responde 10 preguntas rápidas y nuestra IA calculará el recurso perfecto para ti.',
    quiz_q_of: 'de', quiz_next: 'Siguiente →',
    quiz_finish: 'Ver Mi Resultado 🎯', quiz_restart: '↩ Repetir Quiz',
    result_prefix: 'Tu idioma ideal: ',
    result_desc_tutor: 'Con tu perfil, las clases personalizadas 1-a-1 con un tutor nativo en Preply son tu mejor camino. Aprenderás hasta 3x más rápido.',
    result_desc_kit: 'Empieza con tu Kit Express gratuito de {lang}. Es el paso perfecto para tu nivel y tus objetivos actuales.',
    result_cta_tutor: '🎓 Reservar Lección Gratis en Preply →',
    result_cta_kit: '📥 Descargar Kit de {lang} Gratis →',
    no_results: 'No se encontraron recursos para tu búsqueda.<br>Intenta con otro término o borra el filtro.',
    footer_copy: '© 2026 Language Resource Hub 2.0',
    footer_note: '· Algunos enlaces son afiliados (sin costo adicional para ti)',
    urgency_text: '🔥 <strong>Oferta Flash:</strong> Reserva tu clase de prueba en Preply con descuento especial.',
    urgency_expires: 'Expira en:',
  },
  en: {
    nav_resources: 'Resources', nav_audio: 'Native Audio',
    nav_quiz: 'Quiz', nav_cta: '🎓 Free Tutor',
    hero_badge: '15 Verified Resources · Native Audio · AI Quiz',
    hero_h1: 'The Ultimate Hub to Learn<br><span class="grad-gold">Korean</span>, <span class="grad-em">Japanese</span><br>and French',
    hero_sub: 'Free PDF kits, native 1-on-1 tutors and live pronunciation audio. All curated. Zero fluff.',
    search_ph: 'Search resources, languages, apps...',
    f_all: '🌐 All', f_kr: '🇰🇷 Korean', f_jp: '🇯🇵 Japanese',
    f_fr: '🇫🇷 French', f_tutors: '🎓 Tutors',
    f_kits: '📥 Free Kits', f_apps: '📱 Apps', f_books: '📚 Books',
    stat_students: 'Students this month', stat_resources: 'Curated resources',
    stat_languages: 'Languages available', stat_commission: 'Native tutors available',
    preply_eyebrow: '👑 #1 Recommended by Students',
    preply_title: 'Learn 3× faster with a <span>Native Tutor on Preply</span>',
    preply_desc: 'Personalized 1-on-1 classes with certified tutors for Korean, Japanese and French. Over 32,000 tutors available. Your first lesson at special price.',
    preply_f1: 'Over 32,000 certified native tutors',
    preply_f2: 'Flexible schedules — from 5 min a day',
    preply_f3: 'Money-back guarantee if not satisfied',
    preply_f4: 'Measurable results from the first class',
    preply_cta: '🎓 Book My First Lesson →',
    preply_comm_label: 'Trial Class',
    preply_comm_note: 'Start today, no commitment',
    preply_comm_badge: '🔥 LIMITED OFFER',
    section_all: 'All', section_span: 'Resources',
    audio_title: '🔊 Audio Companion —',
    audio_title_span: 'Native Pronunciation',
    audio_sub: 'Listen to real phrases spoken by the browser\'s native speech synthesis. Free, unlimited. Click ▶ for normal speed or 🐢 for slow.',
    audio_jp: '🇯🇵 Japanese', audio_fr: '🇫🇷 French', audio_kr: '🇰🇷 Korean',
    audio_preply_cta: '🎓 Practice with a Native Tutor on Preply →',
    quiz_h2_main: '🧠 Language', quiz_h2_span: 'Matchmaker 2.0',
    quiz_sub: 'Answer 10 quick questions and our AI will calculate the perfect resource for you.',
    quiz_q_of: 'of', quiz_next: 'Next →',
    quiz_finish: 'See My Result 🎯', quiz_restart: '↩ Retake Quiz',
    result_prefix: 'Your ideal language: ',
    result_desc_tutor: 'With your profile, personalized 1-on-1 classes with a native tutor on Preply are your best path. You\'ll learn up to 3x faster.',
    result_desc_kit: 'Start with your free {lang} Express Kit. It\'s the perfect step for your level and current goals.',
    result_cta_tutor: '🎓 Book Free Lesson on Preply →',
    result_cta_kit: '📥 Download Free {lang} Kit →',
    no_results: 'No resources found for your search.<br>Try a different term or clear the filter.',
    footer_copy: '© 2026 Language Resource Hub 2.0',
    footer_note: '· Some links are affiliate links (no extra cost to you)',
    urgency_text: '🔥 <strong>Flash Offer:</strong> Book your trial class on Preply with a special discount.',
    urgency_expires: 'Expires in:',
  }
};

function t(key) { return T[state.lang][key] || T.es[key] || key; }

/* ═══════════════════════════════════════════════════
   RESOURCE DATA — 15 CARDS (monetized only)
   Removed: Duolingo, Anki, JapanesePod101,
            FrenchPod101, KoreanClass101
   ═══════════════════════════════════════════════════ */
const RESOURCES = [
  /* ── 1. PREPLY HERO ─────────────────────────────── */
  {
    id: 1, hero: true, icon: '🎓',
    iconBg: 'linear-gradient(135deg,#F59E0B,#D97706)',
    category: 'tutors', langCodes: ['kr','jp','fr'],
    name:    { es: 'Preply — Tutores Nativos 1-a-1',     en: 'Preply — Native Tutors 1-on-1' },
    tagline: { es: 'Aprende 3x más rápido con un tutor certificado. Lección de prueba a precio especial. El método más efectivo del mercado.',
               en: 'Learn 3x faster with a certified tutor. Trial lesson at special price. The most effective method on the market.' },
    badges:  { es: [{ text: '👑 #1 RECOMENDADO', cls: 'badge-gold' }, { text: '🔥 TOP PICK', cls: 'badge-rose' }],
               en: [{ text: '👑 #1 RECOMMENDED', cls: 'badge-gold' }, { text: '🔥 TOP PICK', cls: 'badge-rose' }] },
    benefit: { es: '🔥 Clase de Prueba con 50% DTO',     en: '🔥 Trial Class with 50% OFF' },
    cta:     { es: 'Reservar Lección Gratis →',          en: 'Book Free Lesson →' },
    ctaCls: 'cta-gold',
    url:     { es: LINKS.preply, en: LINKS.preply },
    audio: null,
  },

  /* ── 2-4. KITS GUMROAD (100% ganancia) ──────────── */
  {
    id: 2, hero: false, icon: '🇰🇷',
    iconBg: 'linear-gradient(135deg,#C0392B,#E74C3C)',
    category: 'kit', langCodes: ['kr'],
    name:    { es: 'Kit Coreano Express',                en: 'Korean Express Kit' },
    tagline: { es: 'Guía completa Hangul + 100 frases + planificador 30 días en PDF. Descarga instantánea.',
               en: 'Complete Hangul guide + 100 phrases + 30-day planner PDF. Instant download.' },
    badges:  { es: [{ text: '🎁 100% GRATIS', cls: 'badge-em' }, { text: '📥 PDF', cls: 'badge-violet' }],
               en: [{ text: '🎁 100% FREE',   cls: 'badge-em' }, { text: '📥 PDF', cls: 'badge-violet' }] },
    benefit: { es: '🎁 100% GRATIS — PDF Descargable',  en: '🎁 100% FREE — Downloadable PDF' },
    cta:     { es: '📥 Descargar Gratis',               en: '📥 Download Free' },
    ctaCls: 'cta-em',
    url:     { es: LINKS.kitKrEs, en: LINKS.kitKrEn },
    audio: { phrase: '안녕하세요', romaji: 'Annyeonghaseyo', trans: { es: '¡Hola!', en: 'Hello!' }, lang: 'ko-KR' },
  },
  {
    id: 3, hero: false, icon: '🇯🇵',
    iconBg: 'linear-gradient(135deg,#DC2626,#B91C1C)',
    category: 'kit', langCodes: ['jp'],
    name:    { es: 'Kit Japonés Express',                en: 'Japanese Express Kit' },
    tagline: { es: 'Hiragana + Katakana + 50 frases de supervivencia. Todo lo que necesitas para empezar.',
               en: 'Hiragana + Katakana + 50 survival phrases. Everything you need to get started.' },
    badges:  { es: [{ text: '🎁 100% GRATIS', cls: 'badge-em' }, { text: '📥 PDF', cls: 'badge-sky' }],
               en: [{ text: '🎁 100% FREE',   cls: 'badge-em' }, { text: '📥 PDF', cls: 'badge-sky' }] },
    benefit: { es: '🎁 100% GRATIS — PDF Descargable',  en: '🎁 100% FREE — Downloadable PDF' },
    cta:     { es: '📥 Descargar Gratis',               en: '📥 Download Free' },
    ctaCls: 'cta-em',
    url:     { es: LINKS.kitJpEs, en: LINKS.kitJpEn },
    audio: { phrase: 'こんにちは', romaji: 'Konnichiwa', trans: { es: '¡Hola!', en: 'Hello!' }, lang: 'ja-JP' },
  },
  {
    id: 4, hero: false, icon: '🇫🇷',
    iconBg: 'linear-gradient(135deg,#1A3A6B,#1E3A8A)',
    category: 'kit', langCodes: ['fr'],
    name:    { es: 'Kit Francés Express',                en: 'French Express Kit' },
    tagline: { es: 'Pronunciación + vocabulario clave + 50 frases de la vida real. Empieza hoy mismo.',
               en: 'Pronunciation + key vocabulary + 50 real-life phrases. Start learning today.' },
    badges:  { es: [{ text: '🎁 100% GRATIS', cls: 'badge-em' }, { text: '📥 PDF', cls: 'badge-rose' }],
               en: [{ text: '🎁 100% FREE',   cls: 'badge-em' }, { text: '📥 PDF', cls: 'badge-rose' }] },
    benefit: { es: '🎁 100% GRATIS — PDF Descargable',  en: '🎁 100% FREE — Downloadable PDF' },
    cta:     { es: '📥 Descargar Gratis',               en: '📥 Download Free' },
    ctaCls: 'cta-em',
    url:     { es: LINKS.kitFrEs, en: LINKS.kitFrEn },
    audio: { phrase: 'Bonjour!', romaji: 'Bon-zhour', trans: { es: '¡Hola!', en: 'Hello!' }, lang: 'fr-FR' },
  },

  /* ── 5-7. APPS AFILIADAS ─────────────────────────── */
  {
    id: 5, hero: false, icon: '🟢',
    iconBg: 'linear-gradient(135deg,#15803D,#16A34A)',
    category: 'app', langCodes: ['fr','jp'],
    name:    { es: 'Babbel — App de Aprendizaje',        en: 'Babbel — Learning App' },
    tagline: { es: 'Lecciones cortas diseñadas por lingüistas. Gramática + conversación. Ideal para el día a día.',
               en: 'Short lessons designed by linguists. Grammar + conversation. Perfect for daily practice.' },
    badges:  { es: [{ text: '🥈 #2 EN APPS', cls: 'badge-violet' }, { text: '50% DTO', cls: 'badge-gold' }],
               en: [{ text: '🥈 #2 IN APPS', cls: 'badge-violet' }, { text: '50% OFF', cls: 'badge-gold' }] },
    benefit: { es: '⭐ Prueba Gratis 7 Días',            en: '⭐ Free Trial 7 Days' },
    cta:     { es: 'Probar Gratis 7 Días →',            en: 'Try Free 7 Days →' },
    ctaCls: 'cta-violet',
    url:     { es: LINKS.babbel, en: LINKS.babbel },
    audio: null,
  },
  {
    id: 6, hero: false, icon: '🌐',
    iconBg: 'linear-gradient(135deg,#0284C7,#0369A1)',
    category: 'tutors', langCodes: ['kr','jp','fr'],
    name:    { es: 'italki — Tutores & Intercambio',     en: 'italki — Tutors & Exchange' },
    tagline: { es: 'Conecta con tutores profesionales. Desde $5/hora. Clases 100% personalizadas.',
               en: 'Connect with professional tutors. From $5/hr. 100% personalized classes.' },
    badges:  { es: [{ text: '🥉 #3 TUTORES', cls: 'badge-sky' }],
               en: [{ text: '🥉 #3 TUTORS',  cls: 'badge-sky' }] },
    benefit: { es: '💬 Primera Clase Gratis',            en: '💬 First Class Free' },
    cta:     { es: 'Explorar Tutores →',                en: 'Explore Tutors →' },
    ctaCls: 'cta-outline',
    url:     { es: LINKS.italki, en: LINKS.italki },
    audio: null,
  },
  {
    id: 7, hero: false, icon: '🔮',
    iconBg: 'linear-gradient(135deg,#7C3AED,#5B21B6)',
    category: 'app', langCodes: ['fr','jp','kr'],
    name:    { es: 'Mondly — Aprendizaje AR/VR',         en: 'Mondly — AR/VR Learning' },
    tagline: { es: 'App innovadora con realidad aumentada y lecciones IA. App del Año de Google Play.',
               en: 'Innovative app with augmented reality and AI lessons. Google Play App of the Year.' },
    badges:  { es: [{ text: '🏅 APP DEL AÑO',    cls: 'badge-gold' }, { text: '30% DTO', cls: 'badge-violet' }],
               en: [{ text: '🏅 APP OF THE YEAR', cls: 'badge-gold' }, { text: '30% OFF', cls: 'badge-violet' }] },
    benefit: { es: '⭐ Prueba Gratis 7 Días',            en: '⭐ Free Trial 7 Days' },
    cta:     { es: 'Probar Mondly →',                   en: 'Try Mondly →' },
    ctaCls: 'cta-violet',
    url:     { es: LINKS.mondly, en: LINKS.mondly },
    audio: null,
  },

  /* ── 8-9. TUTORES PREPLY ESPECÍFICOS ─────────────── */
  {
    id: 8, hero: false, icon: '🇰🇷',
    iconBg: 'linear-gradient(135deg,#F59E0B,#B45309)',
    category: 'tutors', langCodes: ['kr'],
    name:    { es: 'Tutores de Coreano en Preply',       en: 'Korean Tutors on Preply' },
    tagline: { es: 'Tutores nativos coreanos certificados. Desde K-Pop hasta negocios. Primera lección especial.',
               en: 'Certified native Korean tutors. From K-Pop to business Korean. Special first lesson.' },
    badges:  { es: [{ text: '🏆 PREPLY VIP', cls: 'badge-gold' }, { text: '🔥 50% DTO', cls: 'badge-rose' }],
               en: [{ text: '🏆 PREPLY VIP', cls: 'badge-gold' }, { text: '🔥 50% OFF', cls: 'badge-rose' }] },
    benefit: { es: '🔥 Primera Lección 50% DTO',        en: '🔥 First Lesson 50% OFF' },
    cta:     { es: 'Buscar Tutor Coreano →',            en: 'Find Korean Tutor →' },
    ctaCls: 'cta-gold',
    url:     { es: LINKS.preply, en: LINKS.preply },
    audio: { phrase: '저는 한국어를 배우고 싶어요', romaji: 'Hangugeo baeugo sipeoyo',
             trans: { es: 'Quiero aprender coreano', en: 'I want to learn Korean' }, lang: 'ko-KR' },
  },
  {
    id: 9, hero: false, icon: '🇯🇵',
    iconBg: 'linear-gradient(135deg,#F59E0B,#92400E)',
    category: 'tutors', langCodes: ['jp'],
    name:    { es: 'Tutores de Japonés en Preply',       en: 'Japanese Tutors on Preply' },
    tagline: { es: 'Aprende Hiragana, Kanji y conversación con tutores japoneses nativos. Garantía de resultado.',
               en: 'Learn Hiragana, Kanji and conversation with certified native Japanese tutors.' },
    badges:  { es: [{ text: '🏆 PREPLY VIP', cls: 'badge-gold' }, { text: '🔥 50% DTO', cls: 'badge-rose' }],
               en: [{ text: '🏆 PREPLY VIP', cls: 'badge-gold' }, { text: '🔥 50% OFF', cls: 'badge-rose' }] },
    benefit: { es: '🔥 Primera Lección 50% DTO',        en: '🔥 First Lesson 50% OFF' },
    cta:     { es: 'Buscar Tutor Japonés →',            en: 'Find Japanese Tutor →' },
    ctaCls: 'cta-gold',
    url:     { es: LINKS.preply, en: LINKS.preply },
    audio: { phrase: '日本語を勉強しています', romaji: 'Nihongo wo benkyou shiteimasu',
             trans: { es: 'Estoy estudiando japonés', en: 'I am studying Japanese' }, lang: 'ja-JP' },
  },
  {
    id: 10, hero: false, icon: '🇫🇷',
    iconBg: 'linear-gradient(135deg,#F59E0B,#B45309)',
    category: 'tutors', langCodes: ['fr'],
    name:    { es: 'Tutores de Francés en Preply',       en: 'French Tutors on Preply' },
    tagline: { es: 'Habla francés fluido con tutores parisinos nativos. Pronunciación perfecta garantizada.',
               en: 'Speak fluent French with native Parisian tutors. Perfect pronunciation guaranteed.' },
    badges:  { es: [{ text: '🏆 PREPLY VIP', cls: 'badge-gold' }, { text: '🔥 50% DTO', cls: 'badge-rose' }],
               en: [{ text: '🏆 PREPLY VIP', cls: 'badge-gold' }, { text: '🔥 50% OFF', cls: 'badge-rose' }] },
    benefit: { es: '🔥 Primera Lección 50% DTO',        en: '🔥 First Lesson 50% OFF' },
    cta:     { es: 'Buscar Tutor Francés →',            en: 'Find French Tutor →' },
    ctaCls: 'cta-gold',
    url:     { es: LINKS.preply, en: LINKS.preply },
    audio: { phrase: 'J\'apprends le français', romaji: 'Zha-praN le fraN-seh',
             trans: { es: 'Estoy aprendiendo francés', en: 'I am learning French' }, lang: 'fr-FR' },
  },

  /* ── 11. PIMSLEUR ────────────────────────────────── */
  {
    id: 11, hero: false, icon: '🔊',
    iconBg: 'linear-gradient(135deg,#0F766E,#0D9488)',
    category: 'app', langCodes: ['fr','jp','kr'],
    name:    { es: 'Pimsleur — Método de Audio',         en: 'Pimsleur — Audio Method' },
    tagline: { es: 'Aprende mientras caminas. Método audio probado por 50+ años. Conversación nativa garantizada.',
               en: 'Learn while you walk. Audio method proven for 50+ years. Native conversation guaranteed.' },
    badges:  { es: [{ text: '🎧 MÉTODO #1 AUDIO', cls: 'badge-violet' }],
               en: [{ text: '🎧 #1 AUDIO METHOD', cls: 'badge-violet' }] },
    benefit: { es: '⭐ Prueba 7 Días Gratis',            en: '⭐ Try Free 7 Days' },
    cta:     { es: 'Probar 7 Días →',                   en: 'Try 7 Days →' },
    ctaCls: 'cta-violet',
    url:     { es: LINKS.pimsleur, en: LINKS.pimsleur },
    audio: null,
  },

  /* ── 12. FLUENTU ─────────────────────────────────── */
  {
    id: 12, hero: false, icon: '📺',
    iconBg: 'linear-gradient(135deg,#0284C7,#0EA5E9)',
    category: 'app', langCodes: ['jp','fr','kr'],
    name:    { es: 'FluentU — Videos Reales',            en: 'FluentU — Real Videos' },
    tagline: { es: 'Aprende con trailers, noticias y vlogs reales con subtítulos interactivos y vocabulario en contexto.',
               en: 'Learn with real trailers, news and vlogs with interactive subtitles and vocabulary in context.' },
    badges:  { es: [{ text: '📺 CONTENIDO NATIVO', cls: 'badge-sky' }],
               en: [{ text: '📺 NATIVE CONTENT',   cls: 'badge-sky' }] },
    benefit: { es: '🎬 Videos con Nativos Reales',       en: '🎬 Real Native Content' },
    cta:     { es: 'Ver Demo →',                        en: 'Watch Demo →' },
    ctaCls: 'cta-outline',
    url:     { es: LINKS.fluentu, en: LINKS.fluentu },
    audio: null,
  },

  /* ── 13-15. LIBROS AMAZON ────────────────────────── */
  {
    id: 13, hero: false, icon: '📖',
    iconBg: 'linear-gradient(135deg,#92400E,#B45309)',
    category: 'book', langCodes: ['kr'],
    name:    { es: 'Libro: Coreano para Principiantes',  en: 'Book: Korean for Beginners' },
    tagline: { es: 'El libro más completo de coreano. Hangul + gramática + ejercicios con audio online.',
               en: 'The most complete Korean book. Hangul + grammar + exercises with online audio.' },
    badges:  { es: [{ text: '📚 AMAZON', cls: 'badge-gold' }, { text: '⭐ MÁS VENDIDO', cls: 'badge-em' }],
               en: [{ text: '📚 AMAZON', cls: 'badge-gold' }, { text: '⭐ BESTSELLER',  cls: 'badge-em' }] },
    benefit: { es: '📚 Envío Prime Disponible',          en: '📚 Prime Shipping Available' },
    cta:     { es: 'Ver en Amazon →',                   en: 'View on Amazon →' },
    ctaCls: 'cta-gold',
    url:     { es: LINKS.amznKr, en: LINKS.amznKr },
    audio: null,
  },
  {
    id: 14, hero: false, icon: '📖',
    iconBg: 'linear-gradient(135deg,#6D28D9,#7C3AED)',
    category: 'book', langCodes: ['jp'],
    name:    { es: 'Libro: Japonés Esencial',            en: 'Book: Essential Japanese' },
    tagline: { es: 'Gramática japonesa completa. Hiragana + Katakana + Kanji básico. Amazon bestseller.',
               en: 'Complete Japanese grammar. Hiragana + Katakana + basic Kanji. Amazon bestseller.' },
    badges:  { es: [{ text: '📚 AMAZON', cls: 'badge-gold' }, { text: '⭐ MÁS VENDIDO', cls: 'badge-em' }],
               en: [{ text: '📚 AMAZON', cls: 'badge-gold' }, { text: '⭐ BESTSELLER',  cls: 'badge-em' }] },
    benefit: { es: '📚 Envío Prime Disponible',          en: '📚 Prime Shipping Available' },
    cta:     { es: 'Ver en Amazon →',                   en: 'View on Amazon →' },
    ctaCls: 'cta-gold',
    url:     { es: LINKS.amznJp, en: LINKS.amznJp },
    audio: null,
  },
  {
    id: 15, hero: false, icon: '📖',
    iconBg: 'linear-gradient(135deg,#1E40AF,#1D4ED8)',
    category: 'book', langCodes: ['fr'],
    name:    { es: 'Libro: Francés sin Esfuerzo',        en: 'Book: Effortless French' },
    tagline: { es: 'Pronunciación y gramática francesa paso a paso. Con CD de audio y ejercicios prácticos.',
               en: 'French pronunciation and grammar step by step. With audio CD and practical exercises.' },
    badges:  { es: [{ text: '📚 AMAZON', cls: 'badge-gold' }, { text: '⭐ MÁS VENDIDO', cls: 'badge-em' }],
               en: [{ text: '📚 AMAZON', cls: 'badge-gold' }, { text: '⭐ BESTSELLER',  cls: 'badge-em' }] },
    benefit: { es: '📚 Envío Prime Disponible',          en: '📚 Prime Shipping Available' },
    cta:     { es: 'Ver en Amazon →',                   en: 'View on Amazon →' },
    ctaCls: 'cta-gold',
    url:     { es: LINKS.amznFr, en: LINKS.amznFr },
    audio: null,
  },
];

/* ═══════════════════════════════════════════════════
   AUDIO PHRASES
   ═══════════════════════════════════════════════════ */
const AUDIO_PHRASES = {
  japones: [
    { native: 'こんにちは',           romaji: 'Konnichiwa',        trans: { es: 'Hola / Buenos días',   en: 'Hello / Good day' },       lang: 'ja-JP' },
    { native: 'ありがとうございます', romaji: 'Arigatou gozaimasu', trans: { es: 'Muchas gracias',       en: 'Thank you very much' },    lang: 'ja-JP' },
    { native: 'すみません',           romaji: 'Sumimasen',         trans: { es: 'Disculpe / Perdón',    en: 'Excuse me / Sorry' },      lang: 'ja-JP' },
    { native: 'いくらですか',         romaji: 'Ikura desu ka?',    trans: { es: '¿Cuánto cuesta?',      en: 'How much is it?' },        lang: 'ja-JP' },
    { native: 'トイレはどこですか',   romaji: 'Toire wa doko?',    trans: { es: '¿Dónde está el baño?', en: 'Where is the bathroom?' }, lang: 'ja-JP' },
    { native: 'わかりません',         romaji: 'Wakarimasen',       trans: { es: 'No entiendo',           en: 'I don\'t understand' },    lang: 'ja-JP' },
  ],
  frances: [
    { native: 'Bonjour!',                romaji: 'Bon-zhoor',          trans: { es: '¡Buenos días!',          en: 'Good morning!' },             lang: 'fr-FR' },
    { native: 'Merci beaucoup!',         romaji: 'Mer-si bo-koo',      trans: { es: '¡Muchas gracias!',       en: 'Thank you very much!' },      lang: 'fr-FR' },
    { native: 'Excusez-moi',            romaji: 'Eks-kyoo-zey mwah',  trans: { es: 'Disculpe',               en: 'Excuse me' },                 lang: 'fr-FR' },
    { native: 'Combien ça coûte?',      romaji: 'Kom-bYaN sa koot?',  trans: { es: '¿Cuánto cuesta?',       en: 'How much does it cost?' },    lang: 'fr-FR' },
    { native: 'Où sont les toilettes?', romaji: 'Oo soN le twa-let?', trans: { es: '¿Dónde están los baños?', en: 'Where are the bathrooms?' }, lang: 'fr-FR' },
    { native: 'Je ne comprends pas.',   romaji: 'Zhe ne kom-praN pa', trans: { es: 'No entiendo',             en: 'I don\'t understand' },       lang: 'fr-FR' },
  ],
  coreano: [
    { native: '안녕하세요',              romaji: 'Annyeonghaseyo',   trans: { es: '¡Hola! (formal)',    en: 'Hello! (formal)' },     lang: 'ko-KR' },
    { native: '감사합니다',              romaji: 'Gamsahamnida',     trans: { es: 'Gracias (formal)',   en: 'Thank you (formal)' },  lang: 'ko-KR' },
    { native: '죄송합니다',              romaji: 'Joesonghabnida',   trans: { es: 'Lo siento',          en: 'I\'m sorry' },          lang: 'ko-KR' },
    { native: '얼마예요?',               romaji: 'Eolmayeyo?',      trans: { es: '¿Cuánto cuesta?',   en: 'How much is it?' },     lang: 'ko-KR' },
    { native: '화장실이 어디예요?',      romaji: 'Hwajangsil eodi?', trans: { es: '¿Dónde está el baño?', en: 'Where is the bathroom?' }, lang: 'ko-KR' },
    { native: '모르겠어요',              romaji: 'Moreugeseoyo',     trans: { es: 'No lo sé',           en: 'I don\'t know' },       lang: 'ko-KR' },
  ],
};

/* ═══════════════════════════════════════════════════
   QUIZ — BILINGUAL
   ═══════════════════════════════════════════════════ */
const QUIZ_DATA = {
  es: [
    { q: '¿Cuánto tiempo puedes dedicar al aprendizaje cada día?',
      opts: ['5-10 minutos', '15-30 minutos', '30-60 minutos', 'Más de 1 hora'] },
    { q: '¿Cuál es tu objetivo principal?',
      opts: ['Viajar a ese país', 'Hablar con nativos', 'Ver series sin subtítulos', 'Trabajo o estudio'] },
    { q: '¿Qué idioma te interesa aprender?',
      opts: ['🇰🇷 Coreano', '🇯🇵 Japonés', '🇫🇷 Francés', 'Aún no lo sé'] },
    { q: '¿Cuál es tu nivel actual?',
      opts: ['Principiante total', 'Conozco lo básico', 'Nivel intermedio', 'Quiero reforzar'] },
    { q: '¿Prefieres aprender solo o con ayuda?',
      opts: ['Con apps interactivas', 'Con videos/audio', 'Con un tutor personal', 'Una mezcla de todo'] },
    { q: '¿Cuánto estás dispuesto a invertir al mes?',
      opts: ['$0 — solo gratis', 'Hasta $20/mes', 'Hasta $50/mes', 'Más de $50/mes'] },
    { q: '¿Cuándo necesitas usar el idioma?',
      opts: ['En menos de 3 meses', 'En 6 meses', 'En 1 año', 'Sin prisa, quiero bases sólidas'] },
    { q: '¿Qué te motiva más para aprender?',
      opts: ['K-Pop / Anime / J-Pop', 'Cultura y gastronomía', 'Oportunidades laborales', 'Amor por los idiomas'] },
    { q: '¿Cuál es tu mayor dificultad al aprender idiomas?',
      opts: ['La pronunciación', 'El vocabulario', 'La gramática', 'La constancia'] },
    { q: '¿Qué aspecto valoras más en una herramienta de aprendizaje?',
      opts: ['Que sea efectiva y rápida', 'Que tenga audio nativo', 'Clases personalizadas 1-a-1', 'Contenido visual/video'] },
  ],
  en: [
    { q: 'How much time can you dedicate to learning each day?',
      opts: ['5-10 minutes', '15-30 minutes', '30-60 minutes', 'More than 1 hour'] },
    { q: 'What is your main goal?',
      opts: ['Travel to that country', 'Talk with native speakers', 'Watch shows without subtitles', 'Work or study'] },
    { q: 'Which language are you interested in learning?',
      opts: ['🇰🇷 Korean', '🇯🇵 Japanese', '🇫🇷 French', 'Not sure yet'] },
    { q: 'What is your current level?',
      opts: ['Complete beginner', 'I know the basics', 'Intermediate level', 'I want to reinforce'] },
    { q: 'Do you prefer to learn alone or with help?',
      opts: ['With interactive apps', 'With videos/audio', 'With a personal tutor', 'A mix of everything'] },
    { q: 'How much are you willing to invest per month?',
      opts: ['$0 — free only', 'Up to $20/month', 'Up to $50/month', 'More than $50/month'] },
    { q: 'When do you need to use the language?',
      opts: ['In less than 3 months', 'In 6 months', 'In 1 year', 'No rush, solid foundations'] },
    { q: 'What motivates you most to learn?',
      opts: ['K-Pop / Anime / J-Pop', 'Culture and gastronomy', 'Career opportunities', 'Love of languages'] },
    { q: 'What is your biggest difficulty when learning languages?',
      opts: ['Pronunciation', 'Vocabulary', 'Grammar', 'Consistency'] },
    { q: 'What do you value most in a learning tool?',
      opts: ['Fast and effective', 'Native audio', 'Personalized 1-on-1 classes', 'Visual/video content'] },
  ]
};

/* ═══════════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════════ */
const state = {
  search: '',
  filter: 'all',
  currentAudioLang: 'japones',
  lang: localStorage.getItem('hubLang') || 'es',
  quiz: { current: 0, answers: {}, done: false },
};

/* ═══════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  renderCards();
  renderAudioPhrases(state.currentAudioLang);
  renderQuiz();
  setupSearch();
  setupFilters();
  setupAudioTabs();
  setupKeyboard();
  animateStats();
  updateLangButtons();
  startCountdown();
  typeHeroSubtitle();
});

/* ═══════════════════════════════════════════════════
   COUNTDOWN & TYPING EFFECTS (Growth)
   ═══════════════════════════════════════════════════ */
function startCountdown() {
  const el = document.getElementById('countdown-timer');
  if(!el) return;
  let targetTime = localStorage.getItem('preply_offer_end');
  if(!targetTime || targetTime < Date.now()) {
    targetTime = Date.now() + 2 * 60 * 60 * 1000;
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
  
  // Guardamos el i18n para no perderlo al cambiar de idioma
  const originalKey = el.dataset.i18n;
  const lang = state.lang;
  const text = T[lang][originalKey] || T.es[originalKey];
  
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

/* ═══════════════════════════════════════════════════
   i18n
   ═══════════════════════════════════════════════════ */
function switchLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('hubLang', lang);
  updateLangButtons();
  applyTranslations();
  renderCards();
  renderAudioPhrases(state.currentAudioLang);
  renderQuiz();
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === state.lang);
  });
}

function applyTranslations() {
  const lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = T[lang][key] || T.es[key];
    if (!val) return;
    if (el.tagName === 'INPUT') { el.placeholder = val; }
    else if (el.id === 'hero-sub-typing') { el.textContent = val; } // No animar al cambiar idioma para que sea rápido
    else { el.innerHTML = val; }
  });

  const si = document.getElementById('search-input');
  if (si) si.placeholder = t('search_ph');

  const pillKeys = { 'all':'f_all','kr':'f_kr','jp':'f_jp','fr':'f_fr',
                     'tutors':'f_tutors','kit':'f_kits','app':'f_apps','book':'f_books' };
  document.querySelectorAll('.filter-pill').forEach(p => {
    const k = pillKeys[p.dataset.filter];
    if (k) p.innerHTML = t(k);
  });

  const tabKeys = { 'japones':'audio_jp','frances':'audio_fr','coreano':'audio_kr' };
  document.querySelectorAll('.audio-tab').forEach(tab => {
    const k = tabKeys[tab.dataset.lang];
    if (k) tab.textContent = t(k);
  });

  const nextBtn = document.getElementById('btn-next');
  if (nextBtn && !state.quiz.done) {
    nextBtn.textContent = state.quiz.current === QUIZ_DATA[lang].length - 1
      ? t('quiz_finish') : t('quiz_next');
  }
}

/* ═══════════════════════════════════════════════════
   CARD RENDERING
   ═══════════════════════════════════════════════════ */
function getFilteredResources() {
  const lang = state.lang;
  const q = state.search.toLowerCase();
  return RESOURCES.filter(r => {
    const matchSearch = !q ||
      r.name[lang].toLowerCase().includes(q) ||
      r.tagline[lang].toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.langCodes.join(' ').toLowerCase().includes(q);
    const matchFilter = state.filter === 'all' ||
      r.langCodes.includes(state.filter) ||
      r.category === state.filter;
    return matchSearch && matchFilter;
  });
}

function renderCards() {
  const grid      = document.getElementById('cards-grid');
  const noResults = document.getElementById('no-results');
  const countEl   = document.getElementById('result-count');
  const lang      = state.lang;
  const filtered  = getFilteredResources();

  const word = lang === 'es'
    ? `${filtered.length} recurso${filtered.length !== 1 ? 's' : ''}`
    : `${filtered.length} resource${filtered.length !== 1 ? 's' : ''}`;
  if (countEl) countEl.textContent = word;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.classList.add('visible');
    noResults.innerHTML = `<div class="no-results-icon">🔍</div><p>${t('no_results')}</p>`;
    return;
  }
  noResults.classList.remove('visible');

  grid.innerHTML = filtered.map((r, i) => `
    <article class="resource-card${r.hero ? ' hero-card' : ''}"
             style="animation-delay:${i * 0.06}s">
      <div class="card-header">
        <div class="card-icon" style="background:${r.iconBg}">${r.icon}</div>
        <div class="card-badges">
          ${r.badges[lang].map(b => `<span class="badge ${b.cls}">${b.text}</span>`).join('')}
        </div>
      </div>
      <div>
        <div class="card-name">${r.name[lang]}</div>
        <div class="card-tagline">${r.tagline[lang]}</div>
      </div>
      ${r.audio ? `
      <div class="audio-player">
        <button class="audio-btn" id="audio-card-${r.id}"
                onclick="speakPhrase('${r.audio.phrase.replace(/'/g,"\\'")}','${r.audio.lang}','audio-card-${r.id}')">
          🔊 ${r.audio.romaji} — ${r.audio.trans[lang]}
        </button>
      </div>` : ''}
      <div class="card-meta">
        <span class="card-benefit">${r.benefit[lang]}</span>
      </div>
      <a href="${r.url[lang]}" target="_blank" rel="noopener" class="card-cta ${r.ctaCls}">
        ${r.cta[lang]}
      </a>
    </article>
  `).join('');
}

/* ═══════════════════════════════════════════════════
   SEARCH & FILTER
   ═══════════════════════════════════════════════════ */
function setupSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.addEventListener('input', e => { state.search = e.target.value; renderCards(); });
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

/* ═══════════════════════════════════════════════════
   AUDIO ENGINE — Web Speech API
   ═══════════════════════════════════════════════════ */
function speakPhrase(text, lang, btnId) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const btn = document.getElementById(btnId);
  if (btn) btn.classList.add('playing');
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang; utter.rate = 0.85; utter.pitch = 1; utter.volume = 1;
  utter.onend = () => { if (btn) btn.classList.remove('playing'); };
  utter.onerror = () => { if (btn) btn.classList.remove('playing'); };
  window.speechSynthesis.speak(utter);
}

function speakSlow(text, lang, btnId) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const btn = document.getElementById(btnId);
  if (btn) btn.classList.add('playing');
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang; utter.rate = 0.5; utter.pitch = 1; utter.volume = 1;
  utter.onend = () => { if (btn) btn.classList.remove('playing'); };
  utter.onerror = () => { if (btn) btn.classList.remove('playing'); };
  window.speechSynthesis.speak(utter);
}

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
  if (!container) return;
  const phrases = AUDIO_PHRASES[lang];
  const preplyCtaTxt = t('audio_preply_cta');

  container.innerHTML = phrases.map((p, i) => `
    <div class="phrase-card">
      <div class="phrase-text">
        <div class="phrase-native">${p.native}</div>
        <div class="phrase-romaji">${p.romaji}</div>
        <div class="phrase-trans">${p.trans[state.lang]}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:center">
        <button class="play-btn" id="play-${lang}-${i}"
                onclick="speakPhrase('${p.native.replace(/'/g,"\\'")}','${p.lang}','play-${lang}-${i}')"
                title="Normal">▶</button>
        <button class="play-btn" id="slow-${lang}-${i}"
                onclick="speakSlow('${p.native.replace(/'/g,"\\'")}','${p.lang}','slow-${lang}-${i}')"
                title="Slow" style="font-size:11px;width:32px;height:32px">🐢</button>
      </div>
    </div>
  `).join('') + `
    <div class="phrase-preply-cta">
      <a href="${LINKS.preply}" target="_blank" rel="noopener" class="audio-preply-btn">
        ${preplyCtaTxt}
      </a>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════
   QUIZ ENGINE
   ═══════════════════════════════════════════════════ */
function renderQuiz() { updateQuizProgress(); renderQuestion(); }

function updateQuizProgress() {
  const lang    = state.lang;
  const total   = QUIZ_DATA[lang].length;
  const current = state.quiz.current;
  const pct     = Math.round((current / total) * 100);
  const label   = `${lang === 'es' ? 'Pregunta' : 'Question'} ${Math.min(current+1,total)} ${t('quiz_q_of')} ${total}`;
  const fill    = document.getElementById('quiz-progress-fill');
  const lbl     = document.getElementById('quiz-progress-label');
  const num     = document.getElementById('quiz-question-num');
  if (fill) fill.style.width = pct + '%';
  if (lbl)  lbl.textContent  = label;
  if (num)  num.textContent  = label;
}

function renderQuestion() {
  const lang   = state.lang;
  const wrap   = document.getElementById('quiz-question-wrap');
  const result = document.getElementById('quiz-result');
  const nav    = document.getElementById('quiz-nav');
  if (!wrap) return;

  if (state.quiz.done) {
    wrap.style.display = 'none';
    if (nav) nav.style.display = 'none';
    showQuizResult();
    return;
  }

  wrap.style.display = 'block';
  if (result) result.classList.remove('visible');
  if (nav) nav.style.display = 'flex';

  const q     = QUIZ_DATA[lang][state.quiz.current];
  const saved = state.quiz.answers[state.quiz.current];
  const qtEl  = document.getElementById('quiz-question-text');
  if (qtEl) qtEl.textContent = q.q;

  const optsEl = document.getElementById('quiz-options');
  if (optsEl) {
    optsEl.innerHTML = q.opts.map((opt, i) => `
      <button class="quiz-option${saved === i ? ' selected' : ''}"
              onclick="selectOption(${i})">
        <span class="option-key">${String.fromCharCode(65+i)}</span>
        ${opt}
      </button>`).join('');
  }

  const nextBtn = document.getElementById('btn-next');
  if (nextBtn) {
    nextBtn.textContent = state.quiz.current === QUIZ_DATA[lang].length - 1
      ? t('quiz_finish') : t('quiz_next');
  }
}

function selectOption(idx) {
  state.quiz.answers[state.quiz.current] = idx;
  document.querySelectorAll('.quiz-option').forEach((btn, i) => {
    btn.classList.toggle('selected', i === idx);
  });
}

function nextQuestion() {
  const lang = state.lang;
  if (state.quiz.answers[state.quiz.current] === undefined) selectOption(0);
  if (state.quiz.current < QUIZ_DATA[lang].length - 1) {
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
  if (!result) return;
  result.classList.add('visible');

  const l        = state.lang;
  const langAns  = state.quiz.answers[2] || 0;
  const styleAns = state.quiz.answers[4] || 0;
  const budgetAns= state.quiz.answers[5] || 0;

  const langNames = { es: ['Coreano','Japonés','Francés','Coreano'],
                      en: ['Korean', 'Japanese','French', 'Korean'] };
  const kitUrls   = { es: [LINKS.kitKrEs,LINKS.kitJpEs,LINKS.kitFrEs,LINKS.kitKrEs],
                      en: [LINKS.kitKrEn,LINKS.kitJpEn,LINKS.kitFrEn,LINKS.kitKrEn] };

  const langName  = langNames[l][langAns] || langNames[l][0];
  const kitUrl    = kitUrls[l][langAns]   || kitUrls[l][0];
  const useTutor  = styleAns === 2 || budgetAns >= 1;
  const score     = Math.round((Object.keys(state.quiz.answers).length / QUIZ_DATA[l].length) * 100);
  const mainUrl   = useTutor ? LINKS.preply : kitUrl;
  const mainCta   = useTutor ? t('result_cta_tutor') : t('result_cta_kit').replace('{lang}', langName);
  const desc      = useTutor ? t('result_desc_tutor') : t('result_desc_kit').replace('{lang}', langName);

  const scoreEl = document.getElementById('result-score');
  const titleEl = document.getElementById('result-title');
  const descEl  = document.getElementById('result-desc');
  const ctaEl   = document.getElementById('result-cta');

  if (scoreEl) scoreEl.textContent = score + '%';
  if (titleEl) titleEl.textContent = t('result_prefix') + langName;
  if (descEl)  descEl.textContent  = desc;
  if (ctaEl)   { ctaEl.href = mainUrl; ctaEl.textContent = mainCta; }

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
  const r = document.getElementById('quiz-result');
  if (r) r.classList.remove('visible');
  renderQuiz();
}

/* Global expose */
window.switchLanguage = switchLanguage;
window.selectOption   = selectOption;
window.nextQuestion   = nextQuestion;
window.restartQuiz    = restartQuiz;
window.speakPhrase    = speakPhrase;
window.speakSlow      = speakSlow;

/* ═══════════════════════════════════════════════════
   KEYBOARD SHORTCUTS
   ═══════════════════════════════════════════════════ */
function setupKeyboard() {
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      const input = document.getElementById('search-input');
      if (input) { input.focus(); input.select(); }
    }
    if (e.key === 'Escape') {
      const input = document.getElementById('search-input');
      if (input) { input.value = ''; state.search = ''; renderCards(); input.blur(); }
    }
  });
}

/* ═══════════════════════════════════════════════════
   ANIMATED STATS COUNTER
   ═══════════════════════════════════════════════════ */
function animateStats() {
  const stats = [
    { id: 'stat-students',  target: 1420,  format: v => v.toLocaleString() + '+' },
    { id: 'stat-resources', target: 15,    format: v => v.toString() },
    { id: 'stat-languages', target: 3,     format: v => v.toString() },
    { id: 'stat-tutors',    target: 32000, format: v => Math.floor(v/1000) + 'K+' },
  ];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      stats.forEach(s => {
        const el = document.getElementById(s.id);
        if (!el) return;
        let c = 0;
        const step  = Math.ceil(s.target / 50);
        const timer = setInterval(() => {
          c = Math.min(c + step, s.target);
          el.textContent = s.format(c);
          if (c >= s.target) clearInterval(timer);
        }, 30);
      });
      observer.disconnect();
    });
  }, { threshold: 0.2 });
  const bar = document.querySelector('.stats-bar');
  if (bar) observer.observe(bar);
}
