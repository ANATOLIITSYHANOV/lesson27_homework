/**
 * Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара,
 *  количества и цены за единицу товара. Написать следующие функции:
Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке.
 */

let check = [
  {
    name: "bread",
    quantity: 1,
    price: 12,
  },
  {
    name: "carrots",
    quantity: 2,
    price: 3,
  },
  {
    name: "Fig",
    quantity: 1,
    price: 20,
  },
  {
    name: "meat",
    quantity: 1,
    price: 100,
  },
  {
    name: "chocolate",
    quantity: 3,
    price: 18,
  },
];
let checkPrint = () => {
  for (let key of check) {
    console.log(`${(key.name)} = ${key.quantity * key.price}\n   ${key.quantity}x${key.price}`);
  }
  console.log("---------------");
  console.log(`Suma    = ${sumCheck()}`);
}
let sumCheck = () => {
  let sum = 0
  for (let i = 0; i < check.length; i++) {
    sum += check[i].quantity * check[i].price;
  }
  return sum
}

checkPrint();

let expensive = 0;
for (let i = 0; i < check.length; i++) {
  a = check[i].quantity * check[i].price;
  if (a > expensive) {
    expensive = a;
  };
}
console.log(`самая дорогоя покупка '${expensive}'`);

let midlePrice = () => {
  let sum = 0
  for (let i = 0; i < check.length; i++) {
    sum += check[i].price;
  }
  return sum / check.length
}
console.log(`среднея стоимость одного товара '${midlePrice()}'`);