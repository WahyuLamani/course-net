const input = process.argv[2] ?? ''
if (input.length > 0) {
    console.log(`\nKalimat: ${input}\n \nJumlah Huruf Vokal\n------------------`)
    const hasil =  hitungVokal(input)
    let countHasil = 0
        for (const prop in hasil) {
            console.log(`${prop}: ${hasil[prop]}`);
            countHasil += hasil[prop]
        }
        console.log(`Total: ${countHasil}`);
} else {
    console.log("Tidak ada input string yang ditambahkan");
}
function hitungVokal(string) {
    let objVokal = {
        A: 0,
        I: 0,
        U: 0,
        E: 0,
        O: 0
    }
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === 'a') {
            objVokal.A++
        }
        if (string[i].toLowerCase() === 'i') {
            objVokal.I++
        }
        if (string[i].toLowerCase() === 'u') {
            objVokal.U++
        }
        if (string[i].toLowerCase() === 'e') {
            objVokal.E++
        }
        if (string[i].toLowerCase() === 'o') {
            objVokal.O++
        }
    }
    return objVokal
}