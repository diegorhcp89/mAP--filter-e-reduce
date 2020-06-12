const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 10,
        Weight: 30
    },
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        Weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        WWeight: 5
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        Weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        Weight: 0.01
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        Weight: 0.1
    },
]

/*
* MAP
* Retornar um novo array com a mesma quantidade de elementos que o array inicial
*/

/*const petNames = pets.map((pet) => {
    return pet.name
})
*/

const forEachPetNames = []

pets.forEach( (pet) => {
    return forEachPetNames.push(pet.name)
})

console.log(forEachPetNames)
//console.log(petNames)


