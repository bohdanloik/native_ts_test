import { StudentType } from "./function_02";
import { addSkill, statusActive } from "./function_03";

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