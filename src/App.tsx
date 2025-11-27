import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
/* import LoginPage from "./pages/login/LoginPage"; */
import Dashboard from "./pages/dashboard/Dashboard";
import Inicio from "./pages/Inicio";
import LoginPage from "./pages/login/LoginPage";
import CrearUsuario from "./pages/login/crearCuenta";

// Productos
import ProductosIndex from "./pages/productos/ProductosIndex";
import ProductosListado from "./pages/productos/ProductosListado";
import ProductosNuevo from "./pages/productos/ProductosNuevo";
import ProductosBuscar from "./pages/productos/ProductosBuscar";
import ProductosEditar from "./pages/productos/ProductosEditar";

// Clientes
import ClientesIndex from "./pages/clientes/ClientesIndex";
import ClientesListado from "./pages/clientes/ClientesListado";
import ClientesNuevo from "./pages/clientes/ClientesNuevo";
import ClientesBuscar from "./pages/clientes/ClientesBuscar";
import ClientesEditar from "./pages/clientes/ClientesEditar";

// Ventas
import VentasIndex from "./pages/ventas/VentasIndex";
import VentasListado from "./pages/ventas/VentasListado";
import VentasNuevo from "./pages/ventas/VentasNuevo";
import VentasBuscar from "./pages/ventas/VentasBuscar";
import VentasEditar from "./pages/ventas/VentasEditar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Inicio /> },
      { path: "/login", element: <LoginPage /> },
      {path:"/CrearCuenta",element:<CrearUsuario/>},
      { path: "dashboard", element: <Dashboard /> },

      {
        path: "productos",
        element: <ProductosIndex />,
        children: [
          { path: "lista", element: <ProductosListado /> },
          { path: "nuevo", element: <ProductosNuevo /> },
          { path: "buscar", element: <ProductosBuscar /> },
          { path: "editar/:id", element: <ProductosEditar /> },
        ],
      },

      {
        path: "clientes",
        element: <ClientesIndex />,
        children: [
          { path: "lista", element: <ClientesListado /> },
          { path: "nuevo", element: <ClientesNuevo /> },
          { path: "buscar", element: <ClientesBuscar /> },
          { path: "editar/:id", element: <ClientesEditar /> },
        ],
      },

      {
        path: "ventas",
        element: <VentasIndex />,
        children: [
          { path: "lista", element: <VentasListado /> },
          { path: "nuevo", element: <VentasNuevo /> },
          { path: "buscar", element: <VentasBuscar /> },
          { path: "editar/:id", element: <VentasEditar /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
