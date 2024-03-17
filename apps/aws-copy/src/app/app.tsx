import { AppContextProvider, NotifyProvider, useAppContextProvider } from "@aws-copy/context-hooks";
import { Menu, MenuItem } from "@aws-copy/core";
import { BasicConfig } from "@aws-copy/app";
import { FormProvider, useForm } from "react-hook-form";
import { FormValues } from "@aws-copy/models/form-values";

const Content = () => {
  const [context] = useAppContextProvider()

  return (
      <div className="w-full flex justify-center items-center bg-slate-500 p-2" style={{ borderRadius: 8 }}>
        {context?.routerElement}
      </div>
    )
}

export const App = () => {
  const formMethods = useForm<FormValues>()
  
  return (
    <AppContextProvider>
      <NotifyProvider>
        <FormProvider {...formMethods}>
        <div className="flex flex-row justify-between p-4 h-screen gap-4">
          <Menu>
            <MenuItem element={<BasicConfig />} label="Dashboard" resource="/basic-config" />
          </Menu>
          <Content />
        </div>
        </FormProvider>
      </NotifyProvider>
    </AppContextProvider>
  );
}
