import React, { useState } from "react";

import AndroidIcon from "./images/android.png"
import IOSIcon from "./images/apple.png"
import OptionIcon from "./images/option.png"

enum SYSTEM {
  Android,
  IOS
}

const SystemSelector = () => {
  const [isVisible, setVisible] = useState(false);
  const [system, setSystem] = useState(SYSTEM.Android);

  return (
    <div className="flex items-center justify-between w-[123px] h-[27px]  text-[#202020] dark:text-[#eff1f2] text-[28px] mt-[15px]">
      <img className="size-4" src={system === SYSTEM.Android ? AndroidIcon : IOSIcon} />

      <div className="flex w-[101px] h-[27px] pt-1 pr-2 pb-1 pl-2 bg-[#f2f2f2] dark:bg-[#0f0f0f] dark:text-[#eff1f2] items-center rounded justify-between">
        <div className="text-[#1D2022] dark:text-[#eff1f2] text-[16px] font-bold pr-[10px] relative"><div>{system === SYSTEM.Android ? "Android" : "IOS"}</div>
          <div className={`w-[101px] text-[#1D2022] dark:text-[#eff1f2] text-[16px] font-bold pr-[10px] absolute pl-2 left-[-8px] bottom-[-200%] ${isVisible ? 'visible' : 'hidden'} cursor-pointer bg-[#c2c2c2] rounded`} onClick={() => setVisible(!isVisible)} >
            <div onClick={() => setSystem(SYSTEM.Android)}>Android</div>
            <div onClick={() => setSystem(SYSTEM.IOS)}>IOS</div>
          </div>
        </div>

        <img className="cursor-pointer" src={OptionIcon} onClick={() => setVisible(!isVisible)} />
      </div>
    </div>
  );
}

export default SystemSelector;