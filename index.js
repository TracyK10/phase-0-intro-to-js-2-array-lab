// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push(name);
  console.log(cats);
}
destructivelyAppendCat(Ralph);

function destructivelyPrependCat(name){
    cats.unshift(name);
    console.log(cats);
}

destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat(){
    cats.pop()
    console.log(cats)
}

destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    cats.shift();
    console.log(cats);
}
destructivelyRemoveFirstCat();

function appendCat(name){
    let newCats = [...cats, name];
    return newCats;
}
console.log(appendCat("Broom"));

function prependCat(name){
    let newCats = [name , ...cats];
    return newCats;
}

console.log(prependCat("Arnold"));

function removeLastCat(){
    let newCats = [...cats];
    newCats.pop();
    return newCats;
}
removeLastCat();

function removeFirstCat(){
    let newCats = [...cats];
    newCats.shift();
    return newCats;
}

removeFirstCat();