(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}});
  document.getElementById('y').textContent=new Date().getFullYear();

  var els=document.querySelectorAll('.card,.price,.quote,.head,details');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    els.forEach(function(el){el.classList.add('rv');io.observe(el)});
  }

  var f=document.getElementById('form');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var ok=true;
    f.querySelectorAll('[required]').forEach(function(i){var bad=!i.value.trim();i.classList.toggle('err',bad);if(bad)ok=false});
    if(!ok)return;
    // Demo: sustituir por un servicio real (Formspree, Netlify Forms, backend propio…)
    document.getElementById('ok').hidden=false;
    f.reset();
  });
})();
