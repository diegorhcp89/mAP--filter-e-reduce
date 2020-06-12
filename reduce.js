const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
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
        Weight: 5
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
        Weight: 1
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        Weight: 1
    },
]

/*const totalWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.Weight
    }
}, {totalAge: 0, totalWeight: 0 })

console.log(totalWeight)
*/

/*const totalWeight = pets.reduce((total, pet) => {
    if (pet.type !== 'dog') return total

    return total + pet.Weight
}, 0)

console.log(totalWeight)
*/

/*const totalWeight = pets.reduce((total, pet) => {
    return total + pet.Weight
}, 0)

console.log(totalWeight)
*/

/*const dogs = pets.filter ((pet) => {
    return pet.type === 'dog'
})

console.log(dogs)
*/

const totalWeightDogs = pets
.filter((pet) => {
    return pet.type === 'dog'
})
.reduce((total, pet) => {
    return total + pet.Weight
}, 0)

console.log(totalWeightDogs)

