import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
/* import NavBar from "../components/NavBar"; */
import NavTest from "../components/NavTest"

function MainLayout() {
  const navigate = useNavigate();

  useEffect((): void => {
    const usuario = localStorage.getItem("usuario");

    if (!usuario) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <NavTest />
      <Outlet />
    </div>
  );
}

export default MainLayout;
