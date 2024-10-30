import React, { useEffect, useRef, useState } from "react";

import LineImg from './line.png';
import StarIcon from "./star.png";
import CircleIcon from "./circle.png";
import ArrowIcon from "./arrow.png";
import CurveSvg from './Vector 1.svg';

interface Point {
  x: number
  y: number
}
const Progress = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [pixels, setPixels] = useState<Uint8ClampedArray>();
  const [width, setWidth] = useState(0);
  const [pos1, setPos1] = useState<Point>({ x: 0, y: 0 });
  const [pos2, setPos2] = useState<Point>({ x: 0, y: 0 });
  const [pos3, setPos3] = useState<Point>({ x: 0, y: 0 });
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    var img = new Image();
    img.onload = () => {
      const context = canvas.getContext('2d');
      if (!context) return;
      canvas.width = img.width;
      canvas.height = 930;
      context.drawImage(img, 0, 0);

      // Get pixel data
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      setPixels(pixels);
      setWidth(canvas.width)
    };
    img.src = CurveSvg;
  }, [])

  useEffect(() => {
    if (!ref1.current || !ref2.current || !ref3.current) return;
    let rect = ref1.current.getBoundingClientRect();
    let y = Math.round(rect.y + window.scrollY - 321);
    let x = getXValue(y);
    setPos1({ x, y });
    console.log(1, x, y);

    rect = ref2.current.getBoundingClientRect();
    y = Math.round(rect.y + window.scrollY - 321);
    x = getXValue(y);
    setPos2({ x, y });
    console.log(2, x, y);

    rect = ref3.current.getBoundingClientRect();
    y = Math.round(rect.y + window.scrollY - 321);
    x = getXValue(y);
    setPos3({ x, y });
    console.log(3, x, y);
  }, [isOpen])

  const getXValue = (y: number) => {
    if (!pixels) return 0;
    let min = (width * y + width) * 4, max = 0;
    for (let i = width * y * 4; i < width * (y + 1) * 4; i += 4)
      if (pixels[i] + pixels[i + 1] + pixels[i + 2] + pixels[i + 3] !== 0) {
        if (min > i) min = i;
        if (max < i) max = i;
      }
    min = (min - (width * y) * 4) / 4;
    max = (max - (width * y) * 4) / 4;
    console.log('max', min, max)
    return Math.round(((min + max) / 2) * 12 / 17);
  }
  return (
    <div className="h-[912px] flex mt-[30px]">
      <div className="w-[37px] flex justify-center relative">
        <img className="w-3 h-[930.44px]" src={LineImg} />
        <img className="absolute top-12 left-1" src={ArrowIcon} />
        <img className={`absolute`} style={{ top: pos1.y, left: pos1.x }} src={StarIcon} />
        <img className={`absolute`} style={{ top: pos2.y, left: pos2.x }} src={CircleIcon} />
        <img className={`absolute`} style={{ top: pos3.y, left: pos3.x }} src={CircleIcon} />
      </div>

      <div className="w-[653px] pl-[30px]">
        <div className="font-bold text-[20px] h-[24px] leading-[24.2px] dark:text-[#eff1f2] ">Work in Progress</div>
        <div className="flex h-[34px] items-center w-full bg-[#f2f2f2] dark:bg-[#0f0f0f] rounded mt-5">
          <div className="w-1 h-[34px] bg-[#9F7BEA] rounded-l"></div>
          <div className="text-[16px] h-[34px] leading-[19.36px] text-[#9F7BEA] pl-2.5 flex items-center">SPOILER ALERT!</div>
        </div>

        <div style={{ display: isOpen ? 'block' : 'none' }}>
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
              <li className="cursor-pointer">How we make our product decisions</li>
              <li className="cursor-pointer">Feature requests & bug reports</li>
            </ul>
          </div>
        </div>
        <div className="h-[19px]  text-[#afafaf] text-[16px] mt-5 leading-[19.36px] cursor-pointer select-none" onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Read Less' : 'Read More'}</div>

        {/* Brand New */}
        <div className="font-bold text-[20px] h-[24px] leading-[24.2px] mt-5 dark:text-[#eff1f2] ">Brand New</div>

        <div className="h-24 gap-y-2 flex flex-col">
          <div className="h-[22px]  text-[#43b2ee] cursor-pointer text-bold text-[18px] mt-5 leading-[21.78px]" ref={ref1}>2022.04</div>
          <div className="h-[19px]  text-[#5f5f5f] text-[16px] leading-[19.36px]">Advanced Transforms, Interests...</div>
          <div className="h-[19px]  text-[#afafaf] text-[16px] leading-[19.36px]">Read More</div>
        </div>

        {/* Past Releases*/}
        <div className="font-bold text-[20px] h-[24px] leading-[24.2px] mt-5 ">Past Releases</div>

        <div className="h-[225px] gap-y-2 flex flex-col mt-5">
          <div className="h-[22px]  text-[#43b2ee] cursor-pointer text-bold text-[18px] leading-[21.78px]" ref={ref2}>2022.2</div>
          <div className="h-[19px]  text-[#5f5f5f] text-[16px] leading-[19.36px]">Something to do with Grids?</div>

          <ul className="list-disc h-[95px] leading-[19.36px] text-[16px] ml-[30px] tracking-[0.46px] text-[#5f5f5f]">
            <li>Distort, skew and warp your selections with the four corner handles. Pull one or two handles to adjust the aspect ratio, or tap one or two handles and pinch / spread / pull to activate the more advanced transforms. </li>
            <li>Tap through the Interests list in your Account screen to help us better understand your needs.</li>
          </ul>

          <div className="h-[19px]  text-[#5f5f5f] text-[16px] leading-[19.36px]">
            <span>For a deeper explanation, including pics + video examples, check out the full </span><span className="text-[#43b2ee] cursor-pointer">release post.</span><div className="h-[19px]  text-[#5f5f5f] text-[16px] leading-[19.36px] mt-2">Submit your <span className="text-[#43b2ee] cursor-pointer">feedback and feature requests</span> here.</div>
          </div>

          <div></div>
        </div>

        <div className="h-24 gap-y-2 flex flex-col mt-5">
          <div className="h-[22px]  text-[#43b2ee] cursor-pointer text-bold text-[18px] leading-[21.78px]" ref={ref3}>2021.12</div>
          <div className="h-[19px]  text-[#5f5f5f] text-[16px] leading-[19.36px]">Headline for the things we made way back here.</div>
          <div className="h-[19px]  text-[#afafaf] text-[16px] leading-[19.36px]">Read More</div>
        </div>
      </div>

      <canvas ref={canvasRef} className="invisible" />
    </div>
  )
}

export default Progress;