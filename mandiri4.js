function countXO(str) {
    let countX = 0
    let countO = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            countX++
        }else if(str[i] === 'o'){
            countO++
        } 
    }
     countO,countX
     console.log(`x: ${countX}`);
     console.log(`o: ${countO}`);
}
countXO('xoxoxoxox')