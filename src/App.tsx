import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <SideBar/>
    </div>
  );
}

export default App;
