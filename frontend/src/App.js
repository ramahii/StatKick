import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";
import HomePage from "./pages/HomePage";
import CompetitionsPage from "./pages/CompetitionsPage";
import CompetitionDetails from "./pages/CompetitionDetails";
import TeamsPage from "./pages/TeamsPage";
import TeamDetails from "./pages/TeamDetails";
import NewsPage from "./pages/NewsPage";
import MatchesPage from "./pages/MatchesPage";
import VideoAnalysisPage from "./pages/VideoAnalysisPage";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Top Navbar */}
        <Navbar />

        {/* Main content area */}
        <div className="flex-1 pt-20"> 
          {/* pt-20 ensures content is pushed down below navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/competitions"
              element={<PageWrapper><CompetitionsPage /></PageWrapper>}
            />
            <Route
              path="/competition/:id"
              element={<PageWrapper><CompetitionDetails /></PageWrapper>}
            />
            <Route
              path="/teams"
              element={<PageWrapper><TeamsPage /></PageWrapper>}
            />
            <Route
              path="/team/:id"
              element={<PageWrapper><TeamDetails /></PageWrapper>}
            />
            <Route
              path="/news"
              element={<PageWrapper><NewsPage /></PageWrapper>}
            />
            <Route
              path="/matches"
              element={<PageWrapper><MatchesPage /></PageWrapper>}
            />
            <Route
              path="/video-analysis"
              element={<PageWrapper><VideoAnalysisPage /></PageWrapper>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
