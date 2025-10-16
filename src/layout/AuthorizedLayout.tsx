import { Outlet } from "react-router-dom";
export default function AuthorizedLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
