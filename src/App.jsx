import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IpoList from "./pages/IpoList";
import IpoDetails from "./pages/IpoDetails";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ipo-list" element={<IpoList />} />
        <Route path="/ipo-details" element={<IpoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
