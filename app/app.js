const categories=[
['lecons','📖','Leçons'],['paroles','✨','Paroles'],['gestes','👐','Gestes'],['espaces','🚪','Lieux & seuils'],['visible','🌿','Êtres visibles'],['invisible','🌙','Êtres invisibles'],['elements','🔥','Éléments'],['alchimie','💠','Alchimie intérieure'],['contes','🗺️','Contes'],['sources','🧭','Sources & idées']
];

const entries=[
{cat:'lecons',title:'Se faire des amis',text:'Première leçon du grimoire : avant de vouloir agir sur le monde, apprendre à reconnaître les êtres et à entrer en relation avec eux.',note:'Noyau fondateur du livre.'},
{cat:'paroles',title:'Bonjour',text:'Dire bonjour comme un acte de reconnaissance : je vois qu’une présence est là.',note:'Première parole magique.'},
{cat:'paroles',title:'Merci',text:'Recevoir consciemment ce qui est donné et faire de la gratitude une force quotidienne.'},
{cat:'paroles',title:'Je t’aime',text:'Parole d’ouverture du cœur : souhaiter du bien sans chercher à posséder.'},
{cat:'paroles',title:'Je t’en prie',text:'Demander sans contraindre, en respectant l’autre et ses frontières.'},
{cat:'gestes',title:'Bénir en silence',text:'Souhaiter du bien à un être ou à un lieu, même s’il ne sait pas qu’on le fait.',note:'Un des grands axes du grimoire.'},
{cat:'espaces',title:'Entrer dans un lieu',text:'Avant d’entrer, observer le seuil, l’atmosphère, les limites et les habitants. Apprendre à ne pas traverser un espace comme s’il était vide.'},
{cat:'espaces',title:'Devenir une maison',text:'Apprendre à devenir intérieurement un espace accueillant, stable et vivant dans lequel les autres peuvent respirer.'},
{cat:'visible',title:'Cercle des amis visibles',text:'Humains, animaux, arbres, plantes, pierres, montagnes, rivières et lieux peuvent devenir des compagnons d’observation et de relation.'},
{cat:'invisible',title:'Cercle des amis invisibles',text:'Catégorie de recherche pour les êtres et présences du monde invisible dans l’univers fantasy du livre.',note:'À distinguer clairement entre sources spirituelles, symboles et fiction.'},
{cat:'elements',title:'Les quatre éléments',text:'Terre, eau, air et feu comme grandes portes d’expérience, d’observation et d’imaginaire.'},
{cat:'alchimie',title:'Pensée → sentiment → parole → action',text:'Suivre comment une impulsion intérieure devient une manière de regarder, de parler puis d’agir.'},
{cat:'contes',title:'Le héros et l’objet magique',text:'Idée de récit : un objet merveilleux reste inerte tant que le héros n’a pas appris la reconnaissance, la gratitude et le respect.'},
{cat:'sources',title:'Matière à classer',text:'Notes Drive, conférences, rituels, exercices, contes, citations de travail et pistes de dessins restent conservés ici avant adaptation.'}
];

const categoryEl=document.querySelector('#categories');
const cardsEl=document.querySelector('#cards');
const searchEl=document.querySelector('#search');
const showAll=document.querySelector('#showAll');
let active='all';

categories.forEach(([id,icon,label])=>{
  const b=document.createElement('button');
  b.className='category';
  b.dataset.cat=id;
  b.innerHTML=`<span class="icon">${icon}</span>${label}`;
  b.onclick=()=>{active=id;document.querySelectorAll('.category').forEach(x=>x.classList.toggle('active',x===b));render();};
  categoryEl.appendChild(b);
});

function render(){
  const q=searchEl.value.trim().toLowerCase();
  const filtered=entries.filter(e=>(active==='all'||e.cat===active)&&(`${e.title} ${e.text} ${e.note||''}`.toLowerCase().includes(q)));
  cardsEl.innerHTML=filtered.length?'':'<article class="card"><h3>Aucune fiche trouvée</h3><p>Essaie un autre mot ou affiche toutes les catégories.</p></article>';
  filtered.forEach(e=>{
    const label=categories.find(c=>c[0]===e.cat)?.[2]||e.cat;
    const card=document.createElement('article'); card.className='card';
    card.innerHTML=`<span class="tag">${label}</span><h3>${e.title}</h3><p>${e.text}</p>${e.note?`<p class="note">${e.note}</p>`:''}`;
    cardsEl.appendChild(card);
  });
}
searchEl.addEventListener('input',render);
showAll.onclick=()=>{active='all';document.querySelectorAll('.category').forEach(x=>x.classList.remove('active'));render();};
render();