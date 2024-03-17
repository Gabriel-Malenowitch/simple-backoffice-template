import { ReactElement } from "react"
import { Path, useController, FieldValues } from "react-hook-form"

interface TextInputProps<T extends FieldValues = FieldValues> {
    label?: string
    source: Path<T>
    onChange?: (value: T[TextInputProps['source']]) => string | undefined
}

export const TextInput = <T extends FieldValues = FieldValues>({ onChange: onChangeProp, source, label }: TextInputProps<T>): ReactElement => {
    const {
        field: { onChange, onBlur, ref, value},
        fieldState: { invalid },
    } = useController<T>({ name: source })

    const handleChange = (value: string) => {
        const parsedValue = onChangeProp?.(value as T[TextInputProps['source']])
        
        onChange(parsedValue)
    }

    return (
        <input 
            className={`${invalid ? 'border-red-600' : 'border-gray-600'} px-3 py-2`}
            style={{ borderRadius: 8, color: '#222' }}
            ref={ref} 
            onChange={event => handleChange(event.target.value)} 
            value={value as string} 
            onBlur={onBlur} 
            placeholder={label}/>
    )
}