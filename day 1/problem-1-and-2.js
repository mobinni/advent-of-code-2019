const calcFuel = input => {
    return Math.floor(input / 3) - 2;
}
const list = data.split('\n').map(x => parseInt(x, 10));
const sum = list => list.reduce((curr, next) => curr + next, 0);
let temp = []
const recurseCalc = input => {
    const resp = calcFuel(input);
    if(resp > 0) {
        temp.push(resp);
        return recurseCalc(resp);
    }
    const out = sum(temp);
    temp = []
    return out;
}
const output = list.map(recurseCalc).reduce((curr, next) => curr + next, 0);
console.log(output)
