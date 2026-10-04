export function setOnekoVisible(enabled: boolean) {
 const cat=document.getElementById('oneko');
 if(cat) { cat.style.display=enabled?'block':'none'; return; }
 if(!enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.getElementById('oneko-script')) return;
 const script=document.createElement('script'); script.id='oneko-script'; script.src='/oneko/oneko.js'; script.dataset.cat='/oneko/oneko.gif';
 script.onload=()=>{const cat=document.getElementById('oneko'); if(cat)cat.style.display=document.documentElement.dataset.oneko==='true'?'block':'none';};
 script.onerror=()=>script.remove(); document.body.appendChild(script);
}
