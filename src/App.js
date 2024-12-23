import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchAppBar from "./components/AppBar";
import { Tour } from "./components/Tour";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:tourId" element={<Tour />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
