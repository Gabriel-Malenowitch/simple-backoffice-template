import { ReactElement, createContext, useContext, useState } from "react"

interface NotifyProviderProps {
    children: ReactElement
}

type Type = 'info' | 'success' | 'error'

type Notify = (label: string, type: Type) => void

type NotifyProps = Notify

interface Config {
    isVisible: boolean
    label: string
    type: Type
    timeoutId: NodeJS.Timeout
}

const NotifyContext = createContext({} as NotifyProps)

const NOTIFY_VISIBLE_TIME = 3 * 1000
let UNDECLARED_TIMEOUT_ID: NodeJS.Timeout

export const NotifyProvider = ({ children }: NotifyProviderProps) => {
    const [config, setConfig] = useState<Config>({
        isVisible: false,
        label: '',
        type: 'info',
        timeoutId: UNDECLARED_TIMEOUT_ID
    })

    const notify: Notify = (label, type) => {
        clearTimeout(config.timeoutId)
        
        const timeoutId = setTimeout( () => {
            setConfig(config => ({...config, isVisible: false}))
        }, NOTIFY_VISIBLE_TIME)
        
        setConfig({timeoutId, label, type, isVisible: true })
    }

    return (
        <NotifyContext.Provider value={notify}>
            <div className={`
                ${config.isVisible ? 'visible' : 'invisible'} 
                
                ${
                config.type === 'success' ? 'bg-green-500'
                : config.type === 'error' ? 'bg-red-500'
                : 'bg-blue-500'}

                px-4 py-3
                fixed bottom-48 justify-center items-center
                w-auto left-1/2 -translate-x-1/2
            `} style={{ borderRadius: 8 }}>
                {config.label}
            </div>
            {children}
        </NotifyContext.Provider>
    )
}

export const useNotify = () => useContext<NotifyProps>(NotifyContext)