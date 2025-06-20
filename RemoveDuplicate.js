//normal way
let input= [ 
{ "id": 1, "name": "A" }, 
{ "id": 1, "name": "A" }, 
{ "id": 2, "name": "B" } 
]; 
console.log(FilterDublicate(input)); 
function FilterDuplicate(){ 
let Result=[]; 
let temp=[]; 
input.forEach(function(items){ 
    if(temp.includes(items.id)){ 
        return; 
    } 
    else{ 
        temp.push(items.id);
        Result.push(items); 
    } 

}); 
return Result; 
} 

// using filter method.
console.log(input.set())