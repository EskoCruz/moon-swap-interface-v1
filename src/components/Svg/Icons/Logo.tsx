import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  // const primaryColor = theme.isDark ? "#FFF" : "#000";
  const primaryColor = theme.isDark ? "#FFF" : "#1B3F7B";
  const secondaryColor = theme.isDark ? "#FFF" : "#4B8FFA";
  const tertiaryColor = theme.isDark ? "#FFF" : "#002F79";

  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path d="M19.6,18.1c0-1.5,1.3-2.8,2.8-2.8c0.6,0,1.1,0.2,1.5,0.4c-0.1-4.3-3.6-7.7-7.9-7.7C11.6,8.1,8,11.6,8,16
	s3.6,7.9,7.9,7.9c2.5,0,4.8-1.2,6.2-3C20.7,20.8,19.6,19.6,19.6,18.1" fill={tertiaryColor} />
      <path d="M24.7,18.1c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3S24.7,16.9,24.7,18.1" fill={tertiaryColor} />
      <path d="M14.8,5.8c5.5,0,10,3.9,11,9.1c0.4-7.6-7.9-13.4-14.2-13.7C14.1,2,15.9,3.4,15.3,4C14.7,4.6,11.1,4,7.7,8.3
	c0,0,0,0,0,0C9.7,6.7,12.1,5.8,14.8,5.8" fill={secondaryColor} />
      <path d="M21.6,4.1c0-0.9,0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7C22.4,5.8,21.6,5,21.6,4.1" fill={secondaryColor} />
      <path d="M6,22.1c0,0-0.6-1.6-0.8-3.2C4.7,13.4,8.1,8.5,13.2,7C5.5,7.4,0.6,16.2,0.8,22.4c0.6-2.6,1.9-4.5,2.5-4
	c0.7,0.6,0.4,4.2,5,7.1C7.7,24.9,6.7,23.8,6,22.1" fill={primaryColor} />
      <path d="M3,12c-0.9,0.1-1.8-0.6-1.9-1.5C1.1,9.5,1.7,8.7,2.7,8.6c0.9-0.1,1.8,0.6,1.9,1.5C4.6,11.1,3.9,11.9,3,12" fill={primaryColor} />
      <path d="M20.1,25.5c0,0-1.6,0.5-3.3,0.5c-5.5,0-10-3.9-11-9.1C5.4,24.5,13.7,30.3,20,30.6c-2.5-0.8-4.3-2.3-3.7-2.9
	c0.7-0.6,4.2,0.1,7.6-4.2C23.1,24.1,21.9,24.9,20.1,25.5" fill={secondaryColor} />
      <path d="M11.2,28.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C10.5,27.1,11.2,27.8,11.2,28.8
	" fill={secondaryColor} />
    </Svg>
  );
};

export default Icon;
