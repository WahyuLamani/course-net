const input = (process.argv[2] ?? '').toLowerCase()
if (input.length > 0) {
    console.log(hitungVokal(input));
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
        if (string[i] === 'a') {
            objVokal.A++
        }
        if (string[i] === 'i') {
            objVokal.I++
        }
        if (string[i] === 'u') {
            objVokal.U++
        }
        if (string[i] === 'e') {
            objVokal.E++
        }
        if (string[i] === 'o') {
            objVokal.O++
        }
    }
    return objVokal
}