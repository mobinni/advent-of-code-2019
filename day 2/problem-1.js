const input = `1,9,10,3,2,3,11,0,99,30,40,50`;

const OPCODES = [
     1,
     2,
     99,
]

const addition = (x, y) => x + y;
const multiply = (x, y) => x * y;

const OPERATIONS = {
    [OPCODES.ADD]: addition,
    [OPCODES.MULTIPLY]: multiply,
}

const JUMP = 4;

const findOpcode = (opCode) => {
    return Object.keys(OPCODES).find(key => OPCODES[key] === opCode);
}
  
const runOp = (mem, index, opCode) => {
    if (!operationCode) {
        throw Error("Something went wrong");
    }

    const posX1 = mem[index + 1];
    const posX2 = mem[index + 2];
    const posX3 = mem[index + 3];

    const fx = OPERATIONS[operationCode];
    mem[posX3] = fx(posX1, posX2);

    return mem;
}

const run = (mem, index = 0) => {
    const currentOpCode = mem[index];
    if(currentOpCode === OPCODES.HALT) {
        return mem;
    }
    const newMem = runOp(mem, index, currentOpCode);
    const nextIndexOfOp = index + JUMP;

    if(nextIndexOfOp > newMem.length) {
        return newMem;
    }

    return run(newMem, nextIndexOfOp)
} 

run(input);