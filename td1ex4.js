const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];
const copie=[...destinationsEurope];
console.log(copie);
const fusion=[...destinationsEurope,...destinationsAsie];
console.log(fusion);
const ajoute=["Lisbonne",...fusion];
console.log(ajoute);
const ajoute2=[...ajoute,"Londres"];
console.log(ajoute2);
const a=ajoute2.filter(s=>s!="Paris");
console.log(a);
const reservation = {
numero: 201,
client: "Nadia",
destination: "Bali",
statut: "En attente"
};
const copie2={...reservation};
console.log(copie2);
const reservationnv={...reservation,statut:"confirme"};
console.log(reservationnv);
const ajou={...reservationnv,assurance:"true"};
console.log(ajou);
const nv={...reservation,destination:"jerba",statut:"confirme"};
console.log(nv);