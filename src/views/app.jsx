import Menu from "../components/layout/menu";
import Content from "../components/layout/content";
import "./app.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <Content />
      </BrowserRouter>
    </div>
  );
};

export default App;
