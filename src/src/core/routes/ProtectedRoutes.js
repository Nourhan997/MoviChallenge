
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ shouldbeloggedIn }) => {
  let isAuth = sessionStorage.getItem("session") ? true : false;

  if (shouldbeloggedIn === true)
    return isAuth === true ? <Outlet /> : <Navigate to={`/home`} replace />;
  else
    return isAuth === false ? (
      <Outlet />
    ) : (
      <Navigate to={`/`} replace />
    );
};
export default ProtectedRoutes;
