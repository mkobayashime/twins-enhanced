// ==UserScript==
// @name         TWINS Enhanced
// @namespace    https://twins.tsukuba.ac.jp/
// @version      1.2.0
// @description  Browser userscript to improve semantics of TWINS
// @author       @mkobayashime
// @updateURL    https://github.com/mkobayashime/twins-enhanced/raw/master/index.user.js
// @downloadURL  https://github.com/mkobayashime/twins-enhanced/raw/master/index.user.js
// @match        https://twins.tsukuba.ac.jp/*
// @grant        none
// ==/UserScript==

(function() {
  "use strict"

  window.onload = () => {
    const ids = [
      "tab-home",
      "tab-rs",
      "tab-si",
      "tab-gk",
      "tab-kh",
      "tab-en",
      "tab-kj",
      "tab-pr",
      "tab-sn",
      "portalsmart",
      "portallocale",
      "portaltimer",
      "logout"
    ]

    for (const id of ids) {
      const originalDiv = document.getElementById(id)
      originalDiv.style.position = "relative"

      const domA = document.createElement("a")
      domA.style.position = "absolute"
      domA.style.width = "100%"
      domA.style.height = "100%"
      domA.style.top = "0"
      domA.style.left = "0"

      originalDiv.appendChild(domA)
    }
  }

  const setKeijiShortcuts = () => {
    window.onkeyup = (e) => {
      if (e.ctrlKey && e.code === "Enter") {
        const unreadIndicators = document.getElementsByClassName("highlight_red")
        if (unreadIndicators.length) {
          const unreadLink = unreadIndicators[0].parentElement.children[0]
          unreadLink.click()
        } else {
          const iframeDoc = document.getElementById("main-frame-if").contentWindow
            .document
          if (iframeDoc) {
            const backBtn = iframeDoc.querySelector(
              "input[onclick='backPortal();']"
            )
            if (backBtn) {
              backBtn.click()
            }
          }
        }
      }
    }
  }

  const searchParams = new URLSearchParams(window.location.search)

  if (searchParams.get("tabId") === "kj") {
    setKeijiShortcuts()
  }
})();
