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
import { SearchTodo } from './pages/search/searchTodo';
import { SkillsTodo } from "./pages/skills/SkillsTodo.jsx";
import Reducer from "./pages/reducer/reducer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <CreateTodo/>,
  },
  {
    path: "/search",
    element: <SearchTodo/>,
  },
  {
    path: "/skills",
    element: <SkillsTodo/>,
  },
  {
    path: "/red",
    element: <Reducer/>,
  },
  {
    path: "*",
    element: <h1>404 Todo</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />
    <Navbar />
    <Box sx={{ mt: 10 }}>
      <RouterProvider router={router} />,
    </Box>
  </StrictMode>
);
