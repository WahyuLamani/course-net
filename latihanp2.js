// rumus volume kubus = s^3 dengan permisalan s = 10

// latihan 1
let s = 10
const volumeKubus = () => s * s * s
// console.log(volumeKubus());

// latihan 2
const phi = 3.14
var r = 7
const luasLingkaran = () => phi * r * r
// console.log(luasLingkaran());

// latihan 3
var r = 7
const volumeBola = () => 4/3 * phi * r * r * r
console.log(volumeBola());

// latihan if else 
let usia = 17
if(usia >= 17){
    console.log("bisa bikin KTP");
}else{
    console.log("Belum bisa bikin KTP");
}

// latihan switch case 
let drink = "coffe"
switch(drink){
    case 'coffe':
        console.log('ini adalah coffe')
    break;
    case 'teh':
        console.log('ini adalah teh');
    break;
    default:
        console.log('tidak ada minuman yang cocok');
}

// latihan nested if atau if bersarang
let tinggiBadan = 150;
let umur = 17;
if (umur >= 17){
    if(tinggiBadan == 150){
        console.log("Tinggi dan Umur anda memenuhi silahkan masuk");
    }else{
        console.log("Tinggi dan Umur tidak memenuhi syarat. Dilarang masuk!");
    }
}else{
    console.log("anak dibawah 17 tahun");
}