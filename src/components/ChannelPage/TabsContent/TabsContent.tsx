import { Link } from "react-router-dom";
import styles from "./TabsContent.module.css";
import SearchIcon from "@mui/icons-material/Search";

const buttonsMainChannel = [
  { id: 1, title: "Головна", isFlag: true },
  { id: 2, title: "Відео", isFlag: false },
  { id: 3, title: "Списки відтворення", isFlag: false },
  { id: 4, title: "Спільнота", isFlag: false },
  { id: 5, title: "Канали", isFlag: false },
  { id: 6, title: "Про канал", isFlag: false },
  { id: 7, title: <SearchIcon sx={{ paddingTop: "20px" }} />, isFlag: false },
];

const TabsContent = () => {
  const handleClick = (id: number) => {
    buttonsMainChannel.map((item) => {
      item.isFlag = false;
      if (item.id === id) {
        return (item.isFlag = !item.isFlag);
      }
    });
  };
  return (
    <div>
      <ul className={styles.tabsContainer}>
        {buttonsMainChannel.map((item) => (
          <li
            key={item.id}
            className={`${styles.tabsList} ${
              item.isFlag ? styles.selected : ""
            }`}
            onClick={() => handleClick(item.id)}
          >
            <Link to={""} className={`${styles.tabsItem} ${styles.selected}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabsContent;
