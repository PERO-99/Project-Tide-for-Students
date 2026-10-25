# 🌊 Project Tide for Students 🎒⚡

<div align="center">

![Tide Banner](https://img.shields.io/badge/Tide-Student%20Cockpit-0ea5e9?style=for-the-badge&logo=target&logoColor=white)
<br/>

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

<br/>

[![Node.js Version](https://img.shields.io/badge/Node.js-18%2B%20%7C%2020%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Render](https://img.shields.io/badge/Render-Deploy%20Ready-46E3B7?style=flat-square&logo=render&logoColor=black)](https://render.com)
[![Three.js](https://img.shields.io/badge/Three.js-r128%203D-000000?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL%20Sync-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com)

**The ultimate academic command center: interactive 3D avatars, intelligent timetable scheduling, Pomodoro focus soundscapes, task triage, flashcards, GPA calculators, and cloud synchronization.**

[Key Features](#-key-features) • [Deploy to Render](#-deploy-to-render) • [Quickstart](#-quickstart--local-development) • [Supabase Setup](#-supabase-cloud-database-setup) • [Configuration](#-environment-variables) • [Project Structure](#-project-structure)

</div>

---

## 🌟 Key Features

| Feature | Description |
| :--- | :--- |
| **🧑‍🎓 3D Interactive Avatar** | Three.js-rendered real-time 3D student companion with customizable skin tones, outfits, idle physics, and celebratory animations. |
| **⏱️ Pomodoro & Soundscapes** | Customizable 25/5/15 intervals, daily focus streak counters, and integrated ambient soundscapes (rain, white noise, cafe). |
| **📅 Weekly Timetable Planner** | Color-coded grid schedule with room indicators, instructor notes, and intelligent conflict auto-triage. |
| **✅ Task & Assignment Kanban** | Priority weighting, due date countdowns, time estimation, and automated schedule slot allocation. |
| **📇 Flashcard Study Mode** | Interactive 3D flip card decks, spaced repetition cycles, and real-time mastery tracking. |
| **📊 GPA & Grade Calculator** | Weighted course grade calculator supporting standard 4.0 GPA scales, credit hour weights, and semester forecasting. |
| **☁️ Dual-Engine Cloud Sync** | Seamless Supabase PostgreSQL synchronization with transparent offline-first LocalStorage fallback. |
| **🌌 Cyber-Dark Glassmorphism** | GPU-accelerated backdrop filters, high-DPI responsive layout for desktop, tablets, and smartphones. |

---

## 🚀 Deploy to Render

Project Tide is configured for deployment on [Render](https://render.com) either as a **Node.js Web Service** (recommended) or as a **Static Site**.

### Method 1: One-Click Render Blueprint (Recommended)

1. Fork or push this repository to your **GitHub** / **GitLab** account.
2. In the [Render Dashboard](https://dashboard.render.com/), click **New +** and select **Blueprint**.
3. Connect your repository. Render will automatically detect the included [`render.yaml`](file:///e:/Microsoft%20prompt%20area/render.yaml) configuration.
4. Supply your Supabase environment variables when prompted (or leave blank to use defaults):
   - `SUPABASE_URL`
   - `SUPABASE_PUBLISHABLE_KEY`
5. Click **Apply**. Render will build and deploy your application with zero-downtime health checking!

---

### Method 2: Manual Web Service Setup on Render

If you prefer setting up manually without a Blueprint:

1. Click **New +** > **Web Service** on Render.
2. Connect your Git repository.
3. Configure the service settings:
   - **Name**: `tide-student-dashboard`
   - **Region**: Choose the region closest to you (e.g., *Oregon*, *Frankfurt*, *Singapore*)
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`
4. Expand **Advanced** and set:
   - **Health Check Path**: `/healthz`
5. Add the following **Environment Variables**:

| Key | Example Value | Description |
| :--- | :--- | :--- |
| `NODE_VERSION` | `20` | Node.js runtime version |
| `HOST` | `0.0.0.0` | Binds server to all network interfaces |
| `SUPABASE_URL` | `https://your-project.supabase.co` | Your Supabase project URL |
| `SUPABASE_PUBLISHABLE_KEY` | `sb_publishable_...` | Supabase anon/publishable key |

6. Click **Create Web Service**. Your app will be live at `https://<your-subdomain>.onrender.com`!

---

### Method 3: Render Static Site (Free Alternative)

If you only need client-side hosting without the Node HTTP server:

1. Click **New +** > **Static Site** on Render.
2. Set **Publish directory** to `./` (root directory).
3. Leave **Build Command** blank.
4. Click **Create Static Site**. (Note: Supabase credentials can be saved directly in the web app UI).

---

## 💻 Quickstart & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) v18.0.0 or higher
- npm (bundled with Node.js)

### 1. Clone & Setup
```bash
# Clone the repository
git clone https://github.com/PERO-99/Project-Tide-for-Students.git
cd Project-Tide-for-Students

# Copy environment template
cp .env.example .env
```

### 2. Start the Local Server
```bash
# Start server with zero external dependencies
npm start
```

### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000) in your browser.

> [!TIP]
> You can also open [`index.html`](file:///e:/Microsoft%20prompt%20area/index.html) directly in any modern browser without running a server; offline mode and local storage will work out of the box.

---

## 🗄️ Supabase Cloud Database Setup

Project Tide includes a complete SQL schema script for cloud persistence.

1. Create a free project at [Supabase](https://supabase.com).
2. Navigate to the **SQL Editor** in your Supabase project dashboard.
3. Open the included [`supabase_schema.sql`](file:///e:/Microsoft%20prompt%20area/supabase_schema.sql) file, copy its contents, paste them into the SQL Editor, and click **Run**.
4. The migration will configure:
   - `tide_profiles`: User profile, GPA settings, avatar appearance, and streak data.
   - `tide_tasks`: Tasks, estimated duration, urgency, and completion status.
   - `tide_blocks`: Timetable events, class slots, and scheduled focus sessions.
   - **Row Level Security (RLS)**: Public read/write policies with anonymous key authentication.
5. In your Supabase Dashboard, go to **Project Settings** > **API**, copy your **Project URL** and **anon/publishable key**, and set them in your `.env` or Render dashboard.

---

## ⚙️ Environment Variables

The server automatically loads environment variables from a `.env` file locally, or from the platform environment on Render:

| Variable | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `PORT` | `number` | `3000` | HTTP port the server listens on (Render assigns this automatically). |
| `HOST` | `string` | `0.0.0.0` | Network binding interface. Use `0.0.0.0` for cloud containers. |
| `SUPABASE_URL` | `string` | *(Embedded default)* | Your Supabase project URL. |
| `SUPABASE_PUBLISHABLE_KEY` | `string` | *(Embedded default)* | Supabase public anonymous API key. |

---

## 🌐 Server API Endpoints

The lightweight built-in HTTP server (`server.js`) exposes the following endpoints:

| Endpoint | Method | Response | Description |
| :--- | :--- | :--- | :--- |
| `/` | `GET` | `text/html` | Serves the main application dashboard (`index.html`). |
| `/healthz` | `GET` | `application/json` | Health check probe for Render, container orchestrators, and uptime monitors. |
| `/api/config` | `GET` | `application/json` | Secure client configuration provider exposing public Supabase credentials. |

---

## 📁 Project Structure

```text
├── index.html            # Primary application entry point (Render static & web root)
├── server.js             # Zero-dependency Node.js HTTP server (Render web service)
├── render.yaml           # Render Blueprint for automated 1-click cloud deployment
├── package.json          # Project metadata, engine versions & npm scripts
├── supabase_schema.sql   # Supabase PostgreSQL database schema & RLS policies
├── supabase.min.js       # Supabase JavaScript Client SDK v2 (with CDN fallback)
├── three.min.js          # Three.js 3D rendering library (with CDN fallback)
├── .env.example          # Environment variable template
└── .gitignore            # Git ignore rules protecting local secrets and logs
```

---

## 🛡️ Security & Offline Resilience

- **No Sensitive Leakage**: The `/api/config` endpoint strictly exposes public anonymous keys. Database service role keys are never sent to the client.
- **Path Traversal Protection**: `server.js` verifies all static asset paths remain strictly within the root directory.
- **Offline First**: All user changes are cached immediately in browser `localStorage`. If Supabase cloud connectivity is interrupted, the app operates without data loss and syncs when reconnected.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">
  <sub>Built with ❤️ for students worldwide. Stay focused, ride the tide. 🌊</sub>
</div>
