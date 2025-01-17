// ==UserScript==
// @name        rose-pine-moon DuckDuckGo Theme
// @namespace   https://duckduckgo.com/
// @version     1.0
// @description 2022-01-30
// @author      https://github.com/cobcobs/
// @match       https://duckduckgo.com/
// @match       https://duckduckgo.com/settings
// @icon        https://github.com/rose-pine/rose-pine-theme/raw/main/assets/icon.png
// @grant       none
// ==/UserScript==

(function () {
  "use strict";

  const theme = [
    "1=-1",
    "at=-1",
    "ao=-1",
    "aq=-1",
    "ak=-1",
    "ax=-1",
    "av=1",
    "ap=-1",
    "au=-1",
    "ay=b",
    "ae=-1",
    "18=1",
    "7=232136",
    "j=232136",
    "9=9ccfd8",
    "x=3e8fb0",
    "aa=c4a7e7",
    "8=e0def4",
    "21=232136",
  ];

  for (const item of theme) {
    document.cookie = `${item}; max-age=126144000; samesite=lax; secure`;
  }
})();
