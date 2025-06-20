let input=[
{ "id": 1, "status": "inactive" },
{ "id": 2, "status": "active" }
];
//normal way
let Result=[]; 
input.forEach(myfunction); 
function myfunction(items){ 
    	if(items.status==="active"){ 
        	Result.push(items); 
   	 } 
} 
console.log(Result); 

//using filter method
let Result2=input.filter(item=> item.status=="active");
console.log(Result2)