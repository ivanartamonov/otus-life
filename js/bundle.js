!function(){"use strict";function t(t,n,e){var r=document.createElement("table");r.setAttribute("border","1"),r.innerHTML=n.map((function(t,n){return"<tr>".concat(t.map((function(t,e){return 1===t?"<td \n            data-x=".concat(e,"\n            data-y=").concat(n,'\n            class="cell alive" \n            style="background-color:#FA58D0; height:10px; width:10px;"></td>'):"<td \n            data-x=".concat(e,"\n            data-y=").concat(n,'\n            class="cell dead" \n            style="background-color:#FFFFFF; height:10px; width:10px;"></td>')})).join(""),"</tr>")})).join(""),r.addEventListener("click",(function(t){var n=t.target,r=Number(n.getAttribute("data-x")),a=Number(n.getAttribute("data-y"));r>=0&&a>=0&&e(r,a)})),t.innerHTML="",t.append(r)}function n(t,n,e){var r=t[e];if(void 0===r)return 0;var a=r[n];return void 0===a?0:a}var e=document.createElement("div"),r=document.createElement("div");document.body.appendChild(e),document.body.appendChild(r),function(e,r,a){var c,o=!1;a.innerHTML='<div class="field-wrapper"></div><button>Start</button>';var i=a.querySelector(".field-wrapper"),u=a.querySelector("button"),d=Array.from({length:5}).map((function(){return new Array(4).fill(0)})),l=function n(e,r){d[r][e]=0===d[r][e]?1:0,t(i,d,n)};function f(){o=!1,u.innerHTML="Start",clearInterval(c)}t(i,d,l),u.addEventListener("click",(function(){o?f():(o=!0,u.innerHTML="Stop",c=setInterval((function(){d=function(t){return t.map((function(e,r){return e.map((function(e,a){var c,o=function(t,e,r){for(var a=0,c=t-1;c<=t+1;c+=1)a+=Number(n(r,c,e-1));for(var o=t-1;o<=t+1;o+=1)a+=Number(n(r,o,e+1));return(a+=Number(n(r,t-1,e)))+Number(n(r,t+1,e))}(a,r,t),i=n(t,a,r);return 3===(c=o)?1:c>3||c<2?0:2===c&&1===i?1:0}))}))}(d),t(i,d,l),function(t){for(var n=0;n<t.length;n+=1)for(var e=t[n],r=0;r<e.length;r+=1)if(e[r])return!0;return!1}(d)||(alert("Death on the block"),f())}),1e3))}))}(0,0,e)}();
//# sourceMappingURL=bundle.js.map