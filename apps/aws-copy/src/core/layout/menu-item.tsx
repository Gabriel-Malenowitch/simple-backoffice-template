import { usePreConfiguredRouter } from "@aws-copy/context-hooks";
import { useAppContextProvider } from "@aws-copy/context-hooks/app-context";

type MenuItemProps = Parameters<typeof usePreConfiguredRouter>[0]['routes'][number]

export const MenuItem = (props: MenuItemProps) => {
    const { resource, label } = props
    const [context] = useAppContextProvider()
    
    const handleChangeMenu = () => {
        if(context.resource === resource) return

        window.open(resource, '_self')
    }

    return (
        <button className="bg-slate-600 border-none px-3 py-2 w-full" style={{ borderRadius: 4 }} onClick={handleChangeMenu}>
            {label}
        </button>
    )   
}