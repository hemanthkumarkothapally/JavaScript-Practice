let input = [
  { product: "A", qty: 2 },
  { product: "A", qty: 3 },
  { product: "A", qty: 3 },
  { product: "b", qty: 3 }
];

let Products = new Set(input.map(item => item.product));

let result = Array.from(Products).map(productType => {
  let total = input
    .filter(item => item.product === productType)
    .reduce((sum, item) => sum + item.qty, 0);
  
  return { product: productType, total };
});

console.log(result);
