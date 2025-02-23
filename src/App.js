import "./App.css";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MyContext from "./components/Context/MyContext";
import Hompage from "./pages/Hompage";
import Loginpage from "./pages/Loginpage";
import Purchases from "./pages/Purchases";
import { useState } from "react";




function App() {
  const [branch, setBranch] = useState("")
  const [isUzbek, setIsUzbek] = useState(true)
  
  return (
    <MyContext.Provider value ={{
      branch,
      setBranch,
      isUzbek,
      setIsUzbek
    }}>
      {/* <ThemeProvider theme={theme}> */}
        <Box>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Loginpage/>} />
              <Route path="/home" element={<Hompage/>} />
              <Route path="/purchases" element={<Purchases/>}/>
            </Routes>
          </BrowserRouter>
        </Box>
      {/* </ThemeProvider> */}
    </MyContext.Provider>
  );
}

export default App;
