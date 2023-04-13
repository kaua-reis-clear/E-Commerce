import React, { memo } from "react";
import Svg, { G, Path } from "react-native-svg";

function MotorolaLogo({size, color}) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 385.000000 384.000000"
    preserveAspectRatio="xMidYMid meet"
    >
      <G
        transform="translate(0.000000,384.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke={color}
      >
        <Path d="M1686 3830 c-212 -27 -421 -92 -631 -195 -502 -249 -865 -702 -1004 -1253 -57 -229 -67 -593 -21 -826 48 -247 177 -548 317 -746 75 -105 259 -300 362 -384 275 -224 643 -379 991 -417 154 -17 447 -6 585 21 295 58 592 193 834 378 100 77 291 278 373 393 407 569 471 1315 168 1947 -94 194 -201 351 -345 501 -273 285 -617 475 -1007 556 -104 22 -157 26 -338 30 -118 2 -246 0 -284 -5z m879 -715 c82 -258 339 -1093 515 -1670 72 -236 135 -442 140 -457 l9 -28 -63 0 -64 0 -22 83 c-67 250 -164 491 -248 614 -52 77 -123 141 -197 176 -54 27 -64 29 -164 25 l-107 -3 -66 -47 c-113 -81 -181 -175 -303 -418 -36 -72 -67 -130 -70 -130 -2 0 -36 63 -76 141 -92 182 -152 271 -237 351 -102 96 -139 111 -265 106 -89 -3 -109 -7 -154 -32 -167 -92 -290 -309 -408 -721 l-42 -150 -62 -3 c-41 -2 -61 1 -61 8 0 31 720 2360 730 2360 3 0 57 -168 119 -372 359 -1181 449 -1473 457 -1466 5 6 504 1635 556 1816 5 19 11 32 13 30 3 -2 34 -98 70 -213z" />
      </G>
    </Svg>
  );
}

export default memo(MotorolaLogo);
