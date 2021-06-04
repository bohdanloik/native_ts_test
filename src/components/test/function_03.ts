import { student, StudentType } from "./function_02";

export const sum = (a: number, b: number) => {
    return a+b;
    
}

let result = sum(sum(1,3), sum(2,3));

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export  function statusActive(s:StudentType ) {
    s.isStudent = true;
}