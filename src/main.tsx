import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { Root } from "react-dom/client";
import './style/App.css';


import UserLayout from './layouts/UserLayout';
import Home from "./pages/UserPages/Home";
import About from './pages/UserPages/About';
import Contact from './pages/UserPages/Contact';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='' element={<Home />} />
        <Route path="/" element={<UserLayout />}>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

const container   = document.getElementById("root") as HTMLDivElement;
if (container) {
  const root : Root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.warn("Root already initialized");
}
