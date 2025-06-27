export const scroll = (el:HTMLDivElement,dir:'left'|'right',step=300)=>{
  el.scrollBy({left:dir==='left'? -step:step,behavior:'smooth'});
};
