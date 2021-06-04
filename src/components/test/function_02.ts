type StudentType = {
    id: number
    name: string
    age: number
    isStudent: boolean
    adress: AdressType
    technologies: Array<TechType>
}
type CityType = {
    title: string
    country: string
}
type AdressType = {
    street: string
    city: CityType
}
type TechType = {
    id: number
    title: string
}

const student: StudentType = {
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