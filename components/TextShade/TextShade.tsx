import { Context } from "@/context/StateContext";
import React, { useContext } from "react";

const TextShade = () => {
    const {textContent, setTextContent} = useContext(Context)
  return (
    <div className=" w-full h-full text-3xl p-6 text-slate-500 opacity-60 -z-1">
     {textContent}
    </div>
  );
};

export default TextShade;
