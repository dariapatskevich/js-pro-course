//1Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('result');
    }, 3000);
    });
    
    promise.then(
    result => console.log(result)
    );

//2Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой).

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    reject('error');
    }, 3000);
    });

    promise.catch(error => console.log(error));

//3Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('result');
    }, 3000);
    });
    
    promise.then(
    result => console.log(result)
    );

    
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('result2');
    }, 4000);
    });
    
    promise2.then(
    result2 => console.log(result2)
    );

    
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('result3');
    }, 5000);
    });
    
    promise3.then(
    result3 => console.log(result3)
    );
    
  function sumOfArrays(arr){
       let sum = 0;
        for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        };
        console.log(sum);
        };
        
let resultPromise = Promise.all([promise, promise2, promise3])
resultPromise.then(arr => console.log(arr))


//4Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, Отфильтровать массив пользователей, чтобы остались только пользователи с четными id.

let promise = fetch(`https://jsonplaceholder.typicode.com/users`);
promise.then(response => response.json())
.then(result => result.filter(elem => elem.id % 2 === 0))
.then(result => console.log(result))

//5Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя. Вывести в html внутри div с id = 1

async function getUsers() {
    const request = await fetch("https://jsonplaceholder.typicode.com/users?id=1")
    const result = await request.json()

    result.forEach((user) => {
        const { name, email , phone, website} = user;
        const postElement = printUser(name, email , phone , website);
        document.body.append(postElement)
    });
}
getUsers()

function printUser(name, email, phone, website) {
    let container = document.createElement('div')
    container.style = `
    border: 1px solid red;
    padding: 10px;
    `
    const userNameElement = document.createElement('h2')
    userNameElement.innerHTML = name

    const emailElement = document.createElement('p')
    emailElement.innerHTML = email

    const phoneElement = document.createElement('p')
    phoneElement.innerHTML = phone

    
    const websiteElement = document.createElement('p')
    websiteElement.innerHTML = website

    container.append(userNameElement, emailElement, phoneElement, websiteElement)
    return container;
}


//6Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/${userId}/todos, userId получить при помощи prompt. Вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет (чекбокс). Вывести в html внутри div с id = 2

let promptId = prompt("Enter ID user from 1 to 10)");

async function getTodo() {
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/users/${promptId}/todos`
  );
  const users = await request.json();

  let usersHtml = " ";
  for (let i = 0; i < users.length; i++) {
    usersHtml +=
     `<div class="card" style="border: 1px solid green; padding: 10px"
       <h2>UserId: ${users[i].userId}</h2>
       <h3>Title: ${users[i].title}</h3>
       ${users[i].completed? `<input type='checkbox' checked>`:`<input type='checkbox'>`}</div>`;
  }
  const body = document.querySelector("body");
  body.innerHTML = usersHtml;
}
getTodo();



//7Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos, вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото{"albumId": 1,  "id": 4,  "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",  "url": "https://via.placeholder.com/600/d32776",  "thumbnailUrl": "https://via.placeholder.com/150/d32776"},Дополнительно сделать, чтобы по нажатию на картинку картинка увеличивалась в размерах, повторное нажатие вернет картинку к исходному размеру. Вывести в html внутри div с id = 3


  