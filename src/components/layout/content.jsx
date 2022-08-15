import "./content.css";
import { Routes, Route } from "react-router-dom";
import About from "../../views/examples/about";
import Param from "../../views/examples/param";
import Home from "../../views/examples/home";
import NotFound from "../../views/examples/not-found";

const Content = () => {
    return (
        <main className="content">
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/param/:id" element={<Param />} />
                <Route path="/" exact element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default Content;
