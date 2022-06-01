import "./styles.css";
import Timer from "./Timer";

export default function App() {
  return (
    <div className="App">
      <Timer start={1} end={10} />
    </div>
  );
}
