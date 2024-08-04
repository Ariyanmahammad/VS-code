const name="ariyan"
const repoCount=50
console.log(name+repoCount+" value");//not good syntax
//use backticks
console.log(`hello my name is ${name } and my repoCount is ${repoCount}}`);
//name.toUpperCase
console.log("hello");
const gameName= new String('ariyan_Md');
console.log(gameName);//gameName[0]->a => gameNmae.(methods)->prototype
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('M'));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const newString2="   Ariyan Mahammad   "
//wants to not save these spaces 
console.log(newString2);
console.log(newString2.trim());
const url="https://ariyanmayhammadportfolio%20netlify.app"
console.log(url.replace('%20','.'));//u can include also using include just like replce
console.log(gameName.split('_'));


