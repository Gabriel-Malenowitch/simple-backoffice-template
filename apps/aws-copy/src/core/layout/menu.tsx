import { usePreConfiguredRouter, useAppContextProvider } from "@aws-copy/context-hooks"
import { MenuItem } from "@aws-copy/core"
import { ComponentProps, ReactElement, useEffect } from "react"

interface MenuProps {
    children: Array<ReactElement<ComponentProps<typeof MenuItem>>> | ReactElement<ComponentProps<typeof MenuItem>>
}

export const Menu = ({ children }: MenuProps) => {
    const arrayChildren = Array.isArray(children) ? children : [children]
    const [, setContext] = useAppContextProvider()

    const routerElement = usePreConfiguredRouter({
        routes: arrayChildren.map( child => ({
                element: child.props.element,
                label: child.props.label,
                resource: child.props.resource
            })
        )
    })

    useEffect(() => {
        setContext(context => ({...context, routerElement}))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="flex flex-col justify-start items-center bg-slate-500 p-2 h-full gap-4" style={{ width: 220, borderRadius: 4 }}>
            {arrayChildren.map( child => {
                return (
                    <MenuItem 
                        key={child.props.resource} 
                        element={child.props.element} 
                        label={child.props.label} 
                        resource={child.props.resource} 
                    />
                )
            })}
        </div>
    )
}