/**
 * Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
 * необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
 необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
 */

let shoppingList = [
  {
    name: "bread",
    quantity: 1,
    bought: 1,
  },
  {
    name: "carrots",
    quantity: 2,
    bought: 0,
  },
  {
    name: "Fig",
    quantity: 1,
    bought: 1,
  },
  {
    name: "meat",
    quantity: 3,
    bought: 2,
  },
  {
    name: "chocolate",
    quantity: 10,
    bought: 1,
  },
];

let sortProduct = (arr) => {
  console.log(arr.sort((a, b) => {
    return a.bought - b.bought;
  }))
}


let addProduсt = (name, quantity, bought) => {
  let positive = () => {
    for (let i in shoppingList) {
      if (name == shoppingList[i].name) {
        shoppingList[i].quantity = shoppingList[i].quantity + quantity;
        return true
      }
    }
  }
  if (positive() !== true) {
    shoppingList.push({ name: name, quantity: quantity, bought: bought, });
  }
}


let boughtProduct = (name, bought) => {
  for (let i in shoppingList) {
    if (name == shoppingList[i].name) {
      shoppingList[i].bought = shoppingList[i].bought + bought;
      break
    }
  }
}

addProduсt("chocolate", 5, 0);
addProduсt("xxx", 5, 0);
console.log(shoppingList);
boughtProduct("xxx", 3)
console.log(shoppingList);
sortProduct(shoppingList);

/*
shoppingList.sort((a, b) => {
  return a.bought - b.bought
});
*/