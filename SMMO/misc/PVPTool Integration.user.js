// ==UserScript==
// @name         PVPTool Integration
// @updateURL   https://github.com/oligochrome/scripts/raw/main/PVPTool Integration.user.js
// @namespace    https://revogen.xyz/
// @version      0.34
// @description  Integration script for RevoGen's PVP Tool
// @author       RevoGen
// @match        https://revogen.xyz/*
// @match        https://web.simple-mmo.com/user/attack/*
// @icon         https://revogen.xyz/static/favicon.svg
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @grant        GM_info
// @grant        unsafeWindow
// @inject-into page
// ==/UserScript==
(function main() {
  let matches = GM_info.script.matches;
  matches = matches.map((url) => new RegExp(url).test(location.href));

  // whether page loaded is the smmo attack page
  if (matches[matches.length - 1]) {
    smmo();
  } else {
    tool();
  }
})();

function tool() {
  GM_addValueChangeListener("turbo_request", async function () {
    console.log("Turbo request received");
    let url = await unsafeWindow.turbo(true);
    if (url) {
      GM_setValue("turbo_submit", url);
    }
  });
  GM_addValueChangeListener("ban_uid", function (name, old_value, new_value) {
    unsafeWindow.banPlayer(new_value);
    console.log(`Banning player ${new_value}`);
  });

  console.log("Tool listener loaded");
}

function turboRequest() {
  // false is default value
  GM_setValue("turbo_request", !GM_getValue("turbo_request", false));
  console.log("Turbo request submitted");
  console.log(GM_getValue("turbo_request"));
}

function smmo() {
  if (
    window.location.href === GM_getValue("turbo_submit", window.location.href)
  ) {
    turboRequest();
  }

  // https://stackoverflow.com/a/47337711/10702372
  function listener(event) {
    if (event.code === "Space" && event.target.tagName !== "INPUT") {
      let url = GM_getValue("turbo_submit", window.location.href);
      if (window.location.href === url) {
        turboRequest();
      } else {
        window.location.href = url;
      }
    }
 //   event.preventDefault();
    event.stopPropagation();
    return false;
  }

document.addEventListener("keydown", listener, false);
  document.addEventListener("focusin", () => {
    let element = document.activeElement;
    element.addEventListener("keydown", listener, false);
  });

  (function (open) {
    unsafeWindow.XMLHttpRequest.prototype.open = function (method, url) {
      if (
        new RegExp("https://api.simple-mmo.com/api/user/attack/*").test(url)
      ) {
        this.addEventListener(
          "readystatechange",
          function () {
            if (this.readyState == 4 && this.status == 200) {
              let response = JSON.parse(this.responseText);
              if (
                response.type == "error" &&
                response.result.toLowerCase().includes("ban")
              ) {
                let ban_uid = url.split("/").pop();
                GM_setValue("ban_uid", ban_uid);
                console.log(`Banning player ${ban_uid}`);
              }
            }
          },
          false
        );
      }
      open.apply(this, arguments);
    };
  })(unsafeWindow.XMLHttpRequest.prototype.open);
  console.log("SMMO listener loaded");
}