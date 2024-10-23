import React from "react";
import ColorPicker from "./ColorPicker";
import pencil from "../assets/pencil-icon.svg";
import eraser from "../assets/eraser-icon.svg";
import save from "../assets/save-icon.svg";
import reset from "../assets/reset-icon.svg";
import "../styles/Toolbar.css";

interface ToolbarProps {
  selectedTool: string;
  setSelectedTool: React.Dispatch<React.SetStateAction<string>>;
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  onSave: () => void;
  onReset: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  selectedTool,
  setSelectedTool,
  selectedColor,
  setSelectedColor,
  onSave,
  onReset,
}) => {
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    tool: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      setSelectedTool(tool);
    }
  };

  return (
    <div className="toolbar" role="toolbar" aria-label="Toolbar">
      <button
        className={selectedTool === "pencil" ? "active" : ""}
        onClick={() => setSelectedTool("pencil")}
        onKeyDown={(e) => handleKeyDown(e, "pencil")}
        aria-pressed={selectedTool === "pencil"}
        aria-label="Pencil Tool"
      >
        <div className="toolbar-content">
          <img src={pencil} alt="pencil-icon" className="icon" />
          <div>Pencil</div>
        </div>
      </button>
      <button
        className={selectedTool === "eraser" ? "active" : ""}
        onClick={() => setSelectedTool("eraser")}
        onKeyDown={(e) => handleKeyDown(e, "eraser")}
        aria-pressed={selectedTool === "eraser"}
        aria-label="Eraser Tool"
      >
        <div className="toolbar-content">
          <img src={eraser} alt="eraser-icon" className="icon" />
          <div>Eraser</div>
        </div>
      </button>
      <ColorPicker
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <button onClick={onSave} aria-label="Save Canvas">
        <div className="toolbar-content">
          <img src={save} alt="save-icon" className="icon" />
          <div>Save</div>
        </div>
      </button>
      <button onClick={onReset} aria-label="Reset Canvas">
        <div className="toolbar-content">
          <img src={reset} alt="reset-icon" className="icon" />
          <div>Reset</div>
        </div>
      </button>
    </div>
  );
};

export default Toolbar;
