!function(){"use strict";function t(t,e,n){var i=document.createElement("table");i.setAttribute("border","1"),i.innerHTML=e.map((function(t,e){return"<tr>".concat(t.map((function(t,n){return 1===t?"<td \n            data-x=".concat(n,"\n            data-y=").concat(e,'\n            class="cell alive" \n            style="background-color:#FA58D0; height:10px; width:10px;"></td>'):"<td \n            data-x=".concat(n,"\n            data-y=").concat(e,'\n            class="cell dead" \n            style="background-color:#FFFFFF; height:10px; width:10px;"></td>')})).join(""),"</tr>")})).join(""),i.addEventListener("click",(function(t){var e=t.target,i=Number(e.getAttribute("data-x")),r=Number(e.getAttribute("data-y"));i>=0&&r>=0&&n(i,r)})),t.innerHTML="",t.append(i)}function e(t,e,n){var i=t[n];if(void 0===i)return 0;var r=i[e];return void 0===r?0:r}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}new(function(){function r(e,n,a){var l=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),i(this,"gameIsRunning",!1),i(this,"cellClickHandler",(function(e,n){l.field[n][e]=0===l.field[n][e]?1:0,t(l.fieldWrapper,l.field,l.cellClickHandler)})),this.rootElement=e,this.x=n,this.y=a,this.createMarkup(this.x,this.y),this.makeField(this.x,this.y)}var a,l;return a=r,(l=[{key:"createMarkup",value:function(t,e){var n=this;this.inputX=document.createElement("input"),this.inputX.type="number",this.inputX.placeholder="X",this.inputX.value=String(t),this.inputX.addEventListener("change",(function(t){var e=t.currentTarget;n.updateCols(Number(e.value))})),this.inputY=document.createElement("input"),this.inputY.type="number",this.inputY.placeholder="Y",this.inputY.value=String(e),this.inputY.addEventListener("change",(function(t){var e=t.currentTarget;n.updateRows(Number(e.value))}));var i=document.createElement("input");i.type="range",this.fieldWrapper=document.createElement("div"),this.fieldWrapper.className="field-wrapper",this.button=document.createElement("button"),this.button.innerHTML="Start",this.button.addEventListener("click",(function(){n.gameIsRunning?n.stop():n.start()})),this.rootElement.append(this.inputX),this.rootElement.append(this.inputY),this.rootElement.append(i),this.rootElement.append(this.fieldWrapper),this.rootElement.append(this.button)}},{key:"updateCols",value:function(e){if(!(e<=0||e>30)){if(e>this.x)for(;e>this.x;)this.x++,this.field.forEach((function(t){t.push(0)}));if(e<this.x)for(;e<this.x;)this.x--,this.field.forEach((function(t){t.pop()}));t(this.fieldWrapper,this.field,this.cellClickHandler)}}},{key:"updateRows",value:function(e){if(!(e<=0||e>30)){if(e>this.y)for(;e>this.y;)this.y++,this.field.push(new Array(this.x).fill(0));if(e<this.y)for(;e<this.y;)this.y--,this.field.pop();t(this.fieldWrapper,this.field,this.cellClickHandler)}}},{key:"makeField",value:function(e,n){this.field=Array.from({length:n}).map((function(){return new Array(e).fill(0)})),t(this.fieldWrapper,this.field,this.cellClickHandler)}},{key:"start",value:function(){var n=this;this.gameIsRunning=!0,this.button.innerHTML="Stop",this.timer=setInterval((function(){var i;n.field=(i=n.field).map((function(t,n){return t.map((function(t,r){var a,l=function(t,n,i){for(var r=0,a=t-1;a<=t+1;a+=1)r+=Number(e(i,a,n-1));for(var l=t-1;l<=t+1;l+=1)r+=Number(e(i,l,n+1));return(r+=Number(e(i,t-1,n)))+Number(e(i,t+1,n))}(r,n,i),u=e(i,r,n);return 3===(a=l)?1:a>3||a<2?0:2===a&&1===u?1:0}))})),t(n.fieldWrapper,n.field,n.cellClickHandler),function(t){for(var e=0;e<t.length;e+=1)for(var n=t[e],i=0;i<n.length;i+=1)if(n[i])return!0;return!1}(n.field)||(alert("Death on the block"),n.stop())}),1e3)}},{key:"stop",value:function(){this.gameIsRunning=!1,this.button.innerHTML="Start",this.timer&&clearInterval(this.timer)}}])&&n(a.prototype,l),Object.defineProperty(a,"prototype",{writable:!1}),r}())(document.getElementById("root"),5,5)}();
//# sourceMappingURL=bundle.js.map