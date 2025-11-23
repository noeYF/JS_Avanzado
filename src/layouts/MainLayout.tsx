import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../components/NavBar";

function MainLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");

    if (!usuario) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
