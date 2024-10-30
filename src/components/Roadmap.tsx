import React, { useState } from "react";

import SystemSelector from "./SystemSelector";

const Roadmap = () => {
  return (
    <div className="h-[129px] flex flex-col mt-[30px]">
      <div className="flex items-center h-[34px] text-[#202020] dark:text-[#eff1f2] text-[28px]">Roadmap</div>

      <div className="h-[38px] text-[#5f5f5f] text-[16px] mt-[15px] leading-[19.36px]">What we’re working on, and what we’ve accomplished in one tidy list. See the <span className="text-lightblue cursor-pointer">Features</span> list for a full platform comparison.</div>

      <SystemSelector />
    </div>
  );
}

export default Roadmap;