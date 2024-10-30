import React, { useState } from "react";

import Logo from "./logo.png";
import SearchIcon from "./search.png";
import OptionIcon from "./option.png";

const Head = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="h-[38px] flex justify-between">
      <div className="flex items-center"><img className="size-[35px]" src={Logo} /><div className="font-bold text-3xl">&nbsp;Concepts</div></div>
      <div className="flex items-center">
        <div className="w-[41px] h-[19px] mr-5 flex items-center justify-center">
          <div>
            <div className="font-bold text-[#1D2022] font-[16px] mr-[6px]">EN</div>
            {/* 
            <div className={`relative bottom-0 left-0 ${isVisible ? 'visible' : 'collapse'}`}>
              <div className="font-bold text-[#1D2022] font-[16px] mr-[6px] border-solid border border-[#5f5f5f]" onClick={() => setVisible(!isVisible)}>EN</div>
            </div> */}
          </div>
          <img className="w-[12px] h-[7px]" src={OptionIcon} onClick={() => setVisible(!isVisible)} />
        </div>
        <div className="w-px h-[19px] bg-[#afafaf] mr-5"></div>
        <div className="w-19 h-[19px] text-[#5f5f5f] mr-5 font-[16px] flex items-center">Download</div>
        <div className="w-[43px] h-[19px] text-[#5f5f5f] mr-5 font-[16px] flex items-center">Learn</div>
        <div className="w-px h-[19px] bg-[#afafaf] mr-5"></div>
        <img className="w-[14.33px] h-[15.62px] col-[#1D2022]" src={SearchIcon} />
      </div>
    </div>
  )
}

export default Head;