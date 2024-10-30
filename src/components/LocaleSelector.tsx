import React, { useState } from "react";
import classNames from 'classnames'

import OptionIcon from "./images/option.png";

enum LOCALES {
  EN,
  US
};

export default () => {
  const [isVisible, setVisible] = useState(false);
  const [locale, setLocale] = useState(LOCALES.EN);

  return (
    <div className="w-[41px] h-[19px] mr-5 flex items-center justify-center">
      <div>
        <div className="relative font-bold font-frank text-[#1D2022] dark:text-[#eff1f2] text-[16px] mr-[6px]">{locale === LOCALES.EN ? "EN" : "US"}
          <div className={classNames("absolute bg-[#c2c2c2] bottom-[-200%] w-12 -left-2 pl-2 rounded font-bold text-[#1D2022] text-base mr-1.5 cursor-pointer", isVisible ? 'visible' : 'collapse')} onClick={() => setVisible(!isVisible)}>
            <div onClick={() => setLocale(LOCALES.EN)}>EN</div>
            <div onClick={() => setLocale(LOCALES.US)}>US</div>
          </div></div>
      </div>
      <img className="cursor-pointer pt-1" src={OptionIcon} onClick={() => setVisible(!isVisible)} />
    </div>
  )
}