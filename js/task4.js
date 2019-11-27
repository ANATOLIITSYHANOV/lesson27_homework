/**
 * Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) 
 * и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^
Вывод на экран всех аудиторий;
Вывод на экран аудиторий для указанного факультета;
Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия,
 количества студентов и названия факультета;
Функция сортировки аудиторий по количеству мест;
Функция сортировки аудиторий по названию (по алфавиту).
 */

let audience = [
  {
    name: "one",
    quantity: 12,
    faculty: "management",
  },
  {
    name: "two",
    quantity: 14,
    faculty: "economics",
  },
  {
    name: "three",
    quantity: 16,
    faculty: "management",
  },
  {
    name: "four",
    quantity: 20,
    faculty: "ecology",
  },
  {
    name: "five",
    quantity: 10,
    faculty: "management",
  },
];

let group = {
  name: "first_group",
  quantity: 12,
  faculty: "management",
}

toString = (obj) => {
  return `name: ${obj.name};   quantity: ${obj.quantity};   faculty: ${obj.faculty}.`;
}

let showAudience = (arr) => {
  for (let i in arr) {
    console.log(toString(arr[i]))
  }
}
showAudience(audience)


let audienceForFaculty = (faculty) => {
  for (let i in audience) {
    if (faculty == audience[i].faculty) {
      console.log(toString(audience[i]));
    }
  }
}
console.log("------------------------------------");
audienceForFaculty("management");


let audienceForGroup = (groups) => {
  for (let i in audience) {
    if (groups.quantity <=audience[i].quantity  && groups.faculty == audience[i].faculty) {
      console.log(`For ${groups.name}, audience => ${toString(audience[i])}`);
    }
  }
}
console.log("------------------------------------");
audienceForGroup(group)


let sortaudienceQuantity = (arr) => {
  arr.sort((a, b) => {
    return a.quantity - b.quantity;
  });
  for (let i in arr) {
    console.log(toString(arr[i]))
  }
}
console.log("------------------------------------");
sortaudienceQuantity(audience)


let sortaudienceName = (arr) => {
  arr.sort((a, b) => {
    let x = a.name;
    let y = b.name;
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  for (let i in arr) {
    console.log(toString(arr[i]))
  }
}
console.log("------------------------------------");
sortaudienceName(audience)
