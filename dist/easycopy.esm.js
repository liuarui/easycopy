/*!
  * easycopyjs v1.0.2
  * (c) 2022 liuarui
  */
import o from"clipboard";const e=(e,t)=>new Promise(((n,c)=>{try{let r=document.createElement("button");const i=`easyCopyId${Math.floor(1e3*Math.random())}`;r.id=i,r.style.opacity="0";let l=new o(`#${i}`,{text:function(){return e},action:function(){return"copy"},container:"object"==typeof(null==t?void 0:t.container)?t.container:document.body});l.on("success",(function(o){o.clearSelection(),n(o)})),l.on("error",(function(o){c(o)})),document.body.appendChild(r),r.click(),document.body.removeChild(r),l.destroy(),r=null,l=null}catch(o){c({action:"copy",text:e,trigger:(null==t?void 0:t.container)||document.body}),console.error(`easycopy copyText error, msg: ${o}.`)}}));export{e as copyText};
