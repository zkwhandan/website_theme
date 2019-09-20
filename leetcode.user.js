// ==UserScript==
// @name         leetcode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://leetcode.com/*
// @match        https://leetcode-cn.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
        var t = document.createElement('style');
    t.innerText = "body{background:#000 !important;}"+
        "div, th, td,tr,.question-list-base .reactable-pagination tr, reactable-data tr:hover,.question-picker-detail__Rehh{background: transparent !important;}"+
        ".reactable-page-button,.reactable-next-page,.reactable-previous-page{color:#000 !important;}"+
        "pre,code,button,input,li,.filter-dropdown-menu-items{background:#111 !important;}"+
        "a,th,td,.handler-text__1hMU{color:#999 !important;}"+
        "div,label,pre,code,button,input,li,.cm-variable,.cm-type{color:#fff !important;}"+
        "span{color:#fff;}"+
        ".CodeMirror-cursor {border-left: 1px solid #999}"+
        ".blog-sidebar,#announcement,.navbar-brand,.tabs-container__3vqg,.header__3STC,#lc_navbar,.category-group-base  {display:none !important;}"+
        ".hljs-title, .hljs-tag, .hljs-symbol, .hljs-bullet, .hljs-number, .hljs-meta{color: #904747;}"+
        "#codesss{width:80%;margin:auto; background:transparent !important;border:none;}";
    document.head.appendChild(t);

    var href = document.createElement('div');
    href.style.position= "fixed";
    href.style.top=0;
    href.style.right=0;
    t = document.URL.split("/", 5).join("/");
    href.innerHTML = "<a href='https://leetcode.com/problemset/all/'>all</a><br>"+
        "<a href='"+t+"'>desc</a><br>"+
        "<a href='"+t+"/solution/'>solve</a><br>"+
        "<a href='"+t+"/submissions/'>sub</a><br>"+
        "<a href='"+t+"/discuss/'>diss</a>";
    document.body.appendChild(href);

    var codes = document.createElement('pre');
    codes.id = "codesss";
    codes.innerHTML ="-rw-r--r--  1 root root    2600 Dec  5  2017 sysctl.conf\ndrwxr-xr-x  2 root root    4096 Apr  5  2018 sysctl.d/\ndrwxr-xr-x  2 root root    4096 Apr  5  2018 sysstat/\ndrwxr-xr-x  5 root root    4096 Apr  5  2018 systemd/\ndrwxr-xr-x  2 root root    4096 Aug 17  2017 terminfo/\n-rw-r--r--  1 root root      14 Dec 10  2017 timezone\ndrwxr-xr-x  2 root root    4096 Apr 12  2016 tmpfiles.d/\n-rw-r--r--  1 root root    1260 Mar 17  2016 ucf.conf\ndrwxr-xr-x  4 root root    4096 Apr  5  2018 udev/\ndrwxr-xr-x  3 root root    4096 Aug 17  2017 ufw/\n-rw-r--r--  1 root root     338 Nov 18  2014 updatedb.conf\ndrwxr-xr-x  2 root root    4096 Oct 31  2018 update-manager/\ndrwxr-xr-x  2 root root    4096 Apr  5  2018 update-motd.d/\ndrwxr-xr-x  2 root root    4096 Aug 17  2017 vim/\n-rw-r--r--  1 root root    5934 May 27  2018 vsftpd.conf\nlrwxrwxrwx  1 root root      23 Aug 17  2017 vtrgb -> /etc/alternatives/vtrgb\n-rw-r--r--  1 root root    4942 Jun 14  2016 wgetrc\ndrwxr-xr-x  8 root root    4096 May 26  2018 X11/\ndrwxr-xr-x  3 root root    4096 Aug 17  2017 xdg/\ndrwxr-xr-x  2 root root    4096 Aug 17  2017 xml/\n-rw-r--r--  1 root root     477 Jul 20  2015 zsh_command_not_found\nroot@host:~# ll /\ntotal 96\ndrwxr-xr-x  23 root root  4096 Sep  8  2018 ./\ndrwxr-xr-x  23 root root  4096 Sep  8  2018 ../\ndrwxr-xr-x   2 root root  4096 Oct 31  2018 bin/\ndrwxr-xr-x   3 root root  4096 Oct 31  2018 boot/\ndrwxrwxrwx   4 root root  4096 Nov 12  2018 .data/\ndrwxr-xr-x  19 root root  3820 Jun 16  2018 dev/\ndrwxr-xr-x  98 root root  4096 Sep 18 22:43 etc/\ndrwxr-xr-x   3 root root  4096 Jun 25  2018 home/\nlrwxrwxrwx   1 root root    33 Apr  5  2018 initrd.img -> boot/initrd.img-4.4.0-119-generic\nlrwxrwxrwx   1 root root    33 Jan  4  2018 initrd.img.old -> boot/initrd.img-generic\ndrwxr-xr-x  18 root root  4096 Oct 31  2018 lib/\ndrwxr-xr-x   2 root root  4096 Oct 31  2018 lib64/\ndrwx------   2 root root 16384 Aug 17  2017 lost+found/\ndrwxr-xr-x   4 root root  4096 Aug 17  2017 media/\ndrwxr-xr-x   2 root root  4096 Feb 16  2017 mnt/\ndrwxr-xr-x   3 root root  4096 Jun 16  2018 opt/\ndr-xr-xr-x 135 root root     0 Jun 16  2018 proc/\ndrwx--x--x  13 root root  4096 Jul 19 11:15 root/\ndrwxr-xr-x  22 root root   700 Sep 19 22:01 run/\ndrwxr-xr-x   2 root root 12288 Oct 31  2018 sbin/\ndrwxr-xr-x   3 root root  4096 Dec  5  2017 srv/\ndr-xr-xr-x  13 root root     0 Jun 25  2018 sys/\ndrwxrwxrwt   8 root root  4096 Sep 19 22:01 tmp/\ndrwxr-xr-x  10 root root  4096 Aug 17  2017 usr/\ndrwxr-xr-x  12 root root  4096 May 26  2018 var/\nlrwxrwxrwx   1 root root    30 Apr  5  2018 vmlinuz -> boot/vmlinuz-4.4.0-119-generic\nlrwxrwxrwx   1 root root    30 Jan  4  2018 vmlinuz.old -> boot/vmlinuz-4.11.0-14-generic";
    document.body.appendChild(codes);

    document.onkeydown = function(e){
        if(e.key == "Escape") {
            var app = document.getElementById("app") || document.getElementsByClassName("content-wrapper")[0];
            console.log(app);
            if (app.style.display=="none") app.style.display="";
            else app.style.display="none";
        }
    }
})();
