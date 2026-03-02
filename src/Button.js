import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Button() {
  const theme = useContext(ThemeContext);
  const style = {
    backgroundColor: theme === "dark" ? "black" : "white",
    color: theme === "dark" ? "white" : "black",
    padding: "10px",
    border: "1px solid",
  };
  return <button style={style}>Theme Button({theme})</button>;
}
