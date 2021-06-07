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
    let cheapCorses = courses.filter(courses =>courses.price < 210);
    expect(cheapCorses.length).toBe(2);
    expect(cheapCorses[0].price).toBe(100);
    expect(cheapCorses[0].title).toBe('CSS');


})
