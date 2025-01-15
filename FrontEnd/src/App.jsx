import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="w-screen">
      <Header />
      <Outlet />
    </main>
  );
};

export default App;
