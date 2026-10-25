# Project Tide for Students 🌊🎒

**Tide** is an all-in-one student dashboard and planner featuring interactive 3D avatars, Pomodoro focus timers, timetable scheduling, task tracking, grade tracking, flashcards, and Supabase cloud sync.

---

## ✨ Features

- **3D Interactive Avatar**: Customizable student avatar powered by Three.js with real-time animations, skin/outfit customization, and celebratory dance moves.
- **Timetable & Schedule Planner**: Weekly grid scheduling with subject colors, room locations, and reminders.
- **Focus & Pomodoro Timer**: Ambient soundscapes, customizable focus/break intervals, and streak counters.
- **Task & Assignment Tracker**: Organize deadlines, priorities, and completed coursework.
- **Flashcards & Study Mode**: Interactive flashcard decks with flip animations and review cycles.
- **Grade & GPA Calculator**: Track course weights, grades, and cumulative performance.
- **Supabase Cloud Sync**: Seamlessly sync progress, settings, and schedules to Supabase with local storage fallback.
- **Dark Mode & Aesthetics**: Sleek glassmorphism UI with responsive design for desktop, tablet, and mobile.

---

## 🚀 Getting Started

### Option 1: Direct in Browser
Simply open `index.html` or `Tide.html` in any modern web browser.

### Option 2: Local Node.js Server
Run the built-in HTTP server:

```bash
# Start server (default: http://localhost:3000)
npm start
```

Or run:
```bash
node server.js
```

Then visit:
- **Dashboard**: [http://localhost:3000](http://localhost:3000)

---

## 🗄️ Supabase Cloud Backend Setup

1. Open your Supabase Dashboard: [https://supabase.com/dashboard/project/urgoewkatpxpccbixbwn](https://supabase.com/dashboard/project/urgoewkatpxpccbixbwn)
2. Go to the **SQL Editor** on the left navigation bar.
3. Click **New query**, paste the contents of [`supabase_schema.sql`](file:///e:/Microsoft%20prompt%20area/supabase_schema.sql), and click **Run**.
4. That's it! Tables `tide_profiles`, `tide_tasks`, and `tide_blocks` will be created with Row Level Security enabled.
5. In the app UI under **Student Profile**, click **⚡ Connect & Test** or **☁️ Push to Cloud** to sync!

---

## 📁 Project Structure

```text
├── index.html            # Main dashboard application entry point
├── Tide.html             # Application markup & client script
├── server.js             # Lightweight zero-dependency Node.js HTTP server
├── supabase_schema.sql   # Supabase SQL migration script
├── package.json          # Project metadata & npm scripts
├── three.min.js          # Three.js 3D rendering library
├── supabase.min.js       # Supabase client SDK
├── .env.example          # Environment variables template
└── .gitignore            # Git ignore rules (protects .env)
```

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla CSS (Glassmorphism design tokens), Modern ES6+ JavaScript
- **3D Graphics**: Three.js
- **Database / Backend**: Supabase (JS SDK)
- **Local Dev Server**: Node.js `http` module

---

## 📄 License

MIT License. Designed with ❤️ for students.
