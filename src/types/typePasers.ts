import { bit, bits, hexbit, hexbits } from './baseTypes.ts';

export function parseBit(inp: number): bit {
    if (inp === 1) return 1;
    else if (inp === 0) return 0;
    else throw new Error('Not a valid bit');
}