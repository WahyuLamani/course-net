const args = process.argv[2];
if (args.length > 0) {
    // Menggabungkan argumen menjadi satu string
    console.log(
        `String yang diambil: ${args}
----------------------
`

    );
} else {
    console.log('Tidak ada string yang diberikan sebagai argumen.');
}
