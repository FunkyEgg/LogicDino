# DenoLogic
A logic libary for deno

## Example

```ts
import { and, or, bit } from '../src/mod.ts';

function xor(in1: bit, in2: bit): bit {
    if (or(in1, in2) === 1 && and(in1, in2) === 0) {
        return 1;
    } else {
        return 0;
    }
}
```