==========================================================
                      STATKICK
     Intelligent Football Statistics & Video Analysis
==========================================================

Developer: Nidal Al-Ramahi
----------------------------------------------------------


1. PROJECT OVERVIEW
----------------------------------------------------------
StatKick is a full-stack web platform designed to display football
statistics, news, and highlights while offering an experimental
computer vision feature for video-based player tracking.

The project integrates a React.js frontend, a Node.js backend,
and a Python-based module for object detection and team
assignment in football videos. It demonstrates real-world
application development combining web technologies and
artificial intelligence.


2. OBJECTIVE
----------------------------------------------------------
The main goal of StatKick is to create an intelligent and
interactive platform that unites football data, news, and
computer vision analysis in one environment.

StatKick aims to:
- Demonstrate full-stack engineering skills.
- Integrate APIs for real-time sports data.
- Explore AI techniques applied in football analytics.
- Deliver a clean and modern user interface.


3. SYSTEM ARCHITECTURE
----------------------------------------------------------
The system is structured into three main layers:

A. Frontend (React.js)
   - Built as a Single Page Application (SPA) using React Router.
   - Tailwind CSS used for glassmorphic and responsive design.
   - Displays teams, competitions, matches, and football news.
   - Communicates with backend via REST API using Axios.

B. Backend (Node.js / Express.js)
   - RESTful API serving structured JSON data.
   - Endpoints for competitions, teams, and players.
   - Integrates GNews API for football news.
   - Integrates ScoreBat API for match highlights.
   - Handles static files and provides lightweight data storage.

C. Computer Vision Layer (Python)
   - Experimental YOLO-based detection model.
   - Detects players, referees, goalkeepers, and the ball.
   - Annotates uploaded videos with color-coded bounding boxes.
   - Returns processed video via backend endpoint.


4. MAIN FEATURES
----------------------------------------------------------
| Feature                  | Description                                     |
|---------------------------|-------------------------------------------------|
| Interactive UI            | Clean glassmorphic design with Tailwind CSS    |
| Football Data Integration | Displays competitions, teams, and players info |
| Live News & Highlights    | Fetches football updates via APIs              |
| Video Analysis Tool       | Detects players and referees in uploaded videos|
| Responsive Design         | Works smoothly on desktop and mobile devices   |


5. USE CASES
----------------------------------------------------------
1. Browse Football Data
   - Access teams, players, and competition information.

2. View News and Highlights
   - See football-related news articles and match clips 
     integrated via GNews and ScoreBat APIs.

3. Upload and Analyze Football Videos
   - Upload a match video.
   - The system detects players, referees, and the ball.
   - Annotated video is displayed with tracking results.


6. TECHNOLOGIES USED
----------------------------------------------------------
Frontend:
- React.js
- Tailwind CSS
- Axios
- React Router

Backend:
- Node.js
- Express.js
- JSON file storage

APIs:
- GNews API (Football news)
- ScoreBat API (Match highlights)

Computer Vision:
- Python
- OpenCV
- YOLO (Object Detection)

Tools:
- Git / GitHub
- Visual Studio Code
- Postman
- Figma (UI Design)


7. PROJECT STRUCTURE
----------------------------------------------------------
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
└── README.txt              → Project documentation


8. HOW IT WORKS
----------------------------------------------------------
1. The user opens the platform in their browser.
2. The frontend requests football data from the Node.js backend.
3. The backend serves data and external API results (news/highlights).
4. If a video is uploaded, it is sent to the Python layer.
5. The vision module detects players, assigns teams, and returns
   an annotated video.
6. Results are displayed interactively on the web interface.


9. DESIGN AND USER EXPERIENCE
----------------------------------------------------------
- UI Theme: Glassmorphism with subtle shadows and blur effects.
- Color Scheme: Clean white and dark contrasts with transparent layers.
- Responsive Layout: Optimized for mobile and desktop screens.
- Smooth animations using Tailwind transitions.


10. RESULTS AND DEMO
----------------------------------------------------------
The demo version includes:
- Interactive homepage with football-themed visuals.
- Competitions and teams displayed in organized grids.
- News and highlights fetched in real-time.
- Functional video analysis interface where the user uploads a
  clip and sees annotated results.

The computer vision module demonstrates how players and referees
are identified and tracked in real-time video frames, each marked
with distinct colors and IDs.


11. FUTURE IMPROVEMENTS
----------------------------------------------------------
- Connect to a real database (MongoDB or PostgreSQL).
- Deploy full application online (Vercel / Render / Railway).
- Add user authentication and profiles.
- Include match statistics visualizations.
- Improve video analysis with more advanced AI models.
- Enable multi-user upload and sharing functionality.


12. PERSONAL LEARNING OUTCOME
----------------------------------------------------------
Through this project, I developed:
- Stronger skills in frontend and backend web development.
- Hands-on experience integrating REST APIs.
- Better understanding of data management and modular design.
- Improved ability to plan, organize, and manage my own workflow.
- Insight into applying AI in sports analytics.


13. SUMMARY
----------------------------------------------------------
StatKick combines engineering, data integration, and artificial
intelligence to deliver a smart web platform for football fans
and developers. It highlights the power of merging traditional
web development with modern AI-based video analysis.

This project demonstrates creativity, technical competence, and
practical understanding of how digital technologies can enhance
sports analysis and presentation.


==========================================================

==========================================================
