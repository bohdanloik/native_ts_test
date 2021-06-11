import React from 'react';

test('Testing destruction', () => {

    const props = {
        name: 'Igor',
        age: 32,
        lessons: [{title: '1'}, {title:'2'}],
        city: {
            street: {
                title: 'Shevchenka'
            }
        }
    }


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