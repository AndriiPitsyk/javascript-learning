console.log("--------Exercise 1.1--------");
/*Exercise 1:
1. Create a Promise that resolves with "Hello, World!" after 2 seconds and print the message.
2. Create a Promise that rejects with an error "Something went wrong!" after 3 seconds. Handle the error using .catch().*/

new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
}).then((result) => console.log(result));

console.log("--------Exercise 1.2--------");

const errorPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("Something went wrong!");
    }, 3000);
});
errorPromise.catch((error) => console.log(error))


console.log("--------Exercise 2 --------");

/*Exercise 2:
Modify the following code so that it returns "Success!" after 1 second and print the result;
*/

function asyncTask() {
    return new Promise((resolve) => {
        // Your code here
        setTimeout(() => {
            resolve("Success!");
        }, 1000);
    });
}

asyncTask().then((result) => console.log(result));

console.log("--------Exercise 3 --------");

/*
Exercise 3:
Write a function divideNumbers(a, b) that returns the result of a / b. If b is 0, throw an error and catch it using try...catch.*/

function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
        return a / b;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

console.log(divideNumbers(25, 2));
console.log(divideNumbers(25, 0));

console.log("--------Exercise 4 --------");

/*Exercise 4:
Create a function multiplyByTwo(num) that returns a Promise. If num is not a number, reject the Promise; otherwise,
    resolve it by doubling num.*/

function multiplyByTwo(num) {
    return new Promise((resolve, reject) => {
        if (typeof num !== 'number') {
            reject(new Error('Input must be a number'));
        } else {
            resolve(num * 2);
        }
    });
}

multiplyByTwo(30)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));

multiplyByTwo("hello")
    .then(result => console.log(result))
    .catch(error => console.error(error.message));

console.log("--------Exercise 5 --------");

/*Exercise 5:
Wrap the following code in a try...catch block so that it does not stop execution when an error occurs.*/
console.log("Start");

// Your code is here
try {
    let num = 10;
    console.log(num.toUpperCase()); // This will cause an error
} catch (error) {
    console.error(error.message);
}
console.log("End");

console.log("--------Exercise 6 --------");
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
    return new Promise((resolve) => setTimeout(() => resolve(101), 5000));
}

function getUserDetails(id) {
    return new Promise((resolve) => setTimeout(() => resolve({id, name: "Alice"}), 5000));
}

async function getUserInfo() {
    try {
        const id = await getUserId();
        const user = await getUserDetails(id);
        console.log(user);
    } catch (error) {
        console.error(error.message);
    }
}

getUserInfo();

console.log("--------Exercise 7 --------");
/*Exercise 7:
Write a function where you will:
Fetch list of users from website https://jsonplaceholder.typicode.com/users, from returned list of users you
should create a new array of objects which should contain *id*, *name*, *email* only.
Hint: User map method;*/

async function fetchListOfUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => {
            const usersList = users.map(({id, name, email}) => ({id, name, email}));
            console.log(usersList);
        })
        .catch(error => console.log('Error:', error));
}

fetchListOfUsers();

console.log("--------Exercise 8 --------");
/*Exercise 8:
Rewrite solution from exercise 7 to async/await flow;*/

async function fetchUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        //console.log(users);
        const usersList = users.map(({id, name, email}) => ({id, name, email}));
        console.log(usersList);

    } catch (error) {
        console.error(error.message);
    }
}

fetchUsers();

console.log("--------Exercise 8 --------");
/*
Exercise 9:
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

async function fetchUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }

        const userData = await response.json();
        console.log(userData);
    } catch (error) {
        console.error(error);
    }
}

fetchUserData();

