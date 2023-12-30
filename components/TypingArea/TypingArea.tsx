"use client";
import { Textarea } from "@/components/ui/textarea";

import React, { useContext, useEffect, useRef, useState } from "react";
import Blur from "../Blur/Blur";
import TextShade from "../TextShade/TextShade";
import { Context } from "@/context/StateContext";

type TypedValue = {
  char: string;

};

type TypedValues = {
  correct: string[];
  wrong:  string[];
  current:  string[];
};

const TypingArea = () => {
  const [isFocused, setIsFocused] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { textContent } = useContext(Context);
  const handleFocus = () => {
    setIsFocused((prev) => !prev);
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  const [typedValues, setTypedValues] = useState<TypedValues>({
    correct: [],
    wrong: [],
    current: [],
  });

  const handleTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const typed = e.target.value;
    const typedSplit = typed.split("");
    // console.log(typed.length)
    console.log(typedSplit[typed.length-1])
  

    setTypedValues((prev) => {
      const index = prev.current.length; // Get the next index
      const newTypedValue = typedSplit[typed.length-1]; // Create a new TypedValue object

      return {
        ...prev,
        current: [...prev.current, newTypedValue],
      };
    });
  };

  useEffect(() => {
    const orginal = textContent.split("");
    const slicedOrginal = orginal.slice(0, typedValues.current.length);
    const slicedTyped = typedValues.current.slice(0, typedValues.current.length)

    const isSame = slicedTyped.every((typedValue, index) => {
      return typedValue === slicedOrginal[index];
    });
  
    console.log(isSame ? "Typed text matches original" : "Typed text does not match original");
    console.log(slicedOrginal)
    console.log(typedValues.current)
  },[typedValues.current, textContent]);

  return (
    <div className="w-1/2 flex justify-center items-center relative z-0">
      <div className="w-full h-full text-3xl bg-transparent z-10 text_area p-6 absolute text-white"></div>
      <Textarea
        className="resize-none w-full h-full text-3xl bg-transparent z-10 text-transparent text_area p-6 absolute"
        onChange={handleTyping}
        onBlur={handleFocus}
        ref={textAreaRef}
        onKeyDown={(e) => e.key === 'Backspace' && setTypedValues(prev => {
          return {
            ...prev,
            current: prev.current.slice(0, prev.current.length - 1)
          }
        })}
      />
      <TextShade />
      <Blur isFocused={isFocused} handleFocus={handleFocus} />
    </div>
  );
};

export default TypingArea;
