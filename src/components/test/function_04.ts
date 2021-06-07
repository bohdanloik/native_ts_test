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

