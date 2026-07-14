import { Outlet } from "react-router-dom"
import { SiteNav } from "../components/site-nav" // Ajusta la ruta según tu estructura
import { SiteFooter } from "../components/site-footer" // Ajusta la ruta según tu estructura
import { ScrollToHash } from "../components/scroll-to-hash"

export function RootLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* El menú siempre estará visible arriba */}
            <SiteNav />
            <ScrollToHash />
            {/* <Outlet /> es el "agujero" donde React Router inyectará la página activa (Inicio, Trayectoria, etc.) */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* El footer siempre estará visible abajo */}
            <SiteFooter />
        </div>
    )
}