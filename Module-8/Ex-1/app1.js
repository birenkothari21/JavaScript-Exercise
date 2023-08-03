for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    console.log(str);
}

const arr = Array.from(prompt('Enter String'));

for (let i = 1; i <= arr.length; i++) {
    const str = arr.slice(0, i).join(' ');
    console.log(str);
}
