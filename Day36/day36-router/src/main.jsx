import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Apple from "./Apple.jsx";
import Banana from "./Banana.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/apples", element: <Apple /> }],
  },
  { path: "apple", element: <Apple /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/apple" element={<Apple />} />
//       <Route path="/banana" element={<Banana />} />
//     </Routes>
//   </BrowserRouter>,
// );
