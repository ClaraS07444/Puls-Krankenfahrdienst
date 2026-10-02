'use strict';
const menuButton=document.querySelector('.menu-button');const nav=document.querySelector('.primary-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.querySelector('.sr-only').textContent=open?'Menü schließen':'Menü öffnen';});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals=document.querySelectorAll('.reveal');if(reduced){reveals.forEach(el=>el.classList.add('visible'));}else{const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.12});reveals.forEach(el=>observer.observe(el));}
const progress=document.getElementById('progress');const sections=[...document.querySelectorAll('main section[id]')];const links=[...document.querySelectorAll('.primary-nav a[href^="#"]')];
function onScroll(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${max>0?scrollY/max*100:0}%`;let current='';sections.forEach(s=>{if(scrollY>=s.offsetTop-140)current=s.id;});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${current}`));}
addEventListener('scroll',onScroll,{passive:true});onScroll();document.getElementById('year').textContent=new Date().getFullYear();
const dateInputs=document.querySelectorAll('input[type="date"]');const today=new Date();today.setMinutes(today.getMinutes()-today.getTimezoneOffset());const minDate=today.toISOString().split('T')[0];dateInputs.forEach(i=>{if(i.name!=='birthDate')i.min=minDate;});
const returnRadios=document.querySelectorAll('input[name="returnTrip"]');const returnFields=document.getElementById('return-fields');function toggleReturn(){const yes=document.querySelector('input[name="returnTrip"]:checked')?.value==='Ja';returnFields.hidden=!yes;returnFields.querySelectorAll('input').forEach(i=>i.required=yes);}returnRadios.forEach(r=>r.addEventListener('change',toggleReturn));toggleReturn();
document.querySelectorAll('.choose-vehicle').forEach(btn=>btn.addEventListener('click',()=>{const select=document.querySelector('#private-form select[name="vehicle"]');select.value=btn.dataset.vehicle;document.getElementById('private-anfrage').scrollIntoView({behavior:reduced?'auto':'smooth'});setTimeout(()=>select.focus(),reduced?0:500);}));
function validateForm(form){const summary=form.querySelector('.form-errors');const errors=[];form.querySelectorAll('[aria-invalid="true"]').forEach(el=>el.removeAttribute('aria-invalid'));const contact=form.querySelector('input[name="contact"]:checked')?.value;const email=form.querySelector('input[name="email"]');if(contact==='E-Mail'&&!email.value.trim()){email.setCustomValidity('Bitte geben Sie eine E-Mail-Adresse ein.');}else email?.setCustomValidity('');if(form.id==='private-form'){const out=form.elements.date?.value;const back=form.elements.returnDate?.value;if(back&&out&&back<out){form.elements.returnDate.setCustomValidity('Die Rückfahrt darf nicht vor der Hinfahrt liegen.');}else form.elements.returnDate.setCustomValidity('');}form.querySelectorAll('input,select,textarea').forEach(field=>{if(!field.checkValidity()){field.setAttribute('aria-invalid','true');const label=field.closest('label')?.childNodes[0]?.textContent?.trim()||field.name||'Feld';errors.push(`${label}: ${field.validationMessage}`);}});if(errors.length){summary.innerHTML=`<strong>Bitte prüfen Sie Ihre Angaben:</strong><ul>${errors.map(e=>`<li>${e}</li>`).join('')}</ul>`;summary.hidden=false;summary.focus();return false;}summary.hidden=true;summary.innerHTML='';return true;}
document.querySelectorAll('.request-form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const status=form.querySelector('.form-status');if(!validateForm(form)){status.textContent='';return;}const button=form.querySelector('.submit');button.disabled=true;button.textContent='Wird geprüft …';setTimeout(()=>{status.textContent='Die Angaben sind vollständig. Für den echten Versand muss noch ein sicherer Formular-Endpunkt verbunden werden.';button.disabled=false;button.textContent=form.id==='private-form'?'Private Anfrage prüfen':'Transportschein-Anfrage prüfen';},650);}));

/* Scroll-triggered PULS slogan */
(() => {
  const slogan = document.querySelector("[data-scroll-slogan]");
  if (!slogan) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) {
    slogan.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
  );

  observer.observe(slogan);
})();
