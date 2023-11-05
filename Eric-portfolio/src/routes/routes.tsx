import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/resume",
                element: <Resume />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
        ],
    },
]);