/** 
 * Algoritma
 * 1. buat variable phi
 * 2. buat variable r
 * 3. buat variable Volume di isi dengan rumus 4/3 x phi x r x r x r
 * 4. tampilkan variable volume
 */

/**
 * Pseudocode
 * 1. phi di ISI DENGAN 3.14
 * 2. r di ISI DENGAN ANGKA
 * 3. volume di ISI DENGAN 4 / 3 KALI phi KALI r KALI r KALI r
 * 4. CETAK volume
 */
// code 
// dengan permisalan r = 10

const phi = 3.14;
let r = 10;
const volume = () => 4/3 * phi * r * r * r;
console.log(volume());