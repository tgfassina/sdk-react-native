import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent() {
  return (
    <Svg
      width="17"
      height="16"
      viewBox="0 0 19 18"
      fill="none"
      style={{ padding: 8 }}
    >
      <Path
        d="M8.17 14.58C7.98 14.58 7.79 14.51 7.64 14.36C7.35 14.07 7.35 13.59 7.64 13.3L13.3 7.64C13.59 7.35 14.07 7.35 14.36 7.64C14.65 7.93 14.65 8.41 14.36 8.7L8.7 14.36C8.56 14.51 8.36 14.58 8.17 14.58Z"
        fill="#ff2966"
      />
      <Path
        d="M13.83 14.58C13.64 14.58 13.45 14.51 13.3 14.36L7.64 8.7C7.35 8.41 7.35 7.93 7.64 7.64C7.93 7.35 8.41 7.35 8.7 7.64L14.36 13.3C14.65 13.59 14.65 14.07 14.36 14.36C14.21 14.51 14.02 14.58 13.83 14.58Z"
        fill="#ff2966"
      />
    </Svg>
  );
}

export default SvgComponent;
