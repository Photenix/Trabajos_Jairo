(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();let d=document.getElementById("information-rows"),u=document.getElementById("info-change");d.innerHTML="";const m=(n,l,o,r,e)=>{document.getElementById("name-change").value=n,document.getElementById("last-name-change").value=l,document.getElementById("create-change").checked=o=="X",document.getElementById("update-change").checked=r=="X",document.getElementById("delete-change").checked=e=="X"},f=(n,l,o)=>{let r=document.createElement("tr");return r.innerHTML=`
        <td>${n}</td>
        <td>${l}</td>
        <td>${o.create?"X":""}</td>
        <td>${o.upload?"X":""}</td>
        <td>${o.delete?"X":""}</td>
        <td>
            <i class="bi bi-trash" title="eliminar"></i>
            <i class="bi bi-plus-circle" title="actualizar"></i>
        </td>
    `,r.querySelector(".bi.bi-plus-circle").addEventListener("click",e=>{let c=e.target.parentElement.parentElement.querySelectorAll("td"),a=[];for(let i=0;i<c.length-1;i++){const s=c[i];a.push(s.innerText)}m(...a),u.showModal()}),r.querySelector(".bi.bi-trash").addEventListener("click",e=>{let t=e.target.parentElement.parentElement;d.removeChild(t)}),r};console.log(d);fetch("/data/rols.json").then(n=>n.json()).then(n=>{n.forEach(l=>{let{names:o,last_names:r,permissions:e}=l;d.appendChild(f(o,r,e))}),console.log(n)});const h=document.getElementById("new-item");h.addEventListener("submit",n=>{n.preventDefault(),console.log("hi")});
