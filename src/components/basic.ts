import { bit } from '../types/baseTypes.ts';

export function not(in1: bit): bit {
    if (in1 === 0) {
        return 1;
    } else {
        return 0;
    }
}

export function and(in1: bit, in2: bit): bit {
    if (in1 === 1 && in2 === 1) {
        return 1;
    } else {
        return 0;
    }
}

export function or(in1: bit, in2: bit): bit {
    if (in1 === 1 || in2 === 1) {
        return 1;
    } else {
        return 0;
    }
}