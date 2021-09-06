const pi = Math.PI;
const G = 6.67e-11;
const Mterra = 5.98e24;
const RAIO_TERRA = 6370e3;

function twoNumbers(n){
  n = n.toFixed(0)
  if (n >9) return `${n}`
   return `0${n}`
}
document.getElementById('altura').addEventListener("input", ()=>{
  let altura = document.getElementById('altura').value;
  if (altura === '')return;
  altura = parseFloat(altura)*1e3;
  let raio = altura + RAIO_TERRA;
  let  velocidade = (G*Mterra/raio)**0.5;
  let periodoSec = 2*pi*raio/velocidade;
  document.getElementById('periodoSec').value = periodoSec.toFixed(0);
  document.getElementById('periodoH').innerHTML = `${(periodoSec/3600).toFixed(0)}h ${twoNumbers((periodoSec%3600)/60)}min`;
  document.getElementById('raio').value = (raio/1e3).toFixed(0);
  document.getElementById('velocidade').value = (velocidade/1e3).toFixed(4);
});

document.getElementById('raio').addEventListener("input", ()=>{
  let raio = document.getElementById('raio').value; 
  if (raio === '')return;
  raio = parseFloat(raio)*1e3;
  let altura = raio - RAIO_TERRA;
  let velocidade = (G*Mterra/raio)**0.5;
  let periodoSec = 2*pi*raio/velocidade;
  document.getElementById('periodoSec').value = periodoSec.toFixed(0);
  document.getElementById('periodoH').innerHTML = `${(periodoSec/3600).toFixed(0)}h ${twoNumbers((periodoSec%3600)/60)}min`;
  document.getElementById('altura').value = (altura/1e3).toFixed(0);
  document.getElementById('velocidade').value = (velocidade/1e3).toFixed(4);
});
document.getElementById('velocidade').addEventListener("input", ()=>{
  let velocidade = document.getElementById('velocidade').value;
  if (velocidade==='')return;
  velocidade = parseFloat(velocidade)*1e3;
  let raio =  velocidade**-2*(G*Mterra);
  let altura = raio - RAIO_TERRA;
  let periodoSec = 2*pi*raio/velocidade;
  document.getElementById('periodoSec').value = periodoSec.toFixed(0);
  document.getElementById('periodoH').innerHTML = `${(periodoSec/3600).toFixed(0)}h ${twoNumbers((periodoSec%3600)/60)}min`;
  document.getElementById('altura').value = (altura/1e3).toFixed(0);
  document.getElementById('raio').value = (raio/1e3).toFixed(0);
});
document.getElementById('periodoSec').addEventListener("input", ()=>{
  let periodoSec = document.getElementById('periodoSec').value;
  if (periodoSec==='')return;
  periodoSec = parseFloat(periodoSec);
  let raio = (periodoSec**2*G*Mterra/(4*pi**2))**(1/3);
  let altura = raio - RAIO_TERRA;
  let velocidade = (G*Mterra/raio)**0.5;
  document.getElementById('velocidade').value = (velocidade/1e3).toFixed(4);
  document.getElementById('periodoH').innerHTML = `${(periodoSec/3600).toFixed(0)}h ${twoNumbers((periodoSec%3600)/60)}min`;
  document.getElementById('altura').value = (altura/1e3).toFixed(0);
  document.getElementById('raio').value = (raio/1e3).toFixed(0);
});
