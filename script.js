const keyboard = document.getElementById('keyboard');
const display = document.getElementById('note-display');

// Note maps for lowercase and uppercase keys
const noteMapLower = {
  a: 'C6',
  b: 'Cm',
  c: 'do',
  d: 'e1',
  e: 'e7',
  f: 'C3',
  g: 'e3',
  h: 'G4',
  i: 'g3',
  j: 'A4',
  k: 'a4',
  l: 'B4',
  m: 'C5',
  n: 'a5',
  o: 'a6',
  p: 'D4',
  q: 'e7',
  r: 'D6',
  s: 'do',
  t: 'H',
  u: 'la',
  v: 'np',
  w: 'p-g',
  x: 'pi',
  y: 'f6',
  z: 'fa',
  ';': 'F4',
  'Enter': 'a7'
};

const noteMapUpper = {
  '~': 'D4', // Mapped D4.mp3 to the ~ key
  '1': 'unassigned', 
  '2': 'unassigned', 
  '3': 'unassigned', 
  '4': 'unassigned', 
  '5': 'unassigned', 
  '6': 'unassigned', 
  '7': 'unassigned', 
  '8': 'unassigned', 
  '9': 'unassigned', 
  '0': 'unassigned', 
  '-': 'unassigned', 
  '+': 'unassigned', 
  'Backspace': 'unassigned', 
  'Tab': 'unassigned', 
  Q: 'e7',
  W: 'p-g',
  E: 'e7',
  R: 'D6',
  T: 'H',
  Y: 'f6',
  U: 'la',
  I: 'g3',
  O: 'a6',
  P: 'D4',
  '[': 'unassigned', 
  ']': 'unassigned', 
  '\\': 'unassigned', 
  'CapsLock': 'unassigned', 
  A: 'D6',
  S: 'do',
  D: 'e1',
  F: 'C3',
  G: 'C9',
  H: 'G4',
  J: 'A4',
  K: 'a4',
  L: 'B4',
  ':': 'unassigned', 
  "'": 'unassigned', 
  'Enter': 'a7',
  'Shift': 'unassigned', 
  Z: 'fa',
  X: 'pi',
  C: 'do',
  V: 'np',
  B: 'glp',
  N: '1-n', 
  M: 'C5',
  ',': 'sp', 
  '.': 'unassigned', 
  '/': 'a2',
  'Ctrl': 'unassigned', 
  'Fn': 'unassigned', 
  'fa-brands fa-windows': 'unassigned', 
  'Alt': 'unassigned', 
  'Space': 'unassigned', 
};

function playCustomSound(key) {
  let note;
  if (noteMapLower[key]) {
    note = noteMapLower[key];
  } else if (noteMapUpper[key]) {
    note = noteMapUpper[key];
  }

  if (note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.volume = 0.6;
    audio.play().catch(err => {
      console.warn(`Sound for ${note} not found.`);
    });
  }
}

// Show note name on screen
function showNoteOnScreen(key) {
  let note;
  if (noteMapLower[key]) {
    note = noteMapLower[key];
  } else if (noteMapUpper[key]) {
    note = noteMapUpper[key];
  } else {
    note = key;
  }
  display.textContent = `You played: ${note}`;
}

// Handle physical keyboard press
window.addEventListener('keydown', e => {
  const rawKey = e.key;
  const visualKey = rawKey.toUpperCase(); // Match virtual keyboard key

  const keyDiv = document.querySelector(`.key[data-key="${visualKey}"]`);
  if (keyDiv) {
    keyDiv.classList.add('pressed');
    setTimeout(() => keyDiv.classList.remove('pressed'), 150);
  }

  playCustomSound(rawKey);
  showNoteOnScreen(rawKey);
});

// Handle on-screen key click
keyboard.addEventListener('click', e => {
  if (e.target.classList.contains('key')) {
    const key = e.target.dataset.key;
    e.target.classList.add('pressed');
    setTimeout(() => e.target.classList.remove('pressed'), 150);
    playCustomSound(key);
    showNoteOnScreen(key);
  }
});

const toggle = document.getElementById('mode-toggle');
const body = document.body;
const label = document.getElementById('mode-label');

toggle.addEventListener('change', () => {
  body.classList.toggle('light-mode');
  label.textContent = body.classList.contains('light-mode') ? "Light Mode" : "Dark Mode";
});