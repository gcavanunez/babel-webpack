// let test = () => console.log('caca');
// test();
import { person, sayHello } from './lib';
console.log(person.name);
console.log(sayHello('Brady'));

async function getCategory(){
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    const response = await fetch('http://nucliuz.com/php_rest_myblog/api/category/read.php'); 
    const data = await response.json();
    return data;
}

async function getPosts(){
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    const response = await fetch('http://nucliuz.com/php_rest_myblog/api/post/read.php'); 
    const data = await response.json();
    return data;
}

getPosts().then(posts => console.log(posts));
getCategory().then(cats => console.log(cats))