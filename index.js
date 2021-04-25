// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}
function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}
function appendCat(name){
    let BroomBroom = [...cats, name]
    return BroomBroom
}
function prependCat(name){
    let cats3 = [name, ...cats]
    return cats3
} 
function removeLastCat(){
 let cats4 = cats.slice(0, -1)
return cats4
}
function removeFirstCat(){
 let cats5 = cats.slice(1)
 return cats5
}