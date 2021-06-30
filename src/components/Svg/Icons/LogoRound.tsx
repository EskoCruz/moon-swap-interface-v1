import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <circle cx="256" cy="256" r="256" fill="url(#paint0_linear_logoround)" />
      <path fill="#ffffff" d="M256,66.1v72.1c64,0,115.9,52.8,115.9,117.9c0,65.1-51.9,117.8-115.9,117.8V446c103.2,1.7,188.3-81.9,190-186.9
	c1.7-104.9-80.6-191.4-183.9-193.1C260.1,66,258,66,256,66.1"/>
      <path fill="#ffffff" d="M140,256c0,65.1,51.9,117.8,116,117.8v-72.9c-24.4,0-44.2-20.1-44.2-44.9c0-24.8,19.8-44.9,44.2-44.9v-72.9
	C191.9,138.1,140,190.9,140,256"/>
      <path fill="#ffffff" d="M300.2,256c0-24.8-19.8-44.9-44.2-44.9v89.9C280.5,300.9,300.2,280.8,300.2,256z"/>
      <path fill="#ffffff" d="M300.2,256c0-24.8-19.8-44.9-44.2-44.9v89.9C280.5,300.9,300.2,280.8,300.2,256z"/>
      <path fill="#ffffff" d="M300.2,256c0-24.8-19.8-44.9-44.2-44.9v89.9C280.5,300.9,300.2,280.8,300.2,256z"/>
      <defs>
        <linearGradient id="paint0_linear_logoround" x1="256" y1="0" x2="256" y2="512" gradientUnits="userSpaceOnUse">
          <stop stopColor="#54DADE" />
          <stop offset="0.762157" stopColor="#24C7D6" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
