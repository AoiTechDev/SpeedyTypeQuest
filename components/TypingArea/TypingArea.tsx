"use client";
import { Textarea } from "@/components/ui/textarea";

import React, { useRef, useState } from "react";
import Blur from "../Blur/Blur";
import TextShade from "../TextShade/TextShade";

const TypingArea = () => {
  const [isFocused, setIsFocused] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const handleFocus = () => {
    setIsFocused((prev) => !prev);
    if( textAreaRef.current){
        textAreaRef.current.focus() 
    }
  };
  const handleTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="w-1/2 flex justify-center items-center relative z-0">
      <Textarea
        className="resize-none w-full h-full  text-3xl bg-transparent z-10 text-white text_area p-6 absolute"
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
