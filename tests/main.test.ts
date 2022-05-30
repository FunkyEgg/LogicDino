import { and, not, or, bit, bits, hexbit, hexbits, parseBit } from 'https://deno.land/x/logicdino@0.1.0/mod.ts';

function xor(in1: bit, in2: bit): bit {
    if (or(in1, in2) === 1 && and(in1, in2) === 0) {
        return 1;
    } else {
        return 0;
    }
}

let exit = false;
while (!exit) {
    let input = prompt('>');

    switch (input) {
        case 'exit': {
            exit = true;
            break;
        }
        case 'xor': {
            const in1 = parseBit(parseInt(prompt('IN1 >', '0')!));
            const in2 = parseBit(parseInt(prompt('IN2 >', '0')!));

            console.log(xor(in1, in2));
        }
    }
}