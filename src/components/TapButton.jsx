import React from "react";

const TapButton = ({ active, selectTap, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-purple-600"
    : "text-[#ADB7BE] hover:text-white";
  return (
    <button onClick={selectTap} className={`px-4 py-2 ${buttonClasses}`}>
      {children}
    </button>
  );
};

export default TapButton;
