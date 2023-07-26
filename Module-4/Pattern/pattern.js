let bigseg = '*'.repeat(16);
let smallseg = '*'.repeat(4);

for (let i = 1; i <= 5; i++) {
    for (let j of [1, 2, 3]) {
        if (i % 4 == 0) {
            console.log(' '.repeat(8) + '*'.repeat(4));
        } else if (i % 2 == 0) {
            console.log(smallseg);
        } else if (i % 2 == 1) {
            console.log(bigseg);
        }
    }
}
