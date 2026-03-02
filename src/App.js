import "./styles.css";
import { ThemeContext } from "./ThemeContext";
import ToolBar from "./ToolBar";
export default function App() {
  return (
    <ThemeContext.Provider value={"dark"}>
      <div>
        <h1>Context Example</h1>
        <ToolBar />
      </div>
    </ThemeContext.Provider>
  );
}
