import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.appMainpage}>
        <SideBar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
