import { ReactElement, createContext, useContext, useState, Dispatch } from "react"

interface AppContextProviderProps {
    children: ReactElement
}

interface Context {
    element: ReactElement
    label: string
    resource: string
    routerElement?: ReactElement
}

export type AppContextProps = [
    Context,
    Dispatch<React.SetStateAction<Context>>
]

const AppContext = createContext({} as AppContextProps)

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [context, setContext] = useState<AppContextProps[0]>({
        element: <div/>,
        label: '',
        resource: '/'
    })

    return (
        <AppContext.Provider value={[context, setContext]}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContextProvider = () => useContext<AppContextProps>(AppContext)