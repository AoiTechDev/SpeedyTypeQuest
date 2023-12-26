import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import {first} from '../data/data'
interface ContextValue {
    textContent: string;
    setTextContent: Dispatch<SetStateAction<string>>
}
const defaultValue: ContextValue = {
    textContent: first.content,
    setTextContent: () => {}
};

export const Context = createContext(defaultValue);

export default function ContextProvider({ children }: { children: ReactNode }) {
    const [textContent, setTextContent] = useState(defaultValue.textContent);

  return <Context.Provider value={{
    textContent,
    setTextContent
  }}>{children}</Context.Provider>;
}
