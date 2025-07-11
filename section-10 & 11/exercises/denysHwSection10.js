// Exercise 1:
// 1. Create a Promise that resolves with "Hello, World!" after 2 seconds and print the message.
// 2. Create a Promise that rejects with an error "Something went wrong!" after 3 seconds. Handle the error using .catch().
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello world!');
    }, 2000);
});
helloPromise.then(message => console.log(message));

const errorHelloPromise = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error('Something went wrong!'));
    }, 3000)
})
helloPromise.catch(error => console.log(error));


// //Exercise 2:
// Modify the following code so that it returns "Success!" after 1 second and print the result;
//
function asyncTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Success!');
        }, 1000)

    });
}

asyncTask().then(message => console.log(message));

console.log("Exercise 3");

//Write a function divideNumbers(a, b) that returns the result of a / b. If b is 0, throw an error and catch it using try...catch.
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed!");
        }
        return a / b;
    } catch (error) {
        console.error(error.message);
    }
}

console.log(divideNumbers(10, 2));
console.log(divideNumbers(8, 0));
console.log(divideNumbers(15, 3));

console.log("Exercise 4");

// Create a function multiplyByTwo(num) that returns a Promise. If num is not a number, reject the Promise; otherwise,
// resolve it by doubling num.

function multiplyByTwo(num) {
    return new Promise((resolve, reject) => {
        if (isNaN(num)) {
            reject(new Error('Not a number'));
        } else {
            resolve(num * 2);
        }
    });
}

multiplyByTwo(1000000)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));

multiplyByTwo("String!")
    .then(result => console.log(result))
    .catch(error => console.log(error.message));

console.log("Exercise 5");
//Wrap the following code in a try...catch block so that it does not stop execution when an error occurs.
console.log("Start");
try {
    let num = 10;
    console.log(num.toUpperCase());
} catch (error) {
    console.log(error.message);
}
console.log("End");

console.log("Exercise 6");

//Rewrite the following chained Promises to use async/await

function getUserId() {
    return new Promise((resolve) => setTimeout(() => resolve(101), 1000));
}

function getUserDetails(id) {
    return new Promise((resolve) => setTimeout(() => resolve({id, name: "Alice"}), 1000));
}

getUserId()
    .then((id) => getUserDetails(id))
    .then((user) => console.log(user))
    .catch(console.error);

async function fetchUserinfo() {
    try {
        const userId = await getUserId();
        const userInfo = await getUserDetails(userId);
        console.log(userInfo);
    } catch (error) {
        console.log("Error", error);
    }

}

fetchUserinfo();


console.log('Exercise 7');
//Write a function where you will:
// Fetch list of users from website https://jsonplaceholder.typicode.com/users, from returned list of users you
//should create a new array of objects which should contain *id*, *name*, *email* only.
//Hint: User map method;
function fetchUsers() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
                    .then(data => resolve(data))
                    .catch(error => reject(error));
            });
    });
}

function listUserInfo() {
    return new Promise((resolve, reject) => {
        fetchUsers()
            .then(users => {
                users.map(user => console.log(user.id, user.name, user.email));
            })
            .catch(error => console.error("Error _________:", error))
    })
}

listUserInfo();

//Rewrite solution from exercise 7 to async/await flow;
console.log('Exercise 8');

async function fetchListOfUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("___________________________________________________________test");
    return res.json();
}

async function listOfUsers() {
    const users = await fetchListOfUsers();
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    users.map(user => console.log(user.id, user.name, user.email));
}

(async function () {
    await listOfUsers()
})();

console.log("Exercise 9");
//Modify the function below to use async/await and handle errors properly.
// function fetchUserData() {
//     return fetch("https://jsonplaceholder.typicode.com/users/1")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Failed to fetch user data");
//             }
//             return response.json();
//         })
//         .then(console.log)
//         .catch(console.error);
// }


async function fetchUserData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
        if (!res.ok) {
            throw new Error('Not a user');
        }
        return res.json()
    } catch (error) {
        console.error("error", error);
    }
}

fetchUserData().then(userData => console.log(userData));