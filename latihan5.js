const arrToObj = (buah) => {
    let Objbuah = {}
    Objbuah.jenis = buah[0]
    Objbuah.harga = buah[1]
    Objbuah.enak = buah[2]
    return Objbuah
}
console.log(arrToObj(["Durian", "75000", true]));;
// latihan 1
const caca = {
    nama: "Caca Mirasca",
    berat: "45kg",
    tinggi: "155m",
    hobby: ["nonton", "makan"],
    sebutkanHoby: function () {
        // console.log(`Hobby caca: \n 1. ${this.hobby[0]} \n 2. ${this.hobby[1]}`);
        console.log("Hobby caca:");
        this.hobby.forEach(function (val, i) {
            console.log(`${i + 1}. ${val}`);
        })
    },
    tambahHoby: function (newHobby) {
        this.hobby.push(newHobby);
        console.log(`hobby baru ${newHobby}`);
    }
}
caca.tambahHoby('memancing');
caca.sebutkanHoby();

// latihan 2
const str = 'Buka puasa bersama teman kuliah'
function strCounter(str) {
    let result = {
        a: 0,
        i: 0,
        u: 0,
        e: 0,
        o: 0,
    }
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                result.a++;
                break;
            case 'i':
                result.i++;
                break;
            case 'u':
                result.u++;
                break;
            case 'e':
                result.e++;
                break;
            case 'o':
                result.o++;
                break;
            default:
                break;
        }
    }
    return console.log(result);
}
strCounter(str);
