const car = {
    name: 'Assume',
    year: 2020,
    color: 'White',
    company: 'XYZ Pvt Ltd',
};

const entries = Object.entries(car);

const c1 = { [entries[0][0]]: entries[0][1] };
const c2 = { [entries[1][0]]: entries[1][1] };
const c3 = { [entries[2][0]]: entries[2][1], [entries[3][0]]: entries[3][1] };

console.log(c1);
console.log(c2);
console.log(c3);
