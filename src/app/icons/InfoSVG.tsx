import React from "react";
import { SVGIconProps } from "./index";

const InfoSVG = ({
  size = 16,
  color,
  className = "",
  onClick,
}: SVGIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <mask
        id="mask0_5161_8205"
        // style='mask-type:alpha'
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={size}
        height={size}
      >
        <rect width={size} height={size} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_5161_8205)">
        <path
          d="M7.99657 11.3414C8.20561 11.3414 8.38201 11.2704 8.52577 11.1283C8.66952 10.9862 8.7414 10.8101 8.7414 10.6001V7.9414C8.7414 7.73136 8.6707 7.5553 8.52929 7.41322C8.38788 7.27113 8.21265 7.20009 8.0036 7.20009C7.79456 7.20009 7.61816 7.27113 7.4744 7.41322C7.33065 7.5553 7.25877 7.73136 7.25877 7.9414V10.6001C7.25877 10.8101 7.32947 10.9862 7.47089 11.1283C7.6123 11.2704 7.78753 11.3414 7.99657 11.3414ZM7.99657 6.1885C8.21897 6.1885 8.40656 6.11328 8.55934 5.96284C8.71211 5.8124 8.7885 5.62599 8.7885 5.4036C8.7885 5.1812 8.71328 4.99361 8.56284 4.84084C8.4124 4.68806 8.22599 4.61167 8.0036 4.61167C7.7812 4.61167 7.59361 4.68689 7.44084 4.83734C7.28806 4.98777 7.21167 5.17418 7.21167 5.39657C7.21167 5.61897 7.28689 5.80656 7.43734 5.95934C7.58777 6.11211 7.77418 6.1885 7.99657 6.1885ZM8.00469 14.7204C7.0736 14.7204 6.20036 14.5456 5.38499 14.1961C4.5696 13.8465 3.85633 13.3661 3.24519 12.755C2.63403 12.1438 2.15367 11.4308 1.80412 10.6159C1.45456 9.80096 1.27979 8.92649 1.27979 7.99245C1.27979 7.05841 1.45456 6.18647 1.80412 5.37665C2.15367 4.56682 2.63403 3.85633 3.24519 3.24519C3.85633 2.63403 4.56936 2.15367 5.38429 1.80412C6.19921 1.45456 7.07369 1.27979 8.00772 1.27979C8.94176 1.27979 9.8137 1.45456 10.6235 1.80412C11.4334 2.15367 12.1438 2.63403 12.755 3.24519C13.3661 3.85633 13.8465 4.56806 14.1961 5.38039C14.5456 6.19271 14.7204 7.06441 14.7204 7.99549C14.7204 8.92657 14.5456 9.79981 14.1961 10.6152C13.8465 11.4306 13.3661 12.1438 12.755 12.755C12.1438 13.3661 11.4321 13.8465 10.6198 14.1961C9.80746 14.5456 8.93576 14.7204 8.00469 14.7204ZM8.00009 13.087C9.41941 13.087 10.6221 12.594 11.6081 11.6081C12.594 10.6221 13.087 9.41941 13.087 8.00009C13.087 6.58076 12.594 5.37811 11.6081 4.39212C10.6221 3.40613 9.41941 2.91314 8.00009 2.91314C6.58076 2.91314 5.37811 3.40613 4.39212 4.39212C3.40613 5.37811 2.91314 6.58076 2.91314 8.00009C2.91314 9.41941 3.40613 10.6221 4.39212 11.6081C5.37811 12.594 6.58076 13.087 8.00009 13.087Z"
          fill={color ? color : "#31AFD4"}
        />
      </g>
    </svg>
  );
};

export default InfoSVG;