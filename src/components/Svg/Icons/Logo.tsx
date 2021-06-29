import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#FFF" : "#000";

  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path d="M15.8,0.1v6.1c5.5,0,9.9,4.4,9.9,9.9c0,5.5-4.4,9.9-9.9,9.9V32c8.8,0.1,16.1-6.9,16.2-15.7c0.1-8.8-6.9-16.1-15.7-16.2C16.1,0,15.9,0,15.8,0.1z"
            fill={primaryColor} />
      <path d="M5.8,16c0,5.5,4.4,9.9,9.9,9.9v-6.1c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8V6.1C10.3,6.1,5.8,10.6,5.8,16C5.8,16,5.8,16,5.8,16z"
            fill={primaryColor} />
      <path d="M19.5,16c0-2.1-1.7-3.8-3.8-3.8l0,0v7.6C17.8,19.8,19.5,18.1,19.5,16C19.5,16,19.5,16,19.5,16z"
            fill={primaryColor} />
    </Svg>
  );
};

export default Icon;