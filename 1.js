const data = 100
console.log(data.toString());
console.log(100.toString());













/*
FIRST TRY YOURSELF.
NOW - 
The code will give error because we are using . with 100 in to string function and dot replaces means 2 things in js. First is when we access something from an object and 2nd is as decimal.
So to make it work we can do 2 things.
1-
we can wrap 100 in paranthesis
const data = 100
console.log(data.toString());
console.log((100).toString());

2-
we can add 2 dots 
const data = 100
console.log(data.toString());
console.log(100..toString());









*/