// import { mult, sum } from "./function";

import { StudentType } from "./function_02";
import { addSkill, statusActive } from "./function_03";

// let a: number;
// let b: number;
// let c: number;

// beforeEach( () => {
//     a = 1;
//     b = 2;
//     c = 3;
// })

// test('sum should be correct', ()=> {

//     //data

//     //action
//     const result1 = sum(a, b);
//     const result2 = sum(b, c);

//     //expect result
//     expect(result1).toBe(3);
//     expect(result2).toBe(5);
// })

// test('multiple should be correct', ()=> {

//     //data

//     //action
//     const result1 = mult(a, b);
//     const result2 = mult(b, c);

//     //expect result
//     expect(result1).toBe(2);
//     expect(result2).toBe(6);
// })

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        'name': 'Yura',
        age: 28,
        isStudent: false,
        adress: {
            street: 'Shevchenka',
            city: {
                title: 'Lviv',
                country: 'Ukraine'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: 'JS'
            }
        ]
    }
})

test('add new skill', ()=>{
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'PHP');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('PHP');


})
test('student status is active', ()=>{
    expect(student.isStudent).toBe(false);
    statusActive(student);
    expect(student.isStudent).toBe(true);
})