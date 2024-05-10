// Import necessary modules
import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App";

// Create the root container using createRoot
const container = document.getElementById("root");
const root = createRoot(container);

// Render the App component
root.render(<App />);
