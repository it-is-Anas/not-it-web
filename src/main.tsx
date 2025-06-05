import './style/App.css';
import ReactDOM from "react-dom/client";
import type { Root } from "react-dom/client";
import Router from './router/index';
import { Provider } from 'react-redux';
import { store } from './state/main';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

const container = document.getElementById("root") as HTMLDivElement;
if (container) {
  const root: Root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.warn("Root already initialized");
}
