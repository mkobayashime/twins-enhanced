// ==UserScript==
// @name         TWINS Enhanced
// @namespace    https://twins.tsukuba.ac.jp/
// @version      1.0
// @description  Browser userscript to improve semantics of TWINS
// @author       @m_kobayashi_me  https://twitter.com/m_kobayashi_me
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
})();