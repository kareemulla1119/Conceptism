'use strict';
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.setAttribute('aria-expanded','false'); navigation.classList.remove('open'); }));
const dialog = document.querySelector('#enquiry');
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
 document.querySelector('select[name=service]').value = button.dataset.plan || 'Personal branding';
 dialog.showModal();
}));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if(e.target === dialog) { const r=dialog.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) dialog.close(); } });
document.querySelector('#enquiry-form').addEventListener('submit', e => { e.preventDefault();const data=new FormData(e.currentTarget); const text=`Hi Shivraj! I'm ${data.get('name')} from ${data.get('business')}. I'd like to discuss ${data.get('service')} with Conceptism.`;window.open('https://wa.me/919490323202?text='+encodeURIComponent(text),'_blank','noopener,noreferrer'); });
document.querySelector('#year').textContent = new Date().getFullYear();
const progress = document.querySelector('.progress');
window.addEventListener('scroll', () => { const total=document.documentElement.scrollHeight-innerHeight;progress.style.width=(total>0?scrollY/total*100:0)+'%'; }, {passive:true});
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('reveal');observer.unobserve(entry.target);} }),{threshold:.1});
document.querySelectorAll('.statement,.service,.project,.process-list article,.founder-image,.protocol-step,.price-card').forEach(el => observer.observe(el));
if(matchMedia('(hover:hover) and (pointer:fine)').matches){document.querySelectorAll('.tilt').forEach(card => {card.addEventListener('pointermove',e=>{if(reduced.matches)return;const r=card.getBoundingClientRect();card.style.transform=`perspective(900px) rotateX(${-(e.clientY-r.top-r.height/2)/45}deg) rotateY(${(e.clientX-r.left-r.width/2)/45}deg) translateY(-4px)`;});card.addEventListener('pointerleave',()=>card.style.transform='');});}
// Subtle perspective response for the social-media composition.
const socialArt = document.querySelector('.social-art');
const socialScene = document.querySelector('.social-scene');
if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
 socialArt.addEventListener('pointermove', e => {
  if (reduced.matches) return;
  const r = socialArt.getBoundingClientRect();
  socialScene.style.transform = `rotateX(${-(e.clientY-r.top-r.height/2)/65}deg) rotateY(${(e.clientX-r.left-r.width/2)/65}deg)`;
 });
 socialArt.addEventListener('pointerleave', () => socialScene.style.transform = '');
}
