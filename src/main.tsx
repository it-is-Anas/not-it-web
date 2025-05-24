import ReactDOM from "react-dom/client";
import type { Root } from "react-dom/client";
import './style/App.css';
import Router from './router/index';


export default function App() {
  return (
    <Router />
  );
}

const container = document.getElementById("root") as HTMLDivElement;
if (container) {
  const root: Root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.warn("Root already initialized");
}
