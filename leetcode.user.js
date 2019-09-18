// ==UserScript==
// @name         leetcode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://leetcode.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
        var t = document.createElement('style')
    t.innerText = "body{background:#000 !important;}"+
        "div, th, td,tr,.question-list-base .reactable-pagination tr, reactable-data tr:hover,.question-picker-detail__Rehh{background: transparent !important;}"+
        ".reactable-page-button,.reactable-next-page,.reactable-previous-page{color:#000 !important;}"+
        "pre,code,button,input{background:#111 !important;}"+
        "a,.cm-variable,.cm-type,th,td,.handler-text__1hMU{color:#999 !important;}"+
        "div,label,pre,code,button,input{color:#fff !important;}"+
        "span{color:#fff;}"+
        ".CodeMirror-cursor {border-left: 1px solid #999}";
    document.head.appendChild(t);
})();
