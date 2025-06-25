let input=[
{ "item": "A", "category": "x" },
{ "item": "B", "category": "y" },
{ "item": "C", "category": "x" }
];
let categories = new Set(input.map(item => item.category));
console.log(Array.from(categories).map(categorytype=>{
    let items=input.filter(item => item.category === categorytype)
    .map(temp=> temp.item)
    return items
}))