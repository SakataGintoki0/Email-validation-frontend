import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <h1>Header</h1>

      <main>
        <Outlet />
      </main>

      <h2>Footer</h2>
    </div>
  );
}

export default AppLayout;
