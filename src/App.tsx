import Canvas, { CanvasRef } from "./components/Canvas";
import Toolbar from "./components/Toolbar";
import { useState, useRef, useCallback, useLayoutEffect } from "react";
import "./styles/App.css";

const PIXEL_SIZE = 10;

function App() {
  const [rowSize, setRowSize] = useState(50);
  const [columnSize, setColumnSize] = useState(50);
  const [selectedTool, setSelectedTool] = useState("pencil");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const canvasComponentRef = useRef<CanvasRef>(null);

  const calculateGridSize = useCallback(() => {
    if (canvasRef.current) {
      const canvasWidth = canvasRef.current.offsetWidth;
      const canvasHeight = canvasRef.current.offsetHeight;

      const cellsInWidth = Math.floor(canvasWidth / PIXEL_SIZE);
      const cellsInHeight = Math.floor(canvasHeight / PIXEL_SIZE);

      setRowSize(cellsInHeight);
      setColumnSize(cellsInWidth);
    }
  }, [canvasRef]);

  useLayoutEffect(() => {
    calculateGridSize();
    window.addEventListener("resize", calculateGridSize);
    return () => {
      window.removeEventListener("resize", calculateGridSize);
    };
  }, [calculateGridSize]);

  const handleSave = () => {
    if (canvasComponentRef.current) {
      canvasComponentRef.current.exportAsImage();
    }
  };

  const handleReset = () => {
    if (canvasComponentRef.current) {
      canvasComponentRef.current.resetGrid();
    }
  };

  return (
    <div className="app">
      <Toolbar
        selectedTool={selectedTool}
        setSelectedTool={setSelectedTool}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        onSave={handleSave}
        onReset={handleReset}
      />
      <div className="canvas-container" ref={canvasRef}>
        <Canvas
          ref={canvasComponentRef}
          rowSize={rowSize}
          columnSize={columnSize}
          selectedTool={selectedTool}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
}

export default App;
