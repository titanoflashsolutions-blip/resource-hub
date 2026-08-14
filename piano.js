/* ============================================================
   piano.js — Lógica de audio, interacción y lección guiada
   Web Audio API pura con 3 Canciones Tradicionales:
   - 🇰🇷 Coreano: Arirang (아리랑)
   - 🇯🇵 Japonés: Sakura Sakura (さくら さくら)
   - 🇫🇷 Francés: Frère Jacques
   ============================================================ */
(function () {
  'use strict';

  /* ── DATOS DE NOTAS (2 octavas cromáticas C4–B5) ─────────── */
  const NOTE_FREQS = {
    C4:261.63, 'C#4':277.18, D4:293.66, 'D#4':311.13, E4:329.63, F4:349.23,
    'F#4':369.99, G4:392.00, 'G#4':415.30, A4:440.00, 'A#4':466.16, B4:493.88,
    C5:523.25, 'C#5':554.37, D5:587.33, 'D#5':622.25, E5:659.25, F5:698.46,
    'F#5':739.99, G5:783.99, 'G#5':830.61, A5:880.00, 'A#5':932.33, B5:987.77,
  };

  const NOTE_INTL = {
    C:  { kr: '도',  jp: 'ド',  fr: 'Do' },
    D:  { kr: '레',  jp: 'レ',  fr: 'Ré' },
    E:  { kr: '미',  jp: 'ミ',  fr: 'Mi' },
    F:  { kr: '파',  jp: 'ファ', fr: 'Fa' },
    G:  { kr: '솔',  jp: 'ソ',  fr: 'Sol' },
    A:  { kr: '라',  jp: 'ラ',  fr: 'La' },
    B:  { kr: '시',  jp: 'シ',  fr: 'Si' },
  };

  const WHITE_ORDER = ['C4','D4','E4','F4','G4','A4','B4','C5','D5','E5','F5','G5','A5','B5'];
  const BLACK_MAP = {
    C4:'C#4', D4:'D#4', F4:'F#4', G4:'G#4', A4:'A#4',
    C5:'C#5', D5:'D#5', F5:'F#5', G5:'G#5', A5:'A#5',
  };

  const KEYBOARD_MAP = {
    'a':'C4','w':'C#4','s':'D4','e':'D#4','d':'E4','f':'F4','t':'F#4','g':'G4',
    'y':'G#4','h':'A4','u':'A#4','j':'B4','k':'C5','o':'C#5','l':'D5','p':'D#5',
    ';':'E5',
  };

  /* ── 3 CANCIONES TRADICIONALES EN 3 IDIOMAS ─────────────── */
  const SONGS = {
    kr: {
      name: '🇰🇷 Arirang (아리랑)',
      notes: ['E4','G4','A4','C5','A4','G4','E4','G4','A4','E4','D4','C4','D4','E4','G4','A4']
    },
    jp: {
      name: '🇯🇵 Sakura Sakura (さくら さくら)',
      notes: ['A4','A4','B4','A4','A4','B4','A4','B4','C5','B4','A4','B4','A4','F4','E4']
    },
    fr: {
      name: '🇫🇷 Frère Jacques',
      notes: ['C4','D4','E4','C4','C4','D4','E4','C4','E4','F4','G4','E4','F4','G4']
    }
  };

  /* ── ESTADO ───────────────────────────────────────────────── */
  let currentSongKey = 'kr';
  let audioCtx = null;
  let mode = 'free';
  let songIndex = 0;
  let score = 0;
  let demoTimer = null;

  function getCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  /* ── AUDIO: envolvente tipo piano ─────────────────────────── */
  function playTone(freq) {
    const ctx = getCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.35, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.35);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 1.7);
  }

  /* ── UI: construir teclado ────────────────────────────────── */
  const keyboardEl = document.getElementById('pianoKeyboard');

  function noteLetter(note) { return note[0]; }

  function buildKeyboard() {
    if (!keyboardEl) return;
    keyboardEl.innerHTML = '';
    WHITE_ORDER.forEach((note) => {
      const key = document.createElement('div');
      key.className = 'piano-key piano-key--white';
      key.dataset.note = note;
      const intl = NOTE_INTL[noteLetter(note)];
      key.innerHTML = `
        <span class="key-label-main">${noteLetter(note)}</span>
        <span class="key-label-intl">${intl.kr} · ${intl.jp}<br>${intl.fr}</span>`;
      keyboardEl.appendChild(key);
    });

    requestAnimationFrame(() => {
      const whiteKeys = [...keyboardEl.querySelectorAll('.piano-key--white')];
      if (!whiteKeys.length) return;
      const whiteW = whiteKeys[0].getBoundingClientRect().width;
      whiteKeys.forEach((wk, i) => {
        const note = wk.dataset.note;
        const sharp = BLACK_MAP[note];
        if (!sharp) return;
        const bk = document.createElement('div');
        bk.className = 'piano-key piano-key--black';
        bk.dataset.note = sharp;
        bk.style.left = `${(i + 1) * whiteW - 17}px`;
        bk.innerHTML = `<span class="key-label-main">${sharp.replace('4','').replace('5','')}</span>`;
        keyboardEl.appendChild(bk);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildKeyboard);
  } else {
    buildKeyboard();
  }
  window.addEventListener('resize', buildKeyboard);

  /* ── PARTÍCULAS ───────────────────────────────────────────── */
  function burstParticles(keyEl) {
    if (!keyboardEl) return;
    const rect = keyEl.getBoundingClientRect();
    const parentRect = keyboardEl.getBoundingClientRect();
    const x = rect.left - parentRect.left + rect.width / 2;
    const y = rect.top - parentRect.top + 20;
    for (let i = 0; i < 8; i++) {
      const p = document.createElement('div');
      p.className = 'key-particle';
      const angle = (Math.PI * 2 * i) / 8;
      const dist = 30 + Math.random() * 20;
      p.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
      p.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      keyboardEl.appendChild(p);
      setTimeout(() => p.remove(), 700);
    }
  }

  /* ── LCD helpers ──────────────────────────────────────────── */
  const lcdCurrent = document.getElementById('lcdCurrentNote');
  const lcdNext = document.getElementById('lcdNextNote');
  const lcdScore = document.getElementById('lcdScore');
  const lcdProgress = document.getElementById('lcdProgressFill');
  const lcdStatus = document.getElementById('lcdStatus');

  function noteDisplayString(note) {
    const intl = NOTE_INTL[noteLetter(note)];
    if (!intl) return note;
    return `${intl.kr} · ${intl.jp} · ${intl.fr} (${note})`;
  }

  function updateLcdForPlayedNote(note) {
    if (lcdCurrent) lcdCurrent.textContent = noteDisplayString(note);
  }

  function updateLcdLesson() {
    const song = SONGS[currentSongKey].notes;
    if (!lcdNext || !lcdProgress) return;
    if (songIndex >= song.length) {
      lcdNext.textContent = '¡Completado! 🎉';
      lcdProgress.style.width = '100%';
      return;
    }
    lcdNext.textContent = noteDisplayString(song[songIndex]);
    lcdProgress.style.width = `${Math.round((songIndex / song.length) * 100)}%`;
  }

  /* ── RESALTAR TECLA OBJETIVO ──────────────────────────────── */
  function clearTargets() {
    if (!keyboardEl) return;
    keyboardEl.querySelectorAll('.is-target').forEach(k => k.classList.remove('is-target'));
  }
  function highlightTarget(note) {
    if (!keyboardEl) return;
    clearTargets();
    const el = keyboardEl.querySelector(`[data-note="${note}"]`);
    if (el) el.classList.add('is-target');
  }

  /* ── MANEJO DE TECLA PRESIONADA ───────────────────────────── */
  function pressKey(note, keyEl) {
    if (!note) return;
    playTone(NOTE_FREQS[note]);
    updateLcdForPlayedNote(note);

    if (keyEl) {
      keyEl.classList.add('is-pressed');
      setTimeout(() => keyEl.classList.remove('is-pressed'), 130);
    }

    if (mode === 'lesson') {
      const song = SONGS[currentSongKey].notes;
      const expected = song[songIndex];
      if (note === expected) {
        score++;
        if (lcdScore) lcdScore.textContent = score;
        if (keyEl) burstParticles(keyEl);
        songIndex++;
        updateLcdLesson();
        if (songIndex >= song.length) {
          if (lcdStatus) lcdStatus.textContent = `🎉 ¡Canción completada! Puntaje final: ${score}`;
          clearTargets();
          mode = 'free';
        } else {
          highlightTarget(song[songIndex]);
        }
      }
    }
  }

  /* ── EVENTOS: click / touch en teclado ────────────────────── */
  if (keyboardEl) {
    keyboardEl.addEventListener('mousedown', (e) => {
      const keyEl = e.target.closest('.piano-key');
      if (!keyEl) return;
      pressKey(keyEl.dataset.note, keyEl);
    });
  }

  /* ── EVENTOS: teclado físico ─────────────────────────────── */
  document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const note = KEYBOARD_MAP[e.key.toLowerCase()];
    if (!note || !NOTE_FREQS[note] || !keyboardEl) return;
    const keyEl = keyboardEl.querySelector(`[data-note="${note}"]`);
    pressKey(note, keyEl);
  });

  /* ── SELECTOR DE CANCIÓN / IDIOMA ────────────────────────── */
  function setSong(langKey) {
    stopDemo();
    currentSongKey = langKey;
    document.querySelectorAll('.piano-song-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.song === langKey);
    });
    if (mode === 'lesson') {
      startLesson();
    } else {
      if (lcdStatus) lcdStatus.textContent = `Canción seleccionada: ${SONGS[langKey].name}`;
    }
  }

  function startLesson() {
    stopDemo();
    mode = 'lesson';
    songIndex = 0;
    score = 0;
    if (lcdScore) lcdScore.textContent = '0';
    if (lcdStatus) lcdStatus.textContent = `🎯 LECCIÓN: Toca ${SONGS[currentSongKey].name}`;
    updateLcdLesson();
    highlightTarget(SONGS[currentSongKey].notes[0]);
    setActiveButton(btnStart);
  }

  /* ── BOTONES DE MODO ──────────────────────────────────────── */
  const btnStart = document.getElementById('btnStartLesson');
  const btnDemo = document.getElementById('btnDemo');
  const btnFree = document.getElementById('btnFreeMode');

  function setActiveButton(btn) {
    [btnStart, btnDemo, btnFree].forEach(b => { if(b) b.classList.remove('is-active'); });
    if (btn) btn.classList.add('is-active');
  }

  function stopDemo() {
    if (demoTimer) { clearTimeout(demoTimer); demoTimer = null; }
  }

  if (btnStart) {
    btnStart.addEventListener('click', startLesson);
  }

  if (btnDemo) {
    btnDemo.addEventListener('click', () => {
      stopDemo();
      mode = 'demo';
      clearTargets();
      const song = SONGS[currentSongKey].notes;
      if (lcdStatus) lcdStatus.textContent = `🎧 Demo en vivo: ${SONGS[currentSongKey].name}`;
      setActiveButton(btnDemo);
      let i = 0;
      function step() {
        if (i >= song.length || mode !== 'demo') {
          if (lcdStatus) lcdStatus.textContent = 'Demo finalizada. Elige un modo para continuar.';
          clearTargets();
          mode = 'free';
          return;
        }
        const note = song[i];
        if (keyboardEl) {
          const keyEl = keyboardEl.querySelector(`[data-note="${note}"]`);
          highlightTarget(note);
          playTone(NOTE_FREQS[note]);
          updateLcdForPlayedNote(note);
          if (keyEl) {
            keyEl.classList.add('is-pressed');
            setTimeout(() => keyEl.classList.remove('is-pressed'), 200);
          }
        }
        i++;
        demoTimer = setTimeout(step, 480);
      }
      step();
    });
  }

  if (btnFree) {
    btnFree.addEventListener('click', () => {
      stopDemo();
      mode = 'free';
      clearTargets();
      if (lcdStatus) lcdStatus.textContent = 'MODO LIBRE — Toca cualquier tecla para comenzar';
      if (lcdNext) lcdNext.textContent = '—';
      setActiveButton(btnFree);
    });
  }

  // Exponer selector globalmente
  window.setPianoSong = setSong;

  // Conectar botones de canciones
  document.querySelectorAll('.piano-song-btn').forEach(btn => {
    btn.addEventListener('click', () => setPianoSong(btn.dataset.song));
  });

})();
