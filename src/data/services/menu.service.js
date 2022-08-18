import About from "../../views/examples/about";
import Param from "../../views/examples/param";
import Home from "../../views/examples/home";
import NotFound from "../../views/examples/not-found";
import UseState from "../../views/examples/use-state";
import UseEffect from "../../views/examples/use-effect";

export default class MenuService {

    getContent = [
        {
            title: "Home",
            path: "/",
            element: <Home />,
            to: "/"
        },
        {
            title: "About",
            path: "about",
            element: <About />,
            to: "/about"
        },
        {
            title: "Param #01",
            path: "/param/:id",
            element: <Param />,
            to: "/param/1"
        },
        {
            title: "Param #02",
            path: "/param/:id",
            element: <Param />,
            to: "/param/2"
        },
        {
            title: "Use state",
            path: "/use-state",
            element: <UseState />,
            to: "/use-state"
        },
        {
            title: "Use effect",
            path: "/use-effect",
            element: <UseEffect />,
            to: "/use-effect"
        },
        {
            title: "Not found",
            path: "*",
            element: <NotFound />
        }
    ];

    getRoutes() {
        return this.getContent
            .filter(item => item.to)
            .map(item => {
                return {
                    title: item.title,
                    to: item.to
                }
            });
    }

    getMenus() {
        return this.getContent.map(item => {
            return {
                title: item.title,
                path: item.path,
                element: item.element
            }
        });
    }
}