let input=[ { "id": 1 }, { "id": 2 } ,]; 
let input2=[ { "id": 2 }, { "id": 3 } ];
let result=input.filter(item=>input2.some(item2=>item2.id==item.id))
console.log(result)