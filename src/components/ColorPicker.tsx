import React from "react";
import colorPicker from "../assets/color-picker-icon.svg";
import "../styles/Toolbar.css";

interface ColorPickerProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  selectedColor,
  setSelectedColor,
}) => {
  const colorInputRef = React.useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  };
  return (
    <button className="toolbar-content" onClick={handleClick}>
      <img src={colorPicker} alt="color-picker" className="icon"></img>
      <input
        type="color"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
        aria-label="Color Picker"
        className="color-picker"
        ref={colorInputRef}
      />
    </button>
  );
};

export default ColorPicker;