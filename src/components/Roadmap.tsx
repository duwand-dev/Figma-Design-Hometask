import React, { useState } from "react";

import AndroidIcon from "./android.png"
import OptionIcon from "./option.png"

const Roadmap = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="h-[129px] flex flex-col mt-[30px]">
      <div className="flex items-center h-[34px]  text-[#202020] text-[28px]">Roadmap</div>

      <div className="h-[38px]  text-[#5f5f5f] text-[16px] mt-[15px] leading-[19.36px]">What we’re working on, and what we’ve accomplished in one tidy list. See the <span className="text-[#43b2ee]">Features</span> list for a full platform comparison.</div>

      <div className="flex items-center justify-between w-[123px] h-[27px]  text-[#202020] text-[28px] mt-[15px]">
        <img className="size-4" src={AndroidIcon} />
        <div className="flex w-[101px] h-[27px] pt-1 pr-2 pb-1 pl-2 bg-[#f2f2f2] items-center rounded">
          <div className="text-[#1D2022] text-[16px] font-bold pr-[10px] relative">Android
            <div className={`w-[101px] text-[#1D2022] text-[16px] font-bold pr-[10px] absolute pl-2 left-[-8px] bottom-[-100%] ${isVisible ? 'visible' : 'hidden'} cursor-pointer bg-[#c2c2c2] rounded`} onClick={() => setVisible(!isVisible)} >Android</div>
          </div>
          <img className="cursor-pointer" src={OptionIcon} onClick={() => setVisible(!isVisible)} />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;