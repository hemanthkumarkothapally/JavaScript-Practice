let input = [
  { "user": "John", "orders": [{ "id": 1 }, { "id": 2 }] }
];

let output = [];
//normal way
for (let item of input) {
  for (let order of item.orders) {
    console.log({ user: item.user, orderId: order.id })
    output.push({ user: item.user, orderId: order.id });
  }
}
console.log(output)

// 2nd way
let output2 = input.flatMap(item => 
  item.orders.map(order => ({
    user: item.user,
    orderId: order.id
  }))
);
console.log(output2)