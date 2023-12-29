"use client";
import { Textarea } from "@/components/ui/textarea";

import React, { useContext, useEffect, useRef, useState } from "react";
import Blur from "../Blur/Blur";
import TextShade from "../TextShade/TextShade";
import { Context } from "@/context/StateContext";

type TypedValue = {
  char: string;
  index: number;
};

type TypedValues = {
  correct: TypedValue[];
  wrong: TypedValue[];
  current: TypedValue[];
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
    const orginal = textContent.split("");
    const typed = e.target.value

    
    const slicedOrginal = orginal.slice(0, typedValues.current.length+1);
 

 console.log(slicedOrginal)

   setTypedValues((prev) => {
    const index = prev.current.length; // Get the next index
    const newTypedValue = { char: typed, index }; // Create a new TypedValue object
  
    return {
      ...prev,
      current: [
        ...prev.current,
        newTypedValue
      ],
    };
  });
  };

  useEffect(() => {

  },[typedValues])
  return (
    <div className="w-1/2 flex justify-center items-center relative z-0">
      <div className="w-full h-full text-3xl bg-transparent z-10 text_area p-6 absolute text-white"></div>
      <Textarea
        className="resize-none w-full h-full text-3xl bg-transparent z-10 text-transparent text_area p-6 absolute"
        onChange={handleTyping}
        onBlur={handleFocus}
        ref={textAreaRef}
     
      />
      <TextShade />
      <Blur isFocused={isFocused} handleFocus={handleFocus} />
    </div>
  );
};

export default TypingArea;
