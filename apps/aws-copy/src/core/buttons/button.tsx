import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<unknown>) => 
    <button className="bg-slate-600 border-none px-3 py-2" style={{ borderRadius: 4 }} {...props} />