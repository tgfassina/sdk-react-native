import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent({ fillColor }) {
  return (
    <Svg width={17} height={16} viewBox="0 0 17 16" fill="none">
      <Path
        d="M8.5 8.5a3.838 3.838 0 01-3.833-3.833A3.838 3.838 0 018.5.833a3.838 3.838 0 013.833 3.834A3.838 3.838 0 018.5 8.5zm0-6.667a2.84 2.84 0 00-2.833 2.834A2.84 2.84 0 008.5 7.5a2.84 2.84 0 002.833-2.833A2.84 2.84 0 008.5 1.833zM14.227 15.167a.504.504 0 01-.5-.5c0-2.3-2.347-4.167-5.227-4.167-2.88 0-5.227 1.867-5.227 4.167 0 .273-.226.5-.5.5a.504.504 0 01-.5-.5C2.273 11.82 5.067 9.5 8.5 9.5c3.433 0 6.227 2.32 6.227 5.167 0 .273-.227.5-.5.5z"
        fill={fillColor || "#F6F5FA"}
      />
    </Svg>
  );
}

export default SvgComponent;
