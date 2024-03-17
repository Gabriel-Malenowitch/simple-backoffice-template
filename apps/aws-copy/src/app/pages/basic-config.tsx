import { useNotify } from "@aws-copy/context-hooks";
import { TextInput } from "@aws-copy/core";
import { Button } from "@aws-copy/core";
import { FormValues } from "@aws-copy/models/form-values";
import { ReactElement } from "react";

export const BasicConfig = (): ReactElement => {
    const notify = useNotify()

    return (
        <div className="flex justify-between flex-col gap-8">
            <div className="grid grid-cols-4 gap-4">
                <TextInput<FormValues> source="containers" label="Containers" />
                <TextInput<FormValues> source="machines" label="Máquinas" />
            </div>
            <Button onClick={() => notify('Testando aaaaaaaaaaaaaaaaaaa', 'error')}>Salvar</Button>
        </div>
    )
}