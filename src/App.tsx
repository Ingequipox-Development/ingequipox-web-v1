import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout"
import { HomePage } from "./pages/HomePage"
import { TrajectoryPage } from "./pages/TrajectoryPage"
import { ServicesPage } from "./pages/ServicesPage"
import { AboutPage } from "./pages/AboutPage"

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Ruta Maestra: Envuelve todo en el Layout común (Navbar + Footer) */}
        <Route path="/" element={<RootLayout />}>

          {/* URL: "/" -> Carga el flujo principal */}
          <Route index element={<HomePage />} />

          {/* URL: "/trayectoria" -> Carga la cronología completa */}
          <Route path="trayectoria" element={<TrajectoryPage />} />

          {/* URL: "/servicios" -> Carga los servicios */}
          <Route path="servicios" element={<ServicesPage />} />

          {/* URL: "/quienes-somos" -> Carga la página quienes somos */}
          <Route path="quienes-somos" element={<AboutPage />} />

          {/* Captura de errores 404 */}
          <Route path="*" element={
            <div className="flex h-[60vh] flex-col items-center justify-center bg-white px-6">
              <h1 className="text-4xl font-bold text-[#183563]">404</h1>
              <p className="mt-2 text-lg text-gray-600">La página que buscas no existe.</p>
              <a href="/" className="mt-6 rounded-full bg-[#183563] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#a6ce3a] hover:text-[#183563] transition-colors">
                Regresar al inicio
              </a>
            </div>
          } />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}