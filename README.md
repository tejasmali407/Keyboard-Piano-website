# 🎹 Keyboard Piano Website

A simple and interactive **Keyboard Piano Web Application** built using **HTML, CSS, JavaScript**, and **JSON** for managing piano sounds.

This project simulates a real piano inside the browser where users can play musical notes using their **computer keyboard** or by clicking on piano keys.

---

## 📌 Project Overview

The Keyboard Piano Website provides a virtual piano experience directly in the web browser. Each piano key is mapped to a keyboard button and plays a corresponding sound.

All piano sounds and key mappings are stored inside a **JSON file**, making the project easy to manage and extend.

---

## 🚀 Features

- 🎹 Play piano using keyboard keys
- 🖱️ Clickable piano keys
- 🔊 Realistic piano sound playback
- ⚡ Lightweight and fast performance
- 📄 JSON-based sound configuration
- 🎨 Key press animation effects
- 📱 Responsive design

---

## 🛠️ Technologies Used

- **HTML5** — Page structure
- **CSS3** — Styling and layout
- **JavaScript (Vanilla JS)** — Functionality and interaction
- **JSON** — Sound data and key mapping

---

## 📁 Project Structure

```
keyboard-piano/
│
├── index.html
├── style.css
├── script.js
│
├── data/
│   └── sounds.json
│
├── sounds/
│   ├── C.mp3
│   ├── D.mp3
│   ├── E.mp3
│   ├── F.mp3
│   ├── G.mp3
│   ├── A.mp3
│   └── B.mp3
│
└── README.md
```

---

## ⚙️ How It Works

1. The application loads piano key data from `sounds.json`.
2. Each object in JSON contains:
   - Keyboard key mapping
   - Note name
   - Sound file path
3. JavaScript listens for keyboard and mouse events.
4. When a key is pressed:
   - The sound plays.
   - The piano key highlights with animation.

---

## 📄 Example JSON File

`sounds.json`

```json
[
  {
    "key": "a",
    "note": "C",
    "sound": "sounds/C.mp3"
  },
  {
    "key": "s",
    "note": "D",
    "sound": "sounds/D.mp3"
  },
  {
    "key": "d",
    "note": "E",
    "sound": "sounds/E.mp3"
  }
]
```

---

## ▶️ How to Run the Project

1. Download or clone this repository:

```
git clone https://github.com/your-username/keyboard-piano.git
```

2. Open the project folder.

3. Run the project using **Live Server** in VS Code  
   OR open `index.html` directly in your browser.

✅ Recommended: Use Live Server for proper JSON loading.

---

## 🎯 Keyboard Controls

| Key | Note |
|-----|------|
| A | C |
| S | D |
| D | E |
| F | F |
| G | G |
| H | A |
| J | B |

---

## ✨ Future Improvements

- Recording feature
- Multiple instrument sounds
- Volume control
- Dark mode
- Mobile touch piano
- Octave switching

---

## 👨‍💻 Author

**Tejas Mali**  
Frontend Developer

---

## 📜 License

This project is open-source and free to use for learning and educational purposes.

---
