/*
Exercise 1:
1. Create a Promise that resolves with "Hello, World!" after 2 seconds and print the message.
2. Create a Promise that rejects with an error "Something went wrong!" after 3 seconds. Handle the error using .catch().
*/

//1.1
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const promiseSucceed = true;
        if (promiseSucceed) {
            resolve('Hello, World!');
        } else {
            reject('Promise rejected!');
        }
    }, 2000)
})
    .then((promiseResult) => console.log('Promise finished successfully with result: ' + promiseResult))
    .catch(err => console.log(err));

console.log('Text will be displayed before promise results')

//1.2
const secontPromise = new Promise((resolve, reject) => {
    const promiseSucceed = false;
    if (promiseSucceed) {
        resolve(promiseSucceed);
    } else {
        setTimeout(() => {
            reject(new Error("Promise Error"));
        }, 3000)
    }
}).then((promiseResult) => {
    console.log('Promise finished with result: ' + promiseResult);
}).catch((err) => {
    console.log('Promise finished with error: =', err.message);
})

console.log('Text will be displayed before promise results')

/*
Exercise 2:
Modify the following code so that it returns "Success!" after 1 second and print the result;
*/

function asyncTask() {
    return new Promise((resolve, reject) => {
        const success = false;
        if (success) {
            setTimeout(() => {
                resolve('Success!');
            }, 1000)
        } else {
            reject(new Error('Failed!'));
        }
    })
}

asyncTask()
    .then((result) => console.log(result))
    .catch((err) => console.log('Promise finished with error:', err.message));

/*
Exercise 3:
Write a function divideNumbers(a, b) that returns the result of a / b. If b is 0, throw an error and catch it using try...catch.
*/

function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error('Dividing by zero is forbidden');
        }
        return a / b;
    } catch (err) {
        return err.message;
    }
}

console.log(divideNumbers(5, 1));
console.log(divideNumbers(2, 4));
console.log(divideNumbers(2, 0));

function divideNumbersAlternative(a, b) {
    if (b === 0) {
        throw new Error('Dividing by zero is forbidden');
    }
    return a / b
}

try {
    console.log(divideNumbersAlternative(5, 1));
    console.log(divideNumbersAlternative(2, 4));
    console.log(divideNumbersAlternative(2, 0));
} catch (err) {
    console.log('Functiona finished with error:', err.message);
}

/*
Exercise 4:
Create a function multiplyByTwo(num) that returns a Promise. If num is not a number, reject the Promise; otherwise,
resolve it by doubling num.
*/

/*
Exercise 4:
Create a function multiplyByTwo(num) that returns a Promise. If num is not a number, reject the Promise; otherwise,
resolve it by doubling num.
*/

function multiplyByTwo(num) {
    return new Promise((resolve, reject) => {
        if (typeof num === 'number') {
            resolve(num * 2);
        } else {
            reject(num + ' is not a number');
        }
    })
}

multiplyByTwo(2).then(result => {
    console.log('Multiplied number = ' + result);
}).catch(err => {
    console.log(err);
})

multiplyByTwo('t').then(result => {
    console.log('Multiplied number = ' + result);
}).catch(err => {
    console.log(err);
})

/*
Exercise 5:
Wrap the following code in a try...catch block so that it does not stop execution when an error occurs.
*/

console.log("Start");
// Your code is here
let num = 10;
try {
    console.log(num.toUpperCase()); // This will cause an error
} catch (err) {
    console.log(num + " is not a text");
}
console.log("End");

/*
Exercise 6:
Rewrite the following chained Promises to use async/await
*/

function getUserId() {
    return new Promise((resolve) => setTimeout(() => resolve(101), 1000));
}

function getUserDetails(id) {
    return new Promise((resolve) => setTimeout(() => resolve({id, name: "Alice"}), 1000));
}

//block which need to rewrite
getUserId()
    .then((id) => getUserDetails(id))
    .then((user) => console.log(user))
    .catch(console.error);

console.log('Function with async/await');

async function getUserInfo() {
    try {
        const userId = await getUserId();
        const userDetails = await getUserDetails(userId);
        console.log(userDetails);
    } catch (err) {
        console.error(err);
    }
}

/*
Exercise 7:
Write a function where you will:
Fetch list of users from website https://jsonplaceholder.typicode.com/users, from returned list of users you
should create a new array of objects which should contain *id*, *name*, *email* only.
Hint: User map method;
*/

function getUsersInfoClassic() {
    const request = fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(jsonData => {
            const dataFiltered = jsonData.map((userInfo) => {
                return {
                    id: userInfo.id,
                    name: userInfo.name,
                    email: userInfo.email
                };
            });
            console.log(dataFiltered);
        }).catch((error) => {
            console.log(error);
        })
}

getUsersInfoClassic()

/*
Exercise 8:
Rewrite solution from exercise 7 to async/await flow;
*/

async function getUsersInfo() {
    try {
        const request = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await request.json();
        const dataFiltered = jsonData.map((userInfo) => {
            return {
                id: userInfo.id,
                name: userInfo.name,
                email: userInfo.email
            }
        });
        console.log(dataFiltered);
    } catch (err) {
        console.error(err);
    }
}

await getUsersInfo()

/*
Exercise 9:
Modify the function below to use async/await and handle errors properly.
*/

/*
function fetchUserData() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            return response.json();
        })
        .then(console.log)
        .catch(console.error);g
}
fetchUserData();
*/

async function fetchUserDataModified() {
    const request = await fetch("https://jsonplaceholder.typicode.com/users/1");
    console.log(request.status);
    if (request.status === 200) {
        const jsonData = await request.json();
        console.log('jsonData =', jsonData);
        console.log('status code = 200');
        return jsonData;
    } else {
        throw new Error('Something went wrong!');
    }
}

await fetchUserDataModified().catch(error => console.log(error));
