let input=[
{ "tags": ["a", "b"] },
{ "tags": ["a", "c" ,"f"] }
]
let result=new Set(input.flatMap(item=> (item.tags)))
console.log(result.size)