// array
// latihan1
const murid = [
    [1, "Vincent", 3.5],
    [2, "udin", 3.0],
    [3, "Manang", 2.1],
]

murid.forEach(el => {
    if (el[2] >= 3) {
        console.log(`${el[1]}, IPK = ${el[2]}, Lulus`);
    } else {
        console.log(`${el[1]}, IPK = ${el[2]}, Gagal`);
    }
});
// latihan 2
let resultScorer = 0
const scorer = [5, 2, 3, 1, 7, 8, 10, 12, 17];
for (let i = 0; i < scorer.length; i++) {
    resultScorer += scorer[i];
}
console.log(`Jumlah dari array Scorer : ${resultScorer}`);
console.log(`Dengan rata rata ${(resultScorer / scorer.length).toFixed(2)}`);

// string to array
let makan = 'Makan'

/** @tradisional */
let arrayMakan = new Array()
for (let i = 0; i < makan.length; i++) {
    arrayMakan.push(makan[i]);
}
console.log(arrayMakan);

/** @buildinFunction */
console.log(makan.split(""));



/** 
 * materi baru
 * @function
 */
function ToArray(params) {
    let string = params;
    string = string.split('');
    CountArray(string)
    return string
}
function CountArray(string) {
    return string.length
}
console.log(ToArray('selamat pagi'));

function factorCount(num) {
    let factor = 0
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            factor++
        }
    }
    return factor
}
console.log(factorCount(20));

/** @buildinFunction */
function toArray(params) {
    return params.split(' ')
}
console.log(toArray('Makan nasi padang di bulan puasa'));

/** @tradisional */
function toArrayTraditional(string) {
    let array = new Array();
    let dump = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            dump += string[i]
        } else {
            array.push(dump)
            dump = ""
        }
        if (i === string.length - 1) {
            array.push(dump)
            dump = ""
        }
    }
    return array
}
console.log(toArrayTraditional('aku makan pas buka'));

function averageArray(arr) {
    let result = 0
    arr.forEach(index => {
        result += index
    });
    return result / arr.length
}
console.log(averageArray([1, 2, 3, 4, 5]));

