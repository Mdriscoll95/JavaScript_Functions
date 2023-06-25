console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
if(count < 0){
    console.log("invalid input. Please provide a positive number")
    return;
}
for(let i =1; i <= count; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
}
printOdds(13)
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
if(!userName || !age){
    console.log("please provide a username and age")
    return;
}
if(age < 16){
    console.log(`Sorry ${userName}, but you need to wait until you're 16.`)
}
else{
    console.log(`Congrats ${userName}, you can drive!`)
}

}
checkAge("Mike", 28)


//Excercise 3 Quadrant check
console.log("EXERCISE 3:\n==========\n");
function checkQuadrant(x, y){
if(x === 0 && y === 0){
    console.log("This point is at the origin!")
}
else if(x === 0){
    console.log(`${x}, ${y} is on the y axis`)
}
else if(y === 0){
    console.log(`${x}, ${y} is on the x axis`)
}
else if(x > 0 && y > 0){
    console.log("quadrant 1")
}
else if(x < 0 && y > 0){
    console.log("quadrant 2")
}
else if(x < 0 && y < 0){
    console.log("quadrant 3")
}
else{
    console.log("quadrant 4")
}

}
checkQuadrant(1, 2)