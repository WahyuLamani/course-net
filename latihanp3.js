//case 1

let couponCode = 'freeOngkir'
let price = 100000
let total = 0

switch(couponCode){
    case 'freeOngkir':
        if(price >= 50000){
            total = price * 0.9
        } else if(price >= 30000 && price <= 50000){
            total = price * 0.95
        } else {
            total = price * 0.975
        }
        break;
    case 'Free15%':
        if(price >= 30000){
            total = price * 0.85
        } else{
            total = price
        }
        break;
}
// console.log(total);

// perulangan
// latihan 1
for(let i = 1 ; i <=10 ; i++){
    // console.log(i);
}

let i = 1
while(i <= 10) {
    // console.log(i);
    i++
}

// latihan 2
for(let i=1 ; i <= 10; i++){
    if(i % 2 == 0){
        // console.log(`${i} adalah genap`);
    }else{
        // console.log(`${i} adalah ganjil`);
    }
}

// latihan 3
let number = 13;
let factor = [];
for(let i = 1 ; i <= number ; i++){
    if(number % i === 0){
       factor.push(i);
    }
}
// console.log(factor);
// console.log(`Factor dari ${number} adalah factor ${factor.length}`);
// latihan 4 (erkesinambungan dengan latihan 3)
if(factor.length === 2){
    // console.log(`${number} adalah bilangan prima`);
}else{
    // console.log(`${number} bukan bilangan prima`);
}

// latihan 5
let num = 5
let factorial = 1
for(let i = 1; i <=5; i++){
    factorial = factorial * i;
}
// console.log(factorial);

// latihan 6
let dumb = ''
for(let i = 1;i<=num; i++){
    dumb += '#'
    // console.log(dumb);
}

var items = [
    {
    id:1,
    name: "Laptop",
    price : 100000,
    },{
    id : 2,
    name: "Mouse",
    price: 50000,
    }
    ]
// console.log(items[0]['Laptop']);

var student = {
        name : "andy",
        gpa : 3.05,
        
        speak(){
        console.log(this.name)
        }
    }
   student.speak()