//JSON, Fetch, keys, values, array add or remove using dots 

// const person ={
//     name: 'hero alom',
//     afe: 40,
//     friends:['sumaiya', 'afroza','urmi'],
//     family: {
//         father: 'korim uddin',
//         mother: 'kohinur begum'
//     }   
// }
// const jsonData = JSON.stringify(person)
// const jsonParse = JSON.parse(person)


// ===========================================================

// fetch
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))

// ================================================================


// const person ={
//     name: 'hero alom',
//     afe: 40,
//     friends:['sumaiya', 'afroza','urmi'],
//     family: {
//         father: 'korim uddin',
//         mother: 'kohinur begum'
//     }   
// }

// const keys = Object.keys(person)
// const values = Object.values(person)
// console.log(values)

// ======================================================

const products = [
    {name: "redmi", brand: "xiamoi", price: 3000, color: "black"},
    {name: "sam", brand: "samsung", price: 5000, color: "white"},
    {name: "apple1", brand: "apple", price: 0, color: "gold"},
    {name: "apple1", brand: "apple", price: 5000, color: "gold"},
    {name: "redmi2", brand: "xiamoi", price: 2000, color: "black"},
]

const newData = {
    name: "walton",
    brand: "walton",
    price: 3000,
    color: "gray"
}
 const newAry = [...products, newData]
//  console.log(newAry)

const remaingProducts= products.filter(p => p.brand !== "xiamoi")
console.log(remaingProducts)

const newAry2 = [...remaingProducts, newData]
console.log(newAry2)





