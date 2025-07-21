/* Exercise 1:
1. Create a Promise that resolves with "Hello, World!" after 2 seconds and print the message.
2. Create a Promise that rejects with an error "Something went wrong!" after 3 seconds. Handle the error using .catch().
 */
// 1.
const promise = new Promise ((resolve) => {
    setTimeout(() => {
        resolve();
    }, 2000)
});
promise.then (() => {
    console.log('Hello, World!');
})
// 2.
const promiseOne = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve ('OK')
        } else {
            reject ('Something went wrong!')
        }
    }, 3000)
});
promiseOne.then ((response) => console.log(response)).catch((error) => {
    console.log(error);
})

/* Exercise 2:
Modify the following code so that it returns "Success!" after 1 second and print the result;
 */
function asyncTask() {
    return new Promise((resolve, reject) => {
        // my code start
        setTimeout(() => {
            resolve ('Success!')
            }, 1000)
        // my code end
    });
}
asyncTask().then((result) => console.log(result));

/* Exercise 3:
Write a function divideNumbers(a, b) that returns the result of a / b. If b is 0, throw an error and catch it using try...catch.
 */
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by 0 isn\'t allowed!');
        }
        return a / b;
    } catch (error) {
        console.log(error.message);
    }
}
console.log(divideNumbers(10, 0));

/* Exercise 4:
Create a function multiplyByTwo(num) that returns a Promise. If num is not a number, reject the Promise; otherwise,
resolve it by doubling num.
 */
function multiplyByTwo(num) {
    return new Promise((resolve, reject) => {
        if (typeof num === 'number') {
            resolve(num * 2);
        } else {
            reject(new Error('Only numbers are allowed'));
        }
    });
}
multiplyByTwo(7).then((response) => console.log(response)).catch(err => console.log(err.message));

/* Exercise 5:
Wrap the following code in a try...catch block so that it does not stop execution when an error occurs.
console.log("Start");
 */
console.log("Start");
try {
    let num = 10;
    console.log(num.toUpperCase());
} catch (error) {
    console.log('Skipped error:', error.message);
}
console.log("End");

/* Exercise 6:
Rewrite the following chained Promises to use async/await
 */
function getUserId() {
    return new Promise((resolve) => setTimeout(() => resolve(101), 1000));
}
function getUserDetails(id) {
    return new Promise((resolve) => setTimeout(() => resolve({ id, name: "Alice" }), 1000));
}
getUserId()
    .then((id) => getUserDetails(id))
    .then((user) => console.log(user))
    .catch(console.error);
async function getUserInfo(){
    try {
        const id = await getUserId();
        const user = await getUserDetails(id);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}
await getUserInfo();

/* Exercise 7:
Write a function where you will:
Fetch list of users from website https://jsonplaceholder.typicode.com/users, from returned list of users you
should create a new array of objects which should contain *id*, *name*, *email* only.
Hint: User map method;
 */
function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const newArray = users.map(user => ({
                id: user.id,
                name: user.name,
                email: user.email
            }));
            console.log(newArray);
        })
}
getUsers();

/* Exercise 8:
Rewrite solution from exercise 7 to async/await flow;
 */
async function getUsersOne() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const newArray = users.map (({ id, name, email }) => ({ id, name, email }));
    console.log(newArray);
}
getUsersOne();

/* Exercise 9:
Modify the function below to use async/await and handle errors properly.
 */
// function fetchUserData() {
//     return fetch("https://jsonplaceholder.typicode.com/users/s")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Failed to fetch user data");
//             }
//             return response.json();
//         })
//         .then(console.log)
//         .catch(console.error);
// }
// fetchUserData();
async function fetchUserData() {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users/1')
        if (!response.ok) {
            throw new Error(`Failed to fetch user data`);
        }
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}
fetchUserData();