//1Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).

let promise = new Promise((resolve) => {
    setTimeout(() => {
    resolve('result');
    }, 3000);
    });
    
    promise.then(
    result => console.log(result)
    );

//2Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой).

let promise = new Promise((reject) => {
    setTimeout(() => {
    reject('error');
    }, 3000);
    });
    
    promise.then(
    error => document.write(error)
    );

//3Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.

let promise = new Promise((resolve) => {
    setTimeout(() => {
    resolve('result');
    }, 3000);
    });
    
    promise.then(
    result => console.log(result)
    );

    
let promise2 = new Promise((resolve) => {
    setTimeout(() => {
    resolve('result2');
    }, 4000);
    });
    
    promise2.then(
    result2 => console.log(result2)
    );

    
let promise3 = new Promise((resolve) => {
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
        

Promise.all(arr.map(sumOfArrays)).then(results => console.log(results));

  // НЕ ЗНАЮ КАК ПРОПИСАТЬ ТУТ ПРАВИЛЬНО, ЧТОБЫ РАБОТАЛО, ЕСЛИ ТАК ВООБЩЕ МОЖНО НАПИСАТЬ )))))))))))))))))))))))



const promise1 = new Promise((resolve) => setTimeout(resolve, 5000, 'done'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, 'done'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 4000, 'done'));
const promises = [promise1, promise2, promise3];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

  // ЭТО НЕМНОГО НАВЕРНОЕ НЕ ТО РЕШЕНИЕ

//4Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, Отфильтровать массив пользователей, чтобы остались только пользователи с четными id.

let promise = fetch(`https://jsonplaceholder.typicode.com/users`);
promise.then(response => response.json())
.then(result => result.filter(elem => elem.id % 2 === 0))
.then(result => console.log(result))

//5Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя. Вывести в html внутри div с id = 1





  // ЭТО НЕМНОГО НАВЕРНОЕ НЕ ТО РЕШЕНИЕ
  
let promise = fetch(`https://jsonplaceholder.typicode.com/users`);
function createPost(name , phone , id) {
    let container = document.createElement('div');

    const nameElement = document.createElement('h2');
    nameElement.innerHTML= name;

    const phoneElement = document.createElement('p');
    phoneElement.innerHTML= phone;

    const infoElement = document.createElement('p');
    infoElement.innerHTML= id;


    container.append(nameElement, phoneElement, infoElement);
    return container;


}
promise.then((response) => response.json())
.then((json) => {
json.forEach((post)=> {
    const { name, phone, id } = post;
    const postElement = createPost(name, phone, id);
    document.body.append(postElement);
});
});
 


//6Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/${userId}/todos, userId получить при помощи prompt. Вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет (чекбокс). Вывести в html внутри div с id = 2

//7Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos, вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото{"albumId": 1,  "id": 4,  "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",  "url": "https://via.placeholder.com/600/d32776",  "thumbnailUrl": "https://via.placeholder.com/150/d32776"},Дополнительно сделать, чтобы по нажатию на картинку картинка увеличивалась в размерах, повторное нажатие вернет картинку к исходному размеру. Вывести в html внутри div с id = 3


  