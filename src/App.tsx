import { useState } from "react";
import "./App.css";
import MajorArcanasDrawing from "./components/MajorArcanasDrawing";
import MinorArcanasDrawing from "./components/MinorArcanasDrawing";

function App() {
  const [isMajorArcanas, setIsMajorArcanas] = useState<boolean>();
  const [isDrawing, setIsDrawing] = useState(false);

  const handleSelection = (value: boolean) => {
    setIsMajorArcanas(value);
    setIsDrawing(true);
  };

  return (
    <>
      {isDrawing ? (
        <>
          {isMajorArcanas ? <MajorArcanasDrawing /> : <MinorArcanasDrawing />}
          <button onClick={() => setIsDrawing(false)}>
            Revenir à la sélection des tirages
          </button>
        </>
      ) : (
        <>
          <button onClick={() => handleSelection(true)}>Tirage en croix</button>
          <button onClick={() => handleSelection(false)}>
            Tirage journalier
          </button>
        </>
      )}
    </>
  );
}
export default App;
