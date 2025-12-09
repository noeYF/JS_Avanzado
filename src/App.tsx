import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";
//
//Layout-productos
//
import ProductosIndex from "./layouts/Productos/ProductosIndex";
import BuscarIndexProductos from "./layouts/Productos/Buscar/BuscarIndex";
// Productos
import ProductosListado from "./pages/productos/ProductosListado";
import ProductosNuevo from "./pages/productos/ProductosNuevo";
import ProductosEditar from "./pages/productos/ProductosEditar";
//Productos-buscar
import BuscarAlfabeticamenteProductos from "./pages/productos/Buscar/BuscarAlfaveticamente";
import BuscarEspecificamenteProductos from "./pages/productos/Buscar/BuscarEspecificamente";
import BuscarPrecioProductos from "./pages/productos/Buscar/BuscarPrecios";

//
//Layout-Clientes
//
import ClientesIndex from "./layouts/Clientes/ClientesIndex";
import BuscarIndexClientes from "./layouts/Clientes/Buscar/BuscarIndex";
//Clientes
import ClientesListado from "./pages/clientes/ClientesListado";
import ClientesNuevo from "./pages/clientes/ClientesNuevo";
import ClientesEditar from "./pages/clientes/ClientesEditar";
//Clientes-buscar
import BuscarAlfabeticamenteClientes from "./pages/clientes/Buscar/BuscarAlfaveticamente";
import BuscarEspecificamenteClientes from "./pages/clientes/Buscar/BuscarEspecificamente";

// Pages

import Inicio from "./pages/Inicio";
import LoginPage from "./pages/login/LoginPage";
import CrearUsuario from "./pages/login/crearCuenta";

// Ventas
import VentasIndex from "./layouts/Ventas/VentasIndex";
import VentasListado from "./pages/ventas/VentasListado";
import VentasNuevo from "./pages/ventas/NuevaVenta/ingresarDNI";
import VentasBuscar from "./pages/ventas/VentasBuscar";
import VentaGenerar from "./pages/ventas/NuevaVenta/generarVenta";

//test
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Inicio /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/CrearCuenta", element: <CrearUsuario /> },
      

      {
        path: "productos",
        element: <ProductosIndex />,
        children: [
          { index: true, element: <Navigate to="lista" replace /> },
          { path: "lista", element: <ProductosListado /> },
          { path: "nuevo", element: <ProductosNuevo /> },
          {
            path: "buscar",
            element: <BuscarIndexProductos />,
            children: [
              {
                index: true,
                element: <Navigate to="buscarEspecificamente" replace />,
              },
              {
                path: "buscarAlfaveticamente",
                element: <BuscarAlfabeticamenteProductos />,
              },
              { path: "buscarPrecio", element: <BuscarPrecioProductos /> },
              {
                path: "buscarEspecificamente",
                element: <BuscarEspecificamenteProductos />,
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
          { index: true, element: <Navigate to="nuevo" replace /> },
          { path: "lista", element: <ClientesListado /> },
          { path: "nuevo", element: <ClientesNuevo /> },
          { path: "editar/:id", element: <ClientesEditar /> },
          {
            path: "buscar",
            element: <BuscarIndexClientes />,
            children: [
              {
                index: true,
                element: <Navigate to="buscarEspecificamente" replace />,
              },
              {
                path: "buscarAlfaveticamente",
                element: <BuscarAlfabeticamenteClientes />,
              },
              {
                path: "buscarEspecificamente",
                element: <BuscarEspecificamenteClientes />,
              },
            ],
          },
        ],
      },

      {
        path: "ventas",
        element: <VentasIndex />,
        children: [
          { index: true, element: <Navigate to="lista" replace /> },
          { path: "lista", element: <VentasListado /> },
          { path: "nuevo", element: <VentasNuevo /> },
          { path: "generarVenta", element: <VentaGenerar /> },

          { path: "buscar", element: <VentasBuscar /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
