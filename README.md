# ⚽ STATKICK  
### Intelligent Football Statistics & Video Analysis  

---

**Developer:** Nidal Al-Ramahi  

---

## 1. PROJECT OVERVIEW
StatKick is a full-stack web platform designed to display football
statistics, news, and highlights while offering an experimental
computer-vision feature for video-based player tracking.

The project integrates a React.js frontend, a Node.js backend,
and a Python-based module for object detection and team
assignment in football videos. It demonstrates real-world
application development combining web technologies and
artificial intelligence.

---

## 2. OBJECTIVE
The main goal of StatKick is to create an intelligent and
interactive platform that unites football data, news, and
computer-vision analysis in one environment.

**StatKick aims to:**
- Demonstrate full-stack engineering skills  
- Integrate APIs for real-time sports data  
- Explore AI techniques applied in football analytics  
- Deliver a clean and modern user interface  

---

## 3. SYSTEM ARCHITECTURE
The system is structured into three main layers:

### A. Frontend (React.js)
- Built as a Single Page Application (SPA) using React Router  
- Tailwind CSS used for glassmorphic and responsive design  
- Displays teams, competitions, matches, and football news  
- Communicates with backend via REST API using Axios  

### B. Backend (Node.js / Express.js)
- RESTful API serving structured JSON data  
- Endpoints for competitions, teams, and players  
- Integrates **GNews API** for football news  
- Integrates **ScoreBat API** for match highlights  
- Handles static files and provides lightweight data storage  

### C. Computer Vision Layer (Python)
- Experimental YOLO-based detection model  
- Detects players, referees, goalkeepers, and the ball  
- Annotates uploaded videos with color-coded bounding boxes  
- Returns processed video via backend endpoint  

---

## 4. MAIN FEATURES
| Feature | Description |
|----------|-------------|
| **Interactive UI** | Clean glassmorphic design with Tailwind CSS |
| **Football Data Integration** | Displays competitions, teams, and players info |
| **Live News & Highlights** | Fetches football updates via APIs |
| **Video Analysis Tool** | Detects players and referees in uploaded videos |
| **Responsive Design** | Works smoothly on desktop and mobile devices |

---

## 5. USE CASES
1. **Browse Football Data** – Access teams, players, and competition information  
2. **View News & Highlights** – See football-related articles and match clips via GNews & ScoreBat APIs  
3. **Upload and Analyze Videos** – Upload a match clip → detect players/referees/ball → view annotated output  

---

## 6. TECHNOLOGIES USED
**Frontend:** React.js · Tailwind CSS · Axios · React Router  
**Backend:** Node.js · Express.js · JSON Storage  
**APIs:** GNews API · ScoreBat API  
**Computer Vision:** Python · OpenCV · YOLO  
**Tools:** Git/GitHub · VS Code · Postman · Figma  

---

## 7. PROJECT STRUCTURE

```text
StatKick/
│
├── frontend/               → React.js web app
│   ├── src/
│   │   ├── components/     → UI Components
│   │   ├── pages/          → App Pages (Home, Teams, etc.)
│   │   ├── assets/         → Images, icons, videos
│   │   └── App.jsx
│   └── tailwind.config.js
│
├── backend/                → Node.js server
│   ├── routes/             → API endpoints
│   ├── data/               → JSON data (teams, players, etc.)
│   └── server.js
│
├── vision/                 → Python module for video analysis
│   └── detect_players.py
│
└── README.md               → Project documentation

## 8. HOW IT WORKS
1. The user opens the platform in a browser.  
2. The frontend requests football data from the Node.js backend.  
3. The backend serves data and external API results (news and highlights).  
4. When a video is uploaded, it’s sent to the Python layer.  
5. The vision module detects players, assigns teams, and returns an annotated video.  
6. The annotated video and analysis results are displayed interactively on the web interface.  

---

## 9. DESIGN & USER EXPERIENCE
- **Theme:** Glassmorphism with subtle shadows and blur effects.  
- **Colors:** Clean white/dark contrasts with transparent layers.  
- **Responsive Layout:** Optimized for mobile and desktop screens.  
- **Animations:** Smooth transitions and hover effects using Tailwind CSS.  

---

## 10. RESULTS & DEMO
The demo version of **StatKick** includes:  
- An interactive homepage with football-themed visuals.  
- Organized grids for competitions and teams.  
- Real-time news and match highlights via integrated APIs.  
- A functional video analysis interface for uploading and viewing annotated clips.  

The **computer vision module** demonstrates object detection for players, referees, and the ball, marking each entity with color-coded bounding boxes and labels.  
This provides an engaging and data-driven way to visualize football match dynamics.  

---

## 11. FUTURE IMPROVEMENTS
- Connect to a full database (e.g., MongoDB or PostgreSQL).  
- Deploy the entire app online (Vercel, Render, or Railway).  
- Add user authentication and personal dashboards.  
- Include match statistics and advanced visualizations.  
- Enhance video analysis with improved AI and tracking algorithms.  
- Enable multi-user uploads, sharing, and community interaction.  

---

## 12. PERSONAL LEARNING OUTCOME
Through building **StatKick**, I gained:  
- Advanced skills in frontend and backend web development.  
- Practical experience integrating RESTful APIs.  
- A better understanding of modular project architecture.  
- Improved time management and project planning.  
- Deeper insight into applying **AI and computer vision** to sports analytics.  

---

## 13. SUMMARY
**StatKick** merges software engineering, data integration, and artificial intelligence to deliver a smart and modern platform for football analysis.  
It demonstrates the potential of combining web technologies with AI-powered computer vision to create immersive, data-rich user experiences.  

This project reflects technical capability, creativity, and a deep understanding of real-world application design — bridging the gap between **technology and sports intelligence**.  

---
