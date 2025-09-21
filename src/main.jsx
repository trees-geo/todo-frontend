import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./components/navbar/Navbar.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { CreateTodo } from "./pages/create/createTodo.jsx";
import { SearchTodo } from "./pages/search/searchTodo";
import { SkillsTodo } from "./pages/skills/SkillsTodo.jsx";
import Reducer from "./pages/reducer/reducer.jsx";

const navHOC = (props) => {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: 10 }}>
      {
        props
      }
      </Box>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: navHOC(<App/>),
  },
  {
    path: "/create",
    element: navHOC(<CreateTodo />),
  },
  {
    path: "/search",
    element: navHOC(<SearchTodo />),
  },
  {
    path: "/skills",
    element: navHOC(<SkillsTodo />),
  },
  {
    path: "/red",
    element: navHOC(<Reducer />),
  },
  {
    path: "*",
    element: navHOC(<h1>404 Todo</h1>),
  },
]);



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />
      <RouterProvider router={router} />,
  </StrictMode>
);
