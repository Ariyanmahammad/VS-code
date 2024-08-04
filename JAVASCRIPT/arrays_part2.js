//going to console and write array and check aall prototypes
const marvelheroes=["thor","iron man","spider man"]
const DCheroes=["splash","batman","superman"]

//marvelheroes.push(DCheroes)
//console.log(marvelheroes[3]);

const allHeroes=marvelheroes.concat(DCheroes)
//console.log(marvelheroes);
//console.log(allHeroes);

const allNewheroes=[...marvelheroes,...DCheroes]
//console.log(allNewheroes);

const array=[1,2,3,[4,5,6],7,[8,9,10],[11,12,13]]

const usableArray=array.flat(Infinity)
//console.log(usableArray);

console.log(Array.isArray("Ariyan"))
console.log(Array.from("Ariyan"))//a,r,i,y,a,n

console.log(Array.from({name:"ariyan"}));//interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));



