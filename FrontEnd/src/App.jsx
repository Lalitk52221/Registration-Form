import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
