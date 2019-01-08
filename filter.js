// ==UserScript==
// @name         Message Hider
// @namespace    https://github.com/faithanalog/discord-message-filter/
// @version      0.1
// @description  Hide Discord messages containing certain content
// @author       Artemis
// @match        https://discordapp.com/*
// @match        https://canary.discordapp.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Put your regex here. the i makes it case-insensitive
  // This example is set up to eat whitespace in between letters, so this
  // will match things like:
  // example
  // E  xam Pl e
  // EXamPlE
  let rgx = /e *x *a *m *p *l *e/i;

  setInterval(() => {
    let messages = document.querySelectorAll('[class^="markup"]');
    messages.forEach((m) => {
      if (rgx.test(m.textContent)) {
        m.textContent = "_";
      }
    })
  }, 250);

  // TODO use MutationObserver

  // var messageObserverConfig = {
  //     subtree: true,
  //     characterData: true
  // };


  // function messageObserverCallback(mutations, observer) {
  //     for (var m of mutations) {
  //         console.log("Got a mutation");
  //         if (m.type === 'characterData') {
  //             var e = m.target;
  //             if (rgx.test(e.textContent)) {
  //                 e.textContent = "";
  //             }
  //             console.log(e.textContent);
  //         }

  //     }
  // }

  // var messageObserver = new MutationObserver(messageObserverCallback);
  // messageObserver.observe(document.getRootNode(), messageObserverConfig);
  // console.log("Handler attached");
})();
