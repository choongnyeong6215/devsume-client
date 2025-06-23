import { RouterProvider } from "react-router";
import { router } from "./routes/index";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
