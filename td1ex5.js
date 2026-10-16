const favoris = [
{ id: 1, ville: "Venise", pays: "Italie", visite: false },
{ id: 2, ville: "Marrakech", pays: "Maroc", visite: true },
{ id: 3, ville: "Maldives", pays: "Maldives", visite: false },
{ id: 4, ville: "Barcelone", pays: "Espagne", visite: true }
];
favoris.forEach(fav=>{console.log(`le ville est ${fav.ville,fav.pays}`)});
const b=favoris.filter(b=>b.visite===false);
console.log(b);
const c=favoris.map(c=>c.ville);
console.log(c);
const d=favoris.find(d=>d.id===3);
console.log(d);
const e=favoris.reduce((somme,e)=>{return somme+(e.visite===true?1:0)},0);
console.log(e);
const f=[
    ...favoris,
    {id: 5, ville: "jerba", pays: "tunis", visite: true}];
console.log(f);
const g=favoris.map(g=>g.id===1
    ?g.visite===true
     :g              );
console.log(g);
const h=favoris.filter(h=>h.id!=2);
console.log(h);
