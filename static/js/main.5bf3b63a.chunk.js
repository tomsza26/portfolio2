(this.webpackJsonpportfolio2=this.webpackJsonpportfolio2||[]).push([[0],{118:function(e,a,t){},122:function(e,a,t){var n={"./fcc-Calculator.gif":123,"./fcc-Drum_Machine.gif":124,"./fcc-Pomodoro-Clock.gif":125,"./fcc-Quotes_Machine.gif":126,"./flipGame.gif":127,"./markdown-notes.gif":128,"./pakuj-z-tymkiem.gif":129,"./portfolio.gif":130};function r(e){var a=s(e);return t(a)}function s(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=122},123:function(e,a,t){e.exports=t.p+"static/media/fcc-Calculator.31f549b4.gif"},124:function(e,a,t){e.exports=t.p+"static/media/fcc-Drum_Machine.24055dc0.gif"},125:function(e,a,t){e.exports=t.p+"static/media/fcc-Pomodoro-Clock.0b1d5485.gif"},126:function(e,a,t){e.exports=t.p+"static/media/fcc-Quotes_Machine.646405d1.gif"},127:function(e,a,t){e.exports=t.p+"static/media/flipGame.58324ac5.gif"},128:function(e,a,t){e.exports=t.p+"static/media/markdown-notes.c90915f8.gif"},129:function(e,a,t){e.exports=t.p+"static/media/pakuj-z-tymkiem.0009a23b.gif"},130:function(e,a,t){e.exports=t.p+"static/media/portfolio.eae9b665.gif"},131:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},135:function(e,a,t){},136:function(e,a,t){},137:function(e,a,t){},138:function(e,a,t){e.exports=t.p+"static/media/1.12a066cc.png"},139:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(53),o=t.n(s),l=(t(65),t(3)),i=t(54),c=t.n(i),m=t(23),d=t(55),u=(t(52),t(36)),p=t.n(u),f=t(56),v="https://api.github.com/users/tomsza26/repos",E=["curiousElement","portfolio2","front-end-recruitment-test","tomasz-szablewski"],y=function(){var e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)(!0),o=Object(l.a)(s,2),i=o[0],c=o[1];function m(){return(m=Object(f.a)(p.a.mark((function e(){var a,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v);case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent.reverse().filter((function(e){return!E.includes(e.name)})),r(t),c(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),[t,i]},h=(t(118),t(15)),g=t(38);var k=function(e){var a=e.desc,n=e.name,s=e.url,o=e.homepage;return r.a.createElement("div",{className:"projectBlock"},r.a.createElement("header",{className:"projName"},n),r.a.createElement("div",{className:"imgCont"},r.a.createElement("img",{src:t(122)("./"+n+".gif")||"",alt:"projectImg",className:"projImg"}),r.a.createElement("div",{className:"projDesc"},a||"No description here.")),r.a.createElement("div",{className:"plinks"},o?r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"aLinks"},r.a.createElement(h.a,{icon:g.b,color:"#ff4ba8",className:"iconL"}),r.a.createElement("span",{className:"codeN"},"live")):"",r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"aLinks"},r.a.createElement(h.a,{icon:g.a,color:"#ff4ba8",className:"iconL"}),r.a.createElement("span",{className:"codeN"},"code"))),r.a.createElement("div",{className:"forSmaller"},a))};var N=function(){var e=y(),a=Object(l.a)(e,2),t=a[0],n=a[1];return r.a.createElement("div",{id:"pContainer"},r.a.createElement("div",{id:"pHeader"},"my projects"),r.a.createElement("div",{id:"pProjects"},n?"":t.map((function(e){return r.a.createElement(k,{key:e.id,desc:e.description,name:e.name,url:e.html_url,homepage:e.homepage})}))))};t(131);var b=function(){return r.a.createElement("div",{id:"sContainer"},r.a.createElement("div",{id:"sHeader"},"skills"),r.a.createElement("div",{className:"sAllPerks"},r.a.createElement("div",{id:"sLanguages",className:"sContents"},r.a.createElement("header",{id:"sLangHead",className:"sHeaders"},"languages"),r.a.createElement("div",{className:"sContent"},r.a.createElement("div",{className:"sContItem"},"HTML5"),r.a.createElement("div",{className:"sContItem"},"CSS3"),r.a.createElement("div",{className:"sContItem"},"JAVASCRIPT"))),r.a.createElement("div",{id:"sLearning",className:"sContents"},r.a.createElement("header",{id:"sLearnHead",className:"sHeaders"},"learning / want to learn"),r.a.createElement("div",{className:"sContent"},r.a.createElement("div",{className:"sContItem"},"three.js"),r.a.createElement("div",{className:"sContItem"},"python"),r.a.createElement("div",{className:"sContItem"},"typescript"),r.a.createElement("div",{className:"sContItem"},"pixi.js"))),r.a.createElement("div",{id:"sTools",className:"sContents"},r.a.createElement("header",{id:"sToolHead",className:"sHeaders"},"libraries / tools"),r.a.createElement("div",{className:"sContent"},r.a.createElement("div",{className:"sContItem"},"react"),r.a.createElement("div",{className:"sContItem"},"redux"),r.a.createElement("div",{className:"sContItem"},"node.js"),r.a.createElement("div",{className:"sContItem"},"express"),r.a.createElement("div",{className:"sContItem"},"mern stack"),r.a.createElement("div",{className:"sContItem"},"git, github"),r.a.createElement("div",{className:"sContItem"},"sass"),r.a.createElement("div",{className:"sContItem"},"mongodb"),r.a.createElement("div",{className:"sContItem"},"webpack"),r.a.createElement("div",{className:"sContItem"},"web components"),r.a.createElement("div",{className:"sContItem"},"npm"))),r.a.createElement("div",{id:"sPractices",className:"sContents"},r.a.createElement("header",{id:"sPracHead",className:"sHeaders"},"good practices"),r.a.createElement("div",{className:"sContent"},r.a.createElement("div",{className:"sContItem"},"ES6"),r.a.createElement("div",{className:"sContItem"},"react hooks"),r.a.createElement("div",{className:"sContItem"},"eslint"),r.a.createElement("div",{className:"sContItem"},"js: async await")))))},w=(t(132),t(57)),C=t.n(w);var S=function(){return r.a.createElement("div",{id:"aContainer"},r.a.createElement("div",{className:"aHeader"},r.a.createElement("span",{className:"aHeader__word"},"about me")),r.a.createElement("div",{className:"textImage"},r.a.createElement("img",{src:C.a,alt:"tomek to ja",id:"tomekToJa"}),r.a.createElement("div",{className:"aboutMeText"},"My name is Tomek Szablewski.",r.a.createElement("br",null),"I'm Javascript Front-End Developer (aspiring fullstack developer - MERN).",r.a.createElement("br",null),"I live and work in Pozna\u0144, Polska.",r.a.createElement("br",null),"Programming is one of my many passions. I started coding in High School, now I'm learning to become professional web developer. I also like computer games, sailing and gym.",r.a.createElement("br",null),"I love to give websites their own soul.")))},x=t(58);t(133);var I=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],s=a[1];return r.a.createElement("footer",null,r.a.createElement("div",{id:"canv"},r.a.createElement("div",{id:"footCont"},r.a.createElement("div",{className:"feedback-card"},""===t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"feedback-header"},"CONTACT ME",r.a.createElement("br",null),"we can build amazing things together"),r.a.createElement("form",{className:"feedback-body",action:"https://formspree.io/mnqberay",onSubmit:function(e){e.preventDefault();var a=e.target,t=new FormData(a),n=new XMLHttpRequest;n.open(a.method,a.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(a.reset(),s("SUCCESS")):s("ERROR"))},n.send(t)},method:"POST"},r.a.createElement("input",{type:"email",name:"email",required:!0,className:"feedback-body__email",placeholder:"Email"}),r.a.createElement("textarea",{type:"text",name:"message",required:!0,className:"feedback-body__message",placeholder:"Message",minLength:"10",maxLength:"300"}),r.a.createElement("button",{type:"submit"},"SEND"))):"SUCCESS"===t?r.a.createElement("div",{className:"feedback-header"},"A message has been sent.",r.a.createElement("br",null),"Thanks!"):r.a.createElement("div",{className:"feedback-header"},"Oops! There has been an error.",r.a.createElement("br",null),"Try again later.")))),r.a.createElement("div",{className:"theLastStand"},r.a.createElement("a",{className:"gitLink",href:"https://github.com/tomsza26",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{icon:x.a,id:"gitHub",color:"#f05133"}),r.a.createElement("span",{id:"spanGit"},"My GitHub")),r.a.createElement("div",{className:"inspiredBy"},r.a.createElement("div",{className:"insBy"},"INSPIRED BY:"),r.a.createElement("a",{href:"https://superhotgame.com/",target:"_blank",rel:"noopener noreferrer",className:"aIns"},"SUPERHOT"),r.a.createElement("a",{href:"https://hotlinemiami.com/",target:"_blank",rel:"noopener noreferrer",className:"aIns"},"HOTLINE MIAMI")),r.a.createElement("div",{className:"copyright"},"Copyright Tomasz Szablewski 2020 \xa9")))},O=function(e){return Object(n.useEffect)((function(){setTimeout((function(){var a;a=1,e.sendData(a)}),4e3)}),[]),r.a.createElement("div",{className:"AppLoaded"},r.a.createElement(N,null),r.a.createElement(b,null),r.a.createElement(S,null),r.a.createElement(I,null))};t(134),t(135);var q=function(){return r.a.createElement("div",{id:"sky",className:"sky"},r.a.createElement("div",{id:"sun",className:"sun"}),r.a.createElement("div",{className:"trees"}),r.a.createElement("div",{className:"trees-reverse"}),r.a.createElement("div",{className:"trees-bg"}))},T=t(59),j=t.n(T);t(136);var H=function(){return r.a.createElement(j.a,{href:"#footCont",id:"contactNeon"},"contact",r.a.createElement("br",null),"me")};t(137);var A=function(){return r.a.createElement("div",{id:"starsBack"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{id:"stars2"}),r.a.createElement("div",{id:"stars3"}))};var P=function(){return r.a.createElement("div",{className:"contenidor"},r.a.createElement(A,null),r.a.createElement("span",{id:"headFront"},"FRONT-END",r.a.createElement("br",null),"DEVELOPER",r.a.createElement("span",{id:"tomasz"},"Tomasz Szablewski")),r.a.createElement(H,null),r.a.createElement(q,null),r.a.createElement("div",{className:"imatge"},r.a.createElement("img",{src:t(138),alt:"thomas",id:"hotThomas"})))};var R=function(){var e=document.createElement("canvas").getContext("2d"),a=document.querySelector("#canv").appendChild(document.createElement("canvas")).getContext("2d"),t=document.createElement("canvas").getContext("2d"),n=document.createElement("canvas").getContext("2d"),r=document.createElement("canvas").getContext("2d"),s=e.canvas,o=0,l=0,i=function(a,t,n,r){e.beginPath(),e.moveTo(a,t),e.lineTo(n,r),e.stroke()};!function c(){var m,d,u;o++,a.canvas.width===a.canvas.offsetWidth&&a.canvas.height===a.canvas.offsetHeight||(a.canvas.width=s.width=t.canvas.width=n.canvas.width=r.canvas.width=a.canvas.offsetWidth/2,a.canvas.height=s.height=t.canvas.height=n.canvas.height=r.canvas.height=a.canvas.offsetHeight/2),e.fillStyle="#0f050d",e.fillRect(0,0,s.width,s.height),e.save(),e.translate(s.width/2,s.height/2),m=0,d=-64,u=128,e.fillStyle=e.createLinearGradient(m,d-u,m,d+u),e.fillStyle.addColorStop(.1,"#fdce74"),e.fillStyle.addColorStop(.8,"#d60066"),e.beginPath(),e.arc(m,d,u,0,2*Math.PI),e.fill(),e.strokeStyle="#00e9ff";for(var p=0;p<240;p++){var f=(-120+p)*(5e3/24);i(f/1*100,1e4,f/5e3*100,2)}for(var v=0;v<=24;v++){var E=v*(5e3/24)-10*o%(5e3/24);E<0||i(-25e3/E*100,100/E*100,25e3/E*100,100/E*100)}e.restore(),t.drawImage(s,2,0),t.globalCompositeOperation="multiply",t.fillStyle="#f00",t.fillRect(0,0,s.width,s.height),t.globalCompositeOperation="source-over",n.drawImage(s,2,0),n.globalCompositeOperation="multiply",n.fillStyle="#0f0",n.fillRect(0,0,s.width,s.height),n.globalCompositeOperation="source-over",r.drawImage(s,2,0),r.globalCompositeOperation="multiply",r.fillStyle="#00f",r.fillRect(0,0,s.width,s.height),r.globalCompositeOperation="source-over",o%5===0&&(l=Math.random()),a.clearRect(0,0,s.width,s.height),a.globalCompositeOperation="screen",a.filter="blur(0.5px)",a.drawImage(t.canvas,1,0),a.drawImage(n.canvas,-1*l,0),a.drawImage(r.canvas,-5*l,0),a.filter="blur(8px)",a.drawImage(a.canvas,0,0),a.globalCompositeOperation="source-over",requestAnimationFrame(c)}()},M={loop:!0,autoplay:!0,animationData:d,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};var z=function(){var e=Object(n.useState)(0),a=Object(l.a)(e,2),t=a[0],s=a[1],o=new m.Howl({src:["https://tomsza26.github.io/portfolio2/audio/migawka.wav"]}),i=new m.Howl({src:["https://tomsza26.github.io/portfolio2/audio/katana.wav"]}),d=new m.Howl({src:["https://tomsza26.github.io/portfolio2/audio/Blizzard.mp3"],loop:!0,volume:.3});return Object(n.useEffect)((function(){if(1===t){var e=document.querySelector("#loadingCenter"),a=document.querySelector(".SUPERHOT"),n=document.querySelector("#super1"),r=document.querySelector("#super2"),s=document.querySelector("#super3"),l=document.querySelector("#super4"),c=document.querySelector("#super5"),m=document.querySelector("#super6");e.style.animation="fadeInOut 0.7s linear 0.5s 1 normal forwards",document.querySelector(".App").style.animation="colorAnim 0.7s linear 0.5s 1 normal forwards",setTimeout((function(){e.parentNode.removeChild(e),a.style.display="flex",n.style.animation="superAnimation 0.3s linear 1 normal forwards",o.play(),setTimeout((function(){n.parentNode.removeChild(n),r.style.display="flex",document.querySelector("#first1").style.animation="superAnimation2 0.3s linear 1 normal forwards",document.querySelector("#first2").style.animation="superAnimation 0.3s linear 1 normal forwards",document.querySelector("#first3").style.animation="superAnimation2 0.3s linear 1 normal forwards",o.play(),setTimeout((function(){r.parentNode.removeChild(r),s.style.display="flex",s.style.animation="superAnimation 0.3s linear 1 normal forwards",o.play(),setTimeout((function(){s.parentNode.removeChild(s),l.style.display="flex",l.style.animation="superAnimation 0.3s linear 1 normal forwards",o.play(),setTimeout((function(){l.parentNode.removeChild(l),c.style.display="flex",c.style.animation="superAnimation 0.3s linear 1 normal forwards",o.play(),setTimeout((function(){c.parentNode.removeChild(c),m.style.display="flex",m.style.animation="superAnimation 0.3s linear 1 normal forwards",o.play(),setTimeout((function(){var e=document.querySelector(".blade");a.style.animation="fillIn 4s linear 1 normal forwards",setTimeout((function(){e.style.display="flex",i.play();var t=document.querySelector(".mainBody");setTimeout((function(){t.style.display="block",document.querySelector("#bodyUp").style.animation="cubeRewerse 1s normal forwards",document.querySelector("#bodyDown").style.animation="cubeRewerse2 1s normal forwards",a.parentNode.removeChild(a),document.querySelector(".mainBody").style.position="relative",document.querySelector("html").style.overflowY="initial",R(),setTimeout((function(){document.querySelector(".equalizer").style.display="inline-block",d.play()}),1e3)}),500)}),3e3)}),500)}),170)}),170)}),170)}),1200)}),900)}),1800)}})),r.a.createElement("div",{className:"App"},r.a.createElement("button",{className:"equalizer",type:"button",onClick:function(){d.playing()?(d.pause(),document.querySelector(".eq1").style.animationName="none",document.querySelector(".eq2").style.animationName="none",document.querySelector(".eq3").style.animationName="none"):(d.play(),document.querySelector(".eq1").style.animationName="shorteq",document.querySelector(".eq2").style.animationName="talleq",document.querySelector(".eq3").style.animationName="shorteq")}},r.a.createElement("span",{className:"eq1"}),r.a.createElement("span",{className:"eq2"}),r.a.createElement("span",{className:"eq3"})),r.a.createElement("div",{className:"mainBody"},r.a.createElement("div",{id:"bodyUp"},r.a.createElement("div",{id:"upFront",className:"d3"},r.a.createElement(P,null)),r.a.createElement("div",{id:"upBack",className:"d3"})),r.a.createElement("div",{id:"bodyDown"},r.a.createElement("div",{id:"downFront",className:"d3"}),r.a.createElement("div",{id:"downBack",className:"d3"},r.a.createElement(O,{sendData:s})))),r.a.createElement("div",{id:"loadingCenter"},r.a.createElement(c.a,{options:M,height:120,width:120})),r.a.createElement("div",{className:"SUPERHOT"},r.a.createElement("div",{className:"superS",id:"super1"},"GOD DAMN"),r.a.createElement("div",{className:"superS",id:"super2"},r.a.createElement("div",{id:"first1"},"ARE YOU"),r.a.createElement("div",{id:"first2"},"FAST"),r.a.createElement("div",{id:"first3"},"ENOUGH")),r.a.createElement("div",{className:"superS",id:"super3"},"I"),r.a.createElement("div",{className:"superS",id:"super4"},"DON'T"),r.a.createElement("div",{className:"superS",id:"super5"},"THINK"),r.a.createElement("div",{className:"superS",id:"super6"},"SO")),r.a.createElement("div",{className:"blade"},r.a.createElement("div",{className:"bladeP"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,a,t){},55:function(e){e.exports=JSON.parse('{"v":"5.6.5","fr":60,"ip":0,"op":120,"w":1024,"h":1024,"nm":"01_Loading Animation 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Oval 2","sr":1,"ks":{"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[362,512,0],"to":[50,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.66,"y":0},"t":60,"s":[662,512,0],"to":[0,0,0],"ti":[50,0,0]},{"t":120,"s":[362,512,0]}]},"s":{"a":0,"k":[95,95,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[300,300]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.180391997099,0.184313997626,0.188234999776,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":20},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Oval","bm":0,"hd":false}],"ip":60,"op":120,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Oval Copy 2","sr":1,"ks":{"p":{"a":1,"k":[{"i":{"x":0.335,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[662,512,0],"to":[-50,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.665,"y":0},"t":60,"s":[362,512,0],"to":[0,0,0],"ti":[-50,0,0]},{"t":120,"s":[662,512,0]}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[300,300]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","hd":false},{"ty":"fl","c":{"a":0,"k":[0.180335998535,0.184229001403,0.188448995352,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Oval Copy","bm":0,"hd":false}],"ip":60,"op":120,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Oval Copy","sr":1,"ks":{"p":{"a":1,"k":[{"i":{"x":0.335,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[662,512,0],"to":[-50,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.665,"y":0},"t":60,"s":[362,512,0],"to":[0,0,0],"ti":[-50,0,0]},{"t":120,"s":[662,512,0]}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[300,300]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","hd":false},{"ty":"fl","c":{"a":0,"k":[0.180335998535,0.184229001403,0.188448995352,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Oval Copy","bm":0,"hd":false}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Oval","sr":1,"ks":{"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[362,512,0],"to":[50,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.66,"y":0},"t":60,"s":[662,512,0],"to":[0,0,0],"ti":[50,0,0]},{"t":120,"s":[362,512,0]}]},"s":{"a":0,"k":[95,95,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[300,300]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.180391997099,0.184313997626,0.188234999776,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":20},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Oval","bm":0,"hd":false}],"ip":0,"op":60,"st":0,"bm":0}],"markers":[]}')},57:function(e,a,t){e.exports=t.p+"static/media/tomekVHS.751172c1.JPG"},60:function(e,a,t){e.exports=t(139)},65:function(e,a,t){}},[[60,1,2]]]);
//# sourceMappingURL=main.5bf3b63a.chunk.js.map