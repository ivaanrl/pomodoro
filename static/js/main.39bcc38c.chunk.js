(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{13:function(e,r,t){e.exports=t(29)},18:function(e,r,t){},19:function(e,r,t){},27:function(e,r,t){},28:function(e,r,t){},29:function(e,r,t){"use strict";t.r(r);var a,n=t(0),c=t.n(n),i=t(4),o=t.n(i),s=(t(18),t(19),t(6)),m=t.n(s),l=t(10),u=t(12),k=t(1);!function(e){e[e.startTimer=0]="startTimer",e[e.pauseTimer=1]="pauseTimer",e[e.resetTimer=2]="resetTimer",e[e.increaseWorkTimer=3]="increaseWorkTimer",e[e.decreaseWorkTimer=4]="decreaseWorkTimer",e[e.increaseBreakTimer=5]="increaseBreakTimer",e[e.decreaseBreakTimer=6]="decreaseBreakTimer",e[e.hardResetTimer=7]="hardResetTimer"}(a||(a={}));var f,d={startTimer:function(e){return{type:a.startTimer,payload:e}},pauseTimer:function(){return{type:a.pauseTimer}},resetTimer:function(){return{type:a.resetTimer}},increaseBreakTimer:function(){return{type:a.increaseBreakTimer}},increaseWorkTimer:function(){return{type:a.increaseWorkTimer}},decreaseBreakTimer:function(){return{type:a.decreaseBreakTimer}},decreaseWorkTimer:function(){return{type:a.decreaseWorkTimer}},hardResetTimer:function(){return{type:a.hardResetTimer}}},T=(t(27),function(){var e=Object(k.b)(),r=Object(k.c)((function(e){return e.timer.fixWork})),t=Object(k.c)((function(e){return e.timer.fixBreak}));return c.a.createElement("div",{className:"timer-controls-container"},c.a.createElement("div",{className:"little-container"},c.a.createElement("div",{className:"timer-control"},c.a.createElement("button",{className:"arr-btn increase-work-timer",onClick:function(){return e(d.increaseWorkTimer())}},"+"),c.a.createElement("div",{className:"work time-control-text"},Math.floor(r/60)),c.a.createElement("button",{className:"arr-btn decrease-work-timer",onClick:function(){return e(d.decreaseWorkTimer())}},"-")),c.a.createElement("div",{className:"description"},"SESSION LENGTH")),c.a.createElement("div",{className:"little-container"},c.a.createElement("div",{className:"timer-control"},c.a.createElement("button",{className:"arr-btn increase-break-timer",onClick:function(){return e(d.increaseBreakTimer())}},"+"),c.a.createElement("div",{className:"break time-control-text"},Math.floor(t/60)),c.a.createElement("button",{className:"arr-btn decrease-break-timer",onClick:function(){return e(d.decreaseBreakTimer())}},"-")),c.a.createElement("div",{className:"description"},"BREAK LENGTH")))}),b=(t(28),function(){var e=Object(k.b)(),r=Object(n.useState)(!1),t=Object(u.a)(r,2),a=t[0],i=t[1],o=Object(n.useRef)(null),s=Object(k.c)((function(e){return e.timer.work})),b=Object(k.c)((function(e){return e.timer.break})),v=Object(k.c)((function(e){return e.timer.fixWork})),E=Object(k.c)((function(e){return e.timer.fixBreak})),p=function(){i(!0),f=setInterval(w,1e3)},w=function(){var r=Object(l.a)(m.a.mark((function r(){var t,a,n,c;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:s>0?0===(s-=1)&&(clearInterval(f),null===(t=o.current)||void 0===t||t.play(),null===(a=o.current)||void 0===a||a.play(),p()):b-=1,e(d.startTimer({work:s,break:b})),0===b&&(clearInterval(f),null===(n=o.current)||void 0===n||n.play(),null===(c=o.current)||void 0===c||c.play(),e(d.resetTimer()),s=v,b=E,p());case 3:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),N=function(e){var r=("0"+Math.floor(e/60)).slice(-2),t=("0"+e%60).slice(-2);return"".concat(r,":").concat(t)},h=c.a.createElement("div",{className:"timer"},c.a.createElement("div",{className:"work-text"},"LET'S GET TO WORK!"),c.a.createElement("div",{className:"work-timer"},N(s)));return 0===s&&(h=c.a.createElement("div",{className:"timer"},c.a.createElement("div",{className:"work-text"},"TIME TO GET A BREAK"),c.a.createElement("div",{className:"work-timer"},N(b)))),c.a.createElement("div",{className:"timer-container"},h,c.a.createElement("div",{className:"button-container"},c.a.createElement("button",{className:"btn start-timer",disabled:a,onClick:function(){return p()}},"START"),c.a.createElement("button",{className:"btn",onClick:function(){clearInterval(f),i(!1)}},"STOP"),c.a.createElement("button",{className:"btn res-timer",onClick:function(){clearInterval(f),e(d.hardResetTimer()),i(!1)}},"RESET")),c.a.createElement(T,null),c.a.createElement("audio",{ref:o},c.a.createElement("source",{src:"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",type:"audio/mpeg"})))});var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=t(3),p=t(2),w=Object(E.b)({timer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{work:1500,break:300,fixWork:1500,fixBreak:300},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case a.startTimer:return Object(p.a)({},e,{},r.payload);case a.resetTimer:return Object(p.a)({},e,{work:e.fixWork,break:e.fixBreak});case a.hardResetTimer:return{work:1500,break:300,fixWork:1500,fixBreak:300};case a.increaseWorkTimer:return e.work<3600?Object(p.a)({},e,{work:e.work+60,fixWork:e.fixWork+60}):e;case a.decreaseWorkTimer:return e.work>=120?Object(p.a)({},e,{work:e.work-60,fixWork:e.fixWork-60}):e;case a.increaseBreakTimer:return e.break<1800?Object(p.a)({},e,{break:e.break+60,fixBreak:e.fixBreak+60}):e;case a.decreaseBreakTimer:return e.break>=120?Object(p.a)({},e,{break:e.break-60,fixBreak:e.fixBreak-60}):e;default:return e}}}),N=Object(E.c)(w);o.a.render(c.a.createElement(k.a,{store:N},c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.39bcc38c.chunk.js.map