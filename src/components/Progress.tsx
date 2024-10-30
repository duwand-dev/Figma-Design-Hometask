import React from "react";

import LineImg from './line.png';
import StarIcon from "./star.png";
import CircleIcon from "./circle.png";
import ArrowIcon from "./arrow.png";

const Progress = () => {
  return (
    <div className="h-[912px] flex mt-[30px]">
      <div className="w-[37px] flex justify-center relative">
        <img className="w-3 h-[930.44px]" src={LineImg} />
        <img className="absolute top-12 left-1" src={ArrowIcon} />
        <img className="absolute top-[449px] left-1" src={StarIcon} />
        <img className="absolute top-[590px] left-2" src={CircleIcon} />
        <img className="absolute top-[835px] left-[7px]" src={CircleIcon} />
      </div>

      <div className="w-[653px] pl-[30px]">
        <div className="font-bold text-[20px] h-[24px] leading-[24.2px]">Work in Progress</div>
        <div className="flex h-[34px] items-center w-full bg-[#f2f2f2] rounded mt-5">
          <div className="w-1 h-[34px] bg-[#9F7BEA] rounded-l"></div>
          <div className="text-[16px] h-[34px] leading-[19.36px] text-[#9F7BEA] pl-2.5 flex items-center">SPOILER ALERT!</div>
        </div>

        <div className="h-[38px]  text-[#5f5f5f] text-[16px] mt-5 leading-[19.36px]">Not big on surprises, huh? No worries, here’s what we aim to launch in the next few months:</div>

        <div className="w-full h-[95px]  text-[#5f5f5f] mt-5 leading-[19.36px]">
          <ul className="list-disc ml-[30px]">
            <li>Auto-complete (snap-to-sketching)</li>
            <li>Apple Sign In support</li>
            <li>Scale & Measurement</li>
            <li>Text Tool</li>
            <li>More keyboard shortcuts</li>
          </ul>
        </div>

        <div className="h-[19px]  text-[#5f5f5f] text-[16px] mt-5 leading-[19.36px]">Follow up reading:</div>

        <div className="w-full h-[38px]  text-[#43b2ee] mt-5 leading-[19.36px]">
          <ul className="list-disc ml-[30px]">
            <li>How we make our product decisions</li>
            <li>Feature requests & bug reports</li>
          </ul>
        </div>

        <div className="h-[19px]  text-[#afafaf] text-[16px] mt-5 leading-[19.36px]">Read Less</div>

        {/* Brand New */}
        <div className="font-bold text-[20px] h-[24px] leading-[24.2px] mt-5">Brand New</div>

        <div className="h-24 gap-y-2 flex flex-col">
          <div className="h-[22px]  text-[#43b2ee] text-bold text-[18px] mt-5 leading-[21.78px]">2022.04</div>
          <div className="h-[19px]  text-[#5f5f5f] text-[16px] leading-[19.36px]">Advanced Transforms, Interests...</div>
          <div className="h-[19px]  text-[#afafaf] text-[16px] leading-[19.36px]">Read More</div>
        </div>

        {/* Past Releases*/}
        <div className="font-bold text-[20px] h-[24px] leading-[24.2px] mt-5">Past Releases</div>

        <div className="h-[225px] gap-y-2 flex flex-col mt-5">
          <div className="h-[22px]  text-[#43b2ee] text-bold text-[18px] leading-[21.78px]">2022.2</div>
          <div className="h-[19px]  text-[#5f5f5f] text-[16px] leading-[19.36px]">Something to do with Grids?</div>

          <ul className="list-disc h-[95px] leading-[19.36px] text-[16px] ml-[30px] tracking-[0.46px] text-[#5f5f5f]">
            <li>Distort, skew and warp your selections with the four corner handles. Pull one or two handles to adjust the aspect ratio, or tap one or two handles and pinch / spread / pull to activate the more advanced transforms. </li>
            <li>Tap through the Interests list in your Account screen to help us better understand your needs.</li>
          </ul>

          <div className="h-[19px]  text-[#5f5f5f] text-[16px] leading-[19.36px]">
            <span>For a deeper explanation, including pics + video examples, check out the full </span><span className="text-[#43b2ee]">release post.</span><div className="h-[19px]  text-[#5f5f5f] text-[16px] leading-[19.36px] mt-2">Submit your <span className="text-[#43b2ee]">feedback and feature requests</span> here.</div>
          </div>

          <div></div>
        </div>

        <div className="h-24 gap-y-2 flex flex-col mt-5">
          <div className="h-[22px]  text-[#43b2ee] text-bold text-[18px] leading-[21.78px]">2021.12</div>
          <div className="h-[19px]  text-[#5f5f5f] text-[16px] leading-[19.36px]">Headline for the things we made way back here.</div>
          <div className="h-[19px]  text-[#afafaf] text-[16px] leading-[19.36px]">Read More</div>
        </div>
      </div>

    </div>
  )
}

export default Progress;