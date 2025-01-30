import { Outlet } from "react-router";

const Main = () => {
  return (
    <main>
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
