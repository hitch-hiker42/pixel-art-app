# Pixel Drawing App

A web-based pixel drawing application built with **Vite**, **React**, and **TypeScript**. This application provides users with an interactive grid-based canvas where they can create pixel art using different tools (pencil, eraser), select colors, reset the canvas, and export their artwork as a PNG image.

The app is responsive and dynamically calculates the canvas size based on the browser window dimensions.

## Table of Contents

1. [Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [Application Architecture](#application-architecture)
4. [Features](#features)
5. [Setup Instructions](#setup-instructions)
6. [Demonstration](#demonstration)

## Overview

The **Pixel Drawing App** is a fully functional pixel art drawing tool. It includes:
- A **pencil** tool for drawing on a canvas grid.
- An **eraser** tool to remove parts of the drawing.
- A **color picker** to allow users to select custom colors for their drawings.
- A **reset** button to clear the entire canvas.
- An option to **save the drawing as a PNG** file.
- **Keyboard accessible** controls and a **responsive design** that dynamically adjusts the canvas size based on the viewport dimensions.

## Technologies Used

- **Vite**: A fast frontend build tool that provides a modern development environment for web applications.
- **React**: A JavaScript library for building user interfaces, responsible for rendering and managing component state.
- **TypeScript**: A strongly-typed superset of JavaScript used to improve development experience and catch errors during compile time.
- **html2canvas**: A JavaScript library that takes screenshots of the canvas and converts them to a downloadable PNG file.
- **Flexbox**: For responsive layout, making sure the canvas and toolbar are flexibly aligned and adjust based on window size.
- **CSS**: For additional styling of the app, such as the focus indicators and grid display.
- **Icons**: SVG icons are used for the toolbar tools like pencil, eraser, save, and reset.

## Application Architecture

The Pixel Drawing App follows a component-based architecture, divided into the following key components:

1. **App Component**:
   - The main parent component that manages the state for the entire app (selected tool, selected color, canvas dimensions).
   - Dynamically calculates the canvas grid size based on the viewport dimensions using **flexbox** and **window resize events**.

2. **Canvas Component**:
   - Responsible for rendering the pixel grid and handling user interactions (drawing, erasing).
   - Manages the pixel color state and listens for mouse events to modify the grid.
   - Uses **html2canvas** to export the pixel grid as a PNG when the user wants to save their artwork.

3. **Toolbar Component**:
   - Provides users with the pencil, eraser, color picker, save, and reset tools.
   - Updates the current tool and color selection based on user interactions.
   - Contains **SVG icons** for each tool, offering a visual interface that is both intuitive and accessible.
  
4. **ColorPicker Component**:
   - Allows users to select a custom color using the native HTML color input.

### TypeScript Integration

TypeScript is used in all the major components (`App.tsx`, `Canvas.tsx`, `Toolbar.tsx`, `ColorPicker.tsx`) to ensure proper typing of props and state management.

### State Management

- **React Hooks**: The app leverages React hooks (`useState`, `useEffect`, `useRef`, and `useCallback`) for managing the state and lifecycle events of the components.
- **Responsive Canvas**: The canvas dynamically resizes based on the window size, and its grid adjusts accordingly, using **useLayoutEffect** to track window resizing events.

## Features

- **Drawing Tool**: Use the pencil tool to draw on the canvas grid.
- **Eraser Tool**: Remove parts of the drawing by selecting the eraser tool.
- **Color Picker**: Customize the drawing color using the color picker.
- **Save as PNG**: Export the current drawing as a PNG file using the "Save" button.
- **Reset Canvas**: Clear the entire canvas with a single click using the "Reset" button.
- **Keyboard Accessibility**: Accessible via keyboard navigation (e.g., `Tab`, `Enter`, `Space`).
- **Responsive Design**: The app dynamically adjusts the canvas size based on the viewport size.

## Setup Instructions

### Prerequisites

Before running the application, ensure that **Node.js** and **npm** (or **Yarn**) are installed on your system.

### Steps to Run the Application

1. **Clone the repository**:

```bash
git clone https://github.com/hitch-hiker42/pixel-art-app.git
```

2. Navigate to the project directory:

```bash
cd pixel-art-app
```

3. Install dependencies:

```bash
npm install
```

4. Run the app:
```bash
npm run dev
```

The app will run on http://localhost:5173. Open this URL in your browser to interact with the application.

## Demonstration

Check out the live version of the web-app here: [Pixel Art Paint App]((https://pixel-art-paint-app.netlify.app/)

https://github.com/user-attachments/assets/9cd156c9-3cbe-44ec-9fd8-8189ac069c67
