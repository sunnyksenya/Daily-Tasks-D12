// Задание 1. Создайте ассоциативный массив содержащий описание человека. Задайте поля: имя, возраст, пол, индивидуальный номер. Заполните массив. Выведите его в консоли.
// Задание 2. Создайте ассоциативный массив содержащий описание человека. Задайте поля: имя, возраст, пол, индивидуальный номер. Заполните массив. Выведите его в консоли.
// Добавьте в массив метод, который будет рассчитывать год рождения человека исходя из его возраста и возвращать его.
var a = {
  "name": "John",
  "age": 18,
  "sex": "male",
  "id": 111222333
}
console.log(a);

a.dateOfBirth = function() {
  console.log(2017 - this.age);
}
a.dateOfBirth();

// Задание 3. Создайте ассоциативный массив свойство mas которое содержит массив чисел (любого количества), добавьте метод, который выводит сумму чисел содержащихся в mas.

a.mas = [5, 6, 34, 12, 45];
console.log(a);
a.masSum = function() {
  var sum = 0;
  for (var i = 0; i < this.mas.length; i++) {
    sum += this.mas[i];
  }
  return sum;
}
console.log(a.masSum());

// Задание 4. Создайте массив, ключами которого служат артикулы товара (любое пятизначное число), а значениями – ассоциативный массив, который содержит название товара, стоимость, вес единицы товара, ссылку на изображение, отметку о доступности товара на складе.
// Выведите массив в консоль. Выведите на страницу HTML описание первого товара.

var goods = {
  11111: {
    "name": "bath foam",
    "price": 60,
    "weight": 500,
    "link": "http://www.farleyco.ca/Products/Royale_Bouquet_Lilac_Lavender_Bath_Foam-017854047198.jpg",
    "avail":"Y"
  },
  22222: {
    "name": "shower gel",
    "price": 40,
    "weight": 200,
    "link": "https://images-na.ssl-images-amazon.com/images/I/41TzrrPBDWL.jpg",
    "avail":"N"
  },
  33333: {
    "name": "soap",
    "price": 20,
    "weight": 50,
    "link": "http://dingo.care2.com/pictures/greenliving/1045/1044753.large.jpg",
    "avail":"N"
  }
}
console.log(goods);
descr();
function descr() {
  document.querySelector('.name').innerHTML = goods['11111'].name;
  document.querySelector('.price').innerHTML = goods['11111'].price;
  document.querySelector('.weight').innerHTML = goods['11111'].weight;
  document.querySelector('.img').src = goods['11111'].link;
  document.querySelector('.avail').innerHTML = goods['11111'].avail;
}
