import React, { memo } from "react"
import Svg, { Path } from "react-native-svg"

function DiscountIcon({size, color, ...props}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 980.000000 770.000000"
      fill={color}
      {...props}
    >
      <Path
        d="M5075 7690c-229-20-533-142-690-277-175-149-604-572-2246-2213C495 3556 223 3279 102 3118 8 2993 5 2984 5 2830c0-146 5-167 61-256 71-113 255-306 1119-1172C2317 265 2502 91 2642 30c46-21 69-24 183-24 157-1 179 7 324 125 189 151 508 465 2076 2033 1748 1748 2151 2161 2227 2276 106 160 193 381 224 565 14 85 15 153 10 455-3 195-10 496-16 669s-8 317-4 320c3 3 65 6 137 5 268-2 506-79 704-228 220-166 345-332 517-686 104-216 168-377 212-540 19-69 38-136 42-150 7-22 13-25 57-24 28 0 130 20 229 44 220 53 242 67 232 144-6 57-115 393-177 549-99 249-236 499-375 687-99 134-312 346-434 432-104 74-285 171-395 211-83 31-231 70-335 89-116 20-488 17-625-5-249-41-512-119-770-229-420-179-947-506-1141-710-52-54-64-73-74-120-33-148 55-285 205-319 108-24 134-12 415 186 158 112 253 169 263 158 13-12 7-108-13-203-29-140-66-208-174-315-141-140-247-184-441-185-173 0-314 58-432 176-128 130-191 298-179 479 11 187 82 320 247 466 469 412 1335 821 1971 929 177 30 208 39 208 62 0 48-159 180-294 244l-77 37-207 8c-295 12-1392 48-1612 53-102 3-226 1-275-4zM3325 5000c22-10 55-32 73-47l34-29 54-580c138-1483 215-2346 217-2424 2-97-11-132-68-175-70-54-167-40-238 33l-37 38-100 1069c-129 1389-170 1854-171 1937-1 87 30 145 93 177 53 26 91 26 143 1zm1270-681c171-23 285-80 406-199 83-83 146-181 179-279 19-56 21-88 21-230 0-189-12-248-78-361-49-83-190-224-273-273-111-64-172-78-351-78-133 0-167 3-221 21-181 61-339 200-432 381-59 115-69 171-64 343 4 126 7 148 33 209 70 172 208 322 368 401 143 71 249 88 412 65zm-2131-500c257-64 447-246 518-494 17-63 22-105 22-200 0-141-16-209-76-335-34-70-57-101-132-176-76-76-106-98-186-138-107-53-170-66-320-66s-213 13-320 66c-79 39-110 62-181 133-95 95-147 178-187 299-23 68-26 94-26 217 0 128 2 147 27 220 77 219 257 398 474 469 117 39 246 40 387 5z"
        transform="matrix(.1 0 0 -.1 0 770)"
      />
      <Path
        d="M4372 3874c-103-51-157-143-157-269 0-67 5-88 27-131 15-29 46-66 68-84 50-40 143-79 187-80 103-1 243 105 278 209 21 64 17 159-9 210-75 145-259 213-394 145zM2190 3395c-139-44-219-209-175-361 14-48 27-69 74-115 93-91 210-115 318-65 221 104 232 417 17 522-67 33-167 41-234 19z"
        transform="matrix(.1 0 0 -.1 0 770)"
      />
    </Svg>
  )
}

export default memo(DiscountIcon);