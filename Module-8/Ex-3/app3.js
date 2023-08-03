// convert one string into array and  get all 'e' from the string and append occurence number of e to it  like   srefere -> ['0e','1e','2e'  ] without using (for,while)  loop    BLOCK

const str = Array.from('srefere')
    .filter((el) => el === 'e')
    .map((el, index) => index + el);
console.log(str);

const str1 = Array.from('srefere').map((el, index) => {
    if (el === 'e') {
        return index + el;
    } else {
        return el;
    }
});
console.log(str1);
