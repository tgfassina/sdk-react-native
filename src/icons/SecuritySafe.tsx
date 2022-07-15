import React from "react";
import Svg, { Path } from "react-native-svg";

const SecuritySafe = (fillColor?: string) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      d="M7.99957 15.1669C7.83957 15.1669 7.67958 15.1469 7.52625 15.1002C4.06625 14.1469 1.55957 10.9135 1.55957 7.40686V4.48018C1.55957 3.73351 2.09957 2.92688 2.79291 2.64021L6.50625 1.1202C7.47291 0.726862 8.5329 0.726862 9.4929 1.1202L13.2062 2.64021C13.8996 2.92688 14.4396 3.73351 14.4396 4.48018V7.40686C14.4396 10.9069 11.9262 14.1402 8.4729 15.1002C8.31957 15.1469 8.15957 15.1669 7.99957 15.1669ZM7.99957 1.83353C7.61957 1.83353 7.24623 1.90688 6.88623 2.05354L3.17291 3.57352C2.85291 3.70686 2.55957 4.14019 2.55957 4.48685V7.41353C2.55957 10.4735 4.75957 13.3002 7.79291 14.1402C7.92624 14.1802 8.0729 14.1802 8.20624 14.1402C11.2396 13.3002 13.4396 10.4735 13.4396 7.41353V4.48685C13.4396 4.14019 13.1462 3.70686 12.8262 3.57352L9.11292 2.05354C8.75292 1.90688 8.37957 1.83353 7.99957 1.83353Z"
      fill={fillColor || "#9893A2"}
    />
    <Path
      d="M8.00033 8.83366C6.98699 8.83366 6.16699 8.01366 6.16699 7.00033C6.16699 5.98699 6.98699 5.16699 8.00033 5.16699C9.01366 5.16699 9.83366 5.98699 9.83366 7.00033C9.83366 8.01366 9.01366 8.83366 8.00033 8.83366ZM8.00033 6.16699C7.54033 6.16699 7.16699 6.54033 7.16699 7.00033C7.16699 7.46033 7.54033 7.83366 8.00033 7.83366C8.46033 7.83366 8.83366 7.46033 8.83366 7.00033C8.83366 6.54033 8.46033 6.16699 8.00033 6.16699Z"
      fill={fillColor || "#9893A2"}
    />
    <Path
      d="M8 10.833C7.72667 10.833 7.5 10.6063 7.5 10.333V8.33301C7.5 8.05967 7.72667 7.83301 8 7.83301C8.27333 7.83301 8.5 8.05967 8.5 8.33301V10.333C8.5 10.6063 8.27333 10.833 8 10.833Z"
      fill={fillColor || "#9893A2"}
    />
  </Svg>
);

export default SecuritySafe;
