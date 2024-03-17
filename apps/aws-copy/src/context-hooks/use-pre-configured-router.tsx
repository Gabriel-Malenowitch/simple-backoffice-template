import { ReactElement } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

interface UsePreConfiguredRouter {
    routes: Array<{
        element: ReactElement
        label: string
        resource: string
    }>
}

export const usePreConfiguredRouter = ({ routes }: UsePreConfiguredRouter) => {
    const router = createBrowserRouter(
        routes.map(route => ({
            path: route.resource.startsWith('/') ? route.resource : `/${route.resource}`,
            element: route.element,
            // loader: 'Estamos carregando, aguarde um momento por favor...<3'
        }))
    )
      
    return <RouterProvider router={router} />
}