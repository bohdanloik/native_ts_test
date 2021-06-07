import React from 'react';

const courses = [
    {title: 'CSS', price: 100},
    {title: 'HTML', price: 200},
    {title: 'JS', price: 300}
]
type CoursesPropsType = {
    title: string
    price: number
}
const cheapPredicate = (course: CoursesPropsType) => {
    return course.price < 210;
}
test('courses must be cheaper than 210 $', () => {
//   let cheapCorses = courses.filter(cheapPredicate);
    let cheapCorses = courses.filter(c =>c.price < 210);
    expect(cheapCorses.length).toBe(2);
    expect(cheapCorses[0].price).toBe(100);
    expect(cheapCorses[0].title).toBe('CSS');


})

const tasks = [
    {id: 1, title: 'Milk', isDone: true},
    {id: 2, title: 'Bread', isDone: false},
    {id: 3, title: 'Water', isDone: false},
    {id: 4, title: 'Sugar', isDone: true}
]

test('only completed tasks', () => {
    let completedTasks = tasks.filter(t => t.isDone);
    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('Milk');
})


//MAP

type PeoplePropsType = {
    name: string
    age: number
}

const people: Array<PeoplePropsType> = [
    {name: 'Bohdan Dub', age: 35},
    {name: 'Walt New', age: 22},
    {name: 'Oleg House', age: 40},
    {name: 'Igor Coach', age: 31},
]

test('message to new users', () => {

    let message = people.map(p=>`Hello ${p.name.split(' ')[0]}. Nice to meet you!`);
    expect(message.length).toBe(4);
    expect(message[0]).toBe('Hello Bohdan. Nice to meet you!')
    expect(message[3]).toBe('Hello Igor. Nice to meet you!')



})