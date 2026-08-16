/* ═══════════════════════════════════════════════════════════════
   app.js — Language Resource Hub 2.0 · i18n ES/EN
   ZERO TRAFFIC LEAKAGE — Solo Preply + Gumroad
   ═══════════════════════════════════════════════════════════════ */
'use strict';

/* ─── AFFILIATE LINKS ─────────────────────────────── */
const LINKS = {
  preply:   'https://preply.sjv.io/c/7528742/1987575/24422',
  kitKrEs:  'https://saludfuturo.gumroad.com/l/pzbjtk',
  kitKrEn:  'https://saludfuturo.gumroad.com/l/bfnzx',
  kitJpEs:  'https://saludfuturo.gumroad.com/l/citnbf',
  kitJpEn:  'https://saludfuturo.gumroad.com/l/inxkm',
  kitFrEs:  'https://saludfuturo.gumroad.com/l/qekjnb',
  kitFrEn:  'https://saludfuturo.gumroad.com/l/wdzvgv',
  plannerEs:  'https://saludfuturo.gumroad.com/l/fntbtl',
  plannerEn:  'https://saludfuturo.gumroad.com/l/sqxait',
  shedPlans:  'https://7cf44lrrjjzeu57nx7kjr9ohfn.hop.clickbank.net',
};

/* ═══════════════════════════════════════════════════
   i18n TRANSLATIONS
   ═══════════════════════════════════════════════════ */
const T = {
  es: {
    nav_resources: 'Recursos', nav_audio: 'Audio Nativo',
    nav_quiz: 'Quiz', nav_cta: '🎓 Tutor Gratis',
    hero_badge: '9 Recursos Seleccionados · Audio Nativo · Quiz IA',
    hero_h1: 'El Hub Definitivo para<br><span class="grad-gold">Coreano</span>, <span class="grad-em">Japonés</span><br>y Francés',
    hero_sub: 'Kits PDF gratis + tutores nativos 1-a-1. Todo curado. Cero relleno. 100% gratuito para empezar.',
    search_ph: 'Buscar recursos, idiomas...',
    f_all: '🌐 Todos', f_kr: '🇰🇷 Coreano', f_jp: '🇯🇵 Japonés',
    f_fr: '🇫🇷 Francés', f_tutors: '🎓 Tutores', f_kits: '📥 Kits Gratis',
    stat_students: 'Estudiantes este mes', stat_resources: 'Recursos seleccionados',
    stat_languages: 'Idiomas disponibles',  stat_commission: 'Tutores nativos disponibles',
    preply_eyebrow: '👑 Recomendado #1 por Estudiantes',
    preply_title: 'Aprende 3× más rápido con un <span>Tutor Nativo en Preply</span>',
    preply_desc: 'Clases 1-a-1 personalizadas con tutores certificados de Coreano, Japonés y Francés. Más de 32,000 tutores. Tu primera lección a precio especial.',
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
    audio_sub: 'Escucha frases reales con síntesis de voz nativa. Sin costo, sin límites. ▶ normal · 🐢 despacio.',
    audio_jp: '🇯🇵 Japonés', audio_fr: '🇫🇷 Francés', audio_kr: '🇰🇷 Coreano',
    audio_preply_cta: '🎓 Practica con un Tutor Nativo en Preply →',
    quiz_h2_main: '🧠 Language', quiz_h2_span: 'Matchmaker 2.0',
    quiz_sub: 'Responde 10 preguntas rápidas y nuestra IA calculará el recurso perfecto para ti.',
    quiz_q_of: 'de', quiz_next: 'Siguiente →',
    quiz_finish: 'Ver Mi Resultado 🎯', quiz_restart: '↩ Repetir Quiz',
    result_prefix: 'Tu idioma ideal: ',
    result_desc_tutor: 'Para tu perfil, las clases 1-a-1 personalizadas con un tutor nativo en Preply son tu mejor camino. Aprenderás hasta 3 veces más rápido.',
    result_desc_kit: 'Comienza con tu Kit Express de {lang} gratis. Es el paso perfecto para tu nivel y objetivos.',
    result_cta_tutor: '🎓 Reservar Lección Gratis en Preply →',
    result_cta_kit: '📥 Descargar Kit Gratis de {lang} →',
    no_results: 'No se encontraron recursos.<br>Intenta con otro término o borra el filtro.',
    footer_copy: '© 2026 Language Resource Hub 2.0',
    footer_note: '· Algunos enlaces son afiliados (sin costo adicional para ti)',
    nav_tools: '🛠️ Tools',
    tools_title_1: '🛠️ Herramientas', tools_title_2: 'Gratis',
    tools_subtitle: '2 apps interactivas · Sin registro',
    pfp_title: 'Generador de PFP Estético',
    pfp_desc: 'Convierte tu foto en un avatar con filtros de anime, neon, vintage y más. 100% en tu navegador — sin subir datos.',
    pfp_upload: 'Haz clic o arrastra tu imagen aquí',
    pfp_hint: 'JPG, PNG, WEBP · Máx. 10 MB',
    pfp_download: '⬇️ Descargar PFP',
    pfp_cta_text: '¿Quieres mejorar tu pronunciación con tu nuevo avatar?',
    pfp_cta_btn: '🎓 Prueba Preply Gratis →',
    filter_none: '🌟 Original', filter_anime: '🎌 Anime',
    filter_neon: '💜 Neon', filter_vintage: '🎞️ Vintage',
    filter_bw: '🖤 B&W', filter_warm: '🌅 Warm', filter_cool: '🧊 Cool',
    wc_title: 'Contador de Palabras Inteligente',
    wc_desc: 'Pega tu texto y obtén: palabras, caracteres, tiempo de lectura y densidad de vocabulario. Ideal para redactar en el idioma que estudias.',
    wc_words: 'Palabras', wc_chars: 'Caracteres', wc_read: 'Lectura', wc_unique: 'Únicas',
    wc_density_title: '📊 Top Palabras',
    wc_cta_text: 'Aprende a redactar mejor en coreano, japonés o francés.',
    wc_cta_btn: '🎓 Clases con Tutor Nativo →',
    trust_text: 'estudiantes satisfechos · <strong>4.9/5</strong> promedio',
    hero_live_badge: '🎓 Sesión en vivo ahora',
    dest_title_kr: 'Coreano', dest_sub_kr: 'Seúl · K-pop · K-drama', dest_cta_kr: 'Kit Gratis →',
    dest_title_jp: 'Japonés', dest_sub_jp: 'Tokio · Anime · Cultura', dest_cta_jp: 'Kit Gratis →',
    dest_title_fr: 'Francés', dest_sub_fr: 'París · Lifestyle · Gastronomía', dest_cta_fr: 'Kit Gratis →',
    tp_badge: 'Curado con IA · Experiencias reales',
    tp_title: 'Diseña tu viaje perfecto en Japón, Corea del Sur o Francia',
    tp_step1: 'Destino', tp_step2: 'Duración', tp_step3: 'Interés',
    tp_label_dest: 'Destino', tp_label_dur: 'Duración', tp_label_int: 'Interés Principal',
    tp_btn_generate: '⚡ Generar Mi Itinerario Personalizado',
    tp_top_picks: 'Experiencias que encajan con tu estilo',
    tp_pick1: 'Tour guiado, gastronomía local y skyline nocturno',
    tp_pick2: 'Rutas inteligentes por ciudad y paisajes emblemáticos',
    tp_pick3: 'Frases útiles para comunicarte con confianza',
    tp_cta_preply: '🎓 ¿Viajas pronto? Domina las frases básicas con un tutor nativo en Preply antes de tu vuelo →',
    tp_cta_gumroad: '📥 Descarga tu Guía de Supervivencia para Viajeros en PDF Gratis →',
    tp_opt_jp: '🇯🇵 Japón', tp_opt_kr: '🇰🇷 Corea del Sur', tp_opt_fr: '🇫🇷 Francia',
    tp_dur_3: '3 Días (Express)', tp_dur_5: '5 Días (Esencial)', tp_dur_7: '7 Días (Inmersión Total)',
    tp_int_culture: '🏯 Cultura & Templos', tp_int_food: '🍜 Gastronomía & Street Food',
    tp_int_shopping: '🛍️ Compras & Moda / K-Pop & Anime', tp_int_nature: '🌲 Naturaleza & Paisajes',
  },
  en: {
    nav_resources: 'Resources', nav_audio: 'Native Audio',
    nav_quiz: 'Quiz', nav_cta: '🎓 Free Tutor',
    hero_badge: '9 Selected Resources · Native Audio · AI Quiz',
    hero_h1: 'The Ultimate Hub to Learn<br><span class="grad-gold">Korean</span>, <span class="grad-em">Japanese</span><br>and French',
    hero_sub: 'Free PDF kits + native 1-on-1 tutors. All curated. Zero fluff. 100% free to get started.',
    search_ph: 'Search resources, languages...',
    f_all: '🌐 All', f_kr: '🇰🇷 Korean', f_jp: '🇯🇵 Japanese',
    f_fr: '🇫🇷 French', f_tutors: '🎓 Tutors', f_kits: '📥 Free Kits',
    stat_students: 'Students this month', stat_resources: 'Selected resources',
    stat_languages: 'Languages available', stat_commission: 'Native tutors available',
    preply_eyebrow: '👑 #1 Recommended by Students',
    preply_title: 'Learn 3× faster with a <span>Native Tutor on Preply</span>',
    preply_desc: 'Personalized 1-on-1 classes with certified tutors for Korean, Japanese and French. Over 32,000 tutors. Your first lesson at special price.',
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
    audio_sub: 'Listen to real phrases with native speech synthesis. Free, unlimited. ▶ normal · 🐢 slow.',
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
    no_results: 'No resources found.<br>Try a different term or clear the filter.',
    footer_copy: '© 2026 Language Resource Hub 2.0',
    footer_note: '· Some links are affiliate links (no extra cost to you)',
    nav_tools: '🛠️ Tools',
    tools_title_1: '🛠️ Free', tools_title_2: 'Tools',
    tools_subtitle: '3 interactive apps · No sign-up needed',
    pfp_title: 'Aesthetic PFP Generator',
    pfp_desc: 'Turn your photo into an avatar with anime, neon, vintage filters & more. 100% in your browser — no data uploaded.',
    pfp_upload: 'Click or drag your image here',
    pfp_hint: 'JPG, PNG, WEBP · Max 10 MB',
    pfp_download: '⬇️ Download PFP',
    pfp_cta_text: 'Want to improve your pronunciation with your new look?',
    pfp_cta_btn: '🎓 Try Preply for Free →',
    filter_none: '🌟 Original', filter_anime: '🎌 Anime',
    filter_neon: '💜 Neon', filter_vintage: '🎞️ Vintage',
    filter_bw: '🖤 B&W', filter_warm: '🌅 Warm', filter_cool: '🧊 Cool',
    wc_title: 'Smart Word Counter',
    wc_desc: 'Paste your text and get: word count, characters, reading time and vocabulary density. Great for writing in the language you study.',
    wc_words: 'Words', wc_chars: 'Characters', wc_read: 'Read time', wc_unique: 'Unique',
    wc_density_title: '📊 Top Words',
    wc_cta_text: 'Learn to write better in Korean, Japanese or French.',
    wc_cta_btn: '🎓 Classes with Native Tutor →',
    trust_text: 'happy students · <strong>4.9/5</strong> rating',
    hero_live_badge: '🎓 Live 1-on-1 Session Now',
    dest_title_kr: 'Korean', dest_sub_kr: 'Seoul · K-pop · K-drama', dest_cta_kr: 'Free Kit →',
    dest_title_jp: 'Japanese', dest_sub_jp: 'Tokyo · Anime · Culture', dest_cta_jp: 'Free Kit →',
    dest_title_fr: 'French', dest_sub_fr: 'Paris · Lifestyle · Cuisine', dest_cta_fr: 'Free Kit →',
    tp_badge: 'AI Curated · Real Travel Experiences',
    tp_title: 'Plan Your Perfect Trip to Japan, South Korea or France',
    tp_step1: 'Destination', tp_step2: 'Duration', tp_step3: 'Interest',
    tp_label_dest: 'Destination', tp_label_dur: 'Duration', tp_label_int: 'Main Interest',
    tp_btn_generate: '⚡ Generate My Custom Itinerary',
    tp_top_picks: 'Experiences tailored to your style',
    tp_pick1: 'Guided tours, authentic food & nighttime skyline',
    tp_pick2: 'Smart routes across iconic landmarks and cities',
    tp_pick3: 'Essential local phrases to speak with confidence',
    tp_cta_preply: '🎓 Traveling soon? Master basic phrases with a native tutor on Preply before departure →',
    tp_cta_gumroad: '📥 Download Your Free Traveler Survival PDF Guide →',
    tp_opt_jp: '🇯🇵 Japan', tp_opt_kr: '🇰🇷 South Korea', tp_opt_fr: '🇫🇷 France',
    tp_dur_3: '3 Days (Express)', tp_dur_5: '5 Days (Essential)', tp_dur_7: '7 Days (Total Immersion)',
    tp_int_culture: '🏯 Culture & Temples', tp_int_food: '🍜 Gastronomy & Street Food',
    tp_int_shopping: '🛍️ Shopping & Fashion / K-Pop & Anime', tp_int_nature: '🌲 Nature & Scenic Landscapes',
  }
};

function t(key) { return T[state.lang][key] || T.es[key] || key; }

/* ═══════════════════════════════════════════════════
   RESOURCES — 9 CARDS
   ✅ 1  × Preply Hero ($20/lección)
   ✅ 3  × Kits Gumroad (100% ganancia)
   ✅ 3  × Tutores Preply por idioma ($20/lección)
   ✅ 2  × Cross-Promo (Student Planner + DIY Shed Plans $90)
   ═══════════════════════════════════════════════════ */
const RESOURCES = [

  /* ── 1. PREPLY HERO ─────────────────────────────── */
  {
    id: 1, hero: true, icon: '🎓',
    iconBg: 'linear-gradient(135deg,#F59E0B,#D97706)',
    img: 'assets/img/thumb-preply-main.jpg',
    category: 'tutors', langCodes: ['kr','jp','fr'],
    name:    { es: 'Preply — Tutores Nativos 1-a-1',     en: 'Preply — Native Tutors 1-on-1' },
    tagline: { es: 'Aprende 3x más rápido con un tutor certificado. Primera lección a precio especial. El método más efectivo del mercado.',
               en: 'Learn 3x faster with a certified tutor. First lesson at special price. The most effective method on the market.' },
    badges:  { es: [{ text: '👑 #1 RECOMENDADO', cls: 'badge-gold' }, { text: '🔥 MEJOR ELECCIÓN', cls: 'badge-rose' }],
               en: [{ text: '👑 #1 RECOMMENDED', cls: 'badge-gold' }, { text: '🔥 BEST PICK',       cls: 'badge-rose' }] },
    benefit: { es: '🔥 Clase de Prueba con 50% DTO',     en: '🔥 Trial Class with 50% OFF' },
    cta:     { es: '🎓 Reservar Lección Gratis →',       en: '🎓 Book Free Lesson →' },
    ctaCls: 'cta-gold',
    url:     { es: LINKS.preply, en: LINKS.preply },
    audio: null,
  },

  /* ── 2-4. KITS GUMROAD ──────────────────────────── */
  {
    id: 2, hero: false, icon: '🇰🇷',
    iconBg: 'linear-gradient(135deg,#C0392B,#E74C3C)',
    img: 'assets/img/thumb-kr-kit.jpg',
    category: 'kit', langCodes: ['kr'],
    name:    { es: 'Kit Coreano Express — Descarga Gratis', en: 'Korean Express Kit — Free Download' },
    tagline: { es: 'Guía completa: Hangul + 100 frases esenciales + planificador 30 días. PDF descarga instantánea.',
               en: 'Complete guide: Hangul + 100 essential phrases + 30-day planner. Instant PDF download.' },
    badges:  { es: [{ text: '🎁 100% GRATIS', cls: 'badge-em' }, { text: '📥 PDF INSTANT', cls: 'badge-violet' }],
               en: [{ text: '🎁 100% FREE',   cls: 'badge-em' }, { text: '📥 PDF INSTANT', cls: 'badge-violet' }] },
    benefit: { es: '🎁 Descarga Gratis — Sin Registro',  en: '🎁 Free Download — No Sign-up' },
    cta:     { es: '📥 Obtener Kit Coreano →',           en: '📥 Get Korean Kit →' },
    ctaCls: 'cta-em',
    url:     { es: LINKS.kitKrEs, en: LINKS.kitKrEn },
    audio: { phrase: '안녕하세요', romaji: 'Annyeonghaseyo',
             trans: { es: '¡Hola! (formal)', en: 'Hello! (formal)' }, lang: 'ko-KR' },
  },
  {
    id: 3, hero: false, icon: '🇯🇵',
    iconBg: 'linear-gradient(135deg,#DC2626,#B91C1C)',
    img: 'assets/img/thumb-jp-kit.jpg',
    category: 'kit', langCodes: ['jp'],
    name:    { es: 'Kit Japonés Express — Descarga Gratis', en: 'Japanese Express Kit — Free Download' },
    tagline: { es: 'Hiragana + Katakana + 50 frases de supervivencia. Todo lo que necesitas para comenzar ya.',
               en: 'Hiragana + Katakana + 50 survival phrases. Everything you need to start right now.' },
    badges:  { es: [{ text: '🎁 100% GRATIS', cls: 'badge-em' }, { text: '📥 PDF INSTANT', cls: 'badge-sky' }],
               en: [{ text: '🎁 100% FREE',   cls: 'badge-em' }, { text: '📥 PDF INSTANT', cls: 'badge-sky' }] },
    benefit: { es: '🎁 Descarga Gratis — Sin Registro',  en: '🎁 Free Download — No Sign-up' },
    cta:     { es: '📥 Obtener Kit Japonés →',           en: '📥 Get Japanese Kit →' },
    ctaCls: 'cta-em',
    url:     { es: LINKS.kitJpEs, en: LINKS.kitJpEn },
    audio: { phrase: 'こんにちは', romaji: 'Konnichiwa',
             trans: { es: '¡Hola! / Buenos días', en: 'Hello! / Good day' }, lang: 'ja-JP' },
  },
  {
    id: 4, hero: false, icon: '🇫🇷',
    iconBg: 'linear-gradient(135deg,#1A3A6B,#1E3A8A)',
    img: 'assets/img/thumb-fr-kit.jpg',
    category: 'kit', langCodes: ['fr'],
    name:    { es: 'Kit Francés Express — Descarga Gratis', en: 'French Express Kit — Free Download' },
    tagline: { es: 'Pronunciación francesa + vocabulario clave + 50 frases reales. El inicio perfecto.',
               en: 'French pronunciation + key vocabulary + 50 real phrases. The perfect starting point.' },
    badges:  { es: [{ text: '🎁 100% GRATIS', cls: 'badge-em' }, { text: '📥 PDF INSTANT', cls: 'badge-rose' }],
               en: [{ text: '🎁 100% FREE',   cls: 'badge-em' }, { text: '📥 PDF INSTANT', cls: 'badge-rose' }] },
    benefit: { es: '🎁 Descarga Gratis — Sin Registro',  en: '🎁 Free Download — No Sign-up' },
    cta:     { es: '📥 Obtener Kit Francés →',           en: '📥 Get French Kit →' },
    ctaCls: 'cta-em',
    url:     { es: LINKS.kitFrEs, en: LINKS.kitFrEn },
    audio: { phrase: 'Bonjour!', romaji: 'Bon-zhoor',
             trans: { es: '¡Buenos días! / ¡Hola!', en: 'Good morning! / Hello!' }, lang: 'fr-FR' },
  },

  /* ── 5-7. TUTORES PREPLY POR IDIOMA ─────────────── */
  {
    id: 5, hero: false, icon: '🇰🇷',
    iconBg: 'linear-gradient(135deg,#F59E0B,#B45309)',
    img: 'assets/img/thumb-kr-tutor.jpg',
    category: 'tutors', langCodes: ['kr'],
    name:    { es: 'Tutores de Coreano en Preply',       en: 'Korean Tutors on Preply' },
    tagline: { es: 'Tutores nativos certificados. Coreano desde K-Pop hasta negocios. Primera lección a precio especial.',
               en: 'Certified native tutors. Korean from K-Pop to business. First lesson at special price.' },
    badges:  { es: [{ text: '🏆 PREPLY VIP', cls: 'badge-gold' }, { text: '🔥 50% DTO', cls: 'badge-rose' }],
               en: [{ text: '🏆 PREPLY VIP', cls: 'badge-gold' }, { text: '🔥 50% OFF', cls: 'badge-rose' }] },
    benefit: { es: '🔥 Primera Lección 50% DTO',         en: '🔥 First Lesson 50% OFF' },
    cta:     { es: '🎓 Buscar Tutor Coreano →',          en: '🎓 Find Korean Tutor →' },
    ctaCls: 'cta-gold',
    url:     { es: LINKS.preply, en: LINKS.preply },
    audio: { phrase: '저는 한국어를 배우고 싶어요', romaji: 'Hangugeo baeugo sipeoyo',
             trans: { es: 'Quiero aprender coreano', en: 'I want to learn Korean' }, lang: 'ko-KR' },
  },
  {
    id: 6, hero: false, icon: '🇯🇵',
    iconBg: 'linear-gradient(135deg,#F59E0B,#92400E)',
    img: 'assets/img/thumb-jp-tutor.jpg',
    category: 'tutors', langCodes: ['jp'],
    name:    { es: 'Tutores de Japonés en Preply',       en: 'Japanese Tutors on Preply' },
    tagline: { es: 'Aprende Hiragana, Kanji y conversación con tutores japoneses nativos. Garantía de resultado.',
               en: 'Learn Hiragana, Kanji and conversation with certified native Japanese tutors.' },
    badges:  { es: [{ text: '🏆 PREPLY VIP', cls: 'badge-gold' }, { text: '🔥 50% DTO', cls: 'badge-rose' }],
               en: [{ text: '🏆 PREPLY VIP', cls: 'badge-gold' }, { text: '🔥 50% OFF', cls: 'badge-rose' }] },
    benefit: { es: '🔥 Primera Lección 50% DTO',         en: '🔥 First Lesson 50% OFF' },
    cta:     { es: '🎓 Buscar Tutor Japonés →',          en: '🎓 Find Japanese Tutor →' },
    ctaCls: 'cta-gold',
    url:     { es: LINKS.preply, en: LINKS.preply },
    audio: { phrase: '日本語を勉強しています', romaji: 'Nihongo wo benkyou shiteimasu',
             trans: { es: 'Estoy estudiando japonés', en: 'I am studying Japanese' }, lang: 'ja-JP' },
  },
  {
    id: 7, hero: false, icon: '🇫🇷',
    iconBg: 'linear-gradient(135deg,#F59E0B,#B45309)',
    img: 'assets/img/thumb-fr-tutor.jpg',
    category: 'tutors', langCodes: ['fr'],
    name:    { es: 'Tutores de Francés en Preply',       en: 'French Tutors on Preply' },
    tagline: { es: 'Habla francés fluido con tutores parisinos nativos. Pronunciación perfecta garantizada.',
               en: 'Speak fluent French with native Parisian tutors. Perfect pronunciation guaranteed.' },
    badges:  { es: [{ text: '🏆 PREPLY VIP', cls: 'badge-gold' }, { text: '🔥 50% DTO', cls: 'badge-rose' }],
               en: [{ text: '🏆 PREPLY VIP', cls: 'badge-gold' }, { text: '🔥 50% OFF', cls: 'badge-rose' }] },
    benefit: { es: '🔥 Primera Lección 50% DTO',         en: '🔥 First Lesson 50% OFF' },
    cta:     { es: '🎓 Buscar Tutor Francés →',          en: '🎓 Find French Tutor →' },
    ctaCls: 'cta-gold',
    url:     { es: LINKS.preply, en: LINKS.preply },
    audio: { phrase: 'J\'apprends le français', romaji: 'Zha-praN le fraN-seh',
             trans: { es: 'Estoy aprendiendo francés', en: 'I am learning French' }, lang: 'fr-FR' },
  },
  /* ── 8-9. CROSS-PROMO (STUDENT PLANNER + CLICKBANK MY SHED PLANS) ── */
  {
    id: 8, hero: false, icon: '📚',
    iconBg: 'linear-gradient(135deg,#6366F1,#4F46E5)',
    img: 'assets/img/thumb-planner.jpg',
    category: 'kit', langCodes: ['kr','jp','fr'],
    name:    { es: 'Kit Organizador Estudiantil & Universidad 2026', en: 'Ultimate College & Dorm Study Planner 2026' },
    tagline: { es: 'Checklist de residencia + organizador de horarios + habit tracker en PDF. 100% gratis.',
               en: 'Dorm checklist + weekly schedule planner + habit tracker PDF. 100% free download.' },
    badges:  { es: [{ text: '🎓 ESTUDIANTES', cls: 'badge-sky' }, { text: '🎁 100% GRATIS', cls: 'badge-em' }],
               en: [{ text: '🎓 COLLEGE',     cls: 'badge-sky' }, { text: '🎁 100% FREE',   cls: 'badge-em' }] },
    benefit: { es: '🎁 Descargar Planner Estudiantil Gratis',        en: '🎁 Download Free College Planner' },
    cta:     { es: '📥 Descargar Planner →',                         en: '📥 Download Planner →' },
    ctaCls: 'cta-em',
    url:     { es: LINKS.plannerEs, en: LINKS.plannerEn },
    audio: null,
  },
  {
    id: 9, hero: false, icon: '🛠️',
    iconBg: 'linear-gradient(135deg,#D97706,#B45309)',
    img: 'assets/img/thumb-shed.jpg',
    category: 'kit', langCodes: ['kr','jp','fr'],
    name:    { es: 'My Shed Plans — 12,000 Planos de Carpintería',  en: 'My Shed Plans — 12,000 Woodworking Plans' },
    tagline: { es: 'Guías de bricolaje paso a paso para construir cobertizos, muebles y proyectos de madera en casa.',
               en: 'Step-by-step DIY guides & cutting lists to build sheds, furniture & woodworking projects.' },
    badges:  { es: [{ text: '🛠️ BRICOLAJE', cls: 'badge-gold' }, { text: '⭐ OFERTA $90 DTO', cls: 'badge-rose' }],
               en: [{ text: '🛠️ DIY CRAFT', cls: 'badge-gold' }, { text: '⭐ $90 OFF DEAL',   cls: 'badge-rose' }] },
    benefit: { es: '🔥 Acceso Instantáneo a 12,000 Planos',          en: '🔥 Instant Access to 12,000 Plans' },
    cta:     { es: '🛠️ Ver Planos de Carpintería →',                 en: '🛠️ View Woodworking Plans →' },
    ctaCls: 'cta-gold',
    url:     { es: LINKS.shedPlans, en: LINKS.shedPlans },
    audio: null,
  },
];

/* ═══════════════════════════════════════════════════
   AUDIO PHRASES
   ═══════════════════════════════════════════════════ */
const AUDIO_PHRASES = {
  japones: [
    { native: 'こんにちは',           romaji: 'Konnichiwa',        trans: { es: 'Hola / Buenos días',    en: 'Hello / Good day' },        lang: 'ja-JP' },
    { native: 'ありがとうございます', romaji: 'Arigatou gozaimasu', trans: { es: 'Muchas gracias',        en: 'Thank you very much' },     lang: 'ja-JP' },
    { native: 'すみません',           romaji: 'Sumimasen',         trans: { es: 'Disculpe / Perdón',     en: 'Excuse me / Sorry' },       lang: 'ja-JP' },
    { native: 'いくらですか',         romaji: 'Ikura desu ka?',    trans: { es: '¿Cuánto cuesta?',       en: 'How much is it?' },         lang: 'ja-JP' },
    { native: 'トイレはどこですか',   romaji: 'Toire wa doko?',    trans: { es: '¿Dónde está el baño?',  en: 'Where is the bathroom?' },  lang: 'ja-JP' },
    { native: 'わかりません',         romaji: 'Wakarimasen',       trans: { es: 'No entiendo',            en: 'I don\'t understand' },     lang: 'ja-JP' },
  ],
  frances: [
    { native: 'Bonjour!',               romaji: 'Bon-zhoor',         trans: { es: '¡Buenos días! / ¡Hola!',   en: 'Good morning! / Hello!' },   lang: 'fr-FR' },
    { native: 'Merci beaucoup!',        romaji: 'Mer-si bo-koo',     trans: { es: '¡Muchas gracias!',          en: 'Thank you very much!' },      lang: 'fr-FR' },
    { native: 'Excusez-moi',           romaji: 'Eks-kyoo-zey mwah', trans: { es: 'Disculpe',                  en: 'Excuse me' },                 lang: 'fr-FR' },
    { native: 'Combien ça coûte?',     romaji: 'Kom-bYaN sa koot?', trans: { es: '¿Cuánto cuesta?',           en: 'How much does it cost?' },    lang: 'fr-FR' },
    { native: 'Où sont les toilettes?',romaji: 'Oo soN le twa-let?',trans: { es: '¿Dónde están los baños?',   en: 'Where are the bathrooms?' },  lang: 'fr-FR' },
    { native: 'Je ne comprends pas.',  romaji: 'Zhe ne kom-praN pa',trans: { es: 'No entiendo',               en: 'I don\'t understand' },       lang: 'fr-FR' },
  ],
  coreano: [
    { native: '안녕하세요',             romaji: 'Annyeonghaseyo',  trans: { es: '¡Hola! (formal)',        en: 'Hello! (formal)' },       lang: 'ko-KR' },
    { native: '감사합니다',             romaji: 'Gamsahamnida',    trans: { es: 'Gracias (formal)',       en: 'Thank you (formal)' },    lang: 'ko-KR' },
    { native: '죄송합니다',             romaji: 'Joesonghabnida',  trans: { es: 'Lo siento',              en: 'I\'m sorry' },            lang: 'ko-KR' },
    { native: '얼마예요?',              romaji: 'Eolmayeyo?',      trans: { es: '¿Cuánto cuesta?',       en: 'How much is it?' },       lang: 'ko-KR' },
    { native: '화장실이 어디예요?',     romaji: 'Hwajangsil eodi?', trans: { es: '¿Dónde está el baño?', en: 'Where is the bathroom?' }, lang: 'ko-KR' },
    { native: '모르겠어요',             romaji: 'Moreugeseoyo',    trans: { es: 'No lo sé',               en: 'I don\'t know' },         lang: 'ko-KR' },
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
    { q: '¿Prefieres aprender con apps o con una persona?',
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
      opts: ['Que sea rápida y efectiva', 'Audio con nativos reales', 'Clases personalizadas 1-a-1', 'Contenido visual'] },
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
    { q: 'Do you prefer apps or learning with a person?',
      opts: ['With interactive apps', 'With videos/audio', 'With a personal tutor', 'A mix of everything'] },
    { q: 'How much are you willing to invest per month?',
      opts: ['$0 — free only', 'Up to $20/month', 'Up to $50/month', 'More than $50/month'] },
    { q: 'When do you need to use the language?',
      opts: ['In less than 3 months', 'In 6 months', 'In 1 year', 'No rush, I want solid foundations'] },
    { q: 'What motivates you most to learn?',
      opts: ['K-Pop / Anime / J-Pop', 'Culture and gastronomy', 'Career opportunities', 'Love of languages'] },
    { q: 'What is your biggest difficulty when learning languages?',
      opts: ['Pronunciation', 'Vocabulary', 'Grammar', 'Consistency'] },
    { q: 'What do you value most in a learning tool?',
      opts: ['Fast and effective', 'Native audio', 'Personalized 1-on-1 classes', 'Visual content'] },
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
});

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
  if (typeof window.regenerateTravelPlanner === 'function') {
    window.regenerateTravelPlanner();
  }
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
    else { el.innerHTML = val; }
  });

  const si = document.getElementById('search-input');
  if (si) si.placeholder = t('search_ph');

  const pillKeys = { 'all':'f_all','kr':'f_kr','jp':'f_jp','fr':'f_fr',
                     'tutors':'f_tutors','kit':'f_kits' };
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
             style="animation-delay:${i * 0.07}s">
      ${r.img ? `
      <div class="card-thumb-wrap">
        <img src="${r.img}" alt="${r.name[lang]}" class="card-thumb-img" loading="lazy" />
        <div class="card-thumb-overlay"></div>
      </div>` : ''}
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
   AUDIO ENGINE — Web Speech API (zero cost)
   ═══════════════════════════════════════════════════ */
function speakPhrase(text, lang, btnId) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const btn = document.getElementById(btnId);
  if (btn) btn.classList.add('playing');
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang; utter.rate = 0.85; utter.pitch = 1; utter.volume = 1;
  utter.onend  = () => { if (btn) btn.classList.remove('playing'); };
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
  utter.onend  = () => { if (btn) btn.classList.remove('playing'); };
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

  const l         = state.lang;
  const langAns   = state.quiz.answers[2] || 0;
  const styleAns  = state.quiz.answers[4] || 0;
  const budgetAns = state.quiz.answers[5] || 0;

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
    { id: 'stat-resources', target: 7,     format: v => v.toString() },
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

/* ═══════════════════════════════════════════════════
   PFP GENERATOR — Canvas Filters (JS puro)
   ═══════════════════════════════════════════════════ */
function initPFPGenerator() {
  const fileInput  = document.getElementById('pfp-file-input');
  const dropZone   = document.getElementById('pfp-drop-zone');
  const previewWrap= document.getElementById('pfp-preview-wrap');
  const canvas     = document.getElementById('pfp-canvas');
  const downloadBtn= document.getElementById('pfp-download-btn');
  const filterBtns = document.querySelectorAll('.pfp-filter-btn');
  if (!fileInput || !canvas) return;

  const ctx = canvas.getContext('2d');
  let originalImageData = null;
  let activeFilter = 'none';

  /* ── Load image ── */
  function loadImage(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        // Crop square center
        const size  = Math.min(img.width, img.height);
        const sx    = (img.width  - size) / 2;
        const sy    = (img.height - size) / 2;
        canvas.width  = 400;
        canvas.height = 400;
        ctx.drawImage(img, sx, sy, size, size, 0, 0, 400, 400);
        originalImageData = ctx.getImageData(0, 0, 400, 400);
        applyFilter(activeFilter);
        dropZone.style.display   = 'none';
        previewWrap.style.display = 'block';
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  fileInput.addEventListener('change', e => loadImage(e.target.files[0]));

  // Drag & drop
  dropZone.addEventListener('dragover',  e => { e.preventDefault(); dropZone.classList.add('drag-over'); });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
  dropZone.addEventListener('drop',      e => { e.preventDefault(); dropZone.classList.remove('drag-over'); loadImage(e.dataTransfer.files[0]); });

  /* ── Pixel Filters ── */
  const FILTERS = {
    none:    d => d, // passthrough

    bw(d) {
      for (let i = 0; i < d.data.length; i += 4) {
        const g = d.data[i] * 0.299 + d.data[i+1] * 0.587 + d.data[i+2] * 0.114;
        d.data[i] = d.data[i+1] = d.data[i+2] = g;
      }
      return d;
    },

    vintage(d) {
      for (let i = 0; i < d.data.length; i += 4) {
        d.data[i]   = Math.min(255, d.data[i]   * 1.1  + 30);
        d.data[i+1] = Math.min(255, d.data[i+1] * 0.9  + 10);
        d.data[i+2] = Math.min(255, d.data[i+2] * 0.7);
      }
      return d;
    },

    warm(d) {
      for (let i = 0; i < d.data.length; i += 4) {
        d.data[i]   = Math.min(255, d.data[i]   + 40);
        d.data[i+1] = Math.min(255, d.data[i+1] + 15);
        d.data[i+2] = Math.max(0,   d.data[i+2] - 30);
      }
      return d;
    },

    cool(d) {
      for (let i = 0; i < d.data.length; i += 4) {
        d.data[i]   = Math.max(0,   d.data[i]   - 30);
        d.data[i+1] = Math.min(255, d.data[i+1] + 10);
        d.data[i+2] = Math.min(255, d.data[i+2] + 50);
      }
      return d;
    },

    neon(d) {
      // grayscale base + vivid purple-cyan boost
      for (let i = 0; i < d.data.length; i += 4) {
        const g = d.data[i] * 0.2 + d.data[i+1] * 0.5 + d.data[i+2] * 0.3;
        d.data[i]   = Math.min(255, g * 0.4 + 80);   // R: muted
        d.data[i+1] = Math.min(255, g * 0.1 + 20);   // G: low
        d.data[i+2] = Math.min(255, g * 1.2 + 120);  // B: vivid blue
        // Neon purple on bright pixels
        if (g > 160) {
          d.data[i]   = Math.min(255, d.data[i]   + 140);
          d.data[i+2] = Math.min(255, d.data[i+2] + 60);
        }
      }
      return d;
    },

    anime(d) {
      // Posterize + contrast + slight desaturate mid-tones
      for (let i = 0; i < d.data.length; i += 4) {
        // Posterize to 4 levels
        d.data[i]   = Math.round(d.data[i]   / 64) * 64;
        d.data[i+1] = Math.round(d.data[i+1] / 64) * 64;
        d.data[i+2] = Math.round(d.data[i+2] / 64) * 64;
        // Boost contrast
        d.data[i]   = Math.min(255, Math.max(0, (d.data[i]   - 128) * 1.4 + 128));
        d.data[i+1] = Math.min(255, Math.max(0, (d.data[i+1] - 128) * 1.4 + 128));
        d.data[i+2] = Math.min(255, Math.max(0, (d.data[i+2] - 128) * 1.4 + 128));
      }
      return d;
    },
  };

  function applyFilter(name) {
    if (!originalImageData) return;
    // Clone original before mutation
    const cloned = new ImageData(
      new Uint8ClampedArray(originalImageData.data),
      originalImageData.width,
      originalImageData.height
    );
    const result = (FILTERS[name] || FILTERS.none)(cloned);
    ctx.putImageData(result, 0, 0);

    // Add rounded circle crop overlay
    ctx.globalCompositeOperation = 'destination-in';
    ctx.beginPath();
    ctx.arc(200, 200, 200, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  }

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      applyFilter(activeFilter);
    });
  });

  // Download
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const link = document.createElement('a');
      link.download = 'my-pfp.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }
}

/* ═══════════════════════════════════════════════════
   WORD COUNTER — JS puro con densidad de vocabulario
   ═══════════════════════════════════════════════════ */
function initWordCounter() {
  const textarea   = document.getElementById('wc-input');
  const elWords    = document.getElementById('wc-words');
  const elChars    = document.getElementById('wc-chars');
  const elRead     = document.getElementById('wc-read');
  const elUnique   = document.getElementById('wc-unique');
  const densityWrap= document.getElementById('wc-density-wrap');
  const densityBars= document.getElementById('wc-density-bars');
  if (!textarea) return;

  // Words to ignore in density (stop-words basic)
  const STOP = new Set(['de','la','el','en','que','y','a','los','del','se','las','por','un','con','para','una','su','al','es','lo','como','más','pero','sus','le','ya','o','fue','este','ha','si','sobre','este','eso','era','muy','también','cuando','son','no','hay','me','te','le','esta','bien','yo','tan','así','hemos','the','a','an','and','is','in','of','to','for','on','with','as','at','be','it','by','are','this','was','that','or','from','but','has','not','we','have']);

  textarea.addEventListener('input', function() { _wc_debounce_timer && clearTimeout(_wc_debounce_timer); _wc_debounce_timer = setTimeout(analyze, 200); });

  function analyze() {
    const raw  = textarea.value;
    const text = raw.trim();

    if (!text) {
      elWords.textContent  = '0';
      elChars.textContent  = '0';
      elRead.textContent   = '0s';
      elUnique.textContent = '0';
      densityWrap.style.display = 'none';
      return;
    }

    const words = text.match(/[\p{L}'-]+/gu) || [];
    const wc    = words.length;
    const cc    = raw.length;

    // Reading time: ~200 wpm average
    const secs = Math.ceil((wc / 200) * 60);
    const readStr = secs < 60
      ? secs + 's'
      : Math.floor(secs / 60) + 'm ' + (secs % 60) + 's';

    // Unique words (lowercase, no stop words)
    const cleaned = words.map(w => w.toLowerCase()).filter(w => w.length > 2 && !STOP.has(w));
    const freq    = {};
    cleaned.forEach(w => freq[w] = (freq[w] || 0) + 1);
    const unique  = Object.keys(freq).length;

    elWords.textContent  = wc.toLocaleString();
    elChars.textContent  = cc.toLocaleString();
    elRead.textContent   = readStr;
    elUnique.textContent = unique.toLocaleString();

    // Density bars (top 8 words)
    if (unique > 0) {
      const sorted = Object.entries(freq).sort((a,b) => b[1] - a[1]).slice(0, 8);
      const maxFreq = sorted[0][1];
      densityBars.innerHTML = sorted.map(([word, count]) => {
        const pct = Math.round((count / maxFreq) * 100);
        return `
          <div class="density-row">
            <span class="density-word">${word}</span>
            <div class="density-bar-wrap">
              <div class="density-bar-fill" style="width:${pct}%"></div>
            </div>
            <span class="density-count">${count}</span>
          </div>`;
      }).join('');
      densityWrap.style.display = 'block';
    } else {
      densityWrap.style.display = 'none';
    }
  }
}

/* ── Word counter debounce timer ── */
var _wc_debounce_timer = null;

/* ── Bootstrap tools after DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initPFPGenerator();
  initWordCounter();
});

/* ── debounce helper (reuse if already defined) ── */
if (typeof debounce === 'undefined') {
  function debounce(fn, ms) {
    let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
  }
}
