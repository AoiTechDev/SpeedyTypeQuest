import React from "react";
type Props = {
  isFocused: boolean;
  handleFocus: () => void;
};
const Blur = ({ isFocused, handleFocus }: Props) => {
  return !isFocused ? (
    <div
      className="absolute  w-full h-full bg-white/30 backdrop-blur-md border border-gray-100 rounded-lg shadow-lg grid place-items-center z-20"
      onClick={handleFocus}
    >
      {/* Content of your glassmorphism component */}
      <div className="w-24 h-24 relative ">
        <span className=" w-1/3 h-1/3  border-black absolute border-t border-l"></span>
        <span className=" w-1/3 h-1/3  right-0 border-black rotate-90 absolute border-t border-l"></span>
        <span className=" w-1/3 h-1/3  -rotate-90 bottom-0 border-black absolute border-t border-l"></span>
        <span className=" w-1/3 h-1/3  rotate-180 bottom-0  right-0 border-black absolute border-t border-l"></span>
      </div>
    </div>
  ) : null;
};

export default Blur;
