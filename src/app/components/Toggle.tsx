import React from "react";

function Toggle() {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        className="
                    w-10
                    h-6
                    bg-gray-200 
                    peer-focus:outline-none  
                    rounded-full 
                    peer 
                    peer-checked:after:translate-x-3.5
                    peer-checked:after:border-white 
                    after:content-[''] 
                    after:absolute 
                    after:top-[2px] 
                    after:left-[2px] 
                    after:bg-white 
                    after:border-gray-300 
                    after:border 
                    after:rounded-full 
                    after:h-5
                    after:w-5 
                    after:transition-all 
                    dark:border-gray-600 
                    peer-checked:bg-gray-800"
      ></div>
    </label>
  );
}

export default Toggle;
