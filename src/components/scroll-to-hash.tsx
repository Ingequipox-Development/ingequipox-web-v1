"use client"

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollToHash() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        // Si la URL tiene un hash (ej. #servicios)
        if (hash) {
            // Buscamos el elemento quitándole el '#'
            const element = document.getElementById(hash.replace("#", ""))

            if (element) {
                // Le damos un pequeñísimo retraso (100ms) para asegurar que 
                // React ya haya dibujado la página antes de intentar hacer el scroll
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" })
                }, 100)
            }
        } else {
            // Si no hay hash (ej. cambiamos de /trayectoria a /), vamos al inicio
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }, [pathname, hash]) // Se ejecuta cada vez que cambia la ruta o el hash

    return null // Este componente es invisible, solo ejecuta lógica
}