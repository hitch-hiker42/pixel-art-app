import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import html2canvas from "html2canvas";
import "../styles/Canvas.css";

interface CanvasProps {
  rowSize: number;
  columnSize: number;
  selectedTool: string;
  selectedColor: string;
}

export interface CanvasRef {
  exportAsImage: () => void;
  resetGrid: () => void;
}

const Canvas = forwardRef<CanvasRef, CanvasProps>(
  ({ rowSize, columnSize, selectedTool, selectedColor }, ref) => {
    const [grid, setGrid] = useState<string[][]>([]);
    const isDrawing = useRef(false);
    const canvasDivRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (rowSize > 0 && columnSize > 0) {
        setGrid(
          Array.from({ length: rowSize }, () =>
            Array.from({ length: columnSize }, () => "#ffffff")
          )
        );
      }

      const handleGlobalMouseUp = () => {
        isDrawing.current = false;
      };

      window.addEventListener("mouseup", handleGlobalMouseUp);

      return () => {
        window.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }, [rowSize, columnSize]);

    useImperativeHandle(ref, () => ({
      exportAsImage: () => {
        if (canvasDivRef.current) {
          html2canvas(canvasDivRef.current).then((canvas) => {
            const link = document.createElement("a");
            link.download = "canvas.png";
            link.href = canvas.toDataURL();
            link.click();
          });
        }
      },
      resetGrid: () => {
        setGrid(
          Array.from({ length: rowSize }, () =>
            Array.from({ length: columnSize }, () => "#ffffff")
          )
        );
      },
    }));

    if (grid.length === 0) {
      return null;
    }

    const handleMouseDown = (rowIndex: number, columnIndex: number) => {
      isDrawing.current = true;
      updateCellColor(rowIndex, columnIndex);
    };

    const handleMouseEnter = (rowIndex: number, columnIndex: number) => {
      if (isDrawing.current) {
        updateCellColor(rowIndex, columnIndex);
      }
    };

    const handleKeyDown = (
      e: React.KeyboardEvent<HTMLDivElement>,
      rowIndex: number,
      columnIndex: number
    ) => {
      if (e.key === "Enter" || e.key === " ") {
        updateCellColor(rowIndex, columnIndex);
      }
    };

    const updateCellColor = (rowIndex: number, columnIndex: number) => {
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row) => [...row]);
        newGrid[rowIndex][columnIndex] =
          selectedTool === "eraser" ? "#ffffff" : selectedColor;
        return newGrid;
      });
    };

    return (
      <div className="canvas" ref={canvasDivRef}>
        {grid.map((row, rowIndex) => (
          <div className="canvas-row" key={`row-${rowIndex}`}>
            {row.map((color, columnIndex) => (
              <div
                className="canvas-cell"
                key={`cell-${rowIndex}-${columnIndex}`}
                style={{ backgroundColor: color }}
                onMouseDown={() => handleMouseDown(rowIndex, columnIndex)}
                onMouseEnter={() => handleMouseEnter(rowIndex, columnIndex)}
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, rowIndex, columnIndex)} 
                aria-label={`Cell ${rowIndex}, ${columnIndex}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    );
  }
);

export default Canvas;
