import { sum } from "./function";

test('sum should be correct', ()=> {


    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result = sum(a, b);

    //expect result
    expect(result).toBe(3)
})