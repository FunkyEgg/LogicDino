# LogicDino
A logic libary for deno

## Example

```ts
import { and, or, bit } from 'https://deno.land/x/logicdino@0.1.0/mod.ts';

function xor(in1: bit, in2: bit): bit {
    if (or(in1, in2) === 1 && and(in1, in2) === 0) {
        return 1;
    } else {
        return 0;
    }
}
```