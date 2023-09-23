// ==UserScript==
// @name         Search Notifier
// @namespace    https://revogen.xyz/
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @version      0.1
// @description  Notify on Discord if search result appears
// @author       RevoGen
// @match        https://revogen.xyz/*
// @icon         https://revogen.xyz/static/favicon.svg
// @grant        unsafeWindow
// ==/UserScript==
/* globals $ */

// https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
const DISCORD_UID = "566166982626639873";
// Insert your Discord webhook URL (defaults to #bot-commands in RevoGen's server: https://discord.gg/2msJUHEzUx)
const WEBHOOK_URL =
  https://discord.com/api/webhooks/879504489105747998/534YBGlgMe6uLLH71E9bIMVW4TZRQZU7mqk_K8-LofbkDxZoW9pKaj_nkJ-4K0Ajy8G2";

function sendMessage(message) {
  var request = new XMLHttpRequest();
  request.open("POST", WEBHOOK_URL);

  request.setRequestHeader("Content-Type", "application/json");

  var params = {
    content: `<@${DISCORD_UID}> ${message}`,
  };

  request.send(JSON.stringify(params));
}

async function loop() {
  try {
    if (!document.getElementsByClassName("hit").length) {
      if ((await unsafeWindow.getQuery()).length) {
        sendMessage("search target found");
      }
      setTimeout(loop, unsafeWindow.CLIENT_CONFIG["AUTO_SEARCH_DELAY"]);
    }
  } catch (error) {
    unsafeWindow.raiseError(error);
  }
}

(function main() {
  console.log("SearchNotifier loaded");

  setTimeout(loop, unsafeWindow.CLIENT_CONFIG["AUTO_SEARCH_DELAY"]);
})();