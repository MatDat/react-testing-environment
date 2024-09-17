import "./App.css";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Index from "./Components/Index";
import CompleteGreeting from "./Components/PropsExample/CompleteGreeting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/greeting" element={<CompleteGreeting />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
