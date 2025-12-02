import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";
import BuscarIndex from "./layouts/Productos/Buscar/BuscarIndex";
import ProductosIndex from "./layouts/Productos/ProductosIndex";

// Pages
/* import LoginPage from "./pages/login/LoginPage"; */
import Dashboard from "./pages/dashboard/Dashboard";
import Inicio from "./pages/Inicio";
import LoginPage from "./pages/login/LoginPage";
import CrearUsuario from "./pages/login/crearCuenta";

// Productos

import ProductosListado from "./pages/productos/ProductosListado";
import ProductosNuevo from "./pages/productos/ProductosNuevo";
import ProductosEditar from "./pages/productos/ProductosEditar";
//Productos-buscar
import BuscarAlfabeticamente from "./pages/productos/Buscar/BuscarAlfaveticamente";
import BuscarEspecificamente from "./pages/productos/Buscar/BuscarEspecificamente";
import BuscarPrecio from "./pages/productos/Buscar/BuscarPrecios";

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
      { path: "/CrearCuenta", element: <CrearUsuario /> },
      { path: "dashboard", element: <Dashboard /> },

      {
        path: "productos",
        element: <ProductosIndex />,
        children: [
          { path: "", element: <ProductosListado /> },
          { path: "lista", element: <ProductosListado /> },
          { path: "nuevo", element: <ProductosNuevo /> },
          {
            path: "buscar",
            element: <BuscarIndex />,
            children: [
              {
                path: "buscarAlfaveticamente",
                element: <BuscarAlfabeticamente />,
              },
              { path: "buscarPrecio", element: <BuscarPrecio /> },
              {
                path: "buscarEspecificamente",
                element: <BuscarEspecificamente />,
              },
            ],
          },
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
