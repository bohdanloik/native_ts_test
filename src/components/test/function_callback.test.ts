import React from 'react';

type UserType = {
    name: string
    age: number
    lessons: Array<UserLessonsType>
    city: {
        street: {
            title: string
        }
    }
}

type UserLessonsType = {
    title: string
}

let props: UserType;

beforeEach(() => {
    props = {
        name: 'Igor',
        age: 32,
        lessons: [{title: '1'}, {title:'2'}],
        city: {
            street: {
                title: 'Shevchenka'
            }
        }
    }
})

test('Testing destruction', () => {

    // let name = user.name;
    // let age  = user.age;

    // expect(name).toBe('Igor');
    // expect(age).toBe(32);

    let {name, age, lessons} = props;
    let {title} = props.city.street;
    expect(age).toBe(32);
    expect(name).toBe('Igor');
    expect(lessons.length).toBe(2);
    expect(title).toBe('Shevchenka');


})

test('', () => {

    let [l1,l2] = props.lessons;

expect(l1.title).toBe('1');


})