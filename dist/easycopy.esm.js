/*!
  * easycopyjs v1.0.0
  * (c) 2022 liuarui
  */
import o from"clipboard";const e=(e,t)=>new Promise(((n,c)=>{try{let r=document.createElement("button");r.id="easyCopyId",r.style.opacity="0";let i=new o("#easyCopyId",{text:function(){return e},action:function(){return"copy"},container:"object"==typeof(null==t?void 0:t.container)?t.container:document.body});i.on("success",(function(o){o.clearSelection(),n(o)})),i.on("error",(function(o){c(o)})),document.body.appendChild(r),r.click(),document.body.removeChild(r),i.destroy(),r=null,i=null}catch(o){c({action:"copy",text:e,trigger:(null==t?void 0:t.container)||document.body}),console.error(`easycopy copyText error, msg: ${o}.`)}}));export{e as copyText};
