import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="w-screen">
      <Header />
      <div className="pt-12">
        <Outlet />
      </div>
    </main>
  );
};

export default App;
