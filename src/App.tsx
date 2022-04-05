import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { Fragment } from "react";

function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/video/:videoId" element={<VideoPlayer />} />
            <Route path="/search/:searchQuery" element={<SideBar />} />
            <Route
              path="/"
              element={
                <div className={styles.appMainpage}>
                  <SideBar />
                  <RecommendedVideos />
                </div>
              }
            />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
