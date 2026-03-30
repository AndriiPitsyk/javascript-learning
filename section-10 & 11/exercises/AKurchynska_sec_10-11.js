/*Exercise 1:
1. Create a Promise that resolves with "Hello, World!" after 2 seconds
and print the message.*/

const promise = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("Hello, World!");
    },2000);
});

promise.then((message) => {
    console.log(message);
});

/*2. Create a Promise that rejects with an error "Something went wrong!"
after 3 seconds. Handle the error using .catch().
*/

const failPromise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        let error = true;
        if(!error){
            resolve("Hello, World!");
        } else{
            reject("Something went wrong!" )
        }
    },3000);
});

failPromise.catch((err) =>{ console.log(err)});

/*Exercise 2:
Modify the following code so that it returns "Success!" after 1 second and print the result;
*/
function asyncTask() {
    return new Promise((resolve, reject) => {

        setTimeout(() =>{
            resolve("Success!");
        },1000);
    });
}

asyncTask().then((result) => console.log(result));

/*Exercise 3:
Write a function divideNumbers(a, b) that returns the result of a / b. If b is 0,
throw an error and catch it using try...catch.
*/

function divideNumbers(a, b) {
    if(b===0){
        throw new Error('Division by 0');
    }
    return a/b;
}

try{
    divideNumbers(6,0);
} catch(error){
    console.log(error);
}

/*Exercise 4:
Create a function multiplyByTwo(num) that returns a Promise. If num is not a number,
reject the Promise; otherwise, resolve it by doubling num.
*/

function multiplyByTwo(num) {
    const promise = new Promise((resolve,reject) =>{
        if(isNaN(num)){
            reject(num + " is not a number");
        } else {
            resolve(num*2);
        }
    })
    return promise;
}

multiplyByTwo(5)
    .then(data => console.log(data))
    .catch(error => console.log(error));


/*Exercise 5:
Wrap the following code in a try...catch block so that it does not stop execution
    when an error occurs.*/

console.log("Start");

try{
    let num = 10;
    console.log(num.toUpperCase()); // This will cause an error
} catch (error){
    console.log(error);
}
console.log("End");

/*Exercise 6:
Rewrite the following chained Promises to use async/await

function getUserId() {
    return new Promise((resolve) => setTimeout(() => resolve(101), 1000));
}

function getUserDetails(id) {
    return new Promise((resolve) => setTimeout(() => resolve({ id, name: "Alice" }), 1000));
}

getUserId()
    .then((id) => getUserDetails(id))
    .then((user) => console.log(user))
    .catch(console.error);*/

function getUserId() {
    return new Promise((resolve) => setTimeout(() => resolve(101), 1000));
}

function getUserDetails(id) {
    return new Promise((resolve) => setTimeout(() => resolve({ id, name: "Alice" }), 1000));
}

async function getUserData(){
    try{
        const id = await getUserId();
        const user = await getUserDetails(id);
        console.log(user);
    }catch(error){
        console.log(error);
    }
}

getUserData();

/*Exercise 7:
Write a function where you will:
Fetch list of users from website https://jsonplaceholder.typicode.com/users, from returned list of users you
should create a new array of objects which should contain *id*, *name*, *email* only.
Hint: User map method;*/

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {return response.json(); })
        .then((data) => {
            const users = data.map(user => {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email
                };
            });
        })
        .catch((error) => {console.error(error); });
}

getUsers();


/*Exercise 8:
Rewrite solution from exercise 7 to async/await flow;*/

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        const users = data.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email
            };
        });

        return users;

    } catch (error) {
        console.error(error);
    }
}

getUsers();

/*Exercise 9:
Modify the function below to use async/await and handle errors properly.
function fetchUserData() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            return response.json();
        })
        .then(console.log)
        .catch(console.error);
}

fetchUserData();*/

async function fetchUserData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        console.log(data);
    } catch (error){
        console.log(error);
    }
}

fetchUserData();