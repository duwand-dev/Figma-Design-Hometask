import React, { useState } from "react";

import Logo from "./images/logo.png";
import SearchIcon from "./images/search.png";
import LocaleSelector from "./LocaleSelector";

const Head = () => {
  return (
    <div className="h-[38px] flex justify-between">
      <div className="flex items-center">
        <img className="size-[35px]" src={Logo} alt="logo" />
        <div className="flex items-start font-frank font-bold text-[38px] tracking-normal dark:text-[#eff1f2] ">&nbsp;concepts</div>
      </div>

      <div className="flex items-center">
        <LocaleSelector />
        <div className="w-px h-[19px] bg-[#afafaf] mr-5"></div>
        <div className="w-19 h-[19px] text-[#5f5f5f] mr-5 text-[16px] flex items-center">Download</div>
        <div className="w-[43px] h-[19px] text-[#5f5f5f] mr-5 text-[16px] flex items-center">Learn</div>
        <div className="w-px h-[19px] bg-[#afafaf] mr-5"></div>
        <img className="w-[14.33px] h-[15.62px] col-[#1D2022]" alt="search" src={SearchIcon} />
      </div>
    </div>
  )
}

export default Head;