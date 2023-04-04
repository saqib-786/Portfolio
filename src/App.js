import { ThemeProvider } from "@mui/material";
import theme from "./Config/Theme/Theme";
import Home from "./Screens/Home";
import { useState } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading ? (
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      ) : (
        <div
        id="loadingContainer"
        
        >
          {setTimeout(() => {
            setIsLoading(true);
          }, 5000)}
          <img
            className="load"
            width="150px"
            height="150px"
            src="./logo.png"
            alt="loader"
          />
        </div>
      )}
    </>
  );
}

export default App;
