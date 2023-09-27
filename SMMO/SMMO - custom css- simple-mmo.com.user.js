// ==UserScript==
// @name        SMMO -  custom css- simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match    https://web.simple-mmo.com/town
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 9/18/2022, 2:51:12 AM

// ==/UserScript==
function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}
GM_addStyle(".dark .text-gray-200.nightwind-prevent {    color:red}")
/*
.text-gray-600.items-center.px-2.py-2.text-sm {
     padding-top: 0rem !important;
     padding-bottom: 0rem !important;
    padding-left: 1px !important;
    padding-right: 1px !important;
}
.text-xs {
    font-size: 10px !important;
    line-height: 1rem !important;
}
.px-3 {
    padding-left: 1px !important;
    padding-right: 1px !important;
}
.pt-5 {
    padding-top: 0px !important;
}
.mt-5 {
    margin-top: 0px !important;
}
.h-12 {
    height: 2rem !important;
}
.h-4 {
    height: 9px !important;
}
.w-6 {
    width: 15px !important;
}
.h-6 {
    height: 15px !important;
}
`);*/