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
