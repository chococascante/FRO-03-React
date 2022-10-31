import React from "react";

const DEFAULT_SIZE = 75;
type theme = "light" | "dark";

export interface SvgProps {
  width?: number;
  height?: number;
}

export const Logo: React.FC<SvgProps> = ({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
}) => {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="v" overflow="visible">
          <path d="m14.656-0.875c-0.76172 0.39844-1.5547 0.69531-2.375 0.89062-0.8125 0.19531-1.6641 0.29688-2.5469 0.29688-2.6562 0-4.7617-0.73828-6.3125-2.2188-1.5547-1.4883-2.3281-3.5039-2.3281-6.0469 0-2.5508 0.77344-4.5664 2.3281-6.0469 1.5508-1.4883 3.6562-2.2344 6.3125-2.2344 0.88281 0 1.7344 0.10156 2.5469 0.29688 0.82031 0.19922 1.6133 0.49609 2.375 0.89062v3.2969c-0.76172-0.51953-1.5117-0.89844-2.25-1.1406-0.74219-0.23828-1.5234-0.35938-2.3438-0.35938-1.4688 0-2.625 0.46875-3.4688 1.4062-0.83594 0.9375-1.25 2.2344-1.25 3.8906 0 1.6484 0.41406 2.9375 1.25 3.875 0.84375 0.9375 2 1.4062 3.4688 1.4062 0.82031 0 1.6016-0.11719 2.3438-0.35938 0.73828-0.23828 1.4883-0.61719 2.25-1.1406z" />
        </symbol>
        <symbol id="c" overflow="visible">
          <path d="m10.719-8.7031c-0.33594-0.15625-0.66797-0.26953-1-0.34375-0.32422-0.082031-0.65625-0.125-1-0.125-0.98047 0-1.7344 0.32031-2.2656 0.95312-0.53125 0.625-0.79688 1.5273-0.79688 2.7031v5.5156h-3.8125v-11.969h3.8125v1.9688c0.48828-0.78125 1.0508-1.3477 1.6875-1.7031 0.64453-0.36328 1.4102-0.54688 2.2969-0.54688 0.13281 0 0.27344 0.007812 0.42188 0.015625 0.14453 0.011719 0.36328 0.03125 0.65625 0.0625z" />
        </symbol>
        <symbol id="a" overflow="visible">
          <path d="m13.781-6.0156v1.0938h-8.9375c0.09375 0.89844 0.41406 1.5703 0.96875 2.0156 0.55078 0.44922 1.3281 0.67188 2.3281 0.67188 0.80078 0 1.625-0.11719 2.4688-0.35938 0.84375-0.23828 1.7109-0.59766 2.6094-1.0781v2.9531c-0.90625 0.33594-1.8125 0.58984-2.7188 0.76562s-1.8125 0.26562-2.7188 0.26562c-2.1562 0-3.8398-0.54688-5.0469-1.6406-1.1992-1.1016-1.7969-2.6484-1.7969-4.6406 0-1.9453 0.58594-3.4766 1.7656-4.5938 1.1758-1.125 2.8008-1.6875 4.875-1.6875 1.875 0 3.375 0.57031 4.5 1.7031 1.1328 1.125 1.7031 2.6367 1.7031 4.5312zm-3.9375-1.2656c0-0.72656-0.21484-1.3125-0.64062-1.75-0.41797-0.44531-0.96875-0.67188-1.6562-0.67188-0.74219 0-1.3438 0.21094-1.8125 0.625-0.46094 0.41797-0.74609 1.0156-0.85938 1.7969z" />
        </symbol>
        <symbol id="i" overflow="visible">
          <path d="m7.2031-5.3906c-0.80469 0-1.4062 0.13672-1.8125 0.40625-0.39844 0.27344-0.59375 0.67188-0.59375 1.2031 0 0.48047 0.16016 0.85938 0.48438 1.1406 0.32031 0.27344 0.77344 0.40625 1.3594 0.40625 0.71875 0 1.3203-0.25391 1.8125-0.76562 0.48828-0.51953 0.73438-1.1719 0.73438-1.9531v-0.4375zm5.8438-1.4375v6.8281h-3.8594v-1.7656c-0.51172 0.71875-1.0898 1.2461-1.7344 1.5781-0.63672 0.33203-1.418 0.5-2.3438 0.5-1.2422 0-2.2461-0.35938-3.0156-1.0781-0.77344-0.72656-1.1562-1.6719-1.1562-2.8281 0-1.3945 0.47656-2.4219 1.4375-3.0781 0.96875-0.65625 2.4883-0.98438 4.5625-0.98438h2.25v-0.29688c0-0.60156-0.24219-1.0469-0.71875-1.3281-0.48047-0.28125-1.2266-0.42188-2.2344-0.42188-0.8125 0-1.5742 0.085937-2.2812 0.25-0.71094 0.15625-1.3672 0.40234-1.9688 0.73438v-2.9219c0.82031-0.19531 1.6445-0.34766 2.4688-0.45312 0.82031-0.10156 1.6484-0.15625 2.4844-0.15625 2.1562 0 3.7109 0.42969 4.6719 1.2812 0.95703 0.84375 1.4375 2.2266 1.4375 4.1406z" />
        </symbol>
        <symbol id="b" overflow="visible">
          <path d="m6.0156-15.359v3.3906h3.9375v2.7344h-3.9375v5.0781c0 0.55469 0.10938 0.92969 0.32812 1.125 0.21875 0.19922 0.65625 0.29688 1.3125 0.29688h1.9688v2.7344h-3.2812c-1.5117 0-2.5859-0.3125-3.2188-0.9375-0.625-0.63281-0.9375-1.707-0.9375-3.2188v-5.0781h-1.9062v-2.7344h1.9062v-3.3906z" />
        </symbol>
        <symbol id="h" overflow="visible">
          <path d="m9.9688-10.219v-6.4062h3.8594v16.625h-3.8594v-1.7344c-0.52344 0.71094-1.1016 1.2305-1.7344 1.5625-0.63672 0.32031-1.3711 0.48438-2.2031 0.48438-1.4688 0-2.6797-0.58203-3.625-1.75-0.94922-1.1758-1.4219-2.6875-1.4219-4.5312s0.47266-3.3477 1.4219-4.5156c0.94531-1.1758 2.1562-1.7656 3.625-1.7656 0.83203 0 1.5664 0.16797 2.2031 0.5 0.63281 0.32422 1.2109 0.83594 1.7344 1.5312zm-2.5156 7.75c0.82031 0 1.4453-0.29688 1.875-0.89062 0.42578-0.60156 0.64062-1.4727 0.64062-2.6094 0-1.1445-0.21484-2.0156-0.64062-2.6094-0.42969-0.59375-1.0547-0.89062-1.875-0.89062-0.8125 0-1.4336 0.29688-1.8594 0.89062-0.42969 0.59375-0.64062 1.4648-0.64062 2.6094 0 1.1367 0.21094 2.0078 0.64062 2.6094 0.42578 0.59375 1.0469 0.89062 1.8594 0.89062z" />
        </symbol>
        <symbol id="g" overflow="visible">
          <path d="m8.2031-2.4688c0.82031 0 1.4453-0.29688 1.875-0.89062 0.42578-0.60156 0.64062-1.4727 0.64062-2.6094 0-1.1445-0.21484-2.0156-0.64062-2.6094-0.42969-0.59375-1.0547-0.89062-1.875-0.89062-0.82422 0-1.4531 0.30469-1.8906 0.90625-0.4375 0.59375-0.65625 1.4609-0.65625 2.5938 0 1.1367 0.21875 2.0078 0.65625 2.6094 0.4375 0.59375 1.0664 0.89062 1.8906 0.89062zm-2.5469-7.75c0.53125-0.69531 1.1133-1.207 1.75-1.5312 0.64453-0.33203 1.3828-0.5 2.2188-0.5 1.4688 0 2.6758 0.58984 3.625 1.7656 0.94531 1.168 1.4219 2.6719 1.4219 4.5156s-0.47656 3.3555-1.4219 4.5312c-0.94922 1.168-2.1562 1.75-3.625 1.75-0.83594 0-1.5742-0.16797-2.2188-0.5-0.63672-0.33203-1.2188-0.84766-1.75-1.5469v1.7344h-3.8125v-16.625h3.8125z" />
        </symbol>
        <symbol id="f" overflow="visible">
          <path d="m0.26562-11.969h3.8281l3.2188 8.125 2.7344-8.125h3.8125l-5.0312 13.094c-0.5 1.332-1.0898 2.2656-1.7656 2.7969-0.66797 0.53125-1.5547 0.79688-2.6562 0.79688h-2.2188v-2.5h1.2031c0.64453 0 1.1133-0.10547 1.4062-0.3125 0.30078-0.21094 0.53125-0.57812 0.6875-1.1094l0.10938-0.34375z" />
        </symbol>
        <symbol id="e" overflow="visible">
          <path d="m2.0156-15.953h4.1094v12.844h7.2188v3.1094h-11.328z" />
        </symbol>
        <symbol id="u" overflow="visible">
          <path d="m11.688-2.9062h-6.4375l-1.0156 2.9062h-4.125l5.9062-15.953h4.9062l5.9062 15.953h-4.1406zm-5.4062-2.9531h4.375l-2.1875-6.3438z" />
        </symbol>
        <symbol id="t" overflow="visible">
          <path d="m2.0156-15.953h11.094v3.1094h-6.9844v2.9688h6.5625v3.1094h-6.5625v6.7656h-4.1094z" />
        </symbol>
        <symbol id="s" overflow="visible">
          <path d="m13.109-15.438v3.375c-0.875-0.39453-1.7305-0.69141-2.5625-0.89062-0.83594-0.19531-1.6211-0.29688-2.3594-0.29688-0.99219 0-1.7188 0.13672-2.1875 0.40625-0.46875 0.27344-0.70312 0.6875-0.70312 1.25 0 0.42969 0.15625 0.76172 0.46875 1 0.32031 0.24219 0.89844 0.44922 1.7344 0.625l1.75 0.34375c1.7695 0.35547 3.0312 0.89844 3.7812 1.625 0.75 0.73047 1.125 1.7617 1.125 3.0938 0 1.7617-0.52734 3.0742-1.5781 3.9375-1.043 0.85547-2.6328 1.2812-4.7656 1.2812-1.0117 0-2.0273-0.10156-3.0469-0.29688-1.0234-0.1875-2.043-0.46875-3.0625-0.84375v-3.4688c1.0195 0.53125 2.0039 0.9375 2.9531 1.2188 0.95703 0.27344 1.875 0.40625 2.75 0.40625 0.90625 0 1.5938-0.14453 2.0625-0.4375 0.47656-0.30078 0.71875-0.73438 0.71875-1.2969 0-0.48828-0.16406-0.86719-0.48438-1.1406-0.32422-0.26953-0.96875-0.51562-1.9375-0.73438l-1.5938-0.35938c-1.5938-0.33203-2.7617-0.875-3.5-1.625-0.74219-0.75-1.1094-1.7578-1.1094-3.0312 0-1.582 0.50781-2.8008 1.5312-3.6562 1.0312-0.85156 2.5078-1.2812 4.4375-1.2812 0.875 0 1.7734 0.070313 2.7031 0.20312 0.92578 0.125 1.8828 0.32422 2.875 0.59375z" />
        </symbol>
        <symbol id="r" overflow="visible">
          <path d="m9.7031-16.625v2.5156h-2.1094c-0.54297 0-0.92188 0.10156-1.1406 0.29688-0.21094 0.19922-0.3125 0.53906-0.3125 1.0156v0.82812h3.2656v2.7344h-3.2656v9.2344h-3.8281v-9.2344h-1.8906v-2.7344h1.8906v-0.82812c0-1.3008 0.36328-2.2656 1.0938-2.8906 0.72656-0.625 1.8516-0.9375 3.375-0.9375z" />
        </symbol>
        <symbol id="d" overflow="visible">
          <path d="m7.5312-9.5156c-0.84375 0-1.4922 0.30859-1.9375 0.92188-0.44922 0.60547-0.67188 1.4805-0.67188 2.625 0 1.1484 0.22266 2.0273 0.67188 2.6406 0.44531 0.60547 1.0938 0.90625 1.9375 0.90625 0.83203 0 1.4688-0.30078 1.9062-0.90625 0.44531-0.61328 0.67188-1.4922 0.67188-2.6406 0-1.1445-0.22656-2.0195-0.67188-2.625-0.4375-0.61328-1.0742-0.92188-1.9062-0.92188zm0-2.7344c2.0508 0 3.6562 0.55859 4.8125 1.6719 1.1641 1.1055 1.75 2.6406 1.75 4.6094s-0.58594 3.5117-1.75 4.625c-1.1562 1.1055-2.7617 1.6562-4.8125 1.6562-2.0625 0-3.6797-0.55078-4.8438-1.6562-1.168-1.1133-1.75-2.6562-1.75-4.625s0.58203-3.5039 1.75-4.6094c1.1641-1.1133 2.7812-1.6719 4.8438-1.6719z" />
        </symbol>
        <symbol id="q" overflow="visible">
          <path d="m12.922-9.9688c0.48828-0.75 1.0625-1.3164 1.7188-1.7031 0.66406-0.38281 1.3984-0.57812 2.2031-0.57812 1.375 0 2.4219 0.42969 3.1406 1.2812 0.71875 0.84375 1.0781 2.0742 1.0781 3.6875v7.2812h-3.8438v-6.2344c0.007812-0.09375 0.015625-0.1875 0.015625-0.28125v-0.4375c0-0.84375-0.125-1.457-0.375-1.8438-0.25-0.38281-0.65234-0.57812-1.2031-0.57812-0.73047 0-1.293 0.30469-1.6875 0.90625-0.38672 0.59375-0.58984 1.4609-0.60938 2.5938v5.875h-3.8438v-6.2344c0-1.3203-0.11719-2.1758-0.34375-2.5625-0.23047-0.38281-0.63672-0.57812-1.2188-0.57812-0.73047 0-1.2969 0.30469-1.7031 0.90625-0.39844 0.60547-0.59375 1.4648-0.59375 2.5781v5.8906h-3.8438v-11.969h3.8438v1.75c0.46875-0.66406 1.0039-1.1719 1.6094-1.5156 0.61328-0.34375 1.2891-0.51562 2.0312-0.51562 0.82031 0 1.5508 0.19922 2.1875 0.59375 0.63281 0.39844 1.1133 0.96094 1.4375 1.6875z" />
        </symbol>
        <symbol id="p" overflow="visible">
          <path d="m13.859-7.2812v7.2812h-3.8438v-5.5469c0-1.0508-0.027344-1.7695-0.078125-2.1562-0.042969-0.39453-0.12109-0.6875-0.23438-0.875-0.14844-0.25-0.35156-0.44141-0.60938-0.57812-0.25-0.14453-0.54297-0.21875-0.875-0.21875-0.79297 0-1.418 0.3125-1.875 0.9375-0.46094 0.61719-0.6875 1.4648-0.6875 2.5469v5.8906h-3.8125v-16.625h3.8125v6.4062c0.58203-0.69531 1.1953-1.207 1.8438-1.5312 0.64453-0.33203 1.3594-0.5 2.1406-0.5 1.3828 0 2.4297 0.42969 3.1406 1.2812 0.71875 0.84375 1.0781 2.0742 1.0781 3.6875z" />
        </symbol>
        <symbol id="o" overflow="visible">
          <path d="m2.0156-15.953h4.5781l5.8125 10.938v-10.938h3.8906v15.953h-4.5938l-5.7969-10.938v10.938h-3.8906z" />
        </symbol>
        <symbol id="n" overflow="visible">
          <path d="m1.7031-4.6562v-7.3125h3.8438v1.2031c0 0.64844-0.007813 1.4609-0.015625 2.4375v1.9688c0 0.96094 0.023438 1.6523 0.078125 2.0781 0.050781 0.41797 0.13281 0.72656 0.25 0.92188 0.15625 0.25 0.35938 0.44531 0.60938 0.57812 0.25781 0.13672 0.55078 0.20312 0.875 0.20312 0.80078 0 1.4258-0.30469 1.875-0.92188 0.45703-0.61328 0.6875-1.4688 0.6875-2.5625v-5.9062h3.8281v11.969h-3.8281v-1.7344c-0.57422 0.69922-1.1836 1.2148-1.8281 1.5469-0.64844 0.33203-1.3555 0.5-2.125 0.5-1.3867 0-2.4453-0.42188-3.1719-1.2656-0.71875-0.85156-1.0781-2.0859-1.0781-3.7031z" />
        </symbol>
        <symbol id="m" overflow="visible">
          <path d="m13.859-7.2812v7.2812h-3.8438v-5.5781c0-1.0312-0.027344-1.7383-0.078125-2.125-0.042969-0.39453-0.12109-0.6875-0.23438-0.875-0.14844-0.25-0.35156-0.44141-0.60938-0.57812-0.25-0.14453-0.54297-0.21875-0.875-0.21875-0.79297 0-1.418 0.3125-1.875 0.9375-0.46094 0.61719-0.6875 1.4648-0.6875 2.5469v5.8906h-3.8125v-11.969h3.8125v1.75c0.58203-0.69531 1.1953-1.207 1.8438-1.5312 0.64453-0.33203 1.3594-0.5 2.1406-0.5 1.3828 0 2.4297 0.42969 3.1406 1.2812 0.71875 0.84375 1.0781 2.0742 1.0781 3.6875z" />
        </symbol>
        <symbol id="l" overflow="visible">
          <path d="m2.0156-15.953h6.8125c2.0312 0 3.5859 0.45312 4.6719 1.3594 1.0938 0.89844 1.6406 2.1797 1.6406 3.8438 0 1.6797-0.54688 2.9688-1.6406 3.875-1.0859 0.89844-2.6406 1.3438-4.6719 1.3438h-2.7031v5.5312h-4.1094zm4.1094 2.9844v4.4531h2.2656c0.80078 0 1.4141-0.19141 1.8438-0.57812 0.4375-0.38281 0.65625-0.9375 0.65625-1.6562 0-0.70703-0.21875-1.2539-0.65625-1.6406-0.42969-0.38281-1.043-0.57812-1.8438-0.57812z" />
        </symbol>
        <symbol id="k" overflow="visible">
          <path d="m1.8438-11.969h3.8125v11.75c0 1.6016-0.38672 2.8281-1.1562 3.6719-0.76172 0.84375-1.8711 1.2656-3.3281 1.2656h-1.8906v-2.5h0.65625c0.72656 0 1.2266-0.16797 1.5-0.5 0.26953-0.32422 0.40625-0.96875 0.40625-1.9375zm0-4.6562h3.8125v3.125h-3.8125z" />
        </symbol>
        <symbol id="j" overflow="visible">
          <path d="m11.5-11.594v3.125c-0.52344-0.35156-1.043-0.61328-1.5625-0.78125-0.52344-0.17578-1.0625-0.26562-1.625-0.26562-1.0742 0-1.9062 0.3125-2.5 0.9375s-0.89062 1.4961-0.89062 2.6094c0 1.1172 0.29688 1.9844 0.89062 2.6094s1.4258 0.9375 2.5 0.9375c0.59375 0 1.1562-0.085937 1.6875-0.26562 0.53906-0.17578 1.0391-0.44141 1.5-0.79688v3.125c-0.59375 0.23047-1.1992 0.39453-1.8125 0.5-0.61719 0.11328-1.2344 0.17188-1.8594 0.17188-2.1562 0-3.8438-0.55078-5.0625-1.6562-1.2188-1.1133-1.8281-2.6562-1.8281-4.625s0.60938-3.5039 1.8281-4.6094c1.2188-1.1133 2.9062-1.6719 5.0625-1.6719 0.625 0 1.2383 0.058594 1.8438 0.17188 0.61328 0.10547 1.2227 0.26562 1.8281 0.48438z" />
        </symbol>
      </defs>
      <g>
        <path d="m273.57 327.86c-12.137-0.011719-23.77-4.8359-32.348-13.418-8.5781-8.5781-13.406-20.211-13.418-32.344 0-1.5742 0.074218-3.1211 0.21875-4.6367v-0.003906c0.48437-4.832 4.793-8.3555 9.625-7.875 4.8359 0.48437 8.3594 4.793 7.875 9.625-0.046876 0.96484-0.046876 1.9258 0 2.8906 0.035156 8.4141 3.8164 16.379 10.316 21.723 6.5039 5.3438 15.047 7.5156 23.312 5.918 8.2617-1.5977 15.383-6.7969 19.426-14.18s4.582-16.18 1.4766-24.004c-3.1094-7.8203-9.5391-13.852-17.543-16.449-8.0078-2.5977-16.754-1.4922-23.863 3.0156-4.1055 2.5625-9.5117 1.3086-12.074-2.8008-2.5586-4.1055-1.3086-9.5117 2.8008-12.074 12.195-7.5625 27.234-8.9648 40.617-3.7891 13.387 5.1758 23.566 16.328 27.504 30.129 3.9375 13.801 1.1719 28.648-7.4688 40.105-8.6367 11.457-22.152 18.199-36.504 18.211z" />
        <path d="m387.05 327.86c-12.141 0-23.785-4.8203-32.371-13.402-8.5898-8.582-13.422-20.219-13.434-32.359 0-1.7852 0.10156-3.5664 0.30469-5.3398 0.55859-4.832 4.9258-8.2969 9.7578-7.7422 4.832 0.55469 8.3008 4.9219 7.7422 9.7539-0.87891 7.6367 1.3906 15.305 6.2852 21.234 4.8945 5.9258 11.992 9.6055 19.656 10.188 7.668 0.57813 15.238-1.9883 20.969-7.1094 5.7344-5.125 9.1328-12.359 9.4102-20.043 0.28125-7.6836-2.5781-15.148-7.9219-20.676-5.3438-5.5273-12.711-8.6367-20.398-8.6172-5.3711-0.023438-10.641 1.4961-15.18 4.375-1.9492 1.2852-4.332 1.7383-6.6172 1.2578-2.2852-0.48047-4.2852-1.8516-5.5508-3.8164-1.2656-1.9609-1.6992-4.3477-1.1953-6.6289 0.50391-2.2812 1.8945-4.2656 3.8711-5.5117 12.125-7.793 27.219-9.418 40.727-4.3789 13.508 5.0352 23.852 16.145 27.914 29.977 4.0664 13.828 1.375 28.77-7.2578 40.312-8.6367 11.543-22.207 18.344-36.621 18.352z" />
        <path d="m315 355.64c-4.832 0-8.75-3.918-8.75-8.75v-15.227c0-4.832 3.918-8.75 8.75-8.75s8.75 3.918 8.75 8.75v15.184c0.011719 2.3281-0.90625 4.5625-2.5469 6.2148-1.6445 1.6484-3.875 2.5781-6.2031 2.5781z" />
        <path d="m345.62 355.64c-4.832 0-8.75-3.918-8.75-8.75v-15.227c0-4.832 3.918-8.75 8.75-8.75s8.75 3.918 8.75 8.75v15.184c0.011719 2.3281-0.90625 4.5625-2.5469 6.2148-1.6445 1.6484-3.875 2.5781-6.2031 2.5781z" />
        <path d="m615.52 188.12c-0.125-0.73828-0.34766-1.4609-0.65625-2.1445-8.2266-24.789-19.797-48.34-34.387-70-0.42187-0.97266-1.0156-1.8633-1.75-2.625-15.004-21.836-33.102-41.379-53.727-58.012-0.64844-0.68359-1.4023-1.2617-2.2305-1.707-43.531-34.605-97.473-53.504-153.08-53.637h-39.375c-58.527 0.027344-115.14 20.887-159.69 58.844-3.707 3.1055-4.1992 8.6289-1.0938 12.336 3.1055 3.7109 8.6289 4.1992 12.336 1.0938 41.41-35.305 94.031-54.723 148.45-54.773 133.88 0 242.81 117.77 242.81 262.5s-108.94 262.5-242.81 262.5-242.81-117.77-242.81-262.5c-0.57422-68.746 24.926-135.15 71.355-185.85 1.668-1.6836 2.582-3.9688 2.5312-6.3398-0.050781-2.3672-1.0586-4.6172-2.793-6.2266-1.7383-1.6133-4.0547-2.4531-6.4219-2.3281-2.3633 0.12891-4.5781 1.207-6.1328 2.9961-49.441 53.93-76.613 124.59-76.039 197.75 0 154.39 116.77 280 260.31 280h39.375c90.957 0 173.82-49.742 221.68-133.13 2.418-4.1914 0.97656-9.5469-3.2148-11.965-4.1914-2.4141-9.5469-0.97656-11.965 3.2148-2.6836 4.6953-5.4961 9.2734-8.4453 13.738h-18.945 0.003906c10.066-16.711 18.406-34.406 24.895-52.805h20.781c-1.1367 2.9766-2.2305 5.9492-3.457 8.75-0.97266 2.1523-1.0273 4.6094-0.16016 6.8047 0.86719 2.1992 2.5859 3.9531 4.7695 4.8633 2.1797 0.91016 4.6328 0.89844 6.8086-0.03125 2.1719-0.92578 3.875-2.6953 4.7266-4.8984 27.16-65.641 30.121-138.79 8.3555-206.41zm-24.895 83.125c-0.67188-24.664-4.4062-49.145-11.113-72.887h21.09c7.1641 23.664 11.168 48.172 11.898 72.887zm4.0703-90.387h-20.738c-6.4883-18.402-14.828-36.094-24.895-52.809h18.727c10.809 16.57 19.758 34.277 26.688 52.809zm-104.04-128.36h-8.75c-8.5781-6.6367-17.562-12.73-26.906-18.242 12.383 5.0508 24.312 11.152 35.656 18.242zm11.594 17.5h13.125c14.699 11.996 28.012 25.598 39.68 40.555h-17.5c-10.402-14.633-22.215-28.219-35.262-40.555zm-20.387 437.5h9.4062c-11.887 7.4453-24.422 13.801-37.449 18.988 9.75-5.7109 19.117-12.055 28.043-18.988zm73.324-58.055c-11.559 14.953-24.77 28.559-39.375 40.555h-13.52c12.957-12.352 24.68-25.934 35-40.555zm24.105-87.805v-0.003906c6.7812-23.73 10.586-48.215 11.332-72.887h21.875c-0.68359 24.711-4.6406 49.219-11.77 72.887z" />
        <path d="m254.32 160.74c3.6758-2.9648 4.3359-8.3164 1.4883-12.086-2.8477-3.7734-8.1758-4.6016-12.035-1.8711-36.547 27.648-57.707 71.082-56.957 116.9 0.75391 45.824 23.328 88.539 60.766 114.97v54.82c0 2.3203 0.92188 4.543 2.5625 6.1875 1.6406 1.6406 3.8672 2.5625 6.1875 2.5625h147.96c2.3203 0 4.5469-0.92187 6.1875-2.5625 1.6406-1.6445 2.5625-3.8672 2.5625-6.1875v-54.645c38.879-27.363 61.707-72.188 60.969-119.72-0.73438-47.535-24.941-91.633-64.648-117.77-39.711-26.145-89.781-30.953-133.74-12.844-4.4688 1.8398-6.6055 6.9492-4.7695 11.422 1.8359 4.4688 6.9492 6.6055 11.418 4.7656 39.07-16.141 83.629-11.648 118.69 11.973 35.059 23.621 55.961 63.23 55.672 105.5-0.28906 42.273-21.73 81.59-57.109 104.73-2.457 1.6211-3.9336 4.3633-3.9375 7.3086v50.531h-19.859v-50.094c0-4.8359-3.918-8.75-8.75-8.75-4.8359 0-8.75 3.9141-8.75 8.75v50.094h-19.164v-50.094c0-4.8359-3.918-8.75-8.75-8.75s-8.75 3.9141-8.75 8.75v50.094h-20.168v-50.094c0-4.8359-3.918-8.75-8.75-8.75s-8.75 3.9141-8.75 8.75v50.094h-18.812v-50.531c0-2.9453-1.4805-5.6875-3.9375-7.3086-34.316-22.5-55.543-60.289-56.898-101.3-1.3594-41.012 17.32-80.121 50.074-104.84z" />
        <path d="m173.34 125.3c-1.832-1.4297-4.1562-2.0742-6.4648-1.7852-2.3047 0.28516-4.4023 1.4805-5.8281 3.3164-34.086 44.645-52.438 99.316-52.191 155.49 0 132.91 99.355 241.06 221.51 241.06 122.15 0 221.51-108.15 221.51-241.06-0.003907-132.91-99.449-241.06-221.55-241.06-54.246 0.31641-106.29 21.496-145.34 59.148-1.9922 1.4922-3.25 3.7617-3.4688 6.2383-0.21484 2.4805 0.63672 4.9336 2.3359 6.7461 1.7031 1.8164 4.0977 2.8203 6.582 2.7617 2.4883-0.054688 4.832-1.168 6.4492-3.0586 35.84-34.59 83.629-54.051 133.44-54.336 112.48 0 204.01 100.32 204.01 223.56 0 123.24-91.523 223.56-203.96 223.56-112.44 0-204.01-100.28-204.01-223.56-0.21875-52.305 16.891-103.21 48.648-144.77 2.918-3.8438 2.1758-9.3242-1.6641-12.25z" />
      </g>
    </svg>
  );
};
