
const name=["A","B","C"]

name.forEach((items)=>{
    //console.log(items);
})

let value=name.forEach((items)=>{
    //console.log(items);
    //return items -> undefined
})
//console.log(value); //-> undefined

const Mynums=[1,2,3,4,5,6,7,8,9]
const newNums=Mynums.filter((num)=>{
    return num>4
})//if u open scope then return value likhna padega
//console.log(newNums);
//or use below method
const numsPrint=Mynums.filter((num)=>num>5)
//console.log(numsPrint);

const newNumber=[]
Mynums.forEach((num)=>{
    if(num>4){
        newNumber.push(num)
    }

})
//console.log(newNumber);

const books = [
    {
        name: "The Great Gatsby",
        edition: "First Edition",
        genre: "Classic Fiction",
        publishYear: 1925
    },
    {
        name: "To Kill a Mockingbird",
        edition: "50th Anniversary Edition",
        genre: "Literary Fiction",
        publishYear: 1960
    },
    {
        name: "Harry Potter and the Philosopher's Stone",
        edition: "First Edition",
        genre: "Fantasy",
        publishYear: 1997
    },
    {
        name: "The Catcher in the Rye",
        edition: "Modern Library Edition",
        genre: "Literary Fiction",
        publishYear: 1951
    },
    {
        name: "1984",
        edition: "Signet Classic Edition",
        genre: "Dystopian Fiction",
        publishYear: 1949
    },
    {
        name: "Pride and Prejudice",
        edition: "Norton Critical Edition",
        genre: "Romantic Fiction",
        publishYear: 1813
    },
    {
        name: "The Lord of the Rings",
        edition: "50th Anniversary Edition",
        genre: "Fantasy",
        publishYear: 1954
    },
    {
        name: "Moby-Dick",
        edition: "Penguin Classics Deluxe Edition",
        genre: "Adventure Fiction",
        publishYear: 1851
    },
    {
        name: "The Hitchhiker's Guide to the Galaxy",
        edition: "Deluxe Edition",
        genre: "Science Fiction",
        publishYear: 1979
    },
    {
        name: "The Hunger Games",
        edition: "First Edition",
        genre: "Young Adult Dystopian",
        publishYear: 2008
    }
];

let userBooks=books.filter((bk)=>bk.genre==='Science Fiction')
userBooks=books.filter((bk)=>bk.publishYear>2000)
//console.log(userBooks);

const numbers=[1,2,3,4,5,6,7,8,9,10]
const newNumbers=numbers.map((num)=>num+10)
//console.log(newNumbers);

const numbers1=[1,2,3,4,5,6,7,8,9,10]
const newNumbers1=numbers.map((num)=>{return num+10})
//console.log(newNumbers1);


//const chaining=numbers.map((num)=>num*10).map((num)=>num/10)

//console.log(chaining);
const chaining=numbers.map((num)=>num*10).map((num)=>num/10).filter((num)=>num>5)
//console.log(chaining);

//Reduce js

const numbersPrint=[1,2,3]

const myTotal=numbersPrint.reduce(function (accumulator, currentValue){

    //console.log(`acc ${accumulator}, curr: ${currentValue}`);
    return accumulator+currentValue
},0)
//console.log(myTotal);

const MyTotal1=numbersPrint.reduce((acc,curVal)=>acc+curVal,0)
//console.log(MyTotal1);

const shoppingCard=[
    {
        itemName: "course js",
        price:999

    },
    {
        itemName: "couse js",
        price:99

    },
    {
        itemName: "cose js",
        price:990009

    },
    {
        itemName: "crse jsh",
        price:999999

    },
    {
        itemName: "codftghtyse js",
        price:999876

    },
    {
        itemName: "course tyujjs",
        price:999656778

    },
    {
        itemName: "course jshfrghrtyh",
        price:99956786

    },
    {
        itemName: "couertyhrdfgjhrse js",
        price:9997858585

    },
    {
        itemName: "coursjmghje js",
        price:9978579

    },
    {
        itemName: "coursjykmghje js",
        price:99988

    },
]
const a=shoppingCard.reduce((acc,item)=>item.price+acc,0)
console.log(a);



